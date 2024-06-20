import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    output: "server",
    devToolbar: {
        enabled: false
    },
    site: 'https://twokei.com',
    integrations: [
        mdx({
            shikiConfig: {
                theme: "vitesse-dark"
            }
        }),
        sitemap(),
        tailwind()
    ]
});
