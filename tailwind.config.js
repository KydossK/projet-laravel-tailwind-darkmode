import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    darkMode: 'class',
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    50: '#f9fafb', 150: '#f3f4f6', 250: '#e5e7eb', 350: '#d1d5db', 450: '#9ca3af',
                    550: '#6b7280', 650: '#4b5563', 750: '#374151', 850: '#1f2937', 950: '#111827',
                },
                red: {
                    50: '#fef2f2', 150: '#fee2e2', 250: '#fecaca', 350: '#fca5a5', 450: '#f87171',
                    550: '#ef4444', 650: '#dc2626', 750: '#b91c1c', 850: '#991b1b', 950: '#7f1d1d',
                },
                yellow: {
                    50: '#fefce8', 150: '#fef9c3', 250: '#fef08a', 350: '#fde047', 450: '#facc15',
                    550: '#eab308', 650: '#ca8a04', 750: '#a16207', 850: '#854d0e', 950: '#713f12',
                },
                green: {
                    50: '#f0fdf4', 150: '#dcfce7', 250: '#bbf7d0', 350: '#86efac', 450: '#4ade80',
                    550: '#22c55e', 650: '#16a34a', 750: '#15803d', 850: '#166534', 950: '#14532d',
                },
                blue: {
                    50: '#eff6ff', 150: '#dbeafe', 250: '#bfdbfe', 350: '#93c5fd', 450: '#60a5fa',
                    550: '#3b82f6', 650: '#2563eb', 750: '#1d4ed8', 850: '#1e40af', 950: '#1e3a8a',
                },
                purple: {
                    50: '#faf5ff', 150: '#f3e8ff', 250: '#e9d5ff', 350: '#d8b4fe', 450: '#c084fc',
                    550: '#a855f7', 650: '#9333ea', 750: '#7e22ce', 850: '#6b21a8', 950: '#581c87',
                },
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
