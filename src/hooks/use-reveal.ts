import { useEffect } from "react";

/** Elements that animate in once when scrolled into view. */
const SELECTOR = ".reveal, .reveal-mask, .line-reveal";

/**
 * How long the per-frame safety net runs after mount. IntersectionObserver
 * only samples at checkpoints, so a fast flick or an instant scroll jump
 * (anchor link, restored scroll position, or a scroll spanning more than
 * a viewport in one step) can carry an element across the whole viewport
 * between two checks and it never registers as having intersected. Polling
 * every frame for a bounded window is what actually closes that gap —
 * scroll/resize listeners alone still miss jumps within a single event.
 * It self-terminates the moment nothing is left pending, so in practice
 * this only runs for the first second or two of a visit.
 */
const SAFETY_NET_MS = 4000;

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    if (els.length === 0) return;

    const pending = new Set(els);
    const reveal = (el: HTMLElement) => {
      el.classList.add("is-visible");
      pending.delete(el);
    };

    // These elements start at opacity 0, so anything that stops us from
    // adding the class leaves content permanently invisible. Bail open.
    if (typeof IntersectionObserver === "undefined") {
      els.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );

    els.forEach((el) => io.observe(el));

    const sweepOnce = () => {
      for (const el of pending) {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          reveal(el);
          io.unobserve(el);
        }
      }
    };

    const start = performance.now();
    let frame = requestAnimationFrame(function tick() {
      sweepOnce();
      if (pending.size > 0 && performance.now() - start < SAFETY_NET_MS) {
        frame = requestAnimationFrame(tick);
      }
    });

    // Scroll can arrive again well after the initial window (a visitor who
    // pauses, reads, then flicks fast later) — re-arm a short burst instead
    // of polling forever.
    let ticking = false;
    let rearmUntil = 0;
    const onScroll = () => {
      if (pending.size === 0) return;
      rearmUntil = performance.now() + 500;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function reArmTick() {
        sweepOnce();
        ticking = false;
        if (pending.size > 0 && performance.now() < rearmUntil) {
          ticking = true;
          requestAnimationFrame(reArmTick);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.fonts?.ready.then(sweepOnce).catch(() => {});

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
    };
  }, []);
}
