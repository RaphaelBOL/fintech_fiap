/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        background: "#343434",
        "footer-bg": "#272727",
        "icon-active": "#FDF51B",
        "icon-inactive": "#C6C6C6",
        despesa: "#C53C3C",
        receita: "#4CBE46",
        "text-label": "#F8F8F8",
        placeholder: "#C6C6C6",
      },
      fontFamily: {
        "dm-sans": ['"DM Sans"', "sans-serif"],
      },
      fontSize: {
        "14px": ["14px", "normal"],
        "16px": ["16px", "normal"],
      },
      letterSpacing: {
        "1px": "1px",
      },
      spacing: {
        "20px": "20px",
        "72px": "72px",
      },
      width: {
        "414px": "414px",
        "386px": "386px",
      },
      height: {
        "896px": "896px",
        "19px": "19px",
      },
      borderRadius: {
        "5px": "5px",
      },
      borderWidth: {
        "1px": "1px",
      },
    },
  },
  plugins: [],
};
