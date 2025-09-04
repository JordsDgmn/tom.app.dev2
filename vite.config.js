import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: env.VITE_REPO_NAME ? `/${env.VITE_REPO_NAME}/` : "/",
    plugins: [react(), tailwindcss()],
    server: {
      open: true,
      host: false, // Allow access from network devices
      port: 5174,
      strictPort: true,
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 5174,
      },
      proxy: {
        "/api": {
          target: "http://localhost:5000/",
          changeOrigin: true,
          secure: true,
        },
        // Forward PHP contact form endpoint to local PHP server
        "/send-mail.php": {
          target: "http://127.0.0.1:8000/",
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});