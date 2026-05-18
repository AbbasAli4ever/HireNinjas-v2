import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const footerSections = [
  {
    title: "SERVICES",
    links: [
      "Digital Strategy",
      "Web & App",
      "Social Media",
      "Lead Generation",
      "SEO & PPC",
      "Video Production",
      "Branding",
      "AI Marketing",
    ],
  },
  {
    title: "INDUSTRIES & TEAMS",
    links: [
      "B2B & Enterprise",
      "Real Estate",
      "Staff Augmentation",
      "Consultations",
    ],
  },
  {
    title: "GET IN TOUCH",
    links: ["Book a Free Consultation", "hello@hireninjas.ae", "Dubai · UAE"],
  },
];

export const FooterUtilityLinksSection = (): JSX.Element => {
  return (
    <footer className="w-full border-t border-[#ece8f3] bg-[#fafaff] px-6 py-12 sm:px-8 lg:px-[120px] lg:pt-16 lg:pb-9">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:px-10">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
              <section className="flex flex-col items-start gap-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,rgba(139,58,229,1)_0%,rgba(89,31,151,1)_100%)]">
                    <div className="absolute inset-0 rounded-[9px] bg-[#ffffff01] shadow-[0px_6px_18px_-8px_#8a39e4b2]" />
                    <span className="relative flex w-fit items-center justify-center [font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[22.4px] tracking-[-0.36px] text-white">
                      H
                    </span>
                  </div>
                  <div className="inline-flex flex-col items-start">
                    <span className="[font-family:'Satoshi-Bold',Helvetica] text-lg font-bold leading-[28.8px] tracking-[-0.36px] text-[#0f0a1f]">
                      HireNinjas
                    </span>
                  </div>
                </div>
                <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447]">
                  Performance-led digital agency for
                  <br />
                  ambitious brands across Dubai and the UAE.
                </p>
              </section>
              {footerSections.map((section) => (
                <nav
                  key={section.title}
                  aria-label={section.title}
                  className="flex flex-col items-start gap-4"
                >
                  <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[1.30px] text-[#0f0a1f]">
                    {section.title}
                  </h2>
                  <ul className="flex flex-col items-start gap-2.5">
                    {section.links.map((link) => (
                      <li key={link} className="w-full">
                        <button
                          type="button"
                          className="h-auto p-0 text-left [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447] transition-colors hover:text-[#591f97]"
                        >
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-6">
          <Separator className="bg-[#ece8f3]" />
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478]">
              © HireNinjas · Dubai · UAE
            </p>
            <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478]">
              Crafted for measurable growth
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
