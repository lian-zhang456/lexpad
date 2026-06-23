import { DecoratorNode, EditorConfig, LexicalNode, NodeKey } from 'lexical'
import { JSX } from 'react'
import { FileNodePayload, SerializedFileNode } from '../types'

export type { SerializedFileNode }

export class FileNode extends DecoratorNode<JSX.Element> {
  __fileName: string
  __fileSize: number
  __fileType: string
  __url: string

  static getType(): string {
    return 'file'
  }

  static clone(node: FileNode): FileNode {
    return new FileNode(node.__fileName, node.__fileSize, node.__fileType, node.__url, node.__key)
  }

  constructor(fileName: string, fileSize: number, fileType: string, url: string, key?: NodeKey) {
    super(key)
    this.__fileName = fileName
    this.__fileSize = fileSize
    this.__fileType = fileType
    this.__url = url
  }

  createDOM(_config: EditorConfig): HTMLElement {
    const span = document.createElement('span')
    span.style.display = 'inline-block'
    return span
  }

  updateDOM(): false {
    return false
  }

  static importJSON(serializedNode: SerializedFileNode): FileNode {
    return $createFileNode(serializedNode)
  }

  exportJSON(): SerializedFileNode {
    return {
      type: 'file',
      version: 1,
      fileName: this.__fileName,
      fileSize: this.__fileSize,
      fileType: this.__fileType,
      url: this.__url,
    }
  }

  decorate(): JSX.Element {
    return (
      <FileComponent
        fileName={this.__fileName}
        fileSize={this.__fileSize}
        fileType={this.__fileType}
        url={this.__url}
      />
    )
  }
}

function FileComponent({ fileName, fileSize, fileType, url }: FileNodePayload) {
  const sizeLabel =
    fileSize < 1024
      ? `${fileSize} B`
      : fileSize < 1024 * 1024
        ? `${(fileSize / 1024).toFixed(1)} KB`
        : `${(fileSize / (1024 * 1024)).toFixed(1)} MB`

  return (
    <a
      href={url}
      download={fileName}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 10px',
        border: '1px solid #d0d7de',
        borderRadius: '6px',
        textDecoration: 'none',
        color: 'inherit',
        fontSize: '14px',
      }}
    >
      <span>📎</span>
      <span>{fileName}</span>
      <span style={{ color: '#656d76', fontSize: '12px' }}>
        {fileType} · {sizeLabel}
      </span>
    </a>
  )
}

export function $createFileNode({ fileName, fileSize, fileType, url }: FileNodePayload): FileNode {
  return new FileNode(fileName, fileSize, fileType, url)
}

export function $isFileNode(node: LexicalNode | null | undefined): node is FileNode {
  return node instanceof FileNode
}
