const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

/**
 * Design tokens — sourced from DESIGN.md / SKILL.md.
 *
 *   color.surface.base   #000000     color.text.primary    #ede8e8
 *   color.surface.muted  #121028     color.text.secondary  #ffffff
 *   color.border.default #1e293b     motion.duration.instant 800ms
 *
 * Two naming layers are exposed on purpose:
 *   1. Semantic tokens (surface-*, content-*, accent-*, line-*) — use these in new code.
 *   2. Legacy aliases (primary-color, base-color, …) — kept so existing markup keeps
 *      working; they now resolve to the semantic tokens above.
 *
 * Surface tokens that stack over the ambient shell gradient are intentionally
 * semi-transparent so the backdrop glow reads through them. Do not add opacity
 * modifiers (`/50`) to those — they already carry alpha.
 */
const tokens = {}; // Tokens are now in globals.css

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // font.family.primary — display face, weight 400 only.
        display: [
          "var(--font-display)",
          "Michroma",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        // Body face. Michroma is display-only; long-form copy must stay readable.
        sans: [
          "var(--font-body)",
          "Space Grotesk",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },

      /**
       * Typography scale. The bottom of the ramp follows the spec
       * (xs=14px, sm=16px, md/base=18px); `4xl` lands on font.size.lg=36px with
       * font.lineHeight.base=40px. The top of the ramp is compressed relative to
       * stock Tailwind because Michroma sets ~40% wider than a normal grotesk.
       */
      fontSize: {
        xs: ["0.875rem", { lineHeight: "1.5rem" }] /* 14px — font.size.xs */,
        sm: ["1rem", { lineHeight: "1.625rem" }] /* 16px — font.size.sm */,
        base: ["1.125rem", { lineHeight: "1.75rem" }] /* 18px — font.size.md */,
        lg: ["1.25rem", { lineHeight: "1.875rem" }] /* 20px */,
        xl: ["1.5rem", { lineHeight: "2rem" }] /* 24px */,
        "2xl": ["1.75rem", { lineHeight: "2.25rem" }] /* 28px */,
        "3xl": ["2rem", { lineHeight: "2.5rem" }] /* 32px */,
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }] /* 36px — font.size.lg */,
        "5xl": ["2.75rem", { lineHeight: "3rem" }] /* 44px */,
        "6xl": ["3.25rem", { lineHeight: "3.5rem" }] /* 52px */,
        "7xl": ["4rem", { lineHeight: "4.25rem" }] /* 64px */,
        "8xl": ["5rem", { lineHeight: "5.25rem" }] /* 80px */,
        "9xl": ["6rem", { lineHeight: "6.25rem" }] /* 96px */,
      },

      letterSpacing: {
        display: "-0.04em",
        eyebrow: "0.18em",
      },

      // space.1=4px and space.2=20px already match Tailwind's `1` and `5`
      // steps, so the spacing scale is left at its defaults.

      transitionDuration: {
        instant: "800ms" /* motion.duration.instant */,
        800: "800ms",
      },

      colors: {
        btn: {
          'primary-hover': 'var(--btn-primary-hover)',
          'primary-text': 'var(--btn-primary-text)',
        },
        surface: {
          base: 'var(--surface-base)',
          muted: 'var(--surface-muted)',
          raised: 'var(--surface-raised)',
          overlay: 'var(--surface-overlay)',
        },
        content: {
          primary: 'var(--content-primary)',
          secondary: 'var(--content-secondary)',
          muted: 'var(--content-muted)',
          subtle: 'var(--content-subtle)',
          inverse: 'var(--content-inverse)',
        },
        border: {
          default: 'var(--border-default)',
          subtle: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent))',
          soft: 'rgb(var(--accent-soft))',
          cyan: 'rgb(var(--accent-cyan))',
          strong: 'var(--accent-strong)',
          surface: 'var(--accent-surface)',
          'surface-soft': 'var(--accent-surface-soft)',
        },
        ink: {
          DEFAULT: 'var(--ink)',
          soft: 'var(--ink-soft)'
        },
        line: {
          DEFAULT: 'var(--border-default)',
          subtle: 'var(--border-subtle)',
        },

        // ---- Legacy aliases, re-pointed at the semantic tokens ----
        "primary-color": "var(--surface-base)",
        "background-color": "var(--surface-base)",
        "secondary-color": "var(--content-secondary)",
        "base-color": "var(--content-primary)",
        "anchor-color": "var(--content-primary)",
        "highlight-color": "var(--surface-muted)",
        "border-color": "var(--border-default)",
        "error-color": "#F43F5E",
        "input-color": "var(--surface-muted)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      boxShadow: {
        glow: "0 0 24px -4px rgba(217, 70, 239, 0.45)",
        "glow-lg": "0 0 60px -12px rgba(217, 70, 239, 0.5)",
        panel: "0 24px 60px -30px rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [addVariablesForColors],
};
