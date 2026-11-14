import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

declare const process: { env: Record<string, string | undefined> };

// No GitHub Pages o site fica em /<nome-do-repositório>/; localmente fica na raiz.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [react()]
});
