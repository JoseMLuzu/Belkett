/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Añadir Flowbite aquí
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")], // Añadir plugin de Flowbite
};
