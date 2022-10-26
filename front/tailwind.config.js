module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [
    require('daisyui'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp')
  ],
  daisyui: {
    themes: [
      // first theme will be the default theme.
      {
        mytheme: {
          "primary": "#570DF8",
          "secondary": "#F000B8",
          // "accent": "#37CDBE",
          "accent": "#4D88ED",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "base-200": "#f6f6f6",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
};
