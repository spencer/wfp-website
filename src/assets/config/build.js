// .eleventy.js
import esbuild from 'esbuild';
import { execSync } from 'child_process';

export default async function(config) {

  /**
   * Build CSS and JavaScript assets with esbuild
   */
  config.on('afterBuild', async () => {
    // Build CSS with Tailwind CSS CLI
    execSync('NODE_ENV=production npx tailwindcss -i ./src/assets/styles/styles.css -o ./public/assets/styles.css --postcss --verbose');

    // Build JavaScript with esbuild
    await esbuild.build({
      entryPoints: ['src/assets/scripts/main.js'],
      outfile: 'public/assets/main.js',
      bundle: true,
      minify: false,
      sourcemap: false,
    });
  });

  /**
   * Run Pagefind to generate search index
   */
  config.on('eleventy.after', ({ dir, _results, _runMode, _outputMode }) => {
    const outputDir = dir.output;
    execSync(`./node_modules/.bin/pagefind --site ${outputDir} --output-path ${outputDir}/assets/search --glob "**/*.html"`, { encoding: 'utf-8' });
  });
};
