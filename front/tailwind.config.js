module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [
    require('daisyui'),
    // ref : https://tailwindcss.com/blog/multi-line-truncation-with-tailwindcss-line-clamp
    require('@tailwindcss/line-clamp')
  ],
  daisyui: {
    themes: [
      // first theme will be the default theme.
      {
        mytheme: {
          "accent": "#4AA9EE",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "base-200": "#f6f6f6",
          "info": "#3ABFF8",
        },
      },
    ],
  },
};
