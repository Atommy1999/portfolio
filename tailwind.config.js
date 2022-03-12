module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: "Orbitron, sans-serif",
        noto: "'Noto Sans JP', sans-serif",
        ubuntu: "'Ubuntu Mono', monospace;",
        karla: "'Karla', sans-serif;",
      },
      colors: {
        gold: "#caa846",
        silver: "#eeeeee",
      },
      gridTemplateColumns: {
        contact: "20% 80%",
      },
    },
  },
  plugins: [],
}
