// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Default sans-serif
        poppins: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Oswald', 'sans-serif'],
        handwriting: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};
