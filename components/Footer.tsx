"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "@/components/ui/MagicButton";

const Footer = () => {
  return (
    <footer
      className="relative w-full overflow-hidden pt-24 pb-12 flex flex-col justify-center"
      id="contact"
    >
      {/* background grid */}
      <div className="pointer-events-none absolute left-0 -bottom-72 z-0 w-full min-h-96">
        <img
          src="/footer-grid.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6">
        {/* H1 - largest, boldest, tightest line-height */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center lg:max-w-[45vw] md:max-w-[60vw] max-w-[80vw]">
          Ready to take <span className="text-yellow-300">your</span> digital
          presence to the next level?
        </h1>

        {/* Body copy - clearly smaller than H1, muted color, generous top gap */}
        <p className="mt-6 text-sm sm:text-base text-white/60 text-center max-w-[32rem] leading-relaxed">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        {/* CTA - separated from body copy by a clear gap */}
        <a href="mailto:shrestha.bisaka19@gmail.com" className="mt-8">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Bottom row - visually separated from hero block above, smallest text on page */}
      <div className="relative z-10 flex md:flex-row flex-col justify-center items-center mt-24 pt-8 gap-4 md:gap-3 px-6">
        <p className="text-xs sm:text-sm text-white/50 font-light">
          Copyright © 2026 Bisaka Shrestha
        </p>

        <div className="flex items-center gap-4 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-black-200/75 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="" width={20} height={20} onClick={() => window.open(info.link, "_blank")} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;