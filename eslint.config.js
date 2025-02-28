module.exports = {
  // ...existing configuration...
  ignores: [
    'node_modules/',
    'build/',
    // Add other paths you want to ignore
  ],
  // Add the Next.js plugin
  extends: [
    'next',
    'next/core-web-vitals',
    // Add other extends if needed
  ],
  // ...existing configuration...
};