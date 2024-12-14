import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()], // Include Vue plugin for Vite
  server: {
    proxy: {
      // Proxy for API requests
      '/api': {
        target: 'https://rednotice1234.great-site.net', // Your backend server
        changeOrigin: true, // Change the origin header to match the target
        rewrite: (path) => path.replace(/^\/api/, '/public/api/v1'), // Rewrite '/api' to '/public/api/v1'
        secure: false, // Allow requests to servers with self-signed certificates
        configure: (proxy) => {
          // Optional: Log proxy errors for debugging
          proxy.on('proxyRes', (proxyRes) => {
            console.log('Response from target server:', proxyRes.statusCode);
          });
          proxy.on('error', (err, req, res) => {
            console.error('Proxy Error:', err.message);
          });
        },
      },
    },
  },
});
