Recolor scripts

This project includes a Node-based recolor helper that uses `sharp` to apply a color overlay to raster images.

Prerequisites
- Node.js installed
- Install dependencies: `npm install` (this will install `sharp` after you add it to package.json)

Usage
- Basic (defaults):
  node scripts/recolor.js

- Example: recolor images in `public/images` to the primary green and write to `public/images-recolor`:
  node scripts/recolor.js --src=public/images --out=public/images-recolor --hex=#16a34a

Options
- --src: source directory (defaults to `public/images`)
- --out: output directory (defaults to `public/images-recolor`)
- --hex: target hex color (without the leading # is accepted; defaults to #16a34a)
- --blend: overlay blend opacity (not currently used directly; default 0.45)

Notes
- The script uses an SVG overlay with the provided hex color and composites it onto each image using sharp's `overlay` blend mode.
- This is a destructive recolor approach; output files are written to the `--out` directory so originals remain untouched.
- For better results on complex images, consider manual editing in a raster editor or creating vector replacements.

If you'd like, I can add a package.json devDependency entry for `sharp` and run `npm install` here, or you can run it locally: `npm install --save-dev sharp`.
