import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://laflightacademy.com",
  integrations: [tailwind(), partytown(), sitemap(), react()],
  redirects: {
    '/contact': '/contactUs',
    '/the-fleet': '/packages/fleet',
    '/image-gallery': '/packages/gallery',
    '/about-us': '/about',
    '/our-instructors': '/packages/crew',
    '/team-showcase': '/packages/crew',
    '/service/certified-flight-instructor': '/programs/certified-flight-instructor',
  }
});
