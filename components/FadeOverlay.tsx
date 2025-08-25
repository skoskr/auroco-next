"use client";
import { useEffect } from "react";

export default function FadeOverlay() {
  useEffect(() => {
    const fadeEl = document.getElementById("entry-black");
    if (!fadeEl) return;

    // AÇILIŞTA FADE-OUT (sayfa görünsün)
    const open = () =>
      requestAnimationFrame(() => fadeEl.classList.add("fade-out"));

    if (document.readyState === "complete" || document.readyState === "interactive") {
      setTimeout(open, 60);
    } else {
      document.addEventListener("DOMContentLoaded", () => setTimeout(open, 60), { once: true });
    }
    window.addEventListener("pageshow", open);

    // data-nav linklerinde FADE-IN + navigate
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest("a[data-nav]") as HTMLAnchorElement | null;
      if (!link) return;
      e.preventDefault();
      // görünmeden önce karart
      fadeEl.classList.remove("fade-out");
      // CSS transition süresi kadar bekle, sonra git
      setTimeout(() => { window.location.href = link.href; }, 300);
    };
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("pageshow", open);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return <div id="entry-black" aria-hidden="true" />;
}
