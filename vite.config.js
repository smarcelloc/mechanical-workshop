import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
    plugins: [
        vue({ template: transformAssetUrls }),
        quasar({ sassVariables: 'resources/scss/quasar-overrides.scss' }),
        laravel({ input: ['resources/main.ts'] })
    ],
    base: './',
    resolve: {
        alias: { '@': '/resources' }
    }
});
