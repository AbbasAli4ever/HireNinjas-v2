import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const serviceHighlights = [
  {
    number: "01",
    title: "Lead Generation",
    secondLine: "& Campaigns",
    icon: "https://c.animaapp.com/mpicaoeqyWY9E4/img/background-4.svg",
  },
  {
    number: "02",
    title: "SEO & PPC",
    secondLine: "Advertising",
    icon: "https://c.animaapp.com/mpicaoeqyWY9E4/img/background-5.svg",
  },
  {
    number: "03",
    title: "Social Media",
    secondLine: "Management",
    icon: "https://c.animaapp.com/mpicaoeqyWY9E4/img/background-6.svg",
  },
  {
    number: "04",
    title: "AI-Powered",
    secondLine: "Marketing",
    icon: "https://c.animaapp.com/mpicaoeqyWY9E4/img/background-3.svg",
  },
];

export const AcquisitionServiceHighlightsSection = (): JSX.Element => {
  return (
    <section className="mt-[70px] w-full border-y border-[#ece8f3] bg-[#fafaff] px-4 py-[70px] sm:px-6 lg:px-[140px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[17px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-xs font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff] [font-family:'Montserrat',Helvetica]">
            SERVICES OFFERED TO THIS INDUSTRY
          </Badge>
          <div className="flex w-full flex-col items-start pb-[0.67px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[41px] tracking-[-0.92px] text-[#0f0a1f] sm:text-[46px] sm:leading-[49.7px]">
              From acquisition to retention.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {serviceHighlights.map((service) => (
            <Card
              key={service.number}
              className="rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex h-full min-h-[190px] flex-col items-start gap-3.5 p-7">
                <img
                  className="h-11 w-11"
                  alt="Background"
                  src={service.icon}
                />
                <div className="flex w-full flex-col items-start pb-[0.8px] pt-[3px]">
                  <p className="[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[2.08px] text-[#8a39e4]">
                    {service.number}
                  </p>
                </div>
                <div className="flex w-full flex-col items-start">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                    {service.title}
                    <br />
                    {service.secondLine}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
