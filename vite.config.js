import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

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
    };
});