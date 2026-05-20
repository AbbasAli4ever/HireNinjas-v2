import { Card, CardContent } from "@/components/ui/card";

const serviceOfferings = [
  {
    id: "01",
    title: ["Lead Generation", "& Campaigns"],
    icon: "https://c.animaapp.com/mpdwd6sgQyTogJ/img/component-4-2.svg",
  },
  {
    id: "02",
    title: ["Social Media Management"],
    icon: "https://c.animaapp.com/mpdwd6sgQyTogJ/img/component-4-5.svg",
  },
  {
    id: "03",
    title: ["Video Production For", "Property Launches"],
    icon: "https://c.animaapp.com/mpdwd6sgQyTogJ/img/component-4-1.svg",
  },
  {
    id: "04",
    title: ["SEO/PPC Advertising"],
    icon: "https://c.animaapp.com/mpdwd6sgQyTogJ/img/component-4.svg",
  },
  {
    id: "05",
    title: ["International Buyer", "Targeting Campaigns"],
    icon: "https://c.animaapp.com/mpdwd6sgQyTogJ/img/component-4-4.svg",
  },
  {
    id: "06",
    title: ["Marketing Strategy And", "Funnel Optimisation"],
    icon: "https://c.animaapp.com/mpdwd6sgQyTogJ/img/component-4-3.svg",
  },
];

export const ServiceOfferingsGridSection = (): JSX.Element => {
  return (
    <section className="w-full border-y border-[#ece8f3] bg-titan-white px-6 py-16 sm:px-8 lg:px-[120px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-7 lg:px-10">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] px-3.5 py-[7px]">
            <span className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
              SERVICES WE PROVIDE FOR REAL ESTATE COMPANIES
            </span>
          </div>
          <div className="w-full">
            <h2 className="mt-[-1px] [font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[38px] tracking-[-0.68px] text-ebony sm:text-[40px] sm:leading-[44px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              HireNinjas provides property
              <br />
              developers and agencies with:
            </h2>
          </div>
        </header>
        <div className="grid w-full gap-5 pt-[20.9px] sm:grid-cols-2 lg:grid-cols-3">
          {serviceOfferings.map((service) => (
            <Card
              key={service.id}
              className="rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="relative flex h-full min-h-[220px] flex-col items-start gap-[13.3px] overflow-hidden px-7 pb-[38px] pt-7">
                <div className="grid h-11 w-11 place-items-center rounded-[11px] bg-magnolia">
                  <img
                    className="h-[22px] w-[22px]"
                    alt=""
                    src={service.icon}
                  />
                </div>
                <div className="flex w-full flex-col items-start px-0 pb-[0.8px] pt-[3.7px]">
                  <div className="font-satoshi-bold-upper text-[length:var(--satoshi-bold-upper-font-size)] font-[number:var(--satoshi-bold-upper-font-weight)] leading-[var(--satoshi-bold-upper-line-height)] tracking-[var(--satoshi-bold-upper-letter-spacing)] text-purple-heart [font-style:var(--satoshi-bold-upper-font-style)]">
                    {service.id}
                  </div>
                </div>
                <div className="flex w-full flex-col items-start">
                  <h3 className="mt-[-1px] [font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-ebony">
                    {service.title.map((line, index) => (
                      <span key={`${service.id}-${index}`}>
                        {line}
                        {index < service.title.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex w-full max-w-[787.78px] flex-col items-start">
          <p className="mt-[-1px] [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[24px] tracking-[0] text-tuna sm:text-[17px] sm:leading-[27.2px]">
            These services support both off-plan project launches and
            ready-property investor
            <br />
            acquisition campaigns, offering unique marketing support services
            tailored to both.
          </p>
        </div>
      </div>
    </section>
  );
};
