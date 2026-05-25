import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    number: "01",
    title: "Digital Marketing Strategy",
    icon: "https://c.animaapp.com/mpicaoeqyWY9E4/img/background-7.svg",
  },
  {
    number: "02",
    title: "SEO/PPC Advertising",
    icon: "https://c.animaapp.com/mpicaoeqyWY9E4/img/background-5.svg",
  },
  {
    number: "03",
    title: "Branding & Identity",
    icon: "https://c.animaapp.com/mpicaoeqyWY9E4/img/background-1.svg",
  },
  {
    number: "04",
    title: "AI-Powered Marketing",
    icon: "https://c.animaapp.com/mpicaoeqyWY9E4/img/background-2.svg",
  },
];

export const IndustryServiceOfferingSection = (): JSX.Element => {
  return (
    <section className="w-full border-y border-[#ece8f3] bg-[#fafaff] px-4 py-[70px] sm:px-6 lg:px-[140px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge className="inline-flex h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-[#8a39e4] hover:bg-[#f7f1ff]">
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] whitespace-nowrap">
              SERVICES WE PROVIDE FOR THIS INDUSTRY
            </span>
          </Badge>
          <h2 className="w-full [font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[42px] tracking-[-0.92px] text-[#0f0a1f] sm:text-[46px] sm:leading-[49.7px]">
            Built for banks, insurers,
            <br />
            investment firms and fintechs.
          </h2>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.number}
              className="h-full rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-3.5 overflow-hidden px-7 pb-[37.99px] pt-7">
                <img
                  className="h-11 w-11"
                  alt=""
                  aria-hidden="true"
                  src={service.icon}
                />
                <p className="w-full pt-[3px] [font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[2.08px] text-[#8a39e4]">
                  {service.number}
                </p>
                <h3 className="w-full [font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                  {service.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
