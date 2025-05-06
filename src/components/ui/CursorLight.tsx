"use client";

import { useEffect } from "react";

export default function CursorLight() {
  useEffect(() => {
    const light = document.getElementById("cursor-light");
    if (!light) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX;
      const y = e.pageY;
      light.style.background = `radial-gradient(
        600px circle at ${x}px ${y}px,
        rgba(94, 234, 212, 0.15),
        transparent 80%
      )`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="cursor-light"
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
    ></div>
  );
}
