import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const strategyPillars = [
  {
    number: "01",
    title: "Brand Positioning & Acquisition",
    description: "Sharpen who you are and how you win attention in the UAE market.",
  },
  {
    number: "02",
    title: "Conversion Optimization",
    description: "Tighten funnels so every dollar drives more pipeline and revenue.",
  },
  {
    number: "03",
    title: "Reporting Framework",
    description: "Decision-grade dashboards built on the metrics that matter to growth.",
  },
  {
    number: "04",
    title: "Long-term Scalability",
    description: "Systems that compound over time — not just quick wins that fade.",
  },
];

const principles = [
  {
    icon: "📊",
    title: "Data-Led Decisions",
    description:
      "Every recommendation we make is grounded in real audience data, competitor intelligence and channel analytics — not assumptions.",
  },
  {
    icon: "🇦🇪",
    title: "UAE Market Expertise",
    description:
      "We understand Dubai and Abu Dhabi buyer behaviour, platform nuances and local market dynamics that generic agencies simply don't.",
  },
  {
    icon: "📈",
    title: "Full-Funnel Accountability",
    description:
      "We tie every activity to revenue outcomes. Strategy without measurable results is just a document. We build for compounding growth.",
  },
];

const roadmapItems = [
  {
    title: "Competitor Intelligence Report",
    description: "Deep analysis of your top competitors' positioning, messaging, channels and spend to uncover gaps you can exploit.",
    tag: "Research",
    wide: true,
  },
  {
    title: "Audience Behaviour Map",
    description: "Detailed segmentation of your ideal customers — their triggers, objections, platforms and purchase journey stages.",
    tag: "Insights",
    wide: true,
  },
  {
    title: "Channel Strategy Blueprint",
    description: "A precise breakdown of which channels to activate, in what order, with what budget allocation.",
    tag: "Strategy",
    wide: false,
  },
  {
    title: "90-Day Growth Roadmap",
    description: "A phased, prioritised action plan with clear milestones and expected outcomes at each stage.",
    tag: "Planning",
    wide: false,
  },
  {
    title: "KPI & Reporting Framework",
    description: "Custom dashboards and tracking infrastructure so you always know what's working.",
    tag: "Analytics",
    wide: false,
  },
  {
    title: "Quarterly Strategy Reviews",
    description: "Regular refinement sessions with our senior strategists to adapt your roadmap as the market evolves.",
    tag: "Ongoing",
    wide: true,
    full: true,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: "We review your current marketing, analytics, competitors and market position to establish a clear baseline.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Our strategists build a custom growth blueprint aligned to your commercial goals and UAE market context.",
  },
  {
    number: "03",
    title: "Channel Planning",
    description: "We map the right mix of channels, content formats and budget allocation to maximise ROI.",
  },
  {
    number: "04",
    title: "Launch & Execute",
    description: "Campaigns go live with full tracking in place — every touchpoint measured from day one.",
  },
  {
    number: "05",
    title: "Optimise & Scale",
    description: "Continuous refinement based on live data drives compounding performance over time.",
  },
];

export const DigitalMarketingStrategyPage = (): JSX.Element => {
  return (
    <div className="w-full bg-white">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="relative w-full overflow-hidden bg-white px-4 pb-0 pt-[96px] sm:px-6 lg:px-[120px]">
          <div className="pointer-events-none absolute left-[20%] top-0 h-[580px] w-[720px] -translate-x-1/2 rounded-full bg-[#8b3ae5] opacity-[0.12] blur-[100px]" />
          <div className="pointer-events-none absolute right-[-5%] top-0 h-[460px] w-[500px] rounded-full bg-[#bd8cff] opacity-[0.28] blur-[80px]" />
          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-start gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex w-full max-w-[640px] flex-col gap-6 lg:pb-[80px]">
              <div className="inline-flex items-center gap-2.5 self-start rounded-[999px] border border-[#00000029] px-3.5 py-2">
                <div className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
                  <div className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                </div>
                <p className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-black uppercase whitespace-nowrap">
                  Digital Marketing Strategy
                </p>
              </div>
              <h1 className="[font-family:'Satoshi-Black',Helvetica] text-[44px] font-black leading-[1.02] tracking-[-1.2px] text-[#0f0a1f] sm:text-[56px] lg:text-[68px]">
                Digital Marketing Strategy for Brands Looking to Scale Faster
              </h1>
              <p className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[26px] text-[#3a3447] sm:text-[17px]">
                Data-driven marketing roadmaps created to assist businesses across Dubai and UAE convert their marketing budgets into predictable, measurable growth.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="h-auto rounded-[999px] bg-[#8b39e5] px-2 py-2 pl-[22px] pr-2 hover:bg-[#7f32d5]" data-testid="button-get-strategy">
                  <span className="inline-flex items-center pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium text-white">
                    Get Your Strategy
                  </span>
                  <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-white">
                    <img className="h-4 w-4" alt="Arrow" src="/figmaAssets/component-2.svg" />
                  </span>
                </Button>
                <Button variant="outline" className="h-auto rounded-[999px] border-[#0f0a1f29] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium text-[#0f0a1f] hover:bg-[#f5f0ff]" data-testid="button-free-consultation">
                  Free Consultation
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 border-t border-[#ece8f3] pt-6 sm:gap-10">
                {[
                  { value: "+ROI", label: "Measurable returns" },
                  { value: "UAE", label: "Built for Dubai market" },
                  { value: "Quarterly", label: "Reviews & refinement" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col border-l-2 border-[#8b3ae5] pl-4">
                    <span className="[font-family:'Satoshi-Black',Helvetica] text-[22px] font-black leading-tight tracking-[-0.5px] text-[#0f0a1f]">
                      {stat.value}
                    </span>
                    <span className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[19px] text-[#6b6478]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden w-full max-w-[466px] lg:block">
              <div className="relative h-[640px] overflow-hidden rounded-[24px] border border-[#f1e3ff] bg-gradient-to-br from-[#f8f1ff] to-white">
                <div className="pointer-events-none absolute right-[-50px] top-[-50px] h-[300px] w-[300px] rounded-full bg-[#8b3ae5] opacity-[0.12] blur-[60px]" />
                <div className="absolute inset-0 flex flex-col items-start gap-3 p-8 pt-10">
                  <p className="[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold tracking-[1.4px] uppercase text-[#8b3ae5]">Strategy Blueprint</p>
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-2xl font-bold text-[#0f0a1f]">Your growth plan,<br />built for the UAE</h3>
                  <div className="mt-4 flex w-full flex-col gap-3">
                    {strategyPillars.map((pillar) => (
                      <div key={pillar.number} className="flex items-start gap-3 rounded-[12px] bg-white/70 p-3.5 shadow-[0px_1px_4px_rgba(139,58,229,0.08)] backdrop-blur-sm">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#8b3ae5]">
                          <span className="[font-family:'Satoshi-Bold',Helvetica] text-xs font-bold text-white">{pillar.number}</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="[font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-tight text-[#0f0a1f]">{pillar.title}</span>
                          <span className="[font-family:'Montserrat',Helvetica] text-xs font-normal leading-[17px] text-[#6b6478]">{pillar.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO / BLUEPRINT */}
        <section className="relative w-full px-4 py-[80px] sm:px-6 lg:px-[140px]">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="mb-12 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2.5 self-start rounded-[999px] border border-[#00000029] px-3.5 py-2">
                <div className="h-1.5 w-1.5 rounded-[3px] bg-[#6ce5b1] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                <p className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-black uppercase whitespace-nowrap">
                  Build a Smarter Digital Growth Roadmap
                </p>
              </div>
              <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[40px] font-bold leading-[1.15] tracking-[-0.96px] text-[#0f0a1f] sm:text-[48px]">
                Strategy, tailored to commercial<br className="hidden lg:block" /> goals not guesswork.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col gap-5">
                <p className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] text-[#3a3447]">
                  At HireNinjas, we create custom digital marketing strategies tailored specifically for businesses in Dubai and throughout the UAE who seek direction, clarity, and measurable performance from their marketing investments.
                </p>
                <p className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] text-[#3a3447]">
                  Our strategy process leverages competitor intelligence, audience behavior insights, keyword opportunity mapping, and channel performance forecasting to create a strategic growth blueprint tailored specifically to your commercial goals. Instead of leaving growth plans up to chance or isolated tactics alone, we define how each marketing channel works together across the full customer journey.
                </p>
                <p className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] text-[#3a3447]">
                  HireNinjas' strategy services range from brand positioning and acquisition strategy, conversion optimization and reporting framework development, all the way through to long-term scalability and measurable return on investment (ROI).
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-[16px] border border-[#f1e3ff] bg-gradient-to-b from-[#f8f1ff] to-white p-7">
                {strategyPillars.map((pillar) => (
                  <div key={pillar.number} className="flex items-start gap-3.5 rounded-[12px] p-3.5">
                    <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#8b3ae5]">
                      <span className="[font-family:'Satoshi-Bold',Helvetica] text-sm font-bold text-white">{pillar.number}</span>
                    </div>
                    <div className="flex flex-col gap-1 pt-0.5">
                      <span className="[font-family:'Satoshi-Bold',Helvetica] text-[17px] font-bold leading-tight tracking-[-0.34px] text-[#0f0a1f]">{pillar.title}</span>
                      <span className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22px] text-[#3a3447]">{pillar.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="relative w-full bg-[#fafaff] px-4 py-[80px] sm:px-6 lg:px-[140px]">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="mb-12 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2.5 self-start rounded-[999px] border border-[#00000029] px-3.5 py-2">
                <div className="h-1.5 w-1.5 rounded-[3px] bg-[#6ce5b1] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                <p className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-black uppercase whitespace-nowrap">Why HireNinjas</p>
              </div>
              <h2 className="max-w-[760px] [font-family:'Satoshi-Bold',Helvetica] text-[40px] font-bold leading-[1.15] tracking-[-0.96px] text-[#0f0a1f] sm:text-[48px]">
                Three principles behind every roadmap we deliver.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((p) => (
                <article key={p.title} className="flex flex-col gap-4 rounded-[18px] border border-[#ece8f3] bg-white p-7 shadow-[0px_2px_12px_rgba(139,58,229,0.06)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#f8f1ff] text-2xl">
                    {p.icon}
                  </div>
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-xl font-bold leading-tight tracking-[-0.3px] text-[#0f0a1f]">
                    {p.title}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22px] text-[#3a3447]">
                    {p.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ROADMAP / WHAT'S INCLUDED */}
        <section className="relative w-full px-4 py-[80px] sm:px-6 lg:px-[140px]">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="mb-12 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2.5 self-start rounded-[999px] border border-[#00000029] px-3.5 py-2">
                <div className="h-1.5 w-1.5 rounded-[3px] bg-[#6ce5b1] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                <p className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-black uppercase whitespace-nowrap">What's Included</p>
              </div>
              <h2 className="max-w-[760px] [font-family:'Satoshi-Bold',Helvetica] text-[40px] font-bold leading-[1.15] tracking-[-0.96px] text-[#0f0a1f] sm:text-[48px]">
                A complete strategic toolkit, assembled around your goals.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {roadmapItems.filter((i) => !i.full).map((item) => (
                <article
                  key={item.title}
                  className={`flex flex-col gap-3 rounded-[16px] border border-[#ece8f3] bg-white p-6 shadow-[0px_2px_8px_rgba(139,58,229,0.05)] ${item.wide ? "sm:col-span-2 lg:col-span-1" : ""}`}
                  data-testid={`card-roadmap-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <span className="inline-flex w-fit items-center rounded-[999px] bg-[#f8f1ff] px-3 py-1 [font-family:'Montserrat',Helvetica] text-[11px] font-semibold tracking-[0.5px] text-[#591f97]">
                    {item.tag}
                  </span>
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-tight tracking-[-0.3px] text-[#0f0a1f]">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22px] text-[#3a3447]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            {roadmapItems.filter((i) => i.full).map((item) => (
              <article
                key={item.title}
                className="mt-4 flex flex-col gap-3 rounded-[16px] border border-[#ece8f3] bg-[#fafaff] p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                data-testid="card-roadmap-quarterly"
              >
                <div className="flex flex-col gap-3">
                  <span className="inline-flex w-fit items-center rounded-[999px] bg-[#f8f1ff] px-3 py-1 [font-family:'Montserrat',Helvetica] text-[11px] font-semibold tracking-[0.5px] text-[#591f97]">
                    {item.tag}
                  </span>
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-tight tracking-[-0.3px] text-[#0f0a1f]">
                    {item.title}
                  </h3>
                  <p className="max-w-[700px] [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22px] text-[#3a3447]">
                    {item.description}
                  </p>
                </div>
                <Button className="h-auto shrink-0 rounded-[999px] bg-[#8b39e5] px-2 py-2 pl-[22px] pr-2 hover:bg-[#7f32d5]" data-testid="button-learn-more">
                  <span className="inline-flex items-center pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium text-white">Learn more</span>
                  <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-white">
                    <img className="h-4 w-4" alt="Arrow" src="/figmaAssets/component-2.svg" />
                  </span>
                </Button>
              </article>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="relative w-full bg-[#fafaff] px-4 py-[80px] sm:px-6 lg:px-[140px]">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="mb-12 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2.5 self-start rounded-[999px] border border-[#00000029] px-3.5 py-2">
                <div className="h-1.5 w-1.5 rounded-[3px] bg-[#6ce5b1] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                <p className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-black uppercase whitespace-nowrap">Our Process</p>
              </div>
              <h2 className="max-w-[760px] [font-family:'Satoshi-Bold',Helvetica] text-[40px] font-bold leading-[1.15] tracking-[-0.96px] text-[#0f0a1f] sm:text-[48px]">
                Five steps from baseline to compounding growth.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step) => (
                <article key={step.number} className="flex flex-col gap-4 rounded-[16px] border border-[#ece8f3] bg-white p-6" data-testid={`card-process-${step.number}`}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#8b3ae5]">
                    <span className="[font-family:'Satoshi-Bold',Helvetica] text-sm font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[17px] font-bold leading-tight tracking-[-0.3px] text-[#0f0a1f]">
                    {step.title}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22px] text-[#3a3447]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative w-full overflow-hidden px-4 py-[80px] sm:px-6 lg:px-[140px]">
          <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-[28px] bg-[#4a0d8c] px-8 py-14 sm:px-14 lg:px-[80px]">
            <div className="pointer-events-none absolute right-[-10%] top-[-30%] h-[500px] w-[500px] rounded-full bg-[#8b3ae5] opacity-40 blur-[80px]" />
            <div className="relative z-10 flex flex-col items-start gap-5 lg:max-w-[600px]">
              <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-[#ffffff29] px-3.5 py-2">
                <div className="h-1.5 w-1.5 rounded-[3px] bg-[#6ce5b1] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                <p className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-white uppercase whitespace-nowrap">Let's Talk</p>
              </div>
              <h2 className="[font-family:'Satoshi-Black',Helvetica] text-[36px] font-black leading-[1.1] tracking-[-0.8px] text-white sm:text-[48px]">
                Turn marketing budgets into measurable growth.
              </h2>
              <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[26px] text-[#f5efe6c7] sm:text-base">
                Contact our strategy team now for a complimentary consultation and discover how a digital roadmap can accelerate business growth across Dubai and UAE.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="h-auto rounded-[999px] bg-white px-2 py-2 pl-[22px] pr-2 text-[#14101f] hover:bg-white/95" data-testid="button-cta-consultation">
                  <span className="inline-flex items-center pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium">Get Your Strategy</span>
                  <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-[#3a0d8c]">
                    <img className="h-4 w-4" alt="Arrow" src="/figmaAssets/component-2.svg" />
                  </span>
                </Button>
                <Button variant="ghost" className="h-auto rounded-[999px] border border-solid border-[#f5efe629] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6]" data-testid="button-cta-contact">
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};
