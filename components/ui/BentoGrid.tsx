"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./Gradiebtbg";
import { useState } from "react";
import {GlobeDemo} from "@/components/ui/GridGlobe";
import Lottie from "react-lottie";
import { IoCopyOutline } from 'react-icons/io5';
import MagicButton from "@/components/ui/MagicButton";
import animationData from "@/data/confetti.json";
import SkillsScroll from "@/components/ui/SkillScroll";import { div } from "three/src/nodes/math/OperatorNode.js";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto my-10",
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  id,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id?: string | number;
}) => {
  const [copied, setCopied] = useState(false);
  return (
    <div
      className={cn(
        "group/bento relative overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl transition duration-200 hover:shadow-xl border border-white/[0.1]",
        className,
      )}
      style = {{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id===6 &&(
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn( 
            titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')} 
        >
          <div className="font-sans  font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base  dark:text-neutral-300 z-10">
          {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
          </div>
          {id===2 && <GlobeDemo></GlobeDemo>}
          {id === 3 && <SkillsScroll />}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -buttom-5 right-0`}>
                  <Lottie options={{
                    loop: false,
                    autoplay: false,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                  }}
                  isStopped={!copied} />
              </div>
              <MagicButton 
              title={copied? 'Email copied' : 'Copy my email'}
              icon = {<IoCopyOutline/>}
              position = "left"
              handleClick={() => {
                const emailToCopy = process.env.NEXT_PUBLIC_USER_EMAIL || "shrestha.bisaka18@gmail.com";
                navigator.clipboard.writeText(emailToCopy);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 3000);
              }}
              />
            </div>
          )} 
        </div>
    </div>
    </div>
  );
};