import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Next.js allows JSX in .js files, so tell Vite to parse them as JSX
  oxc: {
    include: /\.[jt]sx?$/,
    lang: "jsx",
  },
  test: {
    environment: "jsdom",
  },
});
