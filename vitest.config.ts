import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['vitestSetup.ts'],
    coverage: {
      provider: 'v8', // or 'v8'
    },
  },
});