import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    iconSrc: "/social-media/chat.svg",
    title: ["Content Creation", "in Dubai and UAE"],
    description:
      "We create content tailored for audiences in Dubai and throughout the UAE, to ensure its messaging matches cultural norms, trends, and engagement behaviours in this region."
  },
  {
    iconSrc: "/social-media/mount.svg",
    title: ["Platform-Specific", "Growth Execution"],
    description:
      "Each platform has a distinct algorithm and audience expectations; we optimize content formats and publishing strategies accordingly."
  },
  {
    iconSrc: "/social-media/link.svg",
    title: ["Integrated", "organic+paid approach"],
    description:
      "We combine organic engagement with paid campaigns in order to accelerate reach, enhance conversion rates, and maximise return."
  },
];

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fafaff] border-y border-[#ece8f3] px-5 py-10 sm:px-8 sm:py-14 md:px-10 lg:px-4 lg:py-20 xl:px-[80px] xl:py-24">
      <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-8 sm:gap-10 lg:gap-12 lg:px-10">
        <header className="flex w-full flex-col items-start gap-3 sm:gap-[16.83px] lg:max-w-[760px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] [font-family:'Montserrat',Helvetica] text-[10px] font-semibold tracking-[1.2px] text-[#8a39e4] hover:bg-[#f7f1ff] sm:text-xs sm:tracking-[1.68px]">
            WHY CHOOSE HIRENINJAS FOR SOCIAL MEDIA
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.68px] md:text-[40px] md:leading-[44px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              Locally aware. Platform-
              <br />
              fluent. Always integrated.
            </h2>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={`feature-${index}`}
              className="rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-2.5 p-5 sm:p-6 lg:p-8">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#f7f1ff] sm:h-12 sm:w-12">
                  <img
                    className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
                    alt=""
                    src={feature.iconSrc}
                  />
                </div>
                <div className="w-full px-0 pb-0 pt-2 sm:pt-[9.33px]">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-[22px] tracking-[-0.36px] text-[#0f0a1f] sm:text-[20px] sm:leading-[24px] lg:text-[23px] lg:leading-[27.6px] lg:tracking-[-0.46px]">
                    {feature.title.map((line, lineIndex) => (
                      <span key={`title-${index}-${lineIndex}`}>
                        {line}
                        {lineIndex < feature.title.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
                <div className="w-full">
                  <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-[14px] lg:text-[15px] lg:leading-6">
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