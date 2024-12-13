import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()], // Include Vue plugin for Vite
  server: {
    proxy: {
      '/api': {
        target: 'https://rednotice1234.great-site.net', // Your backend server
        changeOrigin: true, // Adjust the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/api/, '/public/api/v1'), // Rewrite '/api' to '/public/api/v1'
        secure: false, // Disable SSL verification if the backend uses a self-signed certificate
      },
    },
  },
});
