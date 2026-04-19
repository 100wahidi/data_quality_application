import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path'; // Import the path module

// https://vite.dev/config/
export default defineConfig({
  base: '/aaplica/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      styles: path.resolve(__dirname, './styles'),
    },
  },
  build: {
    rollupOptions: {
      external: ['styles/index.css'],
    },
  },
});