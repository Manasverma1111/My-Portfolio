// import type { Config } from "tailwindcss";

// export default {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: '2rem',
//       screens: {
//         '2xl': '1400px'
//       }
//     },
//     extend: {
//       colors: {
//         border: 'hsl(var(--border))',
//         input: 'hsl(var(--input))',
//         ring: 'hsl(var(--ring))',
//         background: 'hsl(var(--background))',
//         foreground: 'hsl(var(--foreground))',
//         primary: {
//           DEFAULT: 'hsl(var(--primary))',
//           foreground: 'hsl(var(--primary-foreground))'
//         },
//         secondary: {
//           DEFAULT: 'hsl(var(--secondary))',
//           foreground: 'hsl(var(--secondary-foreground))'
//         },
//         accent: {
//           DEFAULT: 'hsl(var(--accent))',
//           foreground: 'hsl(var(--accent-foreground))'
//         },
//         destructive: {
//           DEFAULT: 'hsl(var(--destructive))',
//           foreground: 'hsl(var(--destructive-foreground))'
//         },
//         muted: {
//           DEFAULT: 'hsl(var(--muted))',
//           foreground: 'hsl(var(--muted-foreground))'
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))'
//         },
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))'
//         },
//       },
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)'
//       },
//       boxShadow: {
//         'neon-glow': '0 0 10px rgba(139, 92, 246, 0.7), 0 0 20px rgba(139, 92, 246, 0.6)', // purple neon
//       },
//       keyframes: {
//         'accordion-down': {
//           from: { height: '0' },
//           to: { height: 'var(--radix-accordion-content-height)' }
//         },
//         'accordion-up': {
//           from: { height: 'var(--radix-accordion-content-height)' },
//           to: { height: '0' }
//         },
//         'fade-in': {
//           '0%': { opacity: '0', transform: 'translateY(10px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' }
//         },
//         'fade-out': {
//           '0%': { opacity: '1', transform: 'translateY(0)' },
//           '100%': { opacity: '0', transform: 'translateY(10px)' }
//         },
//         'float': {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-10px)' }
//         },
//         'spin-slow': {
//           '0%': { transform: 'rotate(0deg)' },
//           '100%': { transform: 'rotate(360deg)' }
//         },
//         neon: {
//           '0%, 100%': { boxShadow: '0 0 10px rgba(59, 130 246, 0.6)' },
//           '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 1)' }
//         }
//       },
//       animation: {
//         'accordion-down': 'accordion-down 0.2s ease-out',
//         'accordion-up': 'accordion-up 0.2s ease-out',
//         'fade-in': 'fade-in 0.5s ease-out forwards',
//         'fade-out': 'fade-out 0.5s ease-out forwards',
//         'float': 'float 4s ease-in-out infinite',
//         'spin-slow': 'spin-slow 10s linear infinite',
//         'neon': 'neon 3.0s ease-in-out infinite'
//       }
//     }
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;



import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        'neon-glow': '0 0 10px rgba(139, 92, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.6)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        neon: {
          '0%, 100%': {
            textShadow: '0 0 6px #a78bfa, 0 0 12px #60a5fa',
          },
          '50%': {
            textShadow: '0 0 12px #7c3aed, 0 0 20px #2563eb',
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-out': 'fade-out 0.5s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
        'neon': 'neon 2.5s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
