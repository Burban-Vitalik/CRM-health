const { createGlobPatternsForDependentProjects } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'apps/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'libs/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependentProjects(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
};