"use client";

import { useCallback, useRef, useState } from "react";

type Props = {
  text: string;
};

export const TextExtrudeEffect = ({ text }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const getDistance = useCallback((index: number) => {
    if (hoveredIndex === null) return null;
    const distance = Math.abs(index - hoveredIndex);
    return distance > 4 ? 4 : distance;
  }, [hoveredIndex]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#eff8e2]">
      <h2 aria-label={text} className="text-[112px] font-bold uppercase text-[#f6aca2]">
        <span className="text-wrapper">
          {text.split("").map((char, index) => (
            <span
              key={index}
              ref={el => letterRefs.current[index] = el}
              className="extrude-letter tracking-wider"
              data-distance={getDistance(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              aria-hidden
            >
              {char}
            </span>
          ))}
        </span>
      </h2>
    </div>
  );
};

