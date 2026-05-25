import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    number: "01",
    title: "Lead Generation/Campaigns",
    icon: "https://c.animaapp.com/mpi63hrl0ms5Dd/img/background.svg",
  },
  {
    number: "02",
    title: "Video Production",
    icon: "https://c.animaapp.com/mpi63hrl0ms5Dd/img/background-1.svg",
  },
  {
    number: "03",
    title: "Social Media Management",
    icon: "https://c.animaapp.com/mpi63hrl0ms5Dd/img/background-4.svg",
  },
  {
    number: "04",
    title: "SEO Advertising",
    icon: "https://c.animaapp.com/mpi63hrl0ms5Dd/img/background-2.svg",
  },
  {
    number: "05",
    title: "PPC Advertising",
    icon: "https://c.animaapp.com/mpi63hrl0ms5Dd/img/background-3.svg",
  },
];

export const FullFunnelServicesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fafaff] border-y border-[#ece8f3]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-12 px-6 py-[70px] sm:px-10 lg:px-[120px]">
        <header className="flex max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-left text-xs font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff] [font-family:'Montserrat',Helvetica]">
            SERVICES OFFERED IN THIS SECTOR
          </Badge>
          <div className="w-full">
            <h2 className="text-[36px] leading-[40px] tracking-[-0.72px] text-[#0f0a1f] sm:text-[42px] sm:leading-[46px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px] [font-family:'Satoshi-Bold',Helvetica] font-bold">
              Lead generation, video,
              <br />
              and full-funnel ads.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.number}
              className="min-h-[172px] rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-3.5 overflow-hidden px-7 pb-[38px] pt-7">
                <img
                  className="h-11 w-11"
                  alt="Background"
                  src={service.icon}
                />
                <div className="w-full pt-[3px] pb-[0.8px]">
                  <p className="text-[13px] leading-[20.8px] tracking-[2.08px] text-[#8a39e4] [font-family:'Satoshi-Bold',Helvetica] font-bold">
                    {service.number}
                  </p>
                </div>
                <h3 className="text-[23px] leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f] [font-family:'Satoshi-Bold',Helvetica] font-bold">
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
