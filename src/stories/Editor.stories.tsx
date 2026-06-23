import type { Meta, StoryObj } from '@storybook/react'
import { EditorState, LexicalEditor } from 'lexical'
import { useState } from 'react'
import Editor from '../Editor'

const meta: Meta<typeof Editor> = {
  title: 'Lexpad/Editor',
  component: Editor,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Editor>

export const Default: Story = {}

export const CustomPlaceholder: Story = {
  args: {
    placeholder: '請開始輸入內容...',
  },
}

export const WithOnChange: Story = {
  render: () => {
    const [markdown, setMarkdown] = useState('')

    function handleChange(_state: EditorState, editor: LexicalEditor) {
      editor.read(() => {
        import('../markdown').then(({ $toMarkdown }) => {
          setMarkdown($toMarkdown())
        })
      })
    }

    return (
      <div style={{ display: 'flex', gap: '24px' }}>
        <div style={{ flex: 1, border: '1px solid #d0d7de', borderRadius: '6px' }}>
          <Editor onChange={handleChange} placeholder="Type here to see Markdown output..." />
        </div>
        <pre
          style={{
            flex: 1,
            background: '#f6f8fa',
            padding: '8px',
            borderRadius: '6px',
            fontSize: '13px',
            whiteSpace: 'pre-wrap',
            margin: 0,
          }}
        >
          {markdown || '(empty)'}
        </pre>
      </div>
    )
  },
}

export const WithStyling: Story = {
  args: {
    className: 'lexpad-editor',
    contentEditableClassName: 'lexpad-content',
    placeholder: 'Styled editor...',
  },
  decorators: [
    (Story) => (
      <>
        <style>{`
          .lexpad-editor { border: 2px solid #0969da; border-radius: 8px; }
          .lexpad-content { min-height: 200px !important; padding: 12px !important; font-size: 15px; }
        `}</style>
        <Story />
      </>
    ),
  ],
}
