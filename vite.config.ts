import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// !!! GANTI "nama-repo" dengan nama repository GitHub kamu !!!
export default defineConfig({
  plugins: [react()],
  base: '/jennya/',
});
