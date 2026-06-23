import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { ListNode, ListItemNode } from '@lexical/list'
import { CodeNode, CodeHighlightNode } from '@lexical/code'
import { LinkNode } from '@lexical/link'
import { LexicalEditor } from 'lexical'
import { useEffect } from 'react'
import { FileNode } from './nodes/FileNode'
import { LEXPAD_TRANSFORMERS } from './markdown'
import FilePlugin from './plugins/FilePlugin'
import { EditorProps } from './types'

export type { EditorProps }

const NODES = [
  FileNode,
  HeadingNode,
  QuoteNode,
  ListNode,
  ListItemNode,
  CodeNode,
  CodeHighlightNode,
  LinkNode,
]

function EditorRefPlugin({ onEditor }: { onEditor: (editor: LexicalEditor) => void }) {
  const [editor] = useLexicalComposerContext()
  useEffect(() => { onEditor(editor) }, [editor, onEditor])
  return null
}

const theme = {}

function onError(error: Error) {
  console.error(error)
}

export default function Editor({
  onChange,
  onEditor,
  placeholder = 'Start typing...',
  className,
  contentEditableClassName,
}: EditorProps) {
  return (
    <div className={className} style={{ position: 'relative' }}>
      <LexicalComposer
        initialConfig={{ namespace: 'Lexpad', theme, onError, nodes: NODES }}
      >
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className={contentEditableClassName}
              style={{ outline: 'none', minHeight: '120px', padding: '8px' }}
            />
          }
          placeholder={
            <div
              style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                color: '#aaa',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {placeholder}
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <MarkdownShortcutPlugin transformers={LEXPAD_TRANSFORMERS} />
        <FilePlugin />
        {onChange && <OnChangePlugin onChange={onChange} />}
        {onEditor && <EditorRefPlugin onEditor={onEditor} />}
      </LexicalComposer>
    </div>
  )
}
