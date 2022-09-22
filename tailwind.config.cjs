module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {
          
            "primary": "#df790e",
                      
            "secondary": "#780101",
                      
            "accent": "#fd0200",
                      
            "neutral": "#525666",
                      
            "base-100": "#2A303C",
                      
            "info": "#3ABFF8",
                      
            "success": "#36D399",
                      
            "warning": "#FBBD23",
                      
            "error": "#F87272",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}
