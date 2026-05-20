import { Card, CardContent } from "@/components/ui/card";
import { Card1 } from "./Card1";

const serviceCards = [
  {
    id: "01",
    label: "AUDIT",
    title: "Marketing Audit",
    description:
      "A marketing audit provides a structured evaluation of current marketing channels, campaigns, messaging, and funnel performance to identify gaps, wasteful spending habits, or untapped opportunities.",
    icon: "https://c.animaapp.com/mpcclquhSkUmAZ/img/component-4.svg",
    span: "col-span-6 md:col-span-3 xl:col-span-2",
    isWide: false,
  },
  {
    id: "02",
    label: "STRATEGY",
    title: "Growth Strategy Development",
    description:
      "Clear roadmap planning that addresses channel priorities, campaign structure, positioning improvement opportunities and scalable acquisition strategies.",
    icon: "https://c.animaapp.com/mpcclquhSkUmAZ/img/component-4.svg",
    span: "col-span-6 md:col-span-3 xl:col-span-2",
    isWide: false,
  },
  {
    id: "03",
    label: "REVIEW",
    title: "Campaign Performance Reviews",
    description:
      "A detailed evaluation of paid ads, SEO activity, landing pages and conversion funnels in order to increase ROI while decreasing acquisition costs.",
    icon: "https://c.animaapp.com/mpcclquhSkUmAZ/img/component-4.svg",
    span: "col-span-6 md:col-span-3 xl:col-span-2",
    isWide: false,
  },
  {
    id: "04",
    label: "FUNNEL",
    title: "Funnel Optimisation Guidance",
    description:
      "Recommendations to enhance user journeys from initial interaction through conversion, increasing lead quality and sales efficiency.",
    icon: "https://c.animaapp.com/mpcclquhSkUmAZ/img/component-4.svg",
    span: "col-span-6 md:col-span-3 xl:col-span-3",
    isWide: false,
  },
  {
    id: "05",
    label: "CHANNELS",
    title: "Channel Selection Strategy",
    description:
      "Advice on selecting an appropriate mix of SEO, PPC, social media advertising (such as AdWords or Bing Ads), video or content marketing channels based on your goals and audience behavior.",
    icon: "https://c.animaapp.com/mpcclquhSkUmAZ/img/component-4.svg",
    span: "col-span-6 md:col-span-3 xl:col-span-3",
    isWide: false,
  },
  {
    id: "06",
    label: "TEAM",
    title: "Team & Process Alignment",
    description:
      "Support for internal marketing teams by offering workflow recommendations, reporting structures and execution frameworks which ensure consistent delivery. Many businesses invest heavily in marketing activities without creating an action plan that links activity with results. HireNinjas provides experienced external guidance that assists leadership teams in prioritising channels, allocating budgets efficiently, and avoiding costly experimentation; all with the goal of supporting measurable growth across Dubai and UAE.",
    icon: "https://c.animaapp.com/mpcclquhSkUmAZ/img/component-4.svg",
    span: "col-span-6",
    isWide: true,
  },
];

export const MarketingConsultationsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white border-t border-b border-[#ece8f3]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-6 py-[70px] sm:px-10 lg:px-[140px]">
        <div className="flex w-full max-w-[1200px] flex-col items-start gap-12">
          <header className="flex w-full flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] px-3.5 py-[7px]">
              <span className="flex h-1.5 w-1.5 items-start justify-center rounded-[3px] bg-[#6ce5b1]">
                <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
              </span>
              <span className="font-inter text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
                OUR MARKETING CONSULTATION SERVICES INCLUDE
              </span>
            </div>
            <h2 className="font-satoshi text-[36px] font-bold leading-[40px] tracking-[-0.92px] text-[#0f0a1f] sm:text-[42px] sm:leading-[46px] lg:text-[46px] lg:leading-[49.7px]">
              Audit, plan, optimise — repeat.
            </h2>
          </header>
          <div className="grid w-full grid-cols-6 gap-5">
            {serviceCards.map((card) =>
              card.isWide ? (
                <div key={card.id} className={card.span}>
                  <Card1
                    id={card.id}
                    label={card.label}
                    title={card.title}
                    description={card.description}
                  />
                </div>
              ) : (
                <div key={card.id} className={card.span}>
                  <Card className="relative h-full overflow-hidden rounded-2xl border border-solid border-[#ece8f3] bg-white shadow-none">
                    <CardContent className="flex h-full flex-col items-start gap-2.5 p-7">
                      <div className="grid h-11 w-11 grid-cols-[44px] grid-rows-[44px] rounded-[11px] bg-[#f7f1ff]">
                        <img
                          className="col-[1_/_2] row-[1_/_2] h-[22px] w-[22px] place-self-center"
                          alt="Component"
                          src={card.icon}
                        />
                      </div>
                      <div className="flex w-full flex-col items-start px-0 pb-[0.8px] pt-[7px]">
                        <p className="font-satoshi mt-[-1.00px] w-fit whitespace-nowrap text-[13px] font-bold leading-[20.8px] tracking-[2.08px] text-[#8a39e4]">
                          {card.id} — {card.label}
                        </p>
                      </div>
                      <div className="flex w-full flex-col items-start px-0 pb-0 pt-[3.99px]">
                        <h3 className="font-satoshi mt-[-1.00px] self-stretch text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                          {card.title}
                        </h3>
                      </div>
                      <div className="flex w-full flex-1 flex-col items-start">
                        <p className="font-montserrat mt-[-1.00px] self-stretch text-[15px] font-normal leading-6 tracking-[0] text-[#3a3447]">
                          {card.description}
                        </p>
                      </div>
                      <div className="pointer-events-none absolute bottom-[-29px] right-[-29px] h-[140px] w-[140px] rounded-[70px] opacity-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_70%)]" />
                    </CardContent>
                  </Card>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
