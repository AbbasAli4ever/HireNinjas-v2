import { Card, CardContent } from "@/components/ui/card";

const valueItems = [
  {
    number: "01",
    title: "Regulatory Compliance",
    description:
      "HireNinjas' healthcare advertising campaigns comply with UAE regulations and MOH advertising frameworks and healthcare communication guidelines to help organizations remain compliant while running effective acquisition campaigns.",
  },
  {
    number: "02",
    title: "Patient Trust Building",
    description:
      "People choose providers they can trust. At EMD Healthcare Solutions, we develop practitioner-led content strategies, educational campaigns and authority positioning frameworks designed to build credibility and strengthen confidence before first consultation begins.",
  },
  {
    number: "03",
    title: "Appointment Generation",
    description:
      "Traffic alone cannot expand healthcare organizations. HireNinjas creates campaigns specifically tailored towards appointment bookings, consultation requests and enquiry conversions in order to maximize patient acquisition outcomes and guarantee positive patient acquisition results.",
  },
];

export const ValuePropositionSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12 px-4 sm:px-6 lg:px-0">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] px-3.5 py-[7px]">
            <span className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <p className="whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
              COMMON HEALTHCARE MARKETING CHALLENGES WE SOLVE
            </p>
          </div>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[46px] font-bold leading-[49.7px] tracking-[-0.92px] text-ebony">
              Three places we
              <br />
              add the most value.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {valueItems.map((item) => (
            <Card
              key={item.number}
              className="relative h-full rounded-2xl border border-solid border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-3 overflow-hidden px-8 pb-8 pt-8">
                <div className="pointer-events-none absolute right-[11px] top-[25px] sm:right-[13px]">
                  <span className="[font-family:'Satoshi-Bold',Helvetica] text-[56px] font-bold leading-[56px] tracking-[-2.24px] text-magnolia">
                    {item.number}
                  </span>
                </div>
                <h3 className="relative z-[1] max-w-[80%] [font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-ebony">
                  {item.title}
                </h3>
                <p className="relative z-[1] [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-tuna">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
