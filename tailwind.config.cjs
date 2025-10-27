module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0b0f14',
        'panel': '#0f1720',
        'tech-blue': '#0ea5ff'
      },
      boxShadow: {
        'card': '0 8px 30px rgba(14,165,255,0.06)'
      }
    }
  },
  plugins: []
}