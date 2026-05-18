import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const servicesColumns = [
  {
    title: "GROWTH",
    items: [
      {
        title: "Digital Strategy",
        description: "Roadmaps for predictable growth",
      },
      {
        title: "Lead Generation",
        description: "Funnels that fill the pipeline",
      },
      {
        title: "SEO & PPC",
        description: "Top-of-search visibility",
      },
      {
        title: "Marketing Consultations",
        description: "Senior strategy on demand",
      },
      {
        title: "AI-Powered Marketing",
        description: "Automation + predictive growth",
      },
    ],
  },
  {
    title: "BUILD & BRAND",
    items: [
      {
        title: "Web & App Development",
        description: "High-performance digital products",
      },
      {
        title: "Social Media",
        description: "Content + community + paid",
      },
      {
        title: "Video Production",
        description: "Cinematic brand storytelling",
      },
      {
        title: "Branding & Identity",
        description: "Logos, systems, brand voice",
      },
      {
        title: "Staff Augmentation",
        description: "Build teams in days, not months",
      },
    ],
  },
];

const industriesColumns = [
  {
    title: "SECTORS",
    items: [
      {
        title: "B2B & Enterprise",
        description: "ABM + complex sales cycles",
        muted: false,
      },
      {
        title: "Real Estate",
        description: "Off-plan, HNWI, investor leads",
        muted: false,
      },
    ],
  },
  {
    title: "COMING SOON",
    items: [
      {
        title: "SaaS & Tech",
        description: "In development",
        muted: true,
      },
      {
        title: "Healthcare",
        description: "In development",
        muted: true,
      },
    ],
  },
];

const simpleLinks = ["Consult", "Contact"];

type MegaMenuItem = {
  title: string;
  description: string;
  muted?: boolean;
};

const MenuListItem = ({
  item,
  padded = false,
}: {
  item: MegaMenuItem;
  padded?: boolean;
}) => (
  <NavigationMenuLink
    className={`flex w-full items-start gap-3 rounded-[10px] ${padded ? "px-3 py-2.5" : "px-0 py-1.5"} transition-colors hover:bg-[#faf7ff] focus:bg-[#faf7ff] focus:outline-none ${item.muted ? "opacity-55" : ""}`}
  >
    <span className="flex h-[35px] w-8 shrink-0 items-start pt-[3px]">
      <span className="flex h-8 w-8 rounded-lg bg-[#f7f1ff]" />
    </span>
    <span className="inline-flex flex-col items-start pt-[3px]">
      <span className="inline-flex flex-col items-start gap-0.5">
        <span className="relative flex items-center [font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[16.8px] tracking-[0] text-[#0f0a1f]">
          {item.title}
        </span>
        <span
          className={`relative flex items-center [font-family:'Montserrat',Helvetica] text-xs leading-[16.8px] tracking-[0] text-[#6b6478] ${item.muted ? "font-normal" : "font-medium"}`}
        >
          {item.description}
        </span>
      </span>
    </span>
  </NavigationMenuLink>
);

export const SiteNavigationSection = (): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      <p className="sr-only">
        The image shows a slim top navigation bar inside the highlighted section
        with the HireNinjas logo on the left, centered navigation links with two
        mega-menu dropdowns, and a rounded purple consultation button on the
        right.
      </p>
      <header className="relative z-20 w-full border-b border-[#ece8f3] bg-[#fffefed1] backdrop-blur-[7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7px)_brightness(100%)]">
        <div className="mx-auto flex h-[72px] w-full max-w-[1480px] items-center justify-between px-6 sm:px-8 lg:px-[140px]">
          <a href="/" className="inline-flex items-center gap-2.5">
            <span className="relative flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,rgba(139,58,229,1)_0%,rgba(89,31,151,1)_100%)] shadow-[0px_6px_18px_-8px_#8a39e4b2]">
              <span className="relative flex items-center justify-center [font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[22.4px] tracking-[-0.40px] text-white">
                H
              </span>
            </span>
            <span className="[font-family:'Satoshi-Bold',Helvetica] text-xl font-bold leading-8 tracking-[-0.40px] text-[#0f0a1f]">
              HireNinjas
            </span>
          </a>
          <nav aria-label="Primary" className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem
                  onMouseEnter={() => setActiveMenu("services")}
                  onMouseLeave={() =>
                    setActiveMenu((value) =>
                      value === "services" ? null : value,
                    )
                  }
                  className="relative"
                >
                  <NavigationMenuTrigger className="h-auto bg-transparent px-0 py-1.5 [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447] hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-1/2 top-full mt-[14px] w-[900px] -translate-x-1/2 rounded-[18px] border border-[#ece8f3] bg-white p-0 shadow-[0px_30px_70px_-30px_#140a2840] data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out">
                    <Card
                      className={`w-full border-0 bg-transparent shadow-none transition-opacity duration-200 ${activeMenu === "services" ? "opacity-100" : "opacity-0"}`}
                    >
                      <CardContent className="p-6">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                          {servicesColumns.map((column) => (
                            <section
                              key={column.title}
                              className="flex flex-col items-center pt-1"
                            >
                              <div className="w-full max-w-[397px]">
                                <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[1.54px] text-[#6b6478]">
                                  {column.title}
                                </h2>
                              </div>
                              <div className="mt-[14.01px] flex w-full flex-col">
                                {column.items.map((item) => (
                                  <MenuListItem key={item.title} item={item} />
                                ))}
                              </div>
                            </section>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem
                  onMouseEnter={() => setActiveMenu("industries")}
                  onMouseLeave={() =>
                    setActiveMenu((value) =>
                      value === "industries" ? null : value,
                    )
                  }
                  className="relative"
                >
                  <NavigationMenuTrigger className="h-auto bg-transparent px-0 py-1.5 [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447] hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-1/2 top-full mt-[14px] w-[560px] -translate-x-1/2 rounded-[18px] border border-[#ece8f3] bg-white p-0 shadow-[0px_30px_70px_-30px_#140a2840] data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out">
                    <Card
                      className={`w-full border-0 bg-transparent shadow-none transition-opacity duration-200 ${activeMenu === "industries" ? "opacity-100" : "opacity-0"}`}
                    >
                      <CardContent className="p-6">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                          {industriesColumns.map((column) => (
                            <section
                              key={column.title}
                              className="flex flex-col items-center pt-1"
                            >
                              <div className="w-full max-w-[227px]">
                                <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[1.54px] text-[#6b6478]">
                                  {column.title}
                                </h2>
                              </div>
                              <div
                                className={`flex w-full flex-col ${column.title === "SECTORS" ? "mt-[14.01px]" : "mt-[18.01px]"}`}
                              >
                                {column.items.map((item) => (
                                  <MenuListItem
                                    key={item.title}
                                    item={item}
                                    padded={item.muted}
                                  />
                                ))}
                              </div>
                            </section>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {simpleLinks.map((link) => (
                  <NavigationMenuItem key={link}>
                    <a
                      href={link === "Consult" ? "#consult" : "#contact"}
                      className="inline-flex items-center py-[5.5px] [font-family:'Montserrat',Helvetica] text-sm font-medium leading-[22.4px] tracking-[0] text-[#3a3447]"
                    >
                      {link}
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <Button
            asChild
            className="h-auto rounded-[999px] bg-[#8b39e5] px-2 py-2 text-white hover:bg-[#7c2fda]"
          >
            <a
              href="#consultation"
              className="inline-flex items-center gap-3 pl-[22px]"
            >
              <span className="inline-flex flex-col items-center pl-3.5">
                <span className="[font-family:'Inter',Helvetica] text-[14.5px] font-medium tracking-[0] text-white">
                  Book a Free Consultation
                </span>
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-white">
                <img
                  className="h-4 w-4"
                  alt="Component"
                  src="https://c.animaapp.com/mp6yzze1tTdE4q/img/component-2.svg"
                />
              </span>
            </a>
          </Button>
        </div>
      </header>
    </>
  );
};