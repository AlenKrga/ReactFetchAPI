/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx'], // Paths to your React components for purging unused styles
  darkMode: false, // or 'media' or 'class' if you want to enable dark mode
  theme: {
    extend: {
      // You can add custom theme configuration or extend existing theme styles here
    },
  },
  variants: {
    extend: {
      // You can customize the variants for specific utilities here
    },
  },
  plugins: [
    // You can add Tailwind CSS plugins here
    // For example, to enable the typography plugin:
    require('@tailwindcss/typography'),
  ],
};
