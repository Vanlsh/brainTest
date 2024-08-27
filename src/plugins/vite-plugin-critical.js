import { generate } from 'critical';
import { resolve } from 'path';

export default function criticalCSS() {
  return {
    name: 'vite-plugin-critical',
    apply: 'build',
    closeBundle() {
      const outputDir = resolve(__dirname, '../../dist');

      return generate({
        base: outputDir,
        src: 'index.html',
        target: {
          html: 'index.html',
        },
        inline: true,
        css: '/dist/assets/main-b67734e8.css',
        /*  minify: true, */
        dimensions: [
          {
            width: 320,
            height: 700,
          },
          {
            width: 1440,
            height: 1080,
          },
        ],
      })
        .then(() => {
          console.log('Critical CSS generated and inlined.');
        })
        .catch(err => {
          console.error('Error generating critical CSS:', err);
        });
    },
  };
}
