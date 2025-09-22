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
        'scale-in': 'scaleIn 0.6s ease-out',
        'typewriter': 'typewriter 3s steps(40, end), blink 1s step-end infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'text-reveal': 'textReveal 0.8s ease-out forwards',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(92, 171, 125, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(92, 171, 125, 0.8), 0 0 60px rgba(90, 147, 103, 0.6)' },
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
          '51%, 100%': { borderColor: '#5CAB7D' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)', color: '#44633F' },
          '100%': { opacity: '1', transform: 'translateY(0)', color: '#5CAB7D' },
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
            borderColor: '#5CAB7D',
            boxShadow: '0 0 10px rgba(92, 171, 125, 0.3)'
          },
          '50%': { 
            borderColor: '#6fb587',
            boxShadow: '0 0 20px rgba(111, 181, 135, 0.5)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(92, 171, 125, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(92, 171, 125, 0.1) 1px, transparent 1px)',
      },
      colors: {
        // Your custom color palette
        feldgrau: {
          50: '#f6f7f6',
          100: '#e8eae8',
          200: '#d2d6d2',
          300: '#aeb7ae',
          400: '#849084',
          500: '#65726a',
          600: '#4f5b55',
          700: '#3F4B3B', // Your main feldgrau
          800: '#36413c',
          900: '#2d3328',
        },
        hunter: {
          50: '#f4f6f4',
          100: '#e6eae6',
          200: '#ced6ce',
          300: '#a8b8a8',
          400: '#7d937d',
          500: '#5e755e',
          600: '#485d48',
          700: '#44633F', // Your main hunter green
          800: '#374f37',
          900: '#2e422e',
        },
        sea: {
          50: '#f3f8f5',
          100: '#e3f0e7',
          200: '#c9e2d1',
          300: '#a0ccae',
          400: '#6fb187',
          500: '#5A9367', // Your main sea green
          600: '#457856',
          700: '#396347',
          800: '#31503b',
          900: '#2b4232',
        },
        mint: {
          50: '#f0faf6',
          100: '#dcf4e8',
          200: '#bce7d3',
          300: '#8dd5b6',
          400: '#5CAB7D', // Your main mint
          500: '#47a071',
          600: '#38825c',
          700: '#30684b',
          800: '#29533d',
          900: '#234434',
        },
        'mint-light': {
          50: '#DDFFF7', // Your mint light
          100: '#ccfff2',
          200: '#99ffe6',
          300: '#66ffd9',
          400: '#33ffcc',
          500: '#00ffbf',
          600: '#00cc99',
          700: '#009973',
          800: '#00664d',
          900: '#003326',
        },
        // Extended palette for depth
        primary: {
          50: '#f0faf6',
          100: '#dcf4e8',
          200: '#bce7d3',
          300: '#8dd5b6',
          400: '#5CAB7D',
          500: '#5A9367',
          600: '#47a071',
          700: '#44633F',
          800: '#3F4B3B',
          900: '#2d3328',
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
        'mint-glow': '0 0 20px rgba(92, 171, 125, 0.3)',
        'mint-glow-lg': '0 0 40px rgba(92, 171, 125, 0.4)',
        'sea-glow': '0 0 20px rgba(90, 147, 103, 0.3)',
        'sea-glow-lg': '0 0 40px rgba(90, 147, 103, 0.4)',
        'hunter-glow': '0 0 20px rgba(68, 99, 63, 0.3)',
        'feldgrau-glow': '0 0 20px rgba(63, 75, 59, 0.3)',
      },
    },
  },
  plugins: [],
  
  safelist: [
    // Custom color classes
    'bg-feldgrau',
    'bg-hunter',
    'bg-sea',
    'bg-mint',
    'bg-mint-light',
    'text-feldgrau',
    'text-hunter',
    'text-sea',
    'text-mint',
    'text-mint-light',
    'border-feldgrau',
    'border-hunter',
    'border-sea',
    'border-mint',
    'border-mint-light',
    
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
    'animate-scale-in',
    'animate-typewriter',
    'animate-shimmer',
    'animate-text-reveal',
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
    
    // Custom color variations with opacity
    'bg-mint/10',
    'bg-mint/20',
    'bg-mint/30',
    'bg-sea/10',
    'bg-sea/20',
    'bg-sea/30',
    'bg-hunter/10',
    'bg-hunter/20',
    'bg-hunter/30',
    'bg-feldgrau/10',
    'bg-feldgrau/20',
    'bg-feldgrau/30',
    'border-mint/30',
    'border-mint/50',
    'border-sea/30',
    'border-sea/50',
    'from-mint',
    'to-sea',
    'from-sea',
    'to-hunter',
    'shadow-mint-glow',
    'shadow-sea-glow',
    'hover:shadow-mint-glow',
  ]
};