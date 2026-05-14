import { Card, CardContent } from "@/components/ui/card";

const services = [
  "Digital Strategy",
  "Web & App",
  "Social Media",
  "Lead Generation",
  "SEO & PPC",
  "Video Production",
  "Branding",
  "AI Marketing",
];

const industriesAndTeams = [
  "B2B & Enterprise",
  "Real Estate",
  "Staff Augmentation",
  "Consultations",
];

const getInTouch = [
  "Book a Free Consultation",
  "hello@hireninjas.ae",
  "Dubai · UAE",
];

const footerColumns = [
  {
    title: "SERVICES",
    items: services,
  },
  {
    title: "INDUSTRIES & TEAMS",
    items: industriesAndTeams,
  },
  {
    title: "GET IN TOUCH",
    items: getInTouch,
  },
];

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full border-t border-[#ece8f3] bg-[#fafaff] px-6 py-16 md:px-10 lg:px-[120px] lg:pb-9">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:px-10">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
              <section className="flex flex-col items-start gap-3.5">
                <div className="flex w-full items-center gap-2.5">
                  <div className="relative flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,rgba(139,58,229,1)_0%,rgba(89,31,151,1)_100%)]">
                    <div className="absolute inset-0 rounded-[9px] bg-[#ffffff01] shadow-[0px_6px_18px_-8px_#8a39e4b2]" />
                    <span className="relative flex w-fit items-center justify-center [font-family:'Satoshi-Bold',Helvetica] text-center text-sm font-bold leading-[22.4px] tracking-[-0.36px] text-white">
                      H
                    </span>
                  </div>
                  <div className="inline-flex flex-col items-start">
                    <span className="mt-[-1.00px] flex w-fit items-center whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-lg font-bold leading-[28.8px] tracking-[-0.36px] text-[#0f0a1f]">
                      HireNinjas
                    </span>
                  </div>
                </div>
                <p className="mt-[-1.00px] self-stretch [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447]">
                  Performance-led digital agency for
                  <br />
                  ambitious brands across Dubai and the UAE.
                </p>
              </section>
              {footerColumns.map((column) => (
                <nav
                  key={column.title}
                  aria-label={column.title}
                  className="flex flex-col items-start gap-4"
                >
                  <h2 className="mt-[-1.00px] self-stretch [font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[1.30px] text-[#0f0a1f]">
                    {column.title}
                  </h2>
                  <ul className="flex w-full flex-col items-start gap-2.5">
                    {column.items.map((item) => (
                      <li key={item} className="w-full pt-[1.5px] pb-[1.09px]">
                        <button
                          type="button"
                          className="flex h-auto w-full items-start p-0 text-left"
                        >
                          <span className="mt-[-1.00px] flex-1 [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447] transition-colors hover:text-[#0f0a1f]">
                            {item}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 border-t border-[#ece8f3] bg-transparent shadow-none rounded-none">
          <CardContent className="flex flex-col justify-between gap-4 px-0 pt-6 pb-0 sm:flex-row sm:items-center">
            <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478]">
              © HireNinjas · Dubai · UAE
            </p>
            <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478] sm:text-right">
              Crafted for measurable growth
            </p>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
};
