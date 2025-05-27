/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navaidixAmber: '#F59E0B', // Main amber color
        navaidixOrange: '#F97316', // Complementary orange
        navaidixDarkAmber: '#B45309', // Darker amber for contrast
        navaidixLightAmber: '#FCD34D', // Lighter amber for highlights
        navaidixWhite: '#F8FAFC',
        navaidixSlate: '#0F172A',
        navaidixLightSlate: '#E2E8F0',
        navaidixDark: '#0F172A',
        navaidixOrangeDark: '#C2410C', // Darker orange
        navaidixOrangeLight: '#FDBA74', // Lighter orange
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/assets/patterns/shapes.svg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
};