"use client";

import Link from "next/link";
import { useEffect, useRef, useState, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AnimatedButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  variant?: "magnetic" | "shine" | "standard";
  speed?: number;
  children: React.ReactNode;
  href?: string;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = "standard", speed = 0.2, children, href, ...props }, ref) => {
    const buttonRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
      if (!buttonRef.current || variant !== "magnetic") return;

      const handleMouseMove = (e: MouseEvent) => {
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Limit the movement strength
        const strength = 10;
        const limitedX = x * speed > strength
          ? strength
          : x * speed < -strength
            ? -strength
            : x * speed;

        const limitedY = y * speed > strength
          ? strength
          : y * speed < -strength
            ? -strength
            : y * speed;

        setPosition({ x: limitedX, y: limitedY });
      };

      const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
        setIsHovering(false);
      };

      const handleMouseEnter = () => {
        setIsHovering(true);
      };

      const element = buttonRef.current;
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
      element.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        if (element) {
          element.removeEventListener("mousemove", handleMouseMove);
          element.removeEventListener("mouseleave", handleMouseLeave);
          element.removeEventListener("mouseenter", handleMouseEnter);
        }
      };
    }, [speed, variant]);

    const buttonStyle = variant === "magnetic"
      ? { transform: `translate(${position.x}px, ${position.y}px)` }
      : {};

    const Content = () => (
      <div
        ref={buttonRef}
        className={cn(
          "relative overflow-hidden group",
          variant === "shine" && "group",
          className
        )}
      >
        <Button
          style={buttonStyle}
          className="transition-transform duration-150 w-full"
          ref={ref}
          {...props}
        >
          {children}
        </Button>

        {/* Shine effect overlay */}
        {variant === "shine" && (
          <div className="absolute top-0 -left-[100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
        )}
      </div>
    );

    if (href) {
      return (
        <Link href={href}>
          <Content />
        </Link>
      );
    }

    return <Content />;
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
