import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite"
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@utils': path.resolve(__dirname, 'src/app/shared/utils'),
      '@enums': path.resolve(__dirname, 'src/app/shared/enums'),
      '@models': path.resolve(__dirname, 'src/app/shared/models'),
      '@services': path.resolve(__dirname, 'src/app/shared/services'),
      '@views': path.resolve(__dirname, 'src/app/views'),
      '@src': path.resolve(__dirname, 'src'),
    },
  },
});