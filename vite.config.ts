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
  build: {
    outDir: "dist", // Diretório de saída para o build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"), // Entrada principal
      },
    },
  },
  server: {
    port: 3000, // Porta do servidor local
    open: true, // Abrir o navegador automaticamente
  },
});
