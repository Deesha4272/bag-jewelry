import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this repo from /bag-jewelry/, so production builds use that base.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/bag-jewelry/' : '/',
}));
