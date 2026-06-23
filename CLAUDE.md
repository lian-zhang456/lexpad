# Editor Package

## Stack

- Lexical + @lexical/react
- Vite library mode
- React/Lexical as peerDependencies

## Architecture

- FileNode extends DecoratorNode
- Markdown serialization via $convertToMarkdownString

## Conventions

- Plugins return null and live in src/plugins/
- Custom nodes live in src/nodes/

## Storybook

- Use Storybook for component and plugin development/testing
- Stories live in src/stories/
- Each plugin or node should have a corresponding story
- Use `@storybook/react-vite` builder to align with the Vite setup
