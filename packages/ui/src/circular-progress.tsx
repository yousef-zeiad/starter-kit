"use client";

import { cn } from "@trading-platform/ui";

interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  showValue?: boolean;
  className?: string;
  variant?: "dark" | "light";
}

function CircularProgress({
  value,
  max = 50,
  size = 32,
  strokeWidth = 3,
  showValue = true,
  className,
  variant = "light",
}: CircularProgressProps) {
  const remaining = Math.max(0, max - value);
  const percent = Math.max(0, (remaining / max) * 100);

  const colors = {
    dark: {
      track: "rgba(255,255,255,0.15)", // subtle white ring
      progress: "#fff", // white
      text: "#fff",
    },
    light: {
      track: "rgba(0,0,0,0.15)", // subtle gray ring
      progress: "#18181b", // black
      text: "#18181b",
    },
  };

  const current = colors[variant];

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={current.track}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={current.progress}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />
      </svg>

      {showValue && (
        <span
          className="absolute text-xs font-semibold"
          style={{ color: current.text }}
        >
          {remaining}
        </span>
      )}
    </div>
  );
}

export { CircularProgress, type CircularProgressProps };
