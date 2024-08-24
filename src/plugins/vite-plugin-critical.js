import { generate } from 'critical';
import { resolve } from 'path';

export default function criticalCSS() {
  return {
    name: 'vite-plugin-critical',
    apply: 'build',
    closeBundle() {
      return generate({
        base: resolve(__dirname, 'dist/'),
        src: 'index.html',
        target: {
          html: 'index.html',
        },
        inline: true,
        minify: true,
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
