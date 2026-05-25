import { Button } from "@/components/ui/button";

const trustSectionContent = {
  badge: "WHY BUSINESSES CHOOSE HIRENINJAS PACKAGES",
  title: ["Clarity, transparency,", "execution strength."],
  paragraphs: [
    [
      "Companies across Dubai and Abu Dhabi choose our",
      "affordable marketing packages Dubai businesses trust",
      "because they combine structured strategy, measurable",
      "execution, and flexible scaling support designed for regional",
      "market conditions.",
    ],
    [
      "Whether you're launching a startup campaign or expanding",
      "into multi-channel performance marketing, our packages",
      "provide the clarity, transparency, and execution strength",
      "needed to grow confidently.",
    ],
  ],
  cta: "Book a Free Consultation",
  image: "https://c.animaapp.com/mpl6davuOYe2Kc/img/image.png",
  arrowIcon: "https://c.animaapp.com/mpl6davuOYe2Kc/img/component-2.svg",
};

export const PerformanceTrustSection = (): JSX.Element => {
  return (
    <section className="relative mt-[70px] w-full">
      <div className="flex w-full flex-col items-stretch gap-8 rounded-none md:gap-6 lg:flex-row lg:items-center">
        <article className="flex min-w-0 flex-1 flex-col items-start gap-8">
          <div className="inline-flex items-center rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px]">
            <p className="whitespace-nowrap [font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] leading-[19.2px] text-[#8a39e4]">
              {trustSectionContent.badge}
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <h2 className="w-full [font-family:'Satoshi-Bold',Helvetica] text-[38px] font-bold leading-[42px] tracking-[-0.92px] text-[#0f0a1f] sm:text-[42px] sm:leading-[46px] lg:mt-[-1px] lg:text-[46px] lg:leading-[49.7px]">
              {trustSectionContent.title.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < trustSectionContent.title.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <div className="w-full [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[24px] tracking-[0] text-[#3a3447] sm:text-[16px] sm:leading-[26px] lg:text-[17px] lg:leading-[27.2px]">
              {trustSectionContent.paragraphs.map(
                (paragraph, paragraphIndex) => (
                  <p
                    key={`paragraph-${paragraphIndex}`}
                    className={paragraphIndex > 0 ? "mt-[27.2px]" : ""}
                  >
                    {paragraph.map((line, lineIndex) => (
                      <span key={`${paragraphIndex}-${lineIndex}`}>
                        {line}
                        {lineIndex < paragraph.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                ),
              )}
            </div>
          </div>
          <Button
            type="button"
            className="h-auto rounded-[999px] bg-[#8b39e5] py-2 pr-2 pl-[22px] hover:bg-[#8b39e5]/95"
          >
            <span className="inline-flex items-center pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-none tracking-[0] text-white">
              {trustSectionContent.cta}
            </span>
            <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-white">
              <img
                className="h-4 w-4"
                alt="Arrow icon"
                src={trustSectionContent.arrowIcon}
              />
            </span>
          </Button>
        </article>
        <div className="flex min-w-0 flex-1">
          <div className="h-[260px] w-full overflow-hidden rounded-[12px] bg-[#f4edf9] sm:h-[360px] lg:h-[516px]">
            <img
              className="h-full w-full object-cover"
              alt="Business growth performance dashboard"
              src={trustSectionContent.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
