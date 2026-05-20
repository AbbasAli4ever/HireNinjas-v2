import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    title: "Bookings",
    description: "Appointments & consults",
  },
  {
    title: "Compliant",
    description: "UAE healthcare regulations",
  },
  {
    title: "Trust-first",
    description: "Practitioner authority content",
  },
];

const serviceCards = [
  {
    title: "Social",
    description: "Patient education",
    icon: "https://c.animaapp.com/mpdygeiw3T2LLS/img/component-3-8.svg",
  },
  {
    title: "Search",
    description: "Local visibility",
    icon: "https://c.animaapp.com/mpdygeiw3T2LLS/img/component-3-2.svg",
  },
  {
    title: "Web",
    description: "Conversion-built",
    icon: "https://c.animaapp.com/mpdygeiw3T2LLS/img/component-3-9.svg",
  },
  {
    title: "Video",
    description: "Practitioner-led",
    icon: "https://c.animaapp.com/mpdygeiw3T2LLS/img/component-3.svg",
  },
];

export const HealthcareHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[430px] overflow-hidden">
        <div className="relative left-1/2 h-[567px] w-[120%] -translate-x-1/2 blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-[-21.11%] h-[147.81%] w-[120%] -translate-x-1/2 blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 py-12 sm:px-8 lg:grid lg:min-h-[723px] lg:grid-cols-[minmax(0,1fr)_483px] lg:items-center lg:gap-12 lg:px-[120px]">
        <div className="flex max-w-[569px] flex-col items-start gap-[20.9px]">
          <Badge className="h-auto rounded-[999px] border border-[#00000029] bg-transparent px-3.5 py-[7px] hover:bg-transparent">
            <span className="mr-2.5 flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] leading-[18px] text-black">
              HEALTHCARE
            </span>
          </Badge>
          <div className="w-full">
            <img
              className="h-auto w-full"
              alt="Healthcare marketing trusted by clinics, hospitals and medical brands"
              src="https://c.animaapp.com/mpdygeiw3T2LLS/img/healthcare-marketing-trusted-by-clinics--hospitals-and-medical-b.svg"
            />
          </div>
          <p className="max-w-[667.29px] [font-family:'Montserrat',Helvetica] text-lg font-normal leading-[28.8px] text-tuna">
            Digital marketing and patient acquisition support for healthcare
            <br />
            providers, clinics and medical organizations across Dubai and Abu
            Dhabi.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Button className="h-auto rounded-[999px] bg-[#8b39e5] px-2 py-2 pl-[22px] pr-2 text-white hover:bg-[#7f31d6]">
              <span className="inline-flex items-center pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-normal">
                Get a Free Strategy Call
              </span>
              <span className="ml-3 grid h-9 w-9 place-items-center rounded-full bg-white">
                <img
                  className="h-4 w-4"
                  alt="Arrow icon"
                  src="https://c.animaapp.com/mpdygeiw3T2LLS/img/component-2.svg"
                />
              </span>
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-[999px] border-[#8b39e529] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-normal text-[#8b39e5] hover:bg-[#8b39e508] hover:text-[#8b39e5]"
            >
              See Services
            </Button>
          </div>
          <div className="grid w-full gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[56px] flex-col justify-start border-l-2 border-[#d9bbff] pl-4"
              >
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[22px] font-bold tracking-[-0.44px] leading-[35.2px] text-ebony">
                  {item.title}
                </h3>
                <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] text-dolphin">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Card className="relative overflow-hidden rounded-3xl border border-[#ece8f3] bg-transparent shadow-none [background:radial-gradient(50%_50%_at_0%_0%,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_60%)]">
          <div className="pointer-events-none absolute bottom-[-28px] right-[-8%] h-[336px] w-[69.69%] blur-[10px] opacity-70 [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.35)_0%,rgba(139,58,229,0)_70%)]" />
          <CardContent className="relative p-[22px]">
            <div className="flex flex-col gap-3">
              <Card className="rounded-[14px] border border-[#ece8f3] bg-white shadow-[0px_12px_28px_-22px_#140a282e]">
                <CardContent className="flex flex-col gap-2 px-[18px] py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col">
                      <div className="font-montserrat-semibold-upper text-[length:var(--montserrat-semibold-upper-font-size)] font-[number:var(--montserrat-semibold-upper-font-weight)] leading-[var(--montserrat-semibold-upper-line-height)] tracking-[var(--montserrat-semibold-upper-letter-spacing)] text-dolphin [font-style:var(--montserrat-semibold-upper-font-style)]">
                        PATIENT ENQUIRIES
                      </div>
                      <div className="[font-family:'Satoshi-Bold',Helvetica] text-[22px] font-normal leading-[22px] text-transparent">
                        <span className="font-bold tracking-[-0.10px] leading-[35.2px] text-[#0f0a1f]">
                          +
                        </span>
                        <span className="font-bold tracking-[-0.10px] leading-[35.2px] text-[#8a39e4]">
                          218%
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-3">
                      <div className="inline-flex rounded-[999px] border border-[#f0e2ff] bg-magnolia px-2.5 py-[5px]">
                        <span className="font-montserrat-bold text-[length:var(--montserrat-bold-font-size)] font-[number:var(--montserrat-bold-font-weight)] leading-[var(--montserrat-bold-line-height)] tracking-[var(--montserrat-bold-letter-spacing)] text-daisy-bush [font-style:var(--montserrat-bold-font-style)]">
                          MOH
                        </span>
                      </div>
                      <div className="grid h-[22px] w-[22px] place-items-center rounded-full bg-purple-heart">
                        <img
                          className="h-3 w-3"
                          alt="Indicator icon"
                          src="https://c.animaapp.com/mpdygeiw3T2LLS/img/component-3-4.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-auto w-[330.05px] max-w-full"
                    alt="Patient enquiries graph"
                    src="https://c.animaapp.com/mpdygeiw3T2LLS/img/vector.svg"
                  />
                </CardContent>
              </Card>
              <div className="grid grid-cols-2 gap-3">
                {serviceCards.map((card) => (
                  <Card
                    key={card.title}
                    className="rounded-xl border border-[#ece8f3] bg-white shadow-[0px_10px_22px_-20px_#140a282e]"
                  >
                    <CardContent className="flex min-h-[127.45px] flex-col items-start gap-[5px] p-3.5">
                      <div className="grid h-7 w-7 place-items-center rounded-lg bg-magnolia">
                        <img
                          className="h-3.5 w-3.5"
                          alt={`${card.title} icon`}
                          src={card.icon}
                        />
                      </div>
                      <h3 className="w-full font-satoshi-bold text-[length:var(--satoshi-bold-font-size)] font-[number:var(--satoshi-bold-font-weight)] leading-[var(--satoshi-bold-line-height)] tracking-[var(--satoshi-bold-letter-spacing)] text-ebony [font-style:var(--satoshi-bold-font-style)]">
                        {card.title}
                      </h3>
                      <p className="w-full font-montserrat-regular text-[length:var(--montserrat-regular-font-size)] font-[number:var(--montserrat-regular-font-weight)] leading-[var(--montserrat-regular-line-height)] tracking-[var(--montserrat-regular-letter-spacing)] text-dolphin [font-style:var(--montserrat-regular-font-style)]">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
