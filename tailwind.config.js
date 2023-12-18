/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      //General
      fontFamily: {
        'sans': ['"Cabin", sans-serif'],
      },
      colors: {
        'border_color': '#dee2e6', // Just in Contact page
        'default_green': '#68b02b',
      },
      boxShadow: {
        'lg': '0px 0px 40px rgba(0, 0, 0, 0.1);',
        'sm': '0 0 0 0.25rem #5c9c2640'
      },
      fontSize: {
        '4xl': ['2.5rem', {
          lineHeight: '1.2rem',
          fontWeight: '500'
        }],
        '3xl': ['0.875em', {
          lineHeight: '1rem',
          fontWeight: '500'
        }],
      },
      //Members page only
      backgroundImage: {
        'member_one': "url('../images/member_one.svg')",
        'member_two': "url('../images/member_two.svg')",
        'member_three': "url('../images/member_three.svg')",
        'member_four': "url('../images/member_four.svg')",
        'member_five': "url('../images/member_five.svg')",
        'member_six': "url('../images/member_six.svg')"
      },
      transitionTimingFunction: {
        'ease-default': 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
      },
    }
  },
  plugins: []
}

