import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { HiArrowCircleRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Spotlights */}
      <Spotlight
        className="-top-40 -left-10 h-screen md:-left-32 md:-top-20"
        fill="white"
      />

      <Spotlight
        className="left-full top-10 h-[80vh] w-[50vw]"
        fill="purple"
      />

      <Spotlight
        className="left-80 top-28 h-[80vh] w-[50vw]"
        fill="blue"
      />

      {/* Grid background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-[length:40px_40px]",
          "bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          "opacity-20"
        )}
      />

      {/* Radial gradient mask */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]
        "
      />

      {/* Main content */}
      <div className="relative z-10 flex w-full items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center px-6 text-white sm:px-8 md:px-12 lg:px-16">
          
          {/* Small heading */}
          <h2 className="mb-6 max-w-80 text-center text-sm uppercase tracking-widest text-blue-200 sm:text-base">
            CURIOUS BY DEFAULT
          </h2>

          {/* Main SEO heading */}
          <h1 className="sr-only">
            Bisaka Shrestha — Web Developer
          </h1>

          {/* Visual tagline */}
          <TextGenerateEffect
            className="w-full text-center text-[40px] leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            words="I build what I want to understand."
          />

          {/* Description */}
          <p className="mt-6 w-full max-w-3xl text-center text-sm leading-relaxed text-neutral-300 md:text-lg md:tracking-wider lg:text-2xl">
            I'm Bisaka, a web developer exploring the space between an idea
            and the system that makes it work.
          </p>

          {/* Button */}
          <a href="#projects" className="mt-8">
            <MagicButton
              title="Show my work"
              icon={
                <div className="flex items-center justify-center rounded-full bg-yellow-400 p-0.5 text-neutral-900">
                  <HiArrowCircleRight className="h-5 w-5" />
                </div>
              }
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

