// Adapted from React Bits - Scroll Reveal

"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
};

function ScrollReveal({ children }: ScrollRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${visible
        ? "translate-y-0 opacity-100"
        : "translate-y-12 opacity-0"
        }`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;