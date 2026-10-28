import type { Config } from "tailwindcss";

/**
 * `--u` is 1 design-pixel at the current page width (see .page-root in
 * globals.css). u(153) = "153px at 1920 wide", scaling down proportionally.
 * An optional floor keeps text and tap targets usable on small screens.
 */
const u = (n: number, floor?: number) =>
  floor ? `max(${floor}px, calc(var(--u) * ${n}))` : `calc(var(--u) * ${n})`;

// u0…u1920 → e.g. `w-u447`, `top-u100`, `gap-u26` (exact Figma values, no floor)
const unitScale = Object.fromEntries(
  Array.from({ length: 1921 }, (_, n) => [`u${n}`, u(n)]),
);

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#050f27",
        "navy-2": "#111b31",
        surface: "#f7f8f8",
        ink: "#191623",
        "ink-soft": "#2a3347",
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      spacing: {
        ...unitScale,
        gutter: u(60, 12),
        "nav-top": u(42, 12),
        "nav-gap": u(43, 12),
        "nav-h": u(91, 64),
        "nav-x": u(62, 20),
        "tab-l": u(24, 16),
        "tab-r": u(47, 24),
        logo: u(135.707, 96),
        section: u(80, 20),
        pad: u(40, 20),
        "pad-x": u(88, 20),
        "pad-cta": u(100, 20),
        "cta-top": u(125, 24),
        tight: u(8, 4),
        "btn-h": u(74, 56),
        "btn-w": u(226, 184),
        stars: u(85.438, 64),
        "footer-h": u(134, 88),
      },
      maxWidth: unitScale,
      borderRadius: {
        section: u(80, 28),
        panel: u(40, 24),
        card: u(44, 24),
        photo: u(56, 24),
        pill: u(128, 32),
        cta: u(76.81, 32),
      },
      // [size, { lineHeight, letterSpacing }] — values from Figma text styles
      fontSize: {
        display: [u(153, 44), { lineHeight: "1.07", letterSpacing: "-0.04em" }],
        h2: [u(132.236, 40), { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        cta: [u(175.209, 48), { lineHeight: "1", letterSpacing: "-0.02em" }],
        ctasub: [u(43.889, 20), { lineHeight: "1.2" }],
        ctabtn: [u(27.487, 20), { lineHeight: "1.236" }],
        stat: [u(71.673, 40), { lineHeight: "1.18" }],
        title: [u(76, 32), { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        service: [u(72, 36), { lineHeight: "1" }],
        subhead: [u(50, 28), { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        lead: [u(24, 16), { lineHeight: "1.5" }],
        copy: [u(22, 16), { lineHeight: "1.636" }],
        name: [u(27, 18), { lineHeight: "normal", letterSpacing: "-0.025em" }],
        label: [u(20, 15), { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        nav: [u(18, 16), { lineHeight: "1.333", letterSpacing: "-0.02em" }],
        btn: [u(18, 16), { lineHeight: "1.333" }],
      },
    },
  },
  plugins: [],
};
export default config;
