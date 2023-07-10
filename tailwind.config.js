/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    // media-q
    screens: {
      sm: '680px',
      md: '768px',
      lg: '1024px'
    },
    // font-F
    fontFamily: {
      sansOver: ['Overpass', sans - serif],
      sansUbunt: ['Ubuntu', sans - serif]
    },
    //colors
    colors: {
      //PRIMARY-C:
      'very-light-red': 'hsl(355, 100%, 74%)', //CTA hover background
      'very-dark-blue': 'hsl(208, 49%, 24%)', //Headings
      'light-red': 'hsl(356, 100%,66%)', //CTA TEXT

      //NEUTRAL-C:
      'white': 'hsl(0, 0%, 100%)',
      'very-dark-grayish-blue': 'hsl(207, 13%, 34%)', //Body copy
      'grayish-blue': 'hsl(240, 2%, 79%)', //Footer text
      'very-dark-black-blue': 'hsl(240, 10%, 16%)',  //Footer background

      //GRADIENT-C:
      //Background gradient - Intro/CTA mobile nav:
      'very-light-red': 'hsl(13, 100%, 72%)',
      'light-red': 'hsl(353, 100%, 62%)',
      //Background gradient - body:
      'very-dark-gray-blue': 'hsl(237, 17%, 21%)',
    },
    extend: {},
  },
  plugins: [],
}

