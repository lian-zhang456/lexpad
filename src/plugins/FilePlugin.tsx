import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { COMMAND_PRIORITY_EDITOR, createCommand, LexicalCommand } from 'lexical'
import { useEffect } from 'react'
import { $insertNodeToNearestRoot } from '@lexical/utils'
import { $createFileNode } from '../nodes/FileNode'
import { InsertFilePayload } from '../types'

export type { InsertFilePayload }

export const INSERT_FILE_COMMAND: LexicalCommand<InsertFilePayload> =
  createCommand('INSERT_FILE_COMMAND')

export default function FilePlugin(): null {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    return editor.registerCommand<InsertFilePayload>(
      INSERT_FILE_COMMAND,
      (payload) => {
        $insertNodeToNearestRoot($createFileNode(payload))
        return true
      },
      COMMAND_PRIORITY_EDITOR,
    )
  }, [editor])

  return null
}
