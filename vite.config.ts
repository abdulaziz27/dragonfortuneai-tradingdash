import path from "node:path"

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react-lightweight-charts": path.resolve(
        __dirname,
        "./src/lib/react-lightweight-charts.ts"
      ),
    },
  },
})
