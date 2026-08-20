"use client";
import { useEffect, useState } from "react";
import { useMotionValue, useReducedMotion, useSpring } from "framer-motion";

// Overdamped on purpose: a long, monotonic glide with no bounce at the end.
// Lower stiffness = longer trail, higher damping = less bounce.
const DEFAULT_SPRING = {
  stiffness: 40,
  damping: 15,
  mass: 0.35,
  restDelta: 0.05,
};

// Firefox reports wheel deltas in lines, and page-scroll devices in pages.
const LINE_HEIGHT = 16;

const deltaInPixels = (event) => {
  if (event.deltaMode === 1) return event.deltaY * LINE_HEIGHT;
  if (event.deltaMode === 2) return event.deltaY * window.innerHeight;
  return event.deltaY;
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const SmoothScroll = ({ spring = DEFAULT_SPRING, multiplier = 1 }) => {
  const target = useMotionValue(0);
  const smoothed = useSpring(target, spring);
  const [enabled, setEnabled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Native scroll stays untouched for reduced-motion users and coarse pointers,
  // where hijacking the wheel would fight real momentum scrolling.
  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const sync = () => setEnabled(!prefersReducedMotion && !coarsePointer.matches);

    sync();
    coarsePointer.addEventListener("change", sync);

    return () => coarsePointer.removeEventListener("change", sync);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;

    // CSS smooth scrolling would ease our eased value all over again, which
    // reads as lag rather than smoothness.
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    // Anything we didn't drive ourselves — scrollbar drag, keyboard, anchor
    // jump — has to be adopted rather than fought.
    let driven = window.scrollY;

    target.jump(window.scrollY);
    smoothed.jump(window.scrollY);

    const maxScroll = () => root.scrollHeight - window.innerHeight;

    const unsubscribe = smoothed.on("change", (value) => {
      driven = value;
      window.scrollTo(0, value);
    });

    const handleWheel = (event) => {
      if (event.ctrlKey) return; // pinch zoom
      if (event.target.closest?.("[data-scroll-ignore]")) return;

      event.preventDefault();
      target.set(
        clamp(target.get() + deltaInPixels(event) * multiplier, 0, maxScroll())
      );
    };

    const handleScroll = () => {
      if (Math.abs(window.scrollY - driven) < 2) return;
      target.jump(window.scrollY);
      smoothed.jump(window.scrollY);
      driven = window.scrollY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      unsubscribe();
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      root.style.scrollBehavior = previousBehavior;
    };
  }, [enabled, multiplier, smoothed, target]);

  return null;
};

export default SmoothScroll;
