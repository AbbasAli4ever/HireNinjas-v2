import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const solutionCards = [
  {
    id: "01",
    title: "SEO/PPC Advertising",
    icon: "https://c.animaapp.com/mpdygeiw3T2LLS/img/component-3-10.svg",
  },
  {
    id: "02",
    title: "Social Media Management",
    icon: "https://c.animaapp.com/mpdygeiw3T2LLS/img/component-3-6.svg",
  },
  {
    id: "03",
    title: "Website & App Development",
    icon: "https://c.animaapp.com/mpdygeiw3T2LLS/img/component-3-11.svg",
  },
  {
    id: "04",
    title: "Medical video Production",
    icon: "https://c.animaapp.com/mpdygeiw3T2LLS/img/component-3-12.svg",
  },
  {
    id: "05",
    title: ["Patient Acquisition", "Funnel Optimisation"],
    icon: "https://c.animaapp.com/mpdygeiw3T2LLS/img/component-3-5.svg",
  },
  {
    id: "06",
    title: ["Practitioner Authority", "Content Strategy"],
    icon: "https://c.animaapp.com/mpdygeiw3T2LLS/img/component-3-7.svg",
  },
];

export const HealthcareSolutionsGridSection = (): JSX.Element => {
  return (
    <section className="w-full border-y border-[#ece8f3] bg-titan-white px-6 py-[60px] sm:px-10 lg:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.67px]">
          <Badge
            variant="outline"
            className="inline-flex h-auto items-center gap-2.5 rounded-[999px] border-[#00000029] bg-transparent px-3.5 py-[7px] font-normal shadow-none hover:bg-transparent"
          >
            <span className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="flex items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] leading-[18px] text-black">
              OUR SOLUTIONS FOR HEALTHCARE ORGANISATIONS
            </span>
          </Badge>
          <h2 className="w-full [font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[1.08] tracking-[-0.92px] text-ebony sm:text-[42px] lg:text-[46px] lg:leading-[49.7px]">
            HireNinjas helps healthcare
            <br />
            providers solve common
            <br />
            marketing challenges like:
          </h2>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutionCards.map((card) => (
            <Card
              key={card.id}
              className="relative overflow-hidden rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex min-h-[172px] flex-col items-start gap-3.5 px-7 pb-[38px] pt-7">
                <div className="grid h-11 w-11 place-items-center rounded-[11px] bg-magnolia">
                  <img
                    className="h-[22px] w-[22px]"
                    alt={
                      typeof card.title === "string"
                        ? card.title
                        : card.title.join(" ")
                    }
                    src={card.icon}
                  />
                </div>
                <div className="w-full pt-[3px] pb-[0.8px]">
                  <p className="font-satoshi-bold-upper text-[length:var(--satoshi-bold-upper-font-size)] font-[number:var(--satoshi-bold-upper-font-weight)] leading-[var(--satoshi-bold-upper-line-height)] tracking-[var(--satoshi-bold-upper-letter-spacing)] text-purple-heart [font-style:var(--satoshi-bold-upper-font-style)]">
                    {card.id}
                  </p>
                </div>
                <div className="w-full">
                  {typeof card.title === "string" ? (
                    <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-ebony">
                      {card.title}
                    </h3>
                  ) : (
                    <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-ebony">
                      {card.title.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
