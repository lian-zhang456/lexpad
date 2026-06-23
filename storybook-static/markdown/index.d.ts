import { Transformer } from '@lexical/markdown';
import { FILE_TRANSFORMER } from './fileTransformer';
export declare const LEXPAD_TRANSFORMERS: Transformer[];
export declare function $toMarkdown(): string;
export declare function $fromMarkdown(markdown: string): void;
export { FILE_TRANSFORMER };
