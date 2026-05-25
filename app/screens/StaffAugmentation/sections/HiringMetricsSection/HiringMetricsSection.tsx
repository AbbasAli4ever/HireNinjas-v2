import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const metricCards = [
  {
    value: "48H",
    label: "Average Match Time",
  },
  {
    value: "500+",
    label: "Vetted Professionals",
  },
  {
    value: "60%",
    label: "Cost Savings vs Traditional Hiring",
  },
  {
    value: "18+",
    label: "Roles Available",
  },
];

const processSteps = [
  { title: "Sourcing", step: "Step 1" },
  { title: "Screening", step: "Step 2" },
  { title: "Onboarding", step: "Step 3" },
  { title: "Ongoing support", step: "Step 4" },
];

const descriptionParagraphs = [
  `HireNinjas provides fast and flexible staff augmentation solutions to companies looking to rapidly scale teams globally. With IT staff augmentation services and our business talent support model allowing organizations to access pre-vetted professionals without incurring delays and costs associated with traditional recruitment methods, companies can access staff quickly without incurring unnecessary expenses in traditional recruitment methods.`,
  `From marketing specialists and developers to designers and analysts, our IT staff augmentation agency quickly matches you with professionally assessed specialists within 48 hours. As your trusted IT staffing provider, we handle the sourcing, screening, onboarding, and ongoing support for your team as it expands at the precise pace you require.`,
];

export const HiringMetricsSection = (): JSX.Element => {
  return (
    <section className="relative mt-12 w-full sm:mt-[72px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-10 px-4 py-0 sm:gap-12 sm:px-6 md:px-10 lg:px-10">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-4 sm:gap-[16.99px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-magnolia px-3.5 pb-[7.69px] pt-[7.5px] font-montserrat-semibold-upper text-[length:var(--montserrat-semibold-upper-font-size)] font-[number:var(--montserrat-semibold-upper-font-weight)] tracking-[var(--montserrat-semibold-upper-letter-spacing)] text-purple-heart hover:bg-magnolia leading-[var(--montserrat-semibold-upper-line-height)] [font-style:var(--montserrat-semibold-upper-font-style)]">
            KEY STATS
          </Badge>
          <div className="flex w-full flex-col items-start pb-[0.67px] pt-0">
            <h2 className="mt-[-1.00px] self-stretch [font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-ebony sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.92px] md:text-[40px] md:leading-[44px] lg:text-[46px] lg:leading-[49.7px]">
              Fast, reliable hiring infrastructure.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {metricCards.map((metric) => (
            <Card
              key={metric.value}
              className="rounded-2xl border border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-2 p-4 sm:p-7">
                <div className="flex w-full flex-col items-start">
                  <div className="mt-[-1.00px] self-stretch [font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[1.1] tracking-[-1.08px] text-purple-heart sm:text-5xl sm:leading-[48px] sm:tracking-[-1.44px]">
                    {metric.value}
                  </div>
                </div>
                <div className="flex w-full flex-col items-start">
                  <p className="mt-[-1.00px] self-stretch font-montserrat-medium text-[13px] font-[number:var(--montserrat-medium-font-weight)] leading-[1.5] tracking-[var(--montserrat-medium-letter-spacing)] text-tuna sm:text-[length:var(--montserrat-medium-font-size)] sm:leading-[var(--montserrat-medium-line-height)] [font-style:var(--montserrat-medium-font-style)]">
                    {metric.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,530px)_minmax(0,1fr)] lg:gap-[60px]">
          <article className="flex w-full flex-col items-start gap-4 sm:gap-[15.48px]">
            {descriptionParagraphs.map((paragraph) => (
              <div key={paragraph} className="flex w-full flex-col items-start">
                <p className="mt-[-1.00px] self-stretch [font-family:'Montserrat',Helvetica] text-[14px] font-normal leading-[1.6] tracking-[0] text-tuna sm:text-base sm:leading-[25.6px]">
                  {paragraph}
                </p>
              </div>
            ))}
          </article>
          <Card className="w-full rounded-2xl border border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
            <CardContent className="flex flex-col items-start gap-3 p-4 sm:p-7">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex w-full items-center justify-between rounded-xl border border-[#ece8f3] bg-white px-4 py-3.5"
                >
                  <div className="inline-flex flex-col items-start">
                    <span className="mt-[-1.00px] whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-[15px] font-bold leading-6 tracking-[0] text-ebony">
                      {item.title}
                    </span>
                  </div>
                  <div className="inline-flex flex-col items-start rounded-[999px] bg-magnolia px-[9px] py-1">
                    <span className="mt-[-1.00px] whitespace-nowrap [font-family:'Montserrat',Helvetica] text-[11px] font-semibold leading-[17.6px] tracking-[0] text-daisy-bush">
                      {item.step}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
