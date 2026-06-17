"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function ShineLink({ href, children, className = "", ...props }) {
  const shineRef = useRef(null);
  const tl = useRef(null);

  function handleEnter() {
    if (tl.current) tl.current.kill();
    tl.current = gsap.fromTo(
      shineRef.current,
      { x: "-100%", opacity: 0.6 },
      { x: "200%", opacity: 0, duration: 0.55, ease: "power2.out" }
    );
  }

  return (
    <Link
      href={href}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleEnter}
      {...props}
    >
      {children}
      <span
        ref={shineRef}
        className="pointer-events-none absolute inset-0 -skew-x-12"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.45) 50%, transparent 60%)",
          transform: "translateX(-100%)",
        }}
      />
    </Link>
  );
}
