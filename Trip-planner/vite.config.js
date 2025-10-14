import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from '@tailwindcss/vite'
import commonjs from "vite-plugin-commonjs";


export default defineConfig({
  plugins: [react(), tailwindcss(),commonjs()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    rollupOptions: {
      external: ["react-google-places-autocomplete"],
    },
  },
})
