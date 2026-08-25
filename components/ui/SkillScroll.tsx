"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const skills = [
  "FastAPI",
  "Django",
  "PostgreSQL",
  "Redis",
  "Alembic",
  "Next.js",
  "Docker",
  "Python",
];

export default function SkillsScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 20%"],
  });

  return (
    <div
      ref={containerRef}
      className="
        relative
        w-full
        mt-3
      "
    >
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <SkillItem
            key={skill}
            skill={skill}
            index={index}
            total={skills.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}

function SkillItem({
  skill,
  index,
  total,
  progress,
}: {
  skill: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const peak = start + 0.1;
  const end = start + 0.25;

  const scale = useTransform(
    progress,
    [start, peak, end],
    [0.94, 1.06, 0.94]
  );

  const opacity = useTransform(
    progress,
    [start, peak, end],
    [0.6, 1, 0.6]
  );

  const color = useTransform(
    progress,
    [start, peak, end],
    [
      "rgba(255,255,255,0.75)",
      "#fde047",
      "rgba(255,255,255,0.75)",
    ]
  );

  const borderColor = useTransform(
    progress,
    [start, peak, end],
    [
      "rgba(253,224,71,0)",
      "rgba(253,224,71,0.8)",
      "rgba(253,224,71,0)",
    ]
  );

  const boxShadow = useTransform(
    progress,
    [start, peak, end],
    [
      "0 0 0px rgba(253,224,71,0)",
      "0 0 10px rgba(253,224,71,0.25)",
      "0 0 0px rgba(253,224,71,0)",
    ]
  );

  return (
    <motion.span
      style={{
        scale,
        opacity,
        color,
        borderColor,
        boxShadow,
      }}
      className="
        origin-center
        whitespace-nowrap
        rounded-md
        border
        bg-[#10132E]
        px-2
        py-1.5
        text-center
        text-[10px]
        sm:text-xs
        lg:px-2
        lg:py-2
      "
    >
      {skill}
    </motion.span>
  );
}