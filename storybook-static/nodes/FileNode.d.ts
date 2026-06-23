import { DecoratorNode, EditorConfig, LexicalNode, NodeKey } from 'lexical';
import { JSX } from '../../node_modules/react';
import { FileNodePayload, SerializedFileNode } from '../types';
export type { SerializedFileNode };
export declare class FileNode extends DecoratorNode<JSX.Element> {
    __fileName: string;
    __fileSize: number;
    __fileType: string;
    __url: string;
    static getType(): string;
    static clone(node: FileNode): FileNode;
    constructor(fileName: string, fileSize: number, fileType: string, url: string, key?: NodeKey);
    createDOM(_config: EditorConfig): HTMLElement;
    updateDOM(): false;
    static importJSON(serializedNode: SerializedFileNode): FileNode;
    exportJSON(): SerializedFileNode;
    decorate(): JSX.Element;
}
export declare function $createFileNode({ fileName, fileSize, fileType, url }: FileNodePayload): FileNode;
export declare function $isFileNode(node: LexicalNode | null | undefined): node is FileNode;
