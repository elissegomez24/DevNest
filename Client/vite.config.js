import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Replace with your backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    postcss: './postcss.config.js',
  },
<<<<<<< HEAD
}); 
=======
});
>>>>>>> 3fb1994c0d5f30b4f37936687f5338c57c11d94f
