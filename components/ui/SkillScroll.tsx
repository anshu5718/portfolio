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
    offset: ["start 100%", "end 0%"],
  });

  return (
    <div
      ref={containerRef}
      className="
        relative
        mt-6
        w-full
        lg:absolute
        lg:right-4
        lg:top-1/2
        lg:mt-0
        lg:w-[52%]
        lg:-translate-y-1/2
      "
    >
      <div className="grid grid-cols-2 gap-2 lg:gap-1">
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
  const peak = start + 0.12;
  const end = start + 0.28;

  const scale = useTransform(
    progress,
    [start, peak, end],
    [0.9, 1.12, 0.9]
  );

  const opacity = useTransform(
    progress,
    [start, peak, end],
    [0.55, 1, 0.55]
  );

  const color = useTransform(
    progress,
    [start, peak, end],
    ["#ffffffcc", "#fde047", "#ffffffcc"]
  );

  const boxShadow = useTransform(
    progress,
    [start, peak, end],
    [
      "0 0 0px rgba(250,204,21,0)",
      "0 0 14px rgba(250,204,21,0.3)",
      "0 0 0px rgba(250,204,21,0)",
    ]
  );

  return (
    <motion.span
      style={{
        scale,
        opacity,
        color,
        boxShadow,
      }}
      className="
        origin-center
        whitespace-nowrap
        rounded-lg
        bg-[#10132E]
        px-3
        py-2
        text-center
        text-xs
        sm:text-sm
        lg:px-4
        lg:py-3
      "
    >
      {skill}
    </motion.span>
  );
}