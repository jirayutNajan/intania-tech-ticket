import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        hackathon: {
          primary: "var(--hackathon-primary)",
          background: "var(--hackathon-background)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        ndot47: "var(--font-ndot47)",
        geistMono: "var(--font-geist-mono)",
        geistSans: "var(--font-geist-sans)",
      },
      keyframes: {
        flash: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        claimLeft: {
          '0%': { 
            transform: 'translate(0) scale(1) rotate(0deg)',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(79, 70, 229, 0.1) 100%)',
            boxShadow: '0 0 0 rgba(147, 51, 234, 0.3)',
            borderRadius: '1.5rem'
          },
          '50%': {
            transform: 'translate(12%) scale(0.95) rotate(-5deg)',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(79, 70, 229, 0.2) 100%)',
            boxShadow: '0 0 30px rgba(147, 51, 234, 0.4)',
            borderRadius: '2rem'
          },
          '100%': {
            transform: 'translate(25%) scale(0.9) rotate(-10deg)',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(79, 70, 229, 0.3) 100%)',
            boxShadow: '0 0 50px rgba(147, 51, 234, 0.5)',
            borderRadius: '2.5rem'
          }
        },
        claimRight: {
          '0%': {
            transform: 'translate(0) scale(1) rotate(0deg)',
            background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(185, 28, 28, 0.1) 100%)',
            boxShadow: '0 0 0 rgba(220, 38, 38, 0.3)',
            borderRadius: '1.5rem'
          },
          '50%': {
            transform: 'translate(-12%) scale(0.95) rotate(5deg)',
            background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.2) 0%, rgba(185, 28, 28, 0.2) 100%)',
            boxShadow: '0 0 30px rgba(220, 38, 38, 0.4)',
            borderRadius: '2rem'
          },
          '100%': {
            transform: 'translate(-25%) scale(0.9) rotate(10deg)',
            background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.3) 0%, rgba(185, 28, 28, 0.3) 100%)',
            boxShadow: '0 0 50px rgba(220, 38, 38, 0.5)',
            borderRadius: '2.5rem'
          }
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
            transform: 'scale(1)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.5)',
            transform: 'scale(1.02)'
          }
        }
      },
      animation: {
        flash: 'flash 1s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        claimLeft: 'claimLeft 1.5s ease-in-out forwards',
        claimRight: 'claimRight 1.5s ease-in-out forwards',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
export default config;
