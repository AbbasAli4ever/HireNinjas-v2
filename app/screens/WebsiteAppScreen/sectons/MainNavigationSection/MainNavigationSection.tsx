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
    heading: "BUILD & BRAND",
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
    heading: "SECTORS",
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
    heading: "COMING SOON",
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

const textLinks = ["Consult", "Contact"];

const MenuListItem = ({
  title,
  description,
  muted = false,
  padded = false,
}: {
  title: string;
  description: string;
  muted?: boolean;
  padded?: boolean;
}) => {
  return (
    <button
      type="button"
      className={`flex w-full items-start gap-3 rounded-[10px] transition-colors hover:bg-[#faf7ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b39e5]/30 ${padded ? "px-3 py-2.5" : "px-0 py-1.5"} ${muted ? "opacity-55" : ""}`}
    >
      <span className="flex h-[35px] w-8 shrink-0 items-start pt-[3px]">
        <span className="flex h-8 w-8 rounded-lg bg-[#f7f1ff]" />
      </span>
      <span className="inline-flex flex-col items-start pt-[3px] text-left">
        <span className="inline-flex flex-col items-start gap-0.5">
          <span className="[font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[16.8px] tracking-[0] text-[#0f0a1f] whitespace-nowrap">
            {title}
          </span>
          <span
            className={`${muted ? "font-normal" : "font-medium"} [font-family:'Montserrat',Helvetica] text-xs leading-[16.8px] tracking-[0] text-[#6b6478] whitespace-nowrap`}
          >
            {description}
          </span>
        </span>
      </span>
    </button>
  );
};

export const MainNavigationSection = (): JSX.Element => {
  return (
    <>
      <header className="relative z-50 w-full border-b border-[#ece8f3] bg-[#fffefed1] backdrop-blur-[7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7px)_brightness(100%)]">
        <div className="mx-auto flex min-h-[72px] w-full max-w-[1480px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-[140px]">
          <a href="/" className="inline-flex items-center gap-2.5">
            <span className="relative flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,rgba(139,58,229,1)_0%,rgba(89,31,151,1)_100%)]">
              <span className="absolute inset-0 rounded-[9px] bg-[#ffffff01] shadow-[0px_6px_18px_-8px_#8a39e4b2]" />
              <span className="relative flex w-fit items-center justify-center whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[22.4px] tracking-[-0.40px] text-white">
                H
              </span>
            </span>
            <span className="inline-flex flex-col items-start">
              <span className="[font-family:'Satoshi-Bold',Helvetica] text-xl font-bold leading-8 tracking-[-0.40px] text-[#0f0a1f] whitespace-nowrap">
                HireNinjas
              </span>
            </span>
          </a>
          <div className="flex items-center gap-6">
            <NavigationMenu className="max-w-none">
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="h-auto bg-transparent px-0 py-1.5 [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447] hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="border-[#ece8f3] bg-white p-6 shadow-[0px_30px_70px_-30px_#140a2840] data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in-0 data-[motion^=to-]:fade-out-0 data-[motion=from-end]:slide-in-from-right-2 data-[motion=from-start]:slide-in-from-left-2 data-[motion=to-end]:slide-out-to-right-2 data-[motion=to-start]:slide-out-to-left-2 w-[900px] rounded-[18px] border">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {servicesColumns.map((column) => (
                        <section
                          key={column.heading}
                          className="flex w-full flex-col items-start pt-1"
                        >
                          <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[1.54px] text-[#6b6478]">
                            {column.heading}
                          </h2>
                          <div className="mt-[14.01px] flex w-full flex-col">
                            {column.items.map((item) => (
                              <MenuListItem
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
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="h-auto bg-transparent px-0 py-1.5 [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447] hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[560px] rounded-[18px] border border-[#ece8f3] bg-white p-6 shadow-[0px_30px_70px_-30px_#140a2840]">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {industriesColumns.map((column) => (
                        <section
                          key={column.heading}
                          className="flex w-full flex-col items-start pt-1"
                        >
                          <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[1.54px] text-[#6b6478]">
                            {column.heading}
                          </h2>
                          <div
                            className={
                              column.heading === "COMING SOON"
                                ? "mt-[18.01px] flex w-full flex-col"
                                : "mt-[14.01px] flex w-full flex-col"
                            }
                          >
                            {column.items.map((item) => (
                              <MenuListItem
                                key={item.title}
                                title={item.title}
                                description={item.description}
                                muted={item.muted}
                                padded={item.muted}
                              />
                            ))}
                          </div>
                        </section>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {textLinks.map((item) => (
                  <NavigationMenuItem key={item}>
                    <a
                      href="#"
                      className="inline-flex items-start px-0 pt-[5.5px] pb-[5.89px] [font-family:'Montserrat',Helvetica] text-sm font-medium leading-[22.4px] tracking-[0] text-[#3a3447] whitespace-nowrap transition-colors hover:text-[#8b39e5]"
                    >
                      {item}
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Button
            type="button"
            className="h-auto inline-flex items-center gap-3 rounded-[999px] bg-[#8b39e5] py-2 pr-2 pl-[22px] hover:bg-[#7f31d8]"
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
                src="https://c.animaapp.com/mp5dxvs5vBeNIx/img/component-2.svg"
              />
            </span>
          </Button>
        </div>
      </header>
    </>
  );
};
