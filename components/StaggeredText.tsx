"use client"
import { useEffect, useRef, useState } from 'react';

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const StaggeredText = ({ text, className = '', delay = 0 }: StaggeredTextProps) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStartAnimation(true);
          }, delay);
        }
      },
      {
        threshold: 0.5
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  useEffect(() => {
    if (startAnimation) {
      const interval = setInterval(() => {
        setVisibleChars((prev) => {
          if (prev < text.length) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [startAnimation, text.length]);

  return (
    <div ref={ref} className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-300 ${
            index < visibleChars
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-4'
          }`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default StaggeredText;
