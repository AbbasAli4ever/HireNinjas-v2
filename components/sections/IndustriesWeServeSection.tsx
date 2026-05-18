"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

const industryCards = [
  {
    title: "SaaS/Tech Startups",
    image: "/figmaAssets/frame-2147224383.png",
  },
  {
    title: "Ecommerce Brands",
    image: "/figmaAssets/frame-2147224387.png",
  },
  {
    title: "HealthTech Companies",
    image: "/figmaAssets/frame-2147224389.png",
  },
  {
    title: "Fintech Platforms",
    image: "/figmaAssets/frame-2147224386.png",
  },
  {
    title: "Enterprise Organizations",
    image: "/figmaAssets/frame-2147224385.png",
  },
  {
    title: "AI/Web3 Teams",
    image: "/figmaAssets/frame-2147224388.png",
  },
];

export const IndustriesWeServeSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable, InertiaPlugin);

    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    const updateBounds = () => {
      const maxX = 0;
      const minX = -(track.scrollWidth - wrapper.offsetWidth);

      Draggable.create(track, {
        type: "x",
        bounds: { minX, maxX },
        inertia: true,
        cursor: "grab",
        activeCursor: "grabbing",
        edgeResistance: 0.85,
      });
    };

    updateBounds();

    return () => {
      Draggable.get(track)?.kill();
    };
  }, []);

  return (
    <section className="w-full bg-[#4a0d8c] py-12 sm:py-16 lg:py-[70px] [overflow-x:clip]">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:gap-[50px]">

        {/* Header */}
        <header className="flex w-full max-w-[914px] flex-col items-center gap-4 sm:gap-6">
          <h2 className="self-stretch text-center [font-family:'Satoshi-Black',Helvetica] text-[26px] font-black leading-[1.15] tracking-[-0.5px] text-white sm:text-[36px] md:text-[44px] lg:text-[52px]">
            Built for Ambitious Growth-Focused Companies, supports companies across
          </h2>
          <p className="self-stretch text-center [font-family:'Inter',Helvetica] text-sm font-normal leading-6 tracking-[0] text-white sm:text-base sm:leading-[27.9px] lg:text-lg">
            HireNinjas understands the challenges associated with scaling rapidly digital businesses, such as hiring and marketing staff.
          </p>
        </header>

        {/* Draggable slider */}
        <div
          ref={wrapperRef}
          className="w-full select-none"
        >
          <div
            ref={trackRef}
            className="flex w-max items-start gap-3 sm:gap-5 will-change-transform"
            style={{ cursor: "grab" }}
          >
            {industryCards.map((card) => (
              <article
                key={card.title}
                className="relative h-[260px] w-[280px] shrink-0 overflow-hidden rounded-[22px] border-2 border-[#9644ed] sm:h-[315px] sm:w-[340px] sm:rounded-[30px]"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${card.image})` }}
                  aria-hidden="true"
                />
                {/* Top gradient */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0)_40%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.80)_100%)]" />
                {/* Title */}
                <h3 className="absolute left-4 top-4 z-10 text-[18px] font-semibold leading-[1.3] tracking-[0] text-white [font-family:'Inter',Helvetica] sm:left-5 sm:top-5 sm:text-[22px]">
                  {card.title}
                </h3>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
