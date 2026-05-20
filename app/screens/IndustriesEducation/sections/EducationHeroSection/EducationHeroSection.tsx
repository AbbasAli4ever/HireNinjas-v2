import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featureItems = [
  {
    title: "Enrolment",
    description: "Seats filled per intake",
  },
  {
    title: "Multi-stage",
    description: "Parent + student journeys",
  },
  {
    title: "Global",
    description: "GCC · S.Asia · Europe",
  },
];

const funnelItems = [
  {
    label: "Enquiries",
    value: "3,840",
    widthClass: "w-full",
    paddingClass: "",
    highlighted: false,
  },
  {
    label: "Open days",
    value: "1,210",
    widthClass: "w-[87.6%]",
    paddingClass: "pl-[12.22%]",
    highlighted: false,
  },
  {
    label: "Applications",
    value: "628",
    widthClass: "w-[69.6%]",
    paddingClass: "pl-[30.1%]",
    highlighted: false,
  },
  {
    label: "Enrolled",
    value: "311",
    widthClass: "w-[51.7%]",
    paddingClass: "pl-[48%]",
    highlighted: true,
  },
];

const progressCells = [
  ...Array.from({ length: 20 }, (_, index) => ({
    key: `row-1-${index + 1}`,
    className: "bg-[#bd8cff]",
  })),
  ...Array.from({ length: 20 }, (_, index) => ({
    key: `row-2-${index + 1}`,
    className: "bg-[#bd8cff]",
  })),
  ...Array.from({ length: 9 }, (_, index) => ({
    key: `row-3-filled-${index + 1}`,
    className: "bg-[#bd8cff]",
  })),
  {
    key: "row-3-current",
    className: "bg-white",
  },
  ...Array.from({ length: 10 }, (_, index) => ({
    key: `row-3-empty-${index + 1}`,
    className: "bg-[#ffffff1f]",
  })),
];

export const EducationHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[430px] overflow-hidden">
        <div className="relative left-1/2 h-[131.77%] w-[120%] -translate-x-1/2 -translate-y-[18.82%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="relative left-1/2 h-[139.69%] w-[120%] -translate-x-1/2 -translate-y-[19.95%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:px-8 lg:py-[61px]">
        <header className="flex w-full flex-col items-start self-center">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-magnolia px-3.5 pb-[7.69px] pt-[7.5px] text-purple-heart hover:bg-magnolia">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-[3px] bg-purple-heart" />
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] leading-[19.2px]">
              EDUCATION
            </span>
          </Badge>
          <div className="mt-[21.2px] w-full pb-[0.6px]">
            <img
              className="h-auto w-full max-w-[653px]"
              alt="Education marketing that helps institutions fill seats faster"
              src="https://c.animaapp.com/mpe13x2e1PeVVk/img/education-marketing-that-helps-institutions-fill-seats-faster.svg"
            />
          </div>
          <p className="mt-[21.2px] max-w-[620px] [font-family:'Montserrat',Helvetica] text-lg font-normal leading-[28.8px] text-tuna">
            Digital marketing and student acquisition support services
            <br />
            available for schools, universities, and education providers
            <br />
            throughout Dubai and Abu Dhabi.
          </p>
          <nav
            aria-label="Education hero actions"
            className="mt-[21.2px] flex flex-wrap items-start gap-4 sm:gap-6"
          >
            <Button className="h-auto rounded-[999px] bg-[#8b39e5] px-2 py-2 pl-[22px] pr-2 hover:bg-[#7d31d8]">
              <span className="inline-flex items-center pl-3.5 pr-0">
                <span className="[font-family:'Inter',Helvetica] text-center text-[14.5px] font-medium text-white">
                  Get a Free Strategy Call
                </span>
              </span>
              <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-white">
                <ArrowRightIcon className="h-4 w-4 text-[#8b39e5]" />
              </span>
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-[999px] border-[#8b39e529] bg-transparent px-[22px] py-3.5 text-[14.5px] font-medium text-[#8b39e5] hover:bg-[#8b39e508] hover:text-[#8b39e5]"
            >
              <span className="[font-family:'Inter',Helvetica]">
                See Services
              </span>
            </Button>
          </nav>
          <div className="flex w-full flex-wrap items-start gap-x-7 gap-y-5 pb-0 pt-[18.8px]">
            {featureItems.map((item) => (
              <div
                key={item.title}
                className="min-h-[55.98px] border-l-2 border-[#d9bbff] pl-4"
              >
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[22px] font-bold leading-[35.2px] tracking-[-0.44px] text-ebony">
                  {item.title}
                </h2>
                <p className="font-montserrat-regular text-[length:var(--montserrat-regular-font-size)] font-[number:var(--montserrat-regular-font-weight)] leading-[var(--montserrat-regular-line-height)] tracking-[var(--montserrat-regular-letter-spacing)] text-dolphin [font-style:var(--montserrat-regular-font-style)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </header>
        <Card className="relative w-full self-center overflow-hidden rounded-3xl border border-[#ece8f3] bg-transparent shadow-none [background:radial-gradient(50%_50%_at_0%_0%,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_60%)]">
          <CardContent className="relative p-[23px]">
            <div className="flex flex-col gap-[12.01px]">
              <section className="rounded-[14px] bg-cherry-pie px-5 py-[18px]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-montserrat-semibold-upper text-[length:var(--montserrat-semibold-upper-font-size)] font-[number:var(--montserrat-semibold-upper-font-weight)] leading-[var(--montserrat-semibold-upper-line-height)] tracking-[var(--montserrat-semibold-upper-letter-spacing)] text-white-70 [font-style:var(--montserrat-semibold-upper-font-style)]">
                      SEATS FILLED
                    </p>
                    <p className="mt-[1px] [font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-7 tracking-[-0.24px] text-white">
                      82%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-montserrat-semibold-upper text-[length:var(--montserrat-semibold-upper-font-size)] font-[number:var(--montserrat-semibold-upper-font-weight)] leading-[var(--montserrat-semibold-upper-line-height)] tracking-[var(--montserrat-semibold-upper-letter-spacing)] text-white-70 [font-style:var(--montserrat-semibold-upper-font-style)]">
                      INTAKE
                    </p>
                    <p className="mt-[1px] [font-family:'Satoshi-Bold',Helvetica] text-lg font-bold leading-[18px] tracking-[-0.54px] text-white">
                      Sep 2026
                    </p>
                  </div>
                </div>
                <div className="mt-[10.01px] grid h-[45.64px] grid-cols-20 grid-rows-3 gap-1">
                  {progressCells.map((cell) => (
                    <div
                      key={cell.key}
                      className={`h-full w-full rounded-sm ${cell.className}`}
                    />
                  ))}
                </div>
              </section>
              <section className="relative rounded-[14px] border border-[#ece8f3] bg-white p-3.5 shadow-[0px_12px_28px_-22px_#140a282e]">
                <div className="absolute inset-0 rounded-[14px] bg-white-02" />
                <div className="relative flex flex-col gap-3">
                  {funnelItems.map((item) => (
                    <div
                      key={item.label}
                      className={`flex flex-col items-end ${item.paddingClass}`}
                    >
                      <div
                        className={`${item.widthClass} flex items-center justify-between rounded-lg px-3 py-2 ${
                          item.highlighted ? "bg-purple-heart" : "bg-magnolia"
                        }`}
                      >
                        <span
                          className={`[font-family:'Satoshi-Bold',Helvetica] text-xs font-bold leading-[19.2px] ${
                            item.highlighted ? "text-white" : "text-ebony"
                          }`}
                        >
                          {item.label}
                        </span>
                        <span
                          className={`font-satoshi-bold text-[length:var(--satoshi-bold-font-size)] font-[number:var(--satoshi-bold-font-weight)] leading-[var(--satoshi-bold-line-height)] tracking-[var(--satoshi-bold-letter-spacing)] [font-style:var(--satoshi-bold-font-style)] ${
                            item.highlighted
                              ? "text-white"
                              : "text-purple-heart"
                          }`}
                        >
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <div className="pointer-events-none absolute left-[59.95%] top-[76.28%] h-[63.35%] w-[69.69%] opacity-70 blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.35)_0%,rgba(139,58,229,0)_70%)]" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
