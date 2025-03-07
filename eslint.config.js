// eslint.config.js
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  // Add ignores property
  ignores: [
    'node_modules',
    '.next',
    'public',
    'dist',
    '.git'
  ],
  rules: {
    // Your existing rules
  },
  extends: [
    "next/core-web-vitals"
  ]
});