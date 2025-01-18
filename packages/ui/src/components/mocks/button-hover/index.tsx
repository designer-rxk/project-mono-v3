"use client";

import { type MouseEvent, useState } from "react";

export const ButtonHover = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isHovered) {
      return;
    }

    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();

    const offsetX = ((clientX - rect.left) / rect.width - 0.5) * 15;
    const offsetY = ((clientY - rect.top) / rect.height - 0.5) * 12;

    setOffset({ x: offsetX + 15, y: offsetY - 15 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setOffset({ x: 10, y: -8 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <button
      className="border-2 border-[#36454F] relative w-full h-[75px] group bg-[#36454F] mt-4"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 p-3 flex items-center justify-center bg-white transition-transform transform 0.5s ease-out"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        This is a temporary hardcoded text for the button
      </div>
    </button>
  );
};
