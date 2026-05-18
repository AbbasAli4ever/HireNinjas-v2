import { Card, CardContent } from "../../../../../components/ui/card";
import { Separator } from "../../../../../components/ui/separator";

const serviceLinks = [
  "Digital Strategy",
  "Web & App",
  "Social Media",
  "Lead Generation",
  "SEO & PPC",
  "Video Production",
  "Branding",
  "AI Marketing",
];

const industryLinks = [
  "B2B & Enterprise",
  "Real Estate",
  "Staff Augmentation",
  "Consultations",
];

const contactLinks = [
  "Book a Free Consultation",
  "hello@hireninjas.ae",
  "Dubai · UAE",
];

const footerColumns = [
  {
    title: "SERVICES",
    items: serviceLinks,
  },
  {
    title: "INDUSTRIES & TEAMS",
    items: industryLinks,
  },
  {
    title: "GET IN TOUCH",
    items: contactLinks,
  },
];

export const FooterLinkSection = (): JSX.Element => {
  return (
    <footer className="relative w-full border-t border-[#ece8f3] bg-[#fafaff]">
      <div className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-9 sm:px-10 lg:px-[120px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10">
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <section className="flex flex-col items-start gap-3.5">
              <div className="flex w-full items-center gap-2.5">
                <div className="relative flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,rgba(139,58,229,1)_0%,rgba(89,31,151,1)_100%)]">
                  <div className="absolute inset-0 rounded-[9px] bg-[#ffffff01] shadow-[0px_6px_18px_-8px_#8a39e4b2]" />
                  <span className="relative flex w-fit items-center justify-center whitespace-nowrap text-center text-sm font-bold leading-[22.4px] tracking-[-0.36px] text-white [font-family:'Satoshi-Bold',Helvetica]">
                    H
                  </span>
                </div>
                <div className="inline-flex flex-col items-start">
                  <span className="mt-[-1.00px] flex w-fit items-center whitespace-nowrap text-lg font-bold leading-[28.8px] tracking-[-0.36px] text-[#0f0a1f] [font-family:'Satoshi-Bold',Helvetica]">
                    HireNinjas
                  </span>
                </div>
              </div>
              <p className="mt-[-1.00px] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447] [font-family:'Montserrat',Helvetica]">
                Performance-led digital agency for
                <br />
                ambitious brands across Dubai and the UAE.
              </p>
            </section>
            {footerColumns.map((column) => (
              <section
                key={column.title}
                className="flex flex-col items-start gap-4"
              >
                <header className="w-full pt-0 pb-[0.8px]">
                  <h2 className="mt-[-1.00px] flex items-center text-[13px] font-bold leading-[20.8px] tracking-[1.30px] text-[#0f0a1f] [font-family:'Satoshi-Bold',Helvetica]">
                    {column.title}
                  </h2>
                </header>
                <Card className="h-auto w-full border-0 bg-transparent p-0 shadow-none">
                  <CardContent className="flex flex-col items-start gap-2.5 p-0">
                    {column.items.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className="flex w-full flex-col items-start px-0 pt-[1.5px] pb-[1.09px] text-left"
                      >
                        <span className="mt-[-1.00px] flex-1 text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447] [font-family:'Montserrat',Helvetica]">
                          {item}
                        </span>
                      </button>
                    ))}
                  </CardContent>
                </Card>
              </section>
            ))}
          </div>
          <div className="flex w-full flex-col gap-6">
            <Separator className="bg-[#ece8f3]" />
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <p className="mt-[-1.00px] whitespace-nowrap text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478] [font-family:'Montserrat',Helvetica]">
                © HireNinjas · Dubai · UAE
              </p>
              <p className="mt-[-1.00px] whitespace-nowrap text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478] [font-family:'Montserrat',Helvetica]">
                Crafted for measurable growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
