import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk warning limit for image-heavy site
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor code into a separate cached chunk
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome'],
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
})
