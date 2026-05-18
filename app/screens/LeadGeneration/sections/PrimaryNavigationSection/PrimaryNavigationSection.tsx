import { Button } from "../../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../../components/ui/navigation-menu";

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
      },
      {
        title: "Real Estate",
        description: "Off-plan, HNWI, investor leads",
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

type MenuItemData = {
  title: string;
  description: string;
  muted?: boolean;
};

const MenuListItem = ({
  item,
  padded = false,
}: {
  item: MenuItemData;
  padded?: boolean;
}) => {
  return (
    <button
      type="button"
      className={`flex w-full items-start gap-3 rounded-[10px] text-left transition-colors hover:bg-[#faf7ff] ${padded ? "px-3 py-2.5" : "px-0 py-1.5"} ${item.muted ? "opacity-55" : ""}`}
    >
      <span className="flex h-[35px] w-8 items-start pt-[3px]">
        <span className="flex h-8 w-8 rounded-lg bg-[#f7f1ff]" />
      </span>
      <span className="inline-flex flex-col items-start pt-[3px]">
        <span className="relative flex items-center whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[16.8px] tracking-[0] text-[#0f0a1f]">
          {item.title}
        </span>
        <span
          className={`mt-0.5 relative flex items-center whitespace-nowrap [font-family:'Montserrat',Helvetica] text-xs leading-[16.8px] tracking-[0] text-[#6b6478] ${item.muted ? "font-normal" : "font-medium"}`}
        >
          {item.description}
        </span>
      </span>
    </button>
  );
};

export const PrimaryNavigationSection = (): JSX.Element => {
  return (
    <header className="relative w-full border-b border-[#ece8f3] bg-[#fffefed1] px-4 backdrop-blur-[7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7px)_brightness(100%)] sm:px-6 lg:px-[140px]">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1200px] items-center justify-between gap-6">
        <div className="inline-flex shrink-0 items-center gap-2.5">
          <div className="relative flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,rgba(139,58,229,1)_0%,rgba(89,31,151,1)_100%)] shadow-[0px_6px_18px_-8px_#8a39e4b2]">
            <span className="relative flex w-fit items-center justify-center whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[22.4px] tracking-[-0.40px] text-white">
              H
            </span>
          </div>
          <div className="inline-flex flex-col items-start">
            <div className="relative mt-[-1.00px] flex w-fit items-center whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-xl font-bold leading-8 tracking-[-0.40px] text-[#0f0a1f]">
              HireNinjas
            </div>
          </div>
        </div>
        <div className="hidden flex-1 items-center justify-center lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent px-0 py-1.5 data-[state=open]:bg-transparent hover:bg-transparent focus:bg-transparent [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447]">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="mt-4 rounded-[18px] border border-[#ece8f3] bg-white p-6 shadow-[0px_30px_70px_-30px_#140a2840]">
                  <div className="grid w-[900px] max-w-[calc(100vw-120px)] grid-cols-2 gap-x-6 gap-y-2">
                    {servicesColumns.map((column) => (
                      <section
                        key={column.title}
                        className="flex flex-col pt-1"
                      >
                        <h2 className="relative mt-[-1.00px] flex items-center whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[1.54px] text-[#6b6478]">
                          {column.title}
                        </h2>
                        <div className="mt-[14.01px] flex flex-col">
                          {column.items.map((item) => (
                            <MenuListItem key={item.title} item={item} />
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent px-0 py-1.5 data-[state=open]:bg-transparent hover:bg-transparent focus:bg-transparent [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447]">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent className="mt-4 rounded-[18px] border border-[#ece8f3] bg-white p-6 shadow-[0px_30px_70px_-30px_#140a2840]">
                  <div className="grid w-[560px] max-w-[calc(100vw-120px)] grid-cols-2 gap-x-6 gap-y-2">
                    {industriesColumns.map((column, columnIndex) => (
                      <section
                        key={column.title}
                        className="flex flex-col pt-1"
                      >
                        <h2 className="relative mt-[-1.00px] flex items-center whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[1.54px] text-[#6b6478]">
                          {column.title}
                        </h2>
                        <div
                          className={
                            columnIndex === 0
                              ? "mt-[14.01px] flex flex-col"
                              : "mt-[18.01px] flex flex-col"
                          }
                        >
                          {column.items.map((item) => (
                            <MenuListItem
                              key={item.title}
                              item={item}
                              padded={columnIndex === 1}
                            />
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {simpleLinks.map((link) => (
                <NavigationMenuItem key={link}>
                  <button
                    type="button"
                    className="inline-flex h-auto items-center px-0 py-[5.5px] text-left [font-family:'Montserrat',Helvetica] text-sm font-medium leading-[22.4px] tracking-[0] text-[#3a3447] transition-opacity hover:opacity-80"
                  >
                    {link}
                  </button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button
          type="button"
          className="h-auto shrink-0 rounded-[999px] bg-[#8b39e5] py-2 pl-[22px] pr-2 hover:bg-[#7b2fd7]"
        >
          <span className="inline-flex flex-col items-center pl-3.5 pr-0 py-0">
            <span className="relative mt-[-1.00px] flex w-fit items-center justify-center whitespace-nowrap [font-family:'Inter',Helvetica] text-center text-[14.5px] font-medium leading-[normal] tracking-[0] text-white">
              Book a Free Consultation
            </span>
          </span>
          <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-white">
            <img
              className="h-4 w-4"
              alt="Component"
              src="https://c.animaapp.com/mpaw8ml1N6JcQv/img/component-2.svg"
            />
          </span>
        </Button>
      </div>
    </header>
  );
};
