/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JavaScript/TypeScript files
    './public/index.html',  
    // "./pages/*/.{html,js,ts,jsx,tsx}",   // Scans all files in the 'pages' directory
    // "./components/*/.{ html,js,ts,jsx,tsx}", // Scans all files in the 'components' directory
    // "./app/*/.{html,js,ts,jsx,tsx}", // Includes the 'app' directory for Next.js 13+ app directory structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom primary color
        secondary: "#FBBF24", // Custom secondary color
        neutral: "#3F3F46", // Custom neutral color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Example: using Inter font
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Plugin for better form styles
    require("@tailwindcss/typography"), // Plugin for better typography
    require("@tailwindcss/aspect-ratio"), // Plugin for aspect ratios
  ],
};