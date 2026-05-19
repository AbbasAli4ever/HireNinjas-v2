"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
      { title: "Digital Strategy",        description: "Roadmaps for predictable growth",    href: "/services/digital-marketing-strategy", disabled: false },
      { title: "Lead Generation",         description: "Funnels that fill the pipeline",     href: "/services/lead-generation",            disabled: false },
      { title: "SEO & PPC",               description: "Top-of-search visibility",           href: "/services/seo-ppc",                    disabled: false },
      { title: "Marketing Consultations", description: "Senior strategy on demand",          href: "#",                                    disabled: false },
      { title: "AI-Powered Marketing",    description: "Automation + predictive growth",     href: "#",                                    disabled: false },
    ],
  },
  {
    heading: "BUILD & BRAND",
    items: [
      { title: "Web & App Development",   description: "High-performance digital products",  href: "/services/web-app-development",        disabled: false },
      { title: "Social Media",            description: "Content + community + paid",         href: "/services/social-media",               disabled: false },
      { title: "Video Production",        description: "Cinematic brand storytelling",       href: "/services/video-production",           disabled: false },
      { title: "Branding & Identity",     description: "Logos, systems, brand voice",        href: "#",                                    disabled: false },
      { title: "Staff Augmentation",      description: "Build teams in days, not months",    href: "#",                                    disabled: false },
    ],
  },
];

const industriesColumns = [
  {
    heading: "SECTORS",
    items: [
      { title: "B2B & Enterprise", description: "ABM + complex sales cycles",      href: "#", disabled: false },
      { title: "Real Estate",      description: "Off-plan, HNWI, investor leads",  href: "#", disabled: false },
    ],
  },
  {
    heading: "COMING SOON",
    items: [
      { title: "SaaS & Tech",  description: "In development", href: "#", disabled: true },
      { title: "Healthcare",   description: "In development", href: "#", disabled: true },
    ],
  },
];

type NavItem = { title: string; description: string; href: string; disabled: boolean };

const MenuItem = ({ title, description, href, disabled, onSelect }: NavItem & { onSelect: () => void }) => (
  <Link
    href={disabled ? "#" : href}
    aria-disabled={disabled}
    tabIndex={disabled ? -1 : undefined}
    onClick={disabled ? undefined : onSelect}
    className={`flex w-full items-start gap-3 rounded-[10px] px-0 py-1.5 text-left transition-colors ${
      disabled ? "pointer-events-none opacity-55" : "hover:bg-[#faf7ff]"
    }`}
  >
    <span className="flex h-[35px] w-8 flex-col items-start pt-[3px]">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f7f1ff]" />
    </span>
    <span className="inline-flex flex-col items-start pt-[3px]">
      <span className="[font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[16.8px] text-[#0f0a1f]">
        {title}
      </span>
      <span className="[font-family:'Montserrat',Helvetica] text-xs font-medium leading-[16.8px] text-[#6b6478]">
        {description}
      </span>
    </span>
  </Link>
);

export const SiteHeader = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    setOpenMenu("");
    setMobileOpen(false);
    setMobileExpandedSection(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b border-[#ece8f3] bg-[#fffefed1] backdrop-blur-[7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7px)_brightness(100%)]">
      <div className="mx-auto flex h-[72px] w-full max-w-[1480px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-[140px]">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <div className="relative flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,rgba(139,58,229,1)_0%,rgba(89,31,151,1)_100%)] shadow-[0px_6px_18px_-8px_#8a39e4b2]">
            <span className="relative flex items-center justify-center [font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[22.4px] tracking-[-0.40px] text-white">
              H
            </span>
          </div>
          <span className="[font-family:'Satoshi-Bold',Helvetica] text-xl font-bold leading-8 tracking-[-0.40px] text-[#0f0a1f]">
            HireNinjas
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center xl:flex">
          <NavigationMenu className="max-w-none" value={openMenu} onValueChange={setOpenMenu}>
            <NavigationMenuList className="gap-6">

              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent px-0 py-1.5 [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447] hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border border-[#ece8f3] bg-white p-6 shadow-[0px_30px_70px_-30px_#140a2840]">
                  <div className="grid w-[900px] max-w-[calc(100vw-2rem)] grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2">
                    {servicesColumns.map((column) => (
                      <section key={column.heading} className="flex flex-col items-start pt-1">
                        <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[1.54px] text-[#6b6478]">
                          {column.heading}
                        </h2>
                        <div className="mt-[14px] flex w-full flex-col">
                          {column.items.map((item) => (
                            <MenuItem key={item.title} {...item} onSelect={() => setOpenMenu("")} />
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent px-0 py-1.5 [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447] hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border border-[#ece8f3] bg-white p-6 shadow-[0px_30px_70px_-30px_#140a2840]">
                  <div className="grid w-[560px] max-w-[calc(100vw-2rem)] grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2">
                    {industriesColumns.map((column) => (
                      <section key={column.heading} className="flex flex-col items-start pt-1">
                        <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[1.54px] text-[#6b6478]">
                          {column.heading}
                        </h2>
                        <div className="mt-[14px] flex w-full flex-col">
                          {column.items.map((item) => (
                            <MenuItem key={item.title} {...item} onSelect={() => setOpenMenu("")} />
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Consult */}
              <NavigationMenuItem>
                <Link href="/contact" className="h-auto [font-family:'Montserrat',Helvetica] text-sm font-medium leading-[22.4px] text-[#3a3447] hover:text-[#0f0a1f]">
                  Consult
                </Link>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <Link href="/contact" className="h-auto [font-family:'Montserrat',Helvetica] text-sm font-medium leading-[22.4px] text-[#3a3447] hover:text-[#0f0a1f]">
                  Contact
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop CTA */}
        <Button
          asChild
          className="hidden h-auto shrink-0 rounded-[999px] bg-[#8b39e5] py-2 pr-2 pl-[22px] hover:bg-[#7f31d7] xl:flex"
        >
          <Link href="/contact">
            <span className="inline-flex items-center pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium text-white">
              Book a Free Consultation
            </span>
            <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-white">
              <Image width={16} height={16} alt="" src="/figmaAssets/arrow.svg" className="h-4 w-4" />
            </span>
          </Link>
        </Button>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#3a3447] transition-colors hover:bg-[#f7f1ff] xl:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#ece8f3] bg-white xl:hidden">
          <nav className="mx-auto max-w-[1480px] px-4 py-4 sm:px-6">

            {/* Services accordion */}
            <div className="border-b border-[#f0edf8]">
              <button
                type="button"
                onClick={() => setMobileExpandedSection((s) => s === "services" ? null : "services")}
                className="flex w-full items-center justify-between py-3.5 [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447]"
              >
                Services
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform ${mobileExpandedSection === "services" ? "rotate-180" : ""}`}
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileExpandedSection === "services" && (
                <div className="pb-4">
                  {servicesColumns.map((column) => (
                    <div key={column.heading} className="mb-3">
                      <p className="mb-2 [font-family:'Satoshi-Bold',Helvetica] text-[10px] font-bold tracking-[1.4px] text-[#6b6478]">
                        {column.heading}
                      </p>
                      {column.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.disabled ? "#" : item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block py-1.5 [font-family:'Montserrat',Helvetica] text-sm text-[#3a3447] ${item.disabled ? "pointer-events-none opacity-50" : "hover:text-[#8b39e5]"}`}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Industries accordion */}
            <div className="border-b border-[#f0edf8]">
              <button
                type="button"
                onClick={() => setMobileExpandedSection((s) => s === "industries" ? null : "industries")}
                className="flex w-full items-center justify-between py-3.5 [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447]"
              >
                Industries
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform ${mobileExpandedSection === "industries" ? "rotate-180" : ""}`}
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileExpandedSection === "industries" && (
                <div className="pb-4">
                  {industriesColumns.map((column) => (
                    <div key={column.heading} className="mb-3">
                      <p className="mb-2 [font-family:'Satoshi-Bold',Helvetica] text-[10px] font-bold tracking-[1.4px] text-[#6b6478]">
                        {column.heading}
                      </p>
                      {column.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.disabled ? "#" : item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block py-1.5 [font-family:'Montserrat',Helvetica] text-sm text-[#3a3447] ${item.disabled ? "pointer-events-none opacity-50" : "hover:text-[#8b39e5]"}`}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Plain links */}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[#f0edf8] py-3.5 [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447] hover:text-[#0f0a1f]"
            >
              Consult
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[#f0edf8] py-3.5 [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447] hover:text-[#0f0a1f]"
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="pt-5 pb-2">
              <Button
                asChild
                className="w-full rounded-[999px] bg-[#8b39e5] py-3 hover:bg-[#7f31d7]"
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <span className="[font-family:'Inter',Helvetica] text-[14.5px] font-medium text-white">
                    Book a Free Consultation
                  </span>
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
