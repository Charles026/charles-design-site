import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({

    integrations: [
        react(),
        image(
            { serviceEntryPoint: '@astrojs/image/sharp'}
            ),
        tailwind({
			config: {
				applyBaseStyles: false,
			},
		})],
});
