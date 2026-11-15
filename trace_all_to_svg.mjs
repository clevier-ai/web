import fs from 'fs';
import path from 'path';
import potrace from 'potrace';

const dir = '/home/jan/clevier/web/public/brand';

function traceFile(pngPath, options = {}) {
  return new Promise((resolve, reject) => {
    potrace.trace(pngPath, {
      threshold: 128,
      optCurve: true,
      turdSize: 2,
      ...options
    }, (err, svg) => {
      if (err) reject(err);
      else resolve(svg);
    });
  });
}

async function main() {
  const files = [
    // Angles
    'cl-angle-60deg',
    'cl-angle-62deg',
    'cl-angle-64deg',
    'cl-angle-65deg',
    'cl-angle-66deg',
    'cl-angle-68deg',
    // Separations
    'cl-sep-tight',
    'cl-sep-balanced',
    'cl-sep-wide',
    'cl-sep-ultra',
    'cl-sep-68deg-balanced',
    'cl-sep-68deg-wide',
    // Stencil / Disconnected
    'cl-disconnected-stencil',
    'cl-disconnected-wide',
  ];

  for (const name of files) {
    const pngPath = path.join(dir, `${name}.png`);
    if (fs.existsSync(pngPath)) {
      let svg = await traceFile(pngPath);
      // Ensure fill color is #1F2328
      svg = svg.replace(/fill="black"/g, 'fill="#1F2328"');
      const outPath = path.join(dir, `${name}.svg`);
      fs.writeFileSync(outPath, svg);
      console.log(`Saved SVG: ${name}.svg`);
    }
  }

  // Pure Emerald version
  const balancedSvg = fs.readFileSync(path.join(dir, 'cl-sep-balanced.svg'), 'utf8');
  fs.writeFileSync(path.join(dir, 'cl-color-emerald.svg'), balancedSvg.replace(/#1F2328/g, '#2FBF71'));
  console.log('Saved SVG: cl-color-emerald.svg');

  // Darkmode White version
  fs.writeFileSync(path.join(dir, 'cl-darkmode-pure-white.svg'), balancedSvg.replace(/#1F2328/g, '#FFFFFF'));
  console.log('Saved SVG: cl-darkmode-pure-white.svg');
}

main().catch(console.error);
