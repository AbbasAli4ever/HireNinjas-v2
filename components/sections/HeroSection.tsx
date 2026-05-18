"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

// 7 cards per column
const leftColumnCards = [
  { title: "UI/UX Designer",       flag: "🇨🇴", image: "/figmaAssets/ui-ux-designer.png" },
  { title: "Accountant",           flag: "🇧🇷", image: "/figmaAssets/accountant-1.png" },
  { title: "Product Manager",      flag: "🇨🇱", image: "/figmaAssets/product-manager-1.png" },
  { title: "Data Analyst",         flag: "🇺🇾", image: "/figmaAssets/data-analyst-1.png" },
  { title: "Brand Strategist",     flag: "🇨🇷", image: "/figmaAssets/brand-strategist.png" },
  { title: "UI/UX Designer",       flag: "🇨🇴", image: "/figmaAssets/ui-ux-designer-1.png" },
  { title: "Accountant",           flag: "🇧🇷", image: "/figmaAssets/accountant.png" },
];

const rightColumnCards = [
  { title: "Full-Stack Developer", flag: "🇲🇽", image: "/figmaAssets/full-stack-developer.png" },
  { title: "Brand Strategist",     flag: "🇨🇷", image: "/figmaAssets/brand-strategist.png" },
  { title: "Data Analyst",         flag: "🇺🇾", image: "/figmaAssets/data-analyst-1.png" },
  { title: "Product Manager",      flag: "🇨🇱", image: "/figmaAssets/product-manager-1.png" },
  { title: "Customer Success",     flag: "🇵🇪", image: "/figmaAssets/customer-success.png" },
  { title: "Social Media Lead",    flag: "🇦🇷", image: "/figmaAssets/social-media-lead.png" },
  { title: "Accountant",           flag: "🇧🇷", image: "/figmaAssets/accountant-1.png" },
];

const stats = [
  { value: "200+", label: ["Brands Served", "worldwide"] },
  { value: "98%",  label: ["Client Retention Rate"] },
  { value: "9+",   label: ["Years Of Excellence"] },
  { value: "150+", label: ["Countries Covered"] },
];

type CardData = { title: string; flag: string; image: string };

const TalentCard = ({ title, flag, image }: CardData) => (
  <article className="relative w-full overflow-hidden rounded-[15px] flex-shrink-0 shadow-[0px_5px_22px_#0000002e]">
    <div
      className="h-[220px] w-full bg-cover bg-center bg-[linear-gradient(156deg,rgba(108,78,201,1)_0%,rgba(74,31,160,1)_55%,rgba(50,16,118,1)_100%)]"
      style={{ backgroundImage: `url(${image})` }}
      aria-hidden="true"
    />
    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-full bg-[#14101f8c] px-[9px] py-[6px] backdrop-blur-[3px]">
      <div className="flex items-center gap-[5px]">
        <span className="relative flex h-[8px] w-[8px]">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#6ce5b1] opacity-40 animate-ping" />
          <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[#6ce5b1]" />
        </span>
        <span className="text-[8.9px] font-normal leading-[13px] whitespace-nowrap text-[#f5efe6]">
          {title}
        </span>
      </div>
      <span className="text-[11px] leading-none whitespace-nowrap text-[#f5efe6] opacity-90">
        {flag}
      </span>
    </div>
  </article>
);

type MarqueeColumnProps = {
  cards: CardData[];
  direction: "down" | "up";
};

const MarqueeColumn = ({ cards, direction }: MarqueeColumnProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Each set of 7 cards; we've duplicated them in JSX for seamless loop
    const totalHeight = track.scrollHeight / 2;
    const duration = 22;

    const fromY = direction === "down" ? -totalHeight : 0;
    const toY   = direction === "down" ? 0             : -totalHeight;

    gsap.fromTo(
      track,
      { y: fromY },
      {
        y: toY,
        duration,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      gsap.killTweensOf(track);
    };
  }, [direction]);

  // Duplicate cards for seamless infinite loop
  const doubled = [...cards, ...cards];

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div ref={trackRef} className="flex flex-col gap-[10px] will-change-transform">
        {doubled.map((card, i) => (
          <TalentCard key={i} {...card} />
        ))}
      </div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative w-full pt-4 px-4">
      <div className="relative w-full overflow-hidden rounded-[16.67px] bg-[#14101f] py-10 sm:py-14 lg:py-[101px]">

      {/* Purple glow blob */}
      <div className="pointer-events-none absolute left-[-281px] top-1/2 h-[525px] w-[393px] -translate-y-[206px] rounded-[196.5px/262.5px] bg-[#7b15e9] opacity-10 blur-[117px]" />

      <div className="mx-auto w-full max-w-[1260px] px-5 sm:px-8">
        <div className="relative z-10 flex flex-col gap-10 lg:min-h-[727px] lg:flex-row lg:items-start lg:justify-between lg:gap-6">

          {/* ── Left: copy + stats ── */}
          <header className="flex w-full max-w-[722px] flex-col gap-8 lg:pt-[61px]">
            <div className="flex flex-col items-start gap-[21px]">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ffffff29] px-3 py-[7px] sm:gap-2.5 sm:px-3.5">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#6ce5b1] opacity-40 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#6ce5b1]" />
                </span>
                <p className="text-[9px] font-normal tracking-[1.2px] text-[#f5efe6] sm:text-xs sm:tracking-[1.68px]">
                  GLOBAL TALENT · PERFORMANCE MARKETING
                </p>
              </div>

              {/* Headline */}
              <h1
                className="max-w-[597px] font-black text-[38px] leading-[0.95] tracking-[-1.2px] text-white sm:text-[52px] sm:tracking-[-1.56px] lg:text-[76px]"
                style={{ fontFamily: '"Satoshi", Helvetica, sans-serif' }}
              >
                Grow Faster With Elite Talent &amp; Marketing
              </h1>

              {/* Body */}
              <p className="max-w-[620px] text-sm font-normal leading-[25.6px] text-[#ded7f3] sm:text-base">
                Winning digital marketing and staff augmentation services in Dubai and Abu Dhabi to assist ambitious companies scale faster through expert talent, performance marketing strategies and global hiring support all from one source.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Button className="w-full sm:w-auto h-auto rounded-full bg-white px-2 py-2 pl-[18px] pr-2 text-[#14101f] hover:bg-white/95 sm:pl-[22px]">
                  <span className="inline-flex items-center pl-3 text-[13.5px] font-medium leading-none sm:pl-3.5 sm:text-[14.5px]">
                    Our Services
                  </span>
                  <span className="ml-2.5 grid h-8 w-8 place-items-center rounded-[18px] bg-[#3a0d8c] sm:ml-3 sm:h-9 sm:w-9">
                    <Image width={16} height={16} alt="Arrow" src="/figmaAssets/arrow-white.svg" className="h-4 w-4" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-auto rounded-full border-[#f5efe629] bg-transparent px-5 py-3 text-[13.5px] font-medium text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6] sm:px-[22px] sm:py-3.5 sm:text-[14.5px]"
                >
                  Free Consultation
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0">
              {stats.map((stat) => (
                <article key={stat.value} className="flex flex-col items-start">
                  <div
                    className="text-[36px] font-black leading-[1.2] tracking-[-0.72px] text-[#f5efe6] sm:text-[44px] lg:text-[38px] xl:text-[56px] lg:leading-[72px]"
                    style={{ fontFamily: '"Satoshi", Helvetica, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[12px] font-normal leading-[18px] text-[#ffffffb2] sm:text-[13px] sm:leading-[19.5px]">
                    {stat.label.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </header>

          {/* ── Right: marquee columns — desktop only, unchanged ── */}
          <div className="relative hidden h-[700px] w-full max-w-[416px] overflow-hidden lg:flex lg:gap-[12px]">

            {/* Top shadow */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-[140px] bg-gradient-to-b from-[#14101f] to-transparent" />
            {/* Bottom shadow */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[140px] bg-gradient-to-t from-[#14101f] to-transparent" />

            {/* Left column — scrolls top → bottom */}
            <div className="flex-1 overflow-hidden">
              <MarqueeColumn cards={leftColumnCards} direction="down" />
            </div>

            {/* Right column — scrolls bottom → top */}
            <div className="flex-1 overflow-hidden">
              <MarqueeColumn cards={rightColumnCards} direction="up" />
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
};
