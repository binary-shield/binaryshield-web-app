import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                heading: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
                mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
            },
        },
    },
    darkMode: "class",
    plugins: [nextui({
        themes: {
            light: {
                colors: {
                    background: "#ffffff",
                    foreground: "#0f172a",
                    primary: {
                        DEFAULT: "#2563eb",
                        foreground: "#ffffff",
                    },
                    secondary: {
                        DEFAULT: "#db2777",
                        foreground: "#ffffff",
                    },
                },
            },
            dark: {
                colors: {
                    background: "#0D1117",
                    foreground: "#ffffff",
                    primary: {
                        DEFAULT: "#3B82F6",
                        foreground: "#ffffff",
                    },
                    secondary: {
                        DEFAULT: "#EC4899",
                        foreground: "#ffffff",
                    },
                },
            },
        },
    })],
}
