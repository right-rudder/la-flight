import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://laflightacademy.com",
  integrations: [
    tailwind(),
    partytown(),
    sitemap({
      customPages: [
        "https://laflightacademy.com/discovery-flight",
        "https://laflightacademy.com/enroll-now",
      ],
      filter: (page) => {
        // Exclude admin pages and temporary pages
        return (
          !page.includes("/admin/") &&
          !page.includes("/temp/") &&
          !page.includes("/draft/")
        );
      },
      serialize(item) {
        // Prioritize important pages
        if (item.url === "https://laflightacademy.com/") {
          item.priority = 1.0;
          item.changefreq = "weekly";
        } else if (item.url.includes("/programs/")) {
          item.priority = 0.9;
          item.changefreq = "monthly";
        } else if (item.url.includes("/blog/")) {
          item.priority = 0.7;
          item.changefreq = "monthly";
        } else {
          item.priority = 0.8;
          item.changefreq = "monthly";
        }
        return item;
      },
    }),
    react(),
  ],
  redirects: {
    "/contact": "/contact-us",
    "/the-fleet": "/packages/fleet",
    "/image-gallery": "/packages/gallery",
    "/about-us": "/about",
    "/our-instructors": "/packages/crew",
    "/team-showcase": "/packages/crew",
    "/service/certified-flight-instructor":
      "/programs/certified-flight-instructor",
  },
});
