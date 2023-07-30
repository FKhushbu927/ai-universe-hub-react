/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#672faf",
          
          "secondary": "#d85b6b",
                   
          "accent": "#e2d34a",
                   
          "neutral": "#202037",
                   
          "base-100": "#ecedf4",
                   
          "info": "#3b9fd8",
                   
          "success": "#53d58d",
                   
          "warning": "#f8c82a",
                   
          "error": "#ee2b41",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
