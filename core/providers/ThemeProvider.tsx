"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [animationOrigin, setAnimationOrigin] = React.useState({ x: 0, y: 0 });
  const [nextTheme, setNextTheme] = React.useState<string>("");

  React.useEffect(() => {
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ origin?: { x: number; y: number }; theme?: string }>;
      if (customEvent.detail?.origin && customEvent.detail?.theme) {
        setAnimationOrigin(customEvent.detail.origin);
        setNextTheme(customEvent.detail.theme);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    };

    window.addEventListener("theme-change", handleThemeChange);
    return () =>
      window.removeEventListener("theme-change", handleThemeChange);
  }, []);

  const maxRadius = React.useMemo(() => {
    if (typeof window === "undefined") return 0;
    const maxX = Math.max(
      animationOrigin.x,
      window.innerWidth - animationOrigin.x,
    );
    const maxY = Math.max(
      animationOrigin.y,
      window.innerHeight - animationOrigin.y,
    );
    return Math.sqrt(maxX * maxX + maxY * maxY) * 1.5;
  }, [animationOrigin]);

  return (
    <NextThemesProvider {...props}>
      {children}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{
              clipPath: `circle(0px at ${animationOrigin.x}px ${animationOrigin.y}px)`,
            }}
            animate={{
              clipPath: `circle(${maxRadius}px at ${animationOrigin.x}px ${animationOrigin.y}px)`,
            }}
            exit={{
              clipPath: `circle(0px at ${animationOrigin.x}px ${animationOrigin.y}px)`,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={nextTheme === "dark" ? "dark" : ""}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: nextTheme === "dark" ? "#0D1117" : "#ffffff",
              pointerEvents: "none",
              zIndex: 9999,
            }}
          />
        )}
      </AnimatePresence>
    </NextThemesProvider>
  );
}
