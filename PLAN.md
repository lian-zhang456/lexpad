# Lexpad 專案完成步驟

## 1. 專案初始化

- [ ] 建立 Vite library mode 專案（`vite.config.ts` 設定 `build.lib`）
- [ ] 設定 `package.json`：`main`、`module`、`types` 輸出欄位
- [ ] 將 `react`、`react-dom`、`lexical`、`@lexical/react` 設為 `peerDependencies`
- [ ] 安裝開發依賴：`typescript`、`vite`、`@vitejs/plugin-react`

## 2. 核心 Node 實作

- [ ] 在 `src/nodes/` 建立 `FileNode`，繼承 `DecoratorNode`
  - [ ] 實作 `getType()`、`clone()`、`createDOM()`、`updateDOM()`
  - [ ] 實作 `decorate()` 回傳 React 元件
  - [ ] 實作 `exportJSON()` / `importJSON()` 支援序列化

## 3. Markdown 序列化

- [ ] 整合 `@lexical/markdown` 的 `$convertToMarkdownString`
- [ ] 定義 `FileNode` 對應的 Markdown transformer（若需要自訂格式）
- [ ] 實作 `$convertFromMarkdownString` 以支援反序列化

## 4. Plugin 實作

- [ ] 在 `src/plugins/` 建立各功能 Plugin（回傳 `null`）
  - [ ] `MarkdownShortcutPlugin`：快捷鍵轉換 Markdown
  - [ ] `FilePlugin`：處理 FileNode 的插入與互動
  - [ ] （視需求）`ToolbarPlugin`、`HistoryPlugin` 等

## 5. 主要 Editor 元件

- [ ] 建立 `src/Editor.tsx`，組合 `LexicalComposer` 與各 Plugin
- [ ] 設定 `initialConfig`：`nodes`、`theme`、`onError`
- [ ] 建立 `src/index.ts` 作為 library 入口，匯出 Editor、Node、Plugin

## 6. TypeScript 型別

- [ ] 撰寫 `src/types.ts` 定義共用型別
- [ ] 確保 `tsconfig.json` 正確設定 `declaration: true` 輸出 `.d.ts`

## 7. Storybook 設定

- [ ] 安裝 `@storybook/react-vite`、`@storybook/react`
- [ ] 執行 `storybook init` 並選擇 Vite builder
- [ ] 在 `src/stories/` 建立對應 Story：
  - [ ] `Editor.stories.tsx`：測試主要 Editor 元件
  - [ ] `FileNode.stories.tsx`：測試 FileNode 渲染
  - [ ] `MarkdownShortcutPlugin.stories.tsx`：測試 Markdown 轉換
  - [ ] `FilePlugin.stories.tsx`：測試檔案插入流程

## 8. 測試

- [ ] 安裝 `vitest`、`@testing-library/react`
- [ ] 針對 `FileNode` 撰寫單元測試（序列化 / 反序列化）
- [ ] 針對 Plugin 撰寫整合測試

## 9. 打包與發布

- [ ] 執行 `vite build` 確認 library 輸出正確（ESM + CJS）
- [ ] 驗證 `package.json` exports 欄位
- [ ] 撰寫 `README.md`，說明安裝與使用方式
- [ ] 發布至 npm（或內部 registry）
