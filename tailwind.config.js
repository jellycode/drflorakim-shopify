/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  './assets/**/*.{css,js}',
  './layout/**/*.liquid',
  './sections/**/*.{html,js,liquid}',
  './snippets/**/*.liquid',
  './templates/**/*.{json,liquid}',
 ],
	theme: {
		fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ...],
      'serif': ['ui-serif', 'Georgia', ...],
      'mono': ['ui-monospace', 'SFMono-Regular', ...],
      'display': ['Oswald', ...],
      'body': ['"Open Sans"', ...],
    }
  container: {
   padding: {
    DEFAULT: '1rem',
    sm: '2rem',
    lg: '4rem',
    xl: '5rem',
    '2xl': '6rem',
   },
  },
  extend: {
   colors: {
    blue: {
     100: '#ebf6fd',
     300: '#93bbc2',
     500: '#1579b2',
    },
    pink: {
     100: '#fbf2f7',
     300: '#dd94ac',
     500: '#e4007f',
    },
   },
  },
 },
 plugins: [],
};
