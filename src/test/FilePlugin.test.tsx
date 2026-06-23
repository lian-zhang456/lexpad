import { describe, it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { useRef } from 'react'
import { LexicalEditor, $getRoot, $nodesOfType } from 'lexical'
import { FileNode } from '../nodes/FileNode'
import Editor from '../Editor'
import { INSERT_FILE_COMMAND } from '../plugins/FilePlugin'
import { InsertFilePayload } from '../types'

const SAMPLE: InsertFilePayload = {
  fileName: 'report.pdf',
  fileSize: 204800,
  fileType: 'application/pdf',
  url: 'https://example.com/report.pdf',
}

function Fixture({ onReady }: { onReady: (editor: LexicalEditor) => void }) {
  return <Editor onEditor={onReady} />
}

describe('FilePlugin', () => {
  it('renders the editor without crashing', () => {
    render(<Fixture onReady={() => {}} />)
    expect(document.querySelector('[contenteditable]')).toBeTruthy()
  })

  it('INSERT_FILE_COMMAND inserts a FileNode rendered as an anchor', async () => {
    let editorRef: LexicalEditor | null = null

    render(<Fixture onReady={(e) => { editorRef = e }} />)

    await act(async () => {
      editorRef!.dispatchCommand(INSERT_FILE_COMMAND, SAMPLE)
    })

    const link = document.querySelector('a[download="report.pdf"]')
    expect(link).toBeTruthy()
    expect(link?.textContent).toContain('report.pdf')
  })

  it('placeholder is visible before typing', () => {
    render(<Editor placeholder="Type here..." />)
    expect(screen.getByText('Type here...')).toBeTruthy()
  })

  it('INSERT_FILE_COMMAND stores node in editor state', async () => {
    let editorRef: LexicalEditor | null = null
    render(<Fixture onReady={(e) => { editorRef = e }} />)

    await act(async () => {
      await new Promise<void>((resolve) => {
        editorRef!.update(
          () => { editorRef!.dispatchCommand(INSERT_FILE_COMMAND, SAMPLE) },
          { onUpdate: resolve },
        )
      })
    })

    let nodeCount = 0
    editorRef!.getEditorState().read(() => {
      nodeCount = $nodesOfType(FileNode).length
    })

    expect(nodeCount).toBe(1)
  })
})
