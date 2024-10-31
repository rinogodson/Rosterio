import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    [
      react(),
      VitePWA({
        registerType: "autoUpdate", // Automatically update service worker when new content is available
        // includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],  // Include additional assets if needed
        manifest: {
          name: "Rosterio",
          short_name: "Rosterio",
          description:
            "Generate Whatsapp supported Attendance Reports. Lightning fast attendance reports",
          theme_color: "#000000",
          background_color: "#000000",
          display: "standalone",
          start_url: "/",
          runtimeCaching: [
            {
              urlPattern: /.*/,
              handler: "NetworkFirst",
              options: {
                cacheName: "my-app-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
                },
                cacheableResponse: {},
              },
            },
          ],
          icons: [
            {
              src: "/rost-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/rost-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
  ],
});
