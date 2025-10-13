import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from '@tailwindcss/vite'; // Correct import


export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["react-google-places-autocomplete"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
})


