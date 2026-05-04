import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const _dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
    return {
        plugins: [
            ViteImageOptimizer({
                svg: {
                    plugins: [
                        'removeDoctype',
                        'removeXMLProcInst',
                        'minifyStyles',
                        'sortAttrs',
                        'sortDefsChildren',
                    ],
                },
                png: {
                    quality: 70,
                },
                jpeg: {
                    quality: 70,
                },
                jpg: {
                    quality: 70,
                },
            }),
        ],
        build: {
            rollupOptions: {
                input: {
                    main: 'index.html',
                    login: 'register.html',
                },
            },
        },
        base: '/hlegal/',
    };
});