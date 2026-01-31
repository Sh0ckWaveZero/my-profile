"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradient = ({
  className,
  containerClassName,
  animate = true,
}: {
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) return;
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let hue = 0;

    const updateGradient = () => {
      hue = (hue + 0.5) % 360;
      container.style.setProperty("--hue", `${hue}deg`);
      animationFrameId = requestAnimationFrame(updateGradient);
    };

    updateGradient();

    return () => cancelAnimationFrame(animationFrameId);
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full overflow-hidden bg-background",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-30 blur-[100px]",
          "bg-[radial-gradient(circle_at_50%_50%,hsl(var(--hue)_80%_60%),transparent_70%)]",
          "transition-all duration-1000 ease-in-out",
          className
        )}
        style={{ "--hue": "0deg" } as React.CSSProperties}
      />
      <div className="absolute inset-0 bg-background/90" />
    </div>
  );
};
