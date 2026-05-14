"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const servicesData = [
  {
    title: "GROWTH",
    items: [
      { title: "Digital Strategy", description: "Roadmaps for predictable growth", href: "/services/digital-marketing-strategy" },
      { title: "Lead Generation", description: "Funnels that fill the pipeline", href: "#" },
      { title: "SEO & PPC", description: "Top-of-search visibility", href: "#" },
      { title: "Marketing Consultations", description: "Senior strategy on demand", href: "#" },
      { title: "AI-Powered Marketing", description: "Automation + predictive growth", href: "#" },
    ],
  },
  {
    title: "BUILD & BRAND",
    items: [
      { title: "Web & App Development", description: "High-performance digital products", href: "/services/web-app-development" },
      { title: "Social Media", description: "Content + community + paid", href: "#" },
      { title: "Video Production", description: "Cinematic brand storytelling", href: "#" },
      { title: "Branding & Identity", description: "Logos, systems, brand voice", href: "#" },
      { title: "Staff Augmentation", description: "Build teams in days, not months", href: "#" },
    ],
  },
];

const industriesData = {
  sectors: [
    { title: "B2B & Enterprise", description: "ABM + complex sales cycles" },
    { title: "Real Estate", description: "Off-plan, HNWI, investor leads" },
  ],
  comingSoon: [
    { title: "SaaS & Tech", description: "In development" },
    { title: "Healthcare", description: "In development" },
  ],
};

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ece8f3] bg-[#fffefed1] backdrop-blur-[7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7px)_brightness(100%)]">
      <div className="mx-auto flex h-[72px] w-full max-w-[1160px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <span className="relative flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,rgba(139,58,229,1)_0%,rgba(89,31,151,1)_100%)] shadow-[0px_6px_18px_-8px_#8a39e4b2]">
            <span className="relative flex items-center justify-center [font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[22.4px] tracking-[-0.40px] text-white">
              H
            </span>
          </span>
          <span className="[font-family:'Satoshi-Bold',Helvetica] text-xl font-bold leading-8 tracking-[-0.40px] text-[#0f0a1f]">
            HireNinjas
          </span>
        </Link>

        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-6 list-none">
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-auto gap-1.5 px-0 py-1.5 hover:bg-transparent">
                    <span className="[font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447]">Services</span>
                    <ChevronDownIcon className="h-3 w-3 text-[#3a3447]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-[900px] rounded-[18px] border border-[#ece8f3] bg-white p-6 shadow-[0px_30px_70px_-30px_#140a2840]">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                    {servicesData.map((group) => (
                      <section key={group.title} className="flex flex-col pt-1">
                        <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[1.54px] text-[#6b6478]">
                          {group.title}
                        </h2>
                        <div className="mt-[14px] space-y-0.5">
                          {group.items.map((item) => (
                            <Link key={item.title} href={item.href}>
                              <span className="flex w-full items-start gap-3 rounded-[10px] px-0 py-1.5 text-left transition-colors hover:bg-[#faf7ff] cursor-pointer">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f7f1ff]" />
                                <span className="inline-flex flex-col items-start pt-[3px]">
                                  <span className="[font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[16.8px] text-[#0f0a1f]">
                                    {item.title}
                                  </span>
                                  <span className="[font-family:'Montserrat',Helvetica] text-xs font-medium leading-[16.8px] text-[#6b6478]">
                                    {item.description}
                                  </span>
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-auto gap-1.5 px-0 py-1.5 hover:bg-transparent">
                    <span className="[font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447]">Industries</span>
                    <ChevronDownIcon className="h-3 w-3 text-[#3a3447]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-[560px] rounded-[18px] border border-[#ece8f3] bg-white p-6 shadow-[0px_30px_70px_-30px_#140a2840]">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                    <section className="flex flex-col pt-1">
                      <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[1.54px] text-[#6b6478]">SECTORS</h2>
                      <div className="mt-[14px] space-y-0.5">
                        {industriesData.sectors.map((item) => (
                          <button key={item.title} type="button" className="flex w-full items-start gap-3 rounded-[10px] px-0 py-1.5 text-left transition-colors hover:bg-[#faf7ff]">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f7f1ff]" />
                            <span className="inline-flex flex-col items-start pt-[3px]">
                              <span className="[font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[16.8px] text-[#0f0a1f]">{item.title}</span>
                              <span className="[font-family:'Montserrat',Helvetica] text-xs font-medium leading-[16.8px] text-[#6b6478]">{item.description}</span>
                            </span>
                          </button>
                        ))}
                      </div>
                    </section>
                    <section className="flex flex-col pt-1">
                      <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[1.54px] text-[#6b6478]">COMING SOON</h2>
                      <div className="mt-[14px] space-y-0.5">
                        {industriesData.comingSoon.map((item) => (
                          <button key={item.title} type="button" className="flex w-full items-start gap-3 rounded-[10px] px-3 py-2.5 text-left opacity-55 transition-colors hover:bg-[#faf7ff]">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f7f1ff]" />
                            <span className="inline-flex flex-col items-start pt-[3px]">
                              <span className="[font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[16.8px] text-[#0f0a1f]">{item.title}</span>
                              <span className="[font-family:'Montserrat',Helvetica] text-xs font-normal leading-[16.8px] text-[#6b6478]">{item.description}</span>
                            </span>
                          </button>
                        ))}
                      </div>
                    </section>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Button asChild variant="ghost" className="h-auto px-0 py-[5.5px] hover:bg-transparent">
                <Link href="/contact" className="[font-family:'Montserrat',Helvetica] text-sm font-medium leading-[22.4px] text-[#3a3447]">Consult</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="ghost" className="h-auto px-0 py-[5.5px] hover:bg-transparent">
                <Link href="/contact" className="[font-family:'Montserrat',Helvetica] text-sm font-medium leading-[22.4px] text-[#3a3447]">Contact</Link>
              </Button>
            </li>
          </ul>
        </nav>

        <Button asChild className="hidden h-auto rounded-[999px] bg-[#8b39e5] px-2 py-2 pl-[22px] pr-2 hover:bg-[#7f32d5] lg:inline-flex">
          <Link href="/contact">
            <span className="inline-flex items-center pl-3.5">
              <span className="[font-family:'Inter',Helvetica] text-[14.5px] font-medium text-white">Book a Free Consultation</span>
            </span>
            <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-white">
              <Image width={16} height={16} alt="Arrow" src="/figmaAssets/component-2.svg" className="h-4 w-4" />
            </span>
          </Link>
        </Button>
      </div>
    </header>
  );
};
