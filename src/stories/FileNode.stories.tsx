import type { Meta, StoryObj } from '@storybook/react'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useEffect } from 'react'
import { $getRoot, $createParagraphNode } from 'lexical'
import { FileNode, $createFileNode } from '../nodes/FileNode'
import { FileNodePayload } from '../types'

function Preload({ payload }: { payload: FileNodePayload }) {
  const [editor] = useLexicalComposerContext()
  useEffect(() => {
    editor.update(() => {
      const root = $getRoot()
      root.clear()
      const paragraph = $createParagraphNode()
      paragraph.append($createFileNode(payload))
      root.append(paragraph)
    })
  }, [editor, payload])
  return null
}

function FileNodePreview({ payload }: { payload: FileNodePayload }) {
  return (
    <LexicalComposer
      initialConfig={{
        namespace: 'FileNodeStory',
        nodes: [FileNode],
        onError: console.error,
        theme: {},
      }}
    >
      <RichTextPlugin
        contentEditable={<ContentEditable style={{ outline: 'none', padding: '8px' }} />}
        placeholder={null}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <Preload payload={payload} />
    </LexicalComposer>
  )
}

const meta: Meta = {
  title: 'Lexpad/FileNode',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const PDF: Story = {
  render: () => (
    <FileNodePreview
      payload={{ fileName: 'report.pdf', fileSize: 204800, fileType: 'application/pdf', url: '#' }}
    />
  ),
}

export const Image: Story = {
  render: () => (
    <FileNodePreview
      payload={{ fileName: 'photo.png', fileSize: 1048576, fileType: 'image/png', url: '#' }}
    />
  ),
}

export const SmallFile: Story = {
  render: () => (
    <FileNodePreview
      payload={{ fileName: 'note.txt', fileSize: 512, fileType: 'text/plain', url: '#' }}
    />
  ),
}
