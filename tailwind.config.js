/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',
          900: '#060d1f',
          850: '#09122b',
          800: '#0d1a3a',
          700: '#14254f',
          600: '#1d346b',
        },
        electric: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          accent: '#00f2fe',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.45)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.45)',
        'glow-card': '0 10px 30px -10px rgba(6, 182, 212, 0.15), 0 0 1px 1px rgba(59, 130, 246, 0.2)',
        'glow-card-hover': '0 20px 40px -15px rgba(6, 182, 212, 0.35), 0 0 20px 2px rgba(59, 130, 246, 0.4)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-x': 'gradientX 15s ease infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(6,182,212,0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(59,130,246,0.7))' },
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
