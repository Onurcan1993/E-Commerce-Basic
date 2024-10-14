/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        'primary-orange': '#ff7d1a',
        'primary-pale-orange':'#ffede0',
        'neutral-very-dark-blue':'	#1d2025',
        'neutral-dark-grayish-blue':'#b6bcc8',
        'neutral-light-grayish-blue':'#f7f8fd',
      },
         backgroundImage: {
        'login': "url('/public/bg_image.jpg')",
        'shoe': "url('/public/header-shoe.jpg')"
        
      },

    },
  },
  plugins: [],
}

