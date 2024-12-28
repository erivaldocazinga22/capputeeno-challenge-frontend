import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Atalho para paths absolutos
    },
  },
  server: {
    port: 3000, // Porta do servidor de desenvolvimento
    open: true, // Abrir o navegador automaticamente
    proxy: {
      // Proxy para redirecionar chamadas para o JSON Server
      "/api": {
        target: "http://localhost:5000", // Onde o JSON Server estará rodando
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove /api da URL antes de passar para o JSON Server
      },
    },
  },
});
