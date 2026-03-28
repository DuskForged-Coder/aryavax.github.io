/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0A",
        surface: "#10131A",
        panel: "rgba(11, 18, 32, 0.68)",
        neon: "#3AB7FF",
        cyan: "#5BF7FF",
        steel: "#9AB1C7"
      },
      boxShadow: {
        neon: "0 0 30px rgba(58, 183, 255, 0.22)",
        pulse: "0 0 24px rgba(91, 247, 255, 0.28)"
      },
      fontFamily: {
        display: ["Rajdhani", "Space Grotesk", "Avenir Next", "sans-serif"],
        body: ["Sora", "IBM Plex Sans", "Segoe UI", "sans-serif"]
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(58,183,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(58,183,255,0.12) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
