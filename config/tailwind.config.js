const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/views/**/*.html.erb',       // All ERB templates
    './app/helpers/**/*.rb',          // Helper files
    './app/javascript/**/*.js',       // JavaScript files
    './app/javascript/**/*.jsx',      // React (if applicable)
    './app/assets/stylesheets/**/*.css', // Any CSS files
    './app/components/**/*.{erb,html}',  // ViewComponent files (if using ViewComponents)
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('daisyui'),
  ]
}
