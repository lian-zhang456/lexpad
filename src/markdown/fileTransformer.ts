import { TextMatchTransformer } from '@lexical/markdown'
import { $createFileNode, $isFileNode, FileNode } from '../nodes/FileNode'

// Markdown format: [file:filename|type|size](url)
// Example: [file:report.pdf|application/pdf|204800](https://example.com/report.pdf)
const FILE_REGEX = /\[file:([^|]+)\|([^|]+)\|(\d+)\]\(([^)]+)\)/

export const FILE_TRANSFORMER: TextMatchTransformer = {
  dependencies: [FileNode],
  export: (node) => {
    if (!$isFileNode(node)) return null
    const { __fileName, __fileType, __fileSize, __url } = node
    return `[file:${__fileName}|${__fileType}|${__fileSize}](${__url})`
  },
  importRegExp: FILE_REGEX,
  regExp: FILE_REGEX,
  replace: (textNode, match) => {
    const [, fileName, fileType, fileSizeStr, url] = match
    const fileNode = $createFileNode({ fileName, fileSize: parseInt(fileSizeStr, 10), fileType, url })
    textNode.replace(fileNode)
  },
  trigger: ')',
  type: 'text-match',
}
