/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Industrial color palette
                industrial: {
                    blue: {
                        50: '#e6f0ff',
                        100: '#b3d4ff',
                        200: '#80b8ff',
                        300: '#4d9cff',
                        400: '#1a80ff',
                        500: '#0066e6',
                        600: '#0052b3',
                        700: '#003d80',
                        800: '#00294d',
                        900: '#00141a',
                    },
                    slate: {
                        50: '#f8fafc',
                        100: '#f1f5f9',
                        200: '#e2e8f0',
                        300: '#cbd5e1',
                        400: '#94a3b8',
                        500: '#64748b',
                        600: '#475569',
                        700: '#334155',
                        800: '#1e293b',
                        900: '#0f172a',
                    },
                    steel: {
                        50: '#f0f4f8',
                        100: '#d9e2ec',
                        200: '#bcccdc',
                        300: '#9fb3c8',
                        400: '#829ab1',
                        500: '#627d98',
                        600: '#486581',
                        700: '#334e68',
                        800: '#243b53',
                        900: '#102a43',
                    },
                },
                cta: {
                    blue: '#0066e6',
                    hover: '#0052b3',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            fontSize: {
                // Consistent typography scale
                'h1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }], // 48px
                'h2': ['2.125rem', { lineHeight: '1.3', fontWeight: '600' }], // 34px
                'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }], // 24px
                'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
                'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
            },
            maxWidth: {
                'content': '1400px',
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-in-up': 'slideInUp 0.6s ease-out',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(0, 102, 230, 0.3)' },
                    '50%': { boxShadow: '0 0 30px rgba(0, 102, 230, 0.6)' },
                },
            },
        },
    },
    plugins: [],
}
