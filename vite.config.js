import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Keep Create React App's output folder so the existing Vercel project settings still apply.
    outDir: "build",
  },
});
