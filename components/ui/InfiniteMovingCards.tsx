"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface Learning {
  category: string;
  title: string;
  lesson: string;
}

interface InfiniteMovingCardsProps {
  items: Learning[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  pauseOnPress?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  pauseOnPress = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scroller = scrollerRef.current;

    // Prevent duplicating items multiple times
    if (scroller.dataset.cloned === "true") {
      setStart(true);
      return;
    }

    const originalItems = Array.from(scroller.children);

    originalItems.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      scroller.appendChild(clone);
    });

    scroller.dataset.cloned = "true";

    // Animation direction
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "right" ? "forwards" : "reverse"
    );

    // Animation speed
    const duration =
      speed === "slow"
        ? "25s"
        : speed === "normal"
          ? "45s"
          : "80s";

    containerRef.current.style.setProperty(
      "--animation-duration",
      duration
    );

    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-5 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
          pauseOnPress && "active:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={`${item.category}-${item.title}`}
            className="
              group relative
              w-[420px] max-w-full shrink-0
              overflow-hidden
              rounded-2xl
              border border-border
              bg-[#0f1724]
              p-6
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-xl
              md:w-[450px]
              dark:border-border
              dark:bg-[#0b1220]
              h-[240px]
            "
          >
            <div className="relative z-10 mb-3 inline-block">
              <span
                className="
                  text-sm
                  font-medium
                  text-yellow-300/80
                  pb-1
                "
              >
                {item.category}
              </span>
            </div>

            {/* Title */}
            <h3
              className="
                relative z-10
                mb-3
                text-xl font-semibold
                tracking-tight
                text-foreground
                dark:text-foreground
              "
            >
              {item.title}
            </h3>

            {/* Lesson */}
            <p
              className="
                font-sans font-extralight text-sm md:text-xs lg:text-base  dark:text-neutral-300 z-10
              "
            >
              {item.lesson}
            </p>

          </li>
        ))}
      </ul>
    </div>
  );
};