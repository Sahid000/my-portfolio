
with open('src/components/ThemeProvider.jsx', 'w', encoding='utf-8') as f:
    f.write('''"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useState, useEffect } from "react";

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
''')

with open('src/components/shared/ThemeSwitcher.jsx', 'w', encoding='utf-8') as f:
    f.write('''"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded flex items-center justify-center transition-all duration-300 hover:bg-surface-muted text-content-primary hover:text-accent-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong"
    >
      {theme === "dark" ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
}
''')

