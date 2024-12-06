import { defineConfig } from "vite";
import { resolve } from "node:path";
import { register } from "node:module";

const config = defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        product: resolve(__dirname, "src/pages/product/index.html"),
        login: resolve(__dirname, "src/pages/login/index.html"),
        detail: resolve(__dirname, "src/pages/detail/index.html"),
        newPost: resolve(__dirname, "src/pages/newPost/index.html"),
        register: resolve(__dirname, "src/pages/register/index.html"),
      },
    },
  },
});

export default config;
