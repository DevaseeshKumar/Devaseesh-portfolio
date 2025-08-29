# Theme Toggle (Vite + React + Tailwind)

A minimal, GitHub-ready starter that demonstrates a working dark/light theme toggle using Tailwind's `dark` mode.

## Quick Start

```bash
# 1) Install dependencies
npm install

# 2) Run dev server
npm run dev

# 3) Build for production
npm run build

# 4) Preview production build
npm run preview
```

## How it works

- `tailwind.config.js` uses `darkMode: "class"`.
- `index.html` sets the initial theme **before React mounts** (prevents flash).
- `Navbar` toggles the `dark` class on `<html>` and persists choice in `localStorage`.
- `SamplePage` uses Tailwind dark utilities: `bg-white dark:bg-black`, `text-black dark:text-white`.

## Files

- `src/components/Navbar.jsx` – toggle logic
- `src/pages/SamplePage.jsx` – demo page
- `src/App.jsx` – wires it together
- `index.html` – sets initial theme based on localStorage or system

If you still don't see theme change:
1. Make sure `darkMode: "class"` is set in `tailwind.config.js`.
2. Restart the dev server after changing Tailwind config.
3. Open DevTools → Elements → `<html>` should gain/remove `class="dark"` when toggling.
