import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
//This configuration sets up a proxy for requests starting with "/api". Any request that starts with "/api" will be forwarded to the specified target, in this case, "http://localhost:3333". The secure: false option is used when the target is not using HTTPS.
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3333",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
