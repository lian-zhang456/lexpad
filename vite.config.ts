import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'] }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Lexpad',
      fileName: 'lexpad',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'lexical', '@lexical/react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          lexical: 'Lexical',
          '@lexical/react': 'LexicalReact',
        },
      },
    },
  },
})
