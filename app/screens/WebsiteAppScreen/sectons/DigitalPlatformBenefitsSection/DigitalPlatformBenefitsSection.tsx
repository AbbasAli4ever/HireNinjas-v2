import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const benefitItems = [
  {
    title: "Marketing performance",
    description: "Pages tuned to convert paid & organic traffic.",
    icon: "/web-development/tick.svg",
  },
  {
    title: "Lead generation",
    description: "Conversion-first journeys, forms, and CTAs.",
    icon: "/web-development/tick.svg",
  },
  {
    title: "SEO visibility",
    description: "Technical foundation for sustained discoverability.",
    icon: "/web-development/tick.svg",
  },
  {
    title: "Long-term scalability",
    description: "Architecture that grows with your roadmap.",
    icon: "/web-development/tick.svg",
  },
];

export const DigitalPlatformBenefitsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[radial-gradient(50%_50%_at_80%_0%,rgba(248,241,255,1)_0%,rgba(248,241,255,0)_60%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] px-4 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:py-20 xl:px-40 xl:py-24">
      <div className="mx-auto max-w-[1240px]">
        {/* <p className="mb-8 text-sm text-[#3a3447] [font-family:'Montserrat',Helvetica]">
          The highlighted section in the image is a wide white card on a soft
          white-to-lilac background. Inside it, the layout is split into two
          columns: the left side contains a rounded purple-outline badge, a
          large bold headline, and two short paragraphs; the right side contains
          four stacked benefit rows, each with a purple circular icon chip and
          concise supporting text. The whole section is clean, spacious, softly
          bordered, and centered within the page.
        </p> */}
        <Card className="relative overflow-hidden rounded-3xl border border-[#ece8f3] bg-white shadow-[0px_30px_60px_-40px_#5032c833]">
          <CardContent className="p-5 sm:p-8 md:p-10 lg:p-12 xl:p-16">
            <div className="grid grid-cols-1 gap-8 lg:gap-10 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] xl:gap-12">
              <article className="flex flex-col items-start self-center">
                <Badge
                  variant="secondary"
                  className="mb-4 lg:mb-[16.7px] rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 py-[7.5px] text-[10px] sm:text-xs font-semibold tracking-[1.68px] text-[#8a39e4] [font-family:'Montserrat',Helvetica] leading-[19.2px] hover:bg-[#f7f1ff]"
                >
                  BUILT FOR UAE BUSINESSES THAT PRIORITIZE GROWTH
                </Badge>
                <header className="max-w-[562.67px]">
                  <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[1.15] tracking-[-0.8px] text-[#0f0a1f] sm:text-[36px] sm:tracking-[-0.92px] md:text-[40px] lg:text-[46px] xl:leading-[1.08]">
                    <span className="xl:block">A digital platform </span>
                    <span className="xl:block">that earns its </span>
                    <span className="xl:block">keep — every day.</span>
                  </h2>
                </header>
                <div className="mt-4 lg:mt-[16.7px] flex w-full max-w-[562.67px] flex-col gap-3 lg:gap-[13.39px] pt-[0.59px]">
                  <p className="[font-family:'Montserrat',Helvetica] text-sm sm:text-base font-normal leading-[1.6] xl:leading-[25.6px] text-[#3a3447]">
                    Our development projects serve businesses looking beyond simple websites in their business strategy.
                  </p>
                  <p className="[font-family:'Montserrat',Helvetica] text-sm sm:text-base font-normal leading-[1.6] xl:leading-[25.6px] text-[#3a3447]">
                    Digital platforms constructed by our experts are tailored to boost marketing performance, lead generation, SEO visibility and long-term scalability, making your website an asset that generates revenue rather than an inert brochure.
                  </p>
                </div>
              </article>
              <div className="flex flex-col gap-3.5 self-center">
                {benefitItems.map((item) => (
                  <Card
                    key={item.title}
                    className="rounded-xl border border-[#f0e2ff] bg-[#f7f1ff] shadow-none"
                  >
                    <CardContent className="flex items-start gap-3.5 px-4 py-3.5">
                      <div className="grid h-7 w-7 shrink-0 place-items-center rounded-[14px] bg-[#8a39e4]">
                        <img
                          className="h-3.5 w-3.5"
                          alt={item.title}
                          src={item.icon}
                        />
                      </div>
                      <div className="flex min-w-0 flex-col items-start gap-[1.5px]">
                        <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[15px] font-bold leading-6 text-[#0f0a1f]">
                          {item.title}
                        </h3>
                        <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] text-[#3a3447]">
                          {item.description}
                        </p>
                      </div>
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
