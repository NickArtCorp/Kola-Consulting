import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Use this if you're using React
// import vue from '@vitejs/plugin-vue'; // Uncomment this if using Vue

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // For React, or vue() if you're using Vue
  ],
  build: {
    target: 'esnext',
    outDir: 'dist', // Specify the build output directory
  },
  resolve: {
    alias: {
      '@': '/src', // Optional alias for 'src' directory
    },
  },
  server: {
    port: 5173, // Customize the port if needed
  },
});
