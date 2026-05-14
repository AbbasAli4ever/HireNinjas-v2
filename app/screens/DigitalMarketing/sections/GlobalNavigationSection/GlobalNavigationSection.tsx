"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const servicesColumns = [
  {
    heading: "GROWTH",
    items: [
      {
        title: "Digital Strategy",
        description: "Roadmaps for predictable growth",
        disabled: false,
      },
      {
        title: "Lead Generation",
        description: "Funnels that fill the pipeline",
        disabled: false,
      },
      {
        title: "SEO & PPC",
        description: "Top-of-search visibility",
        disabled: false,
      },
      {
        title: "Marketing Consultations",
        description: "Senior strategy on demand",
        disabled: false,
      },
      {
        title: "AI-Powered Marketing",
        description: "Automation + predictive growth",
        disabled: false,
      },
    ],
  },
  {
    heading: "BUILD & BRAND",
    items: [
      {
        title: "Web & App Development",
        description: "High-performance digital products",
        disabled: false,
      },
      {
        title: "Social Media",
        description: "Content + community + paid",
        disabled: false,
      },
      {
        title: "Video Production",
        description: "Cinematic brand storytelling",
        disabled: false,
      },
      {
        title: "Branding & Identity",
        description: "Logos, systems, brand voice",
        disabled: false,
      },
      {
        title: "Staff Augmentation",
        description: "Build teams in days, not months",
        disabled: false,
      },
    ],
  },
];

const industriesColumns = [
  {
    heading: "SECTORS",
    items: [
      {
        title: "B2B & Enterprise",
        description: "ABM + complex sales cycles",
        disabled: false,
      },
      {
        title: "Real Estate",
        description: "Off-plan, HNWI, investor leads",
        disabled: false,
      },
    ],
  },
  {
    heading: "COMING SOON",
    items: [
      {
        title: "SaaS & Tech",
        description: "In development",
        disabled: true,
      },
      {
        title: "Healthcare",
        description: "In development",
        disabled: true,
      },
    ],
  },
];

const SimpleMenuItem = ({
  title,
  description,
  disabled = false,
}: {
  title: string;
  description: string;
  disabled?: boolean;
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`flex w-full items-start gap-3 rounded-[10px] px-0 py-1.5 text-left transition-colors ${
        disabled ? "opacity-55" : "hover:bg-[#faf7ff]"
      }`}
    >
      <span className="flex h-[35px] w-8 flex-col items-start pt-[3px]">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f7f1ff]" />
      </span>
      <span className="inline-flex flex-col items-start pt-[3px]">
        <span className="inline-flex flex-col items-start gap-0.5">
          <span className="[font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[16.8px] text-[#0f0a1f]">
            {title}
          </span>
          <span
            className={`[font-family:'Montserrat',Helvetica] text-xs leading-[16.8px] ${
              disabled
                ? "font-normal text-[#6b6478]"
                : "font-medium text-[#6b6478]"
            }`}
          >
            {description}
          </span>
        </span>
      </span>
    </button>
  );
};

export const GlobalNavigationSection = (): JSX.Element => {
  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b border-[#ece8f3] bg-[#fffefed1] backdrop-blur-[7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7px)_brightness(100%)]">
      <div className="mx-auto flex h-[72px] w-full max-w-[1480px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-[140px]">
        <div className="flex shrink-0 items-center gap-2.5">
          <div className="relative flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,rgba(139,58,229,1)_0%,rgba(89,31,151,1)_100%)] shadow-[0px_6px_18px_-8px_#8a39e4b2]">
            <span className="relative flex items-center justify-center [font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[22.4px] tracking-[-0.40px] text-white">
              H
            </span>
          </div>
          <div className="flex flex-col items-start">
            <span className="[font-family:'Satoshi-Bold',Helvetica] text-xl font-bold leading-8 tracking-[-0.40px] text-[#0f0a1f]">
              HireNinjas
            </span>
          </div>
        </div>
        <nav className="flex min-w-0 flex-1 items-center justify-center">
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent px-0 py-1.5 [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447] hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border border-[#ece8f3] bg-white p-6 shadow-[0px_30px_70px_-30px_#140a2840]">
                  <div className="grid w-[900px] max-w-[calc(100vw-2rem)] grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2">
                    {servicesColumns.map((column) => (
                      <section
                        key={column.heading}
                        className="flex flex-col items-start pt-1"
                      >
                        <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[1.54px] text-[#6b6478]">
                          {column.heading}
                        </h2>
                        <div className="mt-[14.01px] flex w-full flex-col">
                          {column.items.map((item) => (
                            <SimpleMenuItem
                              key={item.title}
                              title={item.title}
                              description={item.description}
                            />
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent px-0 py-1.5 [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447] hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border border-[#ece8f3] bg-white p-6 shadow-[0px_30px_70px_-30px_#140a2840]">
                  <div className="grid w-[560px] max-w-[calc(100vw-2rem)] grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2">
                    {industriesColumns.map((column) => (
                      <section
                        key={column.heading}
                        className="flex flex-col items-start pt-1"
                      >
                        <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[1.54px] text-[#6b6478]">
                          {column.heading}
                        </h2>
                        <div className="mt-[14.01px] flex w-full flex-col">
                          {column.items.map((item) => (
                            <SimpleMenuItem
                              key={item.title}
                              title={item.title}
                              description={item.description}
                              disabled={item.disabled}
                            />
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  type="button"
                  className="h-auto [font-family:'Montserrat',Helvetica] text-sm font-medium leading-[22.4px] text-[#3a3447]"
                >
                  Consult
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  type="button"
                  className="h-auto [font-family:'Montserrat',Helvetica] text-sm font-medium leading-[22.4px] text-[#3a3447]"
                >
                  Contact
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <Button
          type="button"
          className="h-auto shrink-0 rounded-[999px] bg-[#8b39e5] py-2 pr-2 pl-[22px] hover:bg-[#7f31d7]"
        >
          <span className="inline-flex flex-col items-center pl-3.5 pr-0 py-0">
            <span className="[font-family:'Inter',Helvetica] text-[14.5px] font-medium text-center text-white">
              Book a Free Consultation
            </span>
          </span>
          <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-white">
            <img
              className="h-4 w-4"
              alt="Component"
              src="https://c.animaapp.com/mp3z2ouuSvWBo9/img/component-2.svg"
            />
          </span>
        </Button>
      </div>
    </header>
  );
};
