import { EditorState, LexicalEditor, SerializedLexicalNode, Spread } from 'lexical'

// ─── Editor ──────────────────────────────────────────────────────────────────

export type EditorProps = {
  initialContent?: string
  onChange?: (editorState: EditorState, editor: LexicalEditor) => void
  onEditor?: (editor: LexicalEditor) => void
  placeholder?: string
  className?: string
  contentEditableClassName?: string
}

// ─── FileNode ─────────────────────────────────────────────────────────────────

export type FileNodePayload = {
  fileName: string
  fileSize: number
  fileType: string
  url: string
}

export type SerializedFileNode = Spread<FileNodePayload, SerializedLexicalNode>

// ─── FilePlugin ───────────────────────────────────────────────────────────────

/** Alias of FileNodePayload — used when dispatching INSERT_FILE_COMMAND */
export type InsertFilePayload = FileNodePayload
