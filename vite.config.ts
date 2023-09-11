import path, { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/components'),
      '@/config': path.resolve(__dirname, './src/config'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/assets': path.resolve(__dirname, './src/assets'),
    },
  },
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'Platejs-Editor',
      fileName: 'platejs-editor',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
