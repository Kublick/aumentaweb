import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ nesting: true }), react(), robotsTxt()],
  site: "https://aumentapacientes.com",
});
