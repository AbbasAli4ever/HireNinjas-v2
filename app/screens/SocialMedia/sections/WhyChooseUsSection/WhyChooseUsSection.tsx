import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    iconSrc: "https://c.animaapp.com/mp6yzze1tTdE4q/img/component-4-6.svg",
    title: ["Content Creation", "in Dubai and UAE"],
    description:
      "We create content tailored for audiences in Dubai and throughout the UAE, to ensure its messaging matches cultural norms, trends, and engagement behaviours in this region."
  },
  {
    iconSrc: "https://c.animaapp.com/mp6yzze1tTdE4q/img/component-4-7.svg",
    title: ["Platform-Specific", "Growth Execution"],
    description:
      "Each platform has a distinct algorithm and audience expectations; we optimize content formats and publishing strategies accordingly."
  },
  {
    iconSrc: "https://c.animaapp.com/mp6yzze1tTdE4q/img/component-4-3.svg",
    title: ["Integrated", "organic+paid approach"],
    description:
      "We combine organic engagement with paid campaigns in order to accelerate reach, enhance conversion rates, and maximise return."
  },
];

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fafaff] border-y border-[#ece8f3] px-6 py-16 md:px-10 lg:px-[80px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-12 lg:px-10">
        <header className="flex max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] [font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff]">
            WHY CHOOSE HIRENINJAS FOR SOCIAL MEDIA
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[38px] tracking-[-0.68px] text-[#0f0a1f] sm:text-[40px] sm:leading-[44px] md:text-[46px] md:leading-[49.7px] md:tracking-[-0.92px]">
              Locally aware. Platform-
              <br />
              fluent. Always integrated.
            </h2>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={`feature-${index}`}
              className="rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-2.5 p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#f7f1ff]">
                  <img
                    className="h-[22px] w-[22px]"
                    alt=""
                    src={feature.iconSrc}
                  />
                </div>
                <div className="w-full px-0 pb-0 pt-[9.33px]">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                    {feature.title.map((line, lineIndex) => (
                      <span key={`title-${index}-${lineIndex}`}>
                        {line}
                        {lineIndex < feature.title.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
                <div className="w-full">
                  <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-[#3a3447]">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};