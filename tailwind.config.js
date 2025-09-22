/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradientShift 4s ease infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'slide-in-up': 'slideInUp 0.8s ease-out',
        'rotate': 'rotate 20s linear infinite',
        'scale-in': 'scaleIn 0.6s ease-out',
        'typewriter': 'typewriter 3s steps(40, end), blink 1s step-end infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'text-reveal': 'textReveal 0.8s ease-out forwards',
        'matrix-rain': 'matrixRain 3s linear infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0)' },
          '40%, 43%': { transform: 'translateY(-15px)' },
          '70%': { transform: 'translateY(-8px)' },
          '90%': { transform: 'translateY(-3px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.7' },
          '33%': { transform: 'translateY(-20px) rotate(120deg)', opacity: '1' },
          '66%': { transform: 'translateY(-40px) rotate(240deg)', opacity: '0.8' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(16, 185, 129, 0.8), 0 0 60px rgba(52, 211, 153, 0.6)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#10b981' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)', color: '#374151' },
          '100%': { opacity: '1', transform: 'translateY(0)', color: '#10b981' },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100vh)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.9' },
        },
        borderGlow: {
          '0%, 100%': { 
            borderColor: '#10b981',
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)'
          },
          '50%': { 
            borderColor: '#34d399',
            boxShadow: '0 0 20px rgba(52, 211, 153, 0.5)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b3a3',
          400: '#7a917a',
          500: '#5c7a5c',
          600: '#4a6349',
          700: '#3d503d',
          800: '#344234',
          900: '#2d372d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'green-glow': '0 0 20px rgba(16, 185, 129, 0.3)',
        'green-glow-lg': '0 0 40px rgba(16, 185, 129, 0.4)',
        'emerald-glow': '0 0 20px rgba(52, 211, 153, 0.3)',
        'emerald-glow-lg': '0 0 40px rgba(52, 211, 153, 0.4)',
      },
    },
  },
  plugins: [],
  
  safelist: [
    // Animations
    'animate-fade-in',
    'animate-bounce', 
    'animate-pulse',
    'animate-float',
    'animate-gradient',
    'animate-glow',
    'animate-slide-in-left',
    'animate-slide-in-right',
    'animate-slide-in-up',
    'animate-rotate',
    'animate-scale-in',
    'animate-typewriter',
    'animate-shimmer',
    'animate-text-reveal',
    'animate-matrix-rain',
    'animate-wave',
    'animate-breathe',
    'animate-border-glow',
    
    // Transitions
    'transition-all',
    'duration-300',
    'duration-500',
    'duration-700',
    'duration-1000',
    'ease-out',
    'ease-in-out',
    
    // Transforms
    'transform',
    'hover:scale-105',
    'hover:scale-110',
    'hover:rotate-3',
    'hover:-rotate-3',
    
    // Delays
    'delay-100',
    'delay-200',
    'delay-300',
    'delay-500',
    'delay-700',
    'delay-1000',
    
    // Custom classes
    'glass',
    'glass-dark',
    'gradient-text',
    'hover-lift',
    'hover-glow',
    'btn-gradient',
    'loading-shimmer',
    'text-reveal',
    'neon-green',
    'card-hover',
    'focus-green',
    'bg-grid-pattern',
    
    // Green color variations
    'text-emerald-400',
    'text-emerald-500',
    'text-emerald-600',
    'bg-emerald-900/30',
    'bg-emerald-800/50',
    'border-emerald-700/30',
    'border-emerald-600/50',
    'from-emerald-400',
    'to-green-400',
    'from-emerald-600',
    'to-green-600',
    'shadow-emerald-500/25',
    'hover:shadow-emerald-500/25',
  ]
};