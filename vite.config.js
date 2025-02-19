import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? "/-Hexschool-2024-React-homework-w6/"
      : "/",
  plugins: [react()],
});
