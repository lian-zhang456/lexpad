import { EditorState, LexicalEditor, SerializedLexicalNode, Spread } from 'lexical';
export type EditorProps = {
    initialContent?: string;
    onChange?: (editorState: EditorState, editor: LexicalEditor) => void;
    onEditor?: (editor: LexicalEditor) => void;
    placeholder?: string;
    className?: string;
    contentEditableClassName?: string;
};
export type FileNodePayload = {
    fileName: string;
    fileSize: number;
    fileType: string;
    url: string;
};
export type SerializedFileNode = Spread<FileNodePayload, SerializedLexicalNode>;
/** Alias of FileNodePayload — used when dispatching INSERT_FILE_COMMAND */
export type InsertFilePayload = FileNodePayload;
