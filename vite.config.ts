import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: ["stream"],
      globals: { Buffer: true, process: true },
    }),
  ],
  server: {
    port: 5000,
  },
  build: {
    rollupOptions: {
      plugins: [
        nodePolyfills({
          include: ["stream"],
          globals: { Buffer: true, process: true },
        }),
      ],
    },
  },
});
