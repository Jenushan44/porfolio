// Adapted from Magic UI - Orbiting Circles

import React from "react";
import { cn } from "@/lib/utils";

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
  pathSpeed?: number;
  pathColor?: string;
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  pathSpeed = 20,
  pathColor = "#1b88f2",
  ...props
}: OrbitingCirclesProps) {

  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <div
          className="pointer-events-none absolute rounded-full border-2 border-dashed"
          style={{
            width: radius * 2,
            height: radius * 2,
            borderColor: pathColor,
            opacity: 0.35,
            animationName: "spin",
            animationDuration: `${pathSpeed}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: reverse ? "reverse" : "normal",
          }}
        />
      )}
      {React.Children.map(children, (child, index) => {

        const angle =
          (360 / React.Children.count(children)) * index;

        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
                animationDirection: reverse ? "reverse" : "normal",
              } as React.CSSProperties
            }
            className={cn(
              "animate-orbit absolute flex size-(--icon-size) items-center justify-center",
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}