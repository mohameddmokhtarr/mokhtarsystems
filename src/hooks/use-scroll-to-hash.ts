import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.slice(1);
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return true;
      }
      return false;
    };

    if (scroll()) return;

    let attempts = 0;
    const timer = setInterval(() => {
      if (scroll() || ++attempts > 40) clearInterval(timer);
    }, 50);

    return () => clearInterval(timer);
  }, [hash, key]);
}
