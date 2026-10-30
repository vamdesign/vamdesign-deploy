// Compiles the site's Tailwind for Claude Design: the repo's own config, with
// content widened to the authored previews. Paths are relative to the repo root.
const base = require('../tailwind.config.js')

module.exports = {
  ...base,
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './.design-sync/previews/**/*.tsx',
  ],
}
