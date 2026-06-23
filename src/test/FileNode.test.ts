import { describe, it, expect, beforeEach } from 'vitest'
import { createEditor, $getRoot, $createParagraphNode } from 'lexical'
import { FileNode, $createFileNode, $isFileNode } from '../nodes/FileNode'
import { FileNodePayload } from '../types'

const SAMPLE: FileNodePayload = {
  fileName: 'report.pdf',
  fileSize: 204800,
  fileType: 'application/pdf',
  url: 'https://example.com/report.pdf',
}

function makeEditor() {
  return createEditor({ nodes: [FileNode] })
}

function inEditor(editor: ReturnType<typeof makeEditor>, fn: () => void): Promise<void> {
  return new Promise((resolve) => {
    editor.update(fn, { onUpdate: resolve })
  })
}

describe('FileNode', () => {
  let editor: ReturnType<typeof makeEditor>

  beforeEach(() => {
    editor = makeEditor()
    const root = document.createElement('div')
    editor.setRootElement(root)
  })

  it('getType() returns "file"', () => {
    expect(FileNode.getType()).toBe('file')
  })

  it('$createFileNode creates a FileNode instance', () =>
    inEditor(editor, () => {
      const node = $createFileNode(SAMPLE)
      expect($isFileNode(node)).toBe(true)
    }))

  it('exportJSON serializes all fields', () =>
    inEditor(editor, () => {
      const root = $getRoot()
      root.clear()
      const para = $createParagraphNode()
      const node = $createFileNode(SAMPLE)
      para.append(node)
      root.append(para)

      const json = node.exportJSON()
      expect(json.type).toBe('file')
      expect(json.version).toBe(1)
      expect(json.fileName).toBe(SAMPLE.fileName)
      expect(json.fileSize).toBe(SAMPLE.fileSize)
      expect(json.fileType).toBe(SAMPLE.fileType)
      expect(json.url).toBe(SAMPLE.url)
    }))

  it('importJSON round-trips through exportJSON', () =>
    inEditor(editor, () => {
      const original = $createFileNode(SAMPLE)
      const json = original.exportJSON()
      const restored = FileNode.importJSON(json)

      expect(restored.__fileName).toBe(original.__fileName)
      expect(restored.__fileSize).toBe(original.__fileSize)
      expect(restored.__fileType).toBe(original.__fileType)
      expect(restored.__url).toBe(original.__url)
    }))

  it('clone() produces an independent copy', () =>
    inEditor(editor, () => {
      const original = $createFileNode(SAMPLE)
      const cloned = FileNode.clone(original)

      expect(cloned.__fileName).toBe(original.__fileName)
      expect(cloned.__key).toBe(original.__key)
      expect(cloned).not.toBe(original)
    }))

  it('$isFileNode returns false for non-FileNode', () =>
    inEditor(editor, () => {
      const para = $createParagraphNode()
      expect($isFileNode(para)).toBe(false)
    }))
})
