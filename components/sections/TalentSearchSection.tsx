"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";

const sectionTag = "WHY HIRENINJAS";
const sectionDescription =
  "HireNinjas combines top hiring infrastructure with performance marketing expertise for an effective approach to expansion.";

const reasons = [
  { number: "01", title: "Top 1% global professionals, pre-vetted.",  label: "QUALITY" },
  { number: "02", title: "Hire across 150+ countries with one partner.", label: "REACH" },
  { number: "03", title: "Curated shortlists delivered within days.",    label: "SPEED" },
  { number: "04", title: "Strategies designed for measurable ROI.",      label: "MARKETING" },
  { number: "05", title: "Pay only when you successfully hire talent.",  label: "PRICING" },
];

// Card height ~80px on mobile, ~99px on desktop; offset between stacked tops
const CARD_H_MOBILE = 80;
const CARD_H_DESKTOP = 99;
const OFFSET_MOBILE = 58;
const OFFSET_DESKTOP = 72;

export const TalentSearchSection = () => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const list = listRef.current;
    if (!list) return;

    const isMobile = window.innerWidth < 640;
    const offset = isMobile ? OFFSET_MOBILE : OFFSET_DESKTOP;
    const cardH = isMobile ? CARD_H_MOBILE : CARD_H_DESKTOP;

    const rows = gsap.utils.toArray<HTMLElement>(list.querySelectorAll("[data-row]"));

    gsap.set(rows, {
      y: (i) => i * offset + cardH * 2,
      opacity: 0,
      zIndex: (i) => i + 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: list,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    rows.forEach((row, i) => {
      tl.to(
        row,
        { y: i * offset, opacity: 1, duration: 0.9, ease: "power3.out" },
        i === 0 ? 0 : "+=0.6"
      );
      if (i > 0) {
        tl.to(rows.slice(0, i), { opacity: 0.4, duration: 0.5, ease: "power2.out" }, "<");
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="w-full bg-[#f9f9f9]">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col px-4 py-12 sm:px-6 sm:py-16 lg:py-[70px]">
        <header className="flex flex-col items-start">
          <Badge
            variant="outline"
            className="rounded-[999px] border border-solid border-[#14101f14] bg-[#ffffff66] px-3.5 py-[7px] [font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-[#6a6478] hover:bg-[#ffffff66]"
          >
            {sectionTag}
          </Badge>
          <h2 className="mt-6 max-w-[809px] [font-family:'Satoshi-Bold',Helvetica] text-[28px] font-black leading-[1.1] tracking-[-0.5px] text-[#14101f] sm:mt-[37px] sm:text-4xl sm:leading-[48px] sm:tracking-[-1px] xl:text-5xl">
            Why Companies across Dubai &amp; Abu Dhabi{" "}
            <span className="text-[#3a0d8c]">turn to HireNinjas</span>
          </h2>
          <p className="mt-6 max-w-[573px] [font-family:'Inter',Helvetica] text-sm font-normal leading-6 text-[#3a3445] sm:mt-[44px] sm:text-base lg:text-lg lg:leading-[27.9px]">
            {sectionDescription}
          </p>
        </header>

        {/* mobile: static list; sm+: animated stacked cards */}
        <div className="mt-8 flex flex-col gap-3 sm:hidden">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="grid grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-[#14101f0d] bg-white px-4 py-5 shadow-[0_4px_16px_-8px_#14101f1a]"
            >
              <div className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-[#6a6478]">
                {reason.number}
              </div>
              <div className="[font-family:'Inter',Helvetica] text-sm font-normal leading-snug tracking-[-0.1px] text-[#14101f]">
                {reason.title}
              </div>
              <Badge className="rounded-[999px] bg-[#3a0d8c14] px-2.5 py-1 [font-family:'Inter',Helvetica] text-[10px] font-normal tracking-[1px] text-[#3a0d8c] hover:bg-[#3a0d8c14]">
                {reason.label}
              </Badge>
            </div>
          ))}
        </div>

        <div
          ref={listRef}
          className="relative mt-[74px] hidden h-[470px] sm:block"
        >
          {reasons.map((reason) => (
            <div
              key={reason.number}
              data-row
              className="absolute inset-x-0 top-0 grid min-h-[99px] grid-cols-[56px_minmax(0,1fr)_auto] items-center gap-[22px] rounded-[12px] border border-[#14101f0d] bg-white px-5 py-7 shadow-[0_8px_24px_-12px_#14101f1a] will-change-transform"
            >
              <div className="[font-family:'Inter',Helvetica] text-sm font-normal leading-[15.4px] tracking-[1.68px] text-[#6a6478]">
                {reason.number}
              </div>
              <div className="[font-family:'Inter',Helvetica] text-xl font-normal leading-tight tracking-[-0.19px] text-[#14101f] md:text-2xl md:leading-[41.8px]">
                {reason.title}
              </div>
              <Badge className="rounded-[999px] bg-[#3a0d8c14] px-3 py-[5.5px] [font-family:'Inter',Helvetica] text-xs font-normal leading-[13.2px] tracking-[1.20px] text-[#3a0d8c] hover:bg-[#3a0d8c14]">
                {reason.label}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
