"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function ScrollHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    // Preserve standard browser back/forward history scroll restoration
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if the route actually changed
    const pathChanged = prevPathRef.current !== pathname;
    prevPathRef.current = pathname;

    if (!pathChanged) return;

    // Handle hash links if user navigated to a specific #element
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        const timer = setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 50);
        return () => clearTimeout(timer);
      }
    }

    // Otherwise, scroll instantly to top (0, 0)
    const win = window as Window & {
      __lenis?: {
        scrollTo: (
          target: number | HTMLElement | string,
          options?: { immediate?: boolean; force?: boolean }
        ) => void;
      };
    };

    if (win.__lenis && typeof win.__lenis.scrollTo === "function") {
      win.__lenis.scrollTo(0, { immediate: true, force: true });
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, [pathname, searchParams]);

  return null;
}

export default function ScrollManager() {
  return (
    <Suspense fallback={null}>
      <ScrollHandler />
    </Suspense>
  );
}
