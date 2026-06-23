import {
  $convertToMarkdownString,
  $convertFromMarkdownString,
  TRANSFORMERS,
  Transformer,
} from '@lexical/markdown'
import { FILE_TRANSFORMER } from './fileTransformer'

export const LEXPAD_TRANSFORMERS: Transformer[] = [FILE_TRANSFORMER, ...TRANSFORMERS]

export function $toMarkdown(): string {
  return $convertToMarkdownString(LEXPAD_TRANSFORMERS)
}

export function $fromMarkdown(markdown: string): void {
  $convertFromMarkdownString(markdown, LEXPAD_TRANSFORMERS)
}

export { FILE_TRANSFORMER }
