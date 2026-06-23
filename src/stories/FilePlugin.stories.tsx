import type { Meta, StoryObj } from '@storybook/react'
import { useRef } from 'react'
import { LexicalEditor } from 'lexical'
import Editor from '../Editor'
import { INSERT_FILE_COMMAND } from '../plugins/FilePlugin'
import { InsertFilePayload } from '../types'

const SAMPLE_FILES: InsertFilePayload[] = [
  { fileName: 'report.pdf', fileSize: 204800, fileType: 'application/pdf', url: '#' },
  { fileName: 'photo.png', fileSize: 1048576, fileType: 'image/png', url: '#' },
  { fileName: 'data.csv', fileSize: 3072, fileType: 'text/csv', url: '#' },
]

function FilePluginDemo() {
  const editorRef = useRef<LexicalEditor | null>(null)

  function insert(file: InsertFilePayload) {
    editorRef.current?.dispatchCommand(INSERT_FILE_COMMAND, file)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        {SAMPLE_FILES.map((f) => (
          <button
            key={f.fileName}
            onClick={() => insert(f)}
            style={{
              padding: '6px 12px',
              border: '1px solid #d0d7de',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            Insert {f.fileName}
          </button>
        ))}
      </div>
      <div style={{ border: '1px solid #d0d7de', borderRadius: '6px' }}>
        <Editor
          onEditor={(editor) => { editorRef.current = editor }}
          placeholder="Click a button above to insert a file..."
        />
      </div>
    </div>
  )
}

const meta: Meta = {
  title: 'Lexpad/FilePlugin',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const InsertFile: Story = {
  render: () => <FilePluginDemo />,
}
