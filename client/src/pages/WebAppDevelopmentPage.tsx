import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const services = [
  { title: "Custom Web Platforms", tag: "Scale", description: "Enterprise-grade web platforms built for performance, flexibility and growth — tailored to your business model." },
  { title: "iOS & Android Apps", tag: "Mobile", description: "Native and cross-platform mobile applications that deliver seamless user experiences across all devices." },
  { title: "E-Commerce Solutions", tag: "Commerce", description: "Conversion-optimised online stores that turn browsers into buyers — from Shopify to fully custom builds." },
  { title: "API & Integrations", tag: "Backend", description: "Robust API architecture and third-party integrations that connect your tools and power your operations." },
  { title: "Web App Development", tag: "SaaS", description: "Complex web applications, dashboards and SaaS products built for scale from the ground up." },
  { title: "UI/UX Design", tag: "Design", description: "Research-led design systems that balance beautiful aesthetics with intuitive user journeys." },
];

const principles = [
  {
    icon: "⚡",
    title: "Built for Performance",
    description: "Every product we ship is optimised for speed, SEO and Core Web Vitals — because slow sites cost you customers.",
  },
  {
    icon: "📱",
    title: "Mobile-First Always",
    description: "We design and build with mobile as the primary experience, ensuring your product works flawlessly on every screen size.",
  },
  {
    icon: "🔒",
    title: "Scalable & Secure",
    description: "Our architecture decisions anticipate growth — built to handle increasing load without rebuilding from scratch.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description: "We audit your requirements, define user journeys and map the full technical scope before writing a single line of code.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Wireframes, prototypes and full design systems built in Figma — tested with real users before development begins.",
  },
  {
    number: "03",
    title: "Development Sprints",
    description: "Agile two-week sprints with regular demos so you see progress early and can provide feedback throughout.",
  },
  {
    number: "04",
    title: "QA & Testing",
    description: "Cross-device, cross-browser testing with performance audits and security reviews before every launch.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "Smooth deployment with full handover documentation, training and ongoing support packages available.",
  },
];

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "Vue", "TypeScript"] },
  { category: "Mobile", items: ["React Native", "Swift", "Kotlin", "Flutter"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "REST & GraphQL"] },
  { category: "Cloud", items: ["AWS", "Vercel", "Docker", "CI/CD Pipelines"] },
];

const deliverables = [
  { title: "Technical Discovery Report", description: "Full scope document covering architecture, integrations, third-party dependencies and project timeline.", tag: "Planning", wide: true },
  { title: "UI/UX Design System", description: "Component library, style guide and full Figma prototype delivered before development starts.", tag: "Design", wide: true },
  { title: "Responsive Web Build", description: "Pixel-perfect, performance-optimised build across all breakpoints and browsers.", tag: "Development" },
  { title: "Mobile App (iOS & Android)", description: "Native or cross-platform apps submitted to App Store and Google Play.", tag: "Mobile" },
  { title: "QA & Testing Suite", description: "Automated and manual testing reports covering functionality, performance and security.", tag: "Quality" },
  { title: "Post-Launch Support", description: "Ongoing maintenance, updates and performance monitoring — so your product keeps improving after launch.", tag: "Ongoing", full: true },
];

export const WebAppDevelopmentPage = (): JSX.Element => {
  return (
    <div className="w-full bg-white">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="relative w-full overflow-hidden bg-white px-4 pb-0 pt-[96px] sm:px-6 lg:px-[120px]">
          <div className="pointer-events-none absolute left-[20%] top-0 h-[580px] w-[720px] -translate-x-1/2 rounded-full bg-[#8b3ae5] opacity-[0.12] blur-[100px]" />
          <div className="pointer-events-none absolute right-[-5%] top-0 h-[460px] w-[500px] rounded-full bg-[#bd8cff] opacity-[0.25] blur-[80px]" />
          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full max-w-[580px] flex-col gap-6 lg:pb-[80px]">
              <div className="inline-flex items-center gap-2.5 self-start rounded-[999px] border border-[#00000029] px-3.5 py-2">
                <div className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
                  <div className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                </div>
                <p className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-black uppercase whitespace-nowrap">
                  Website & App Development
                </p>
              </div>
              <h1 className="[font-family:'Satoshi-Black',Helvetica] text-[44px] font-black leading-[1.02] tracking-[-1.2px] text-[#0f0a1f] sm:text-[56px] lg:text-[64px]">
                Web & App Products Built to Perform and Scale
              </h1>
              <p className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[26px] text-[#3a3447] sm:text-[17px]">
                From custom web platforms to iOS and Android apps — we build high-performance digital products for ambitious businesses across Dubai and the UAE.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="h-auto rounded-[999px] bg-[#8b39e5] px-2 py-2 pl-[22px] pr-2 hover:bg-[#7f32d5]" data-testid="button-start-project">
                  <span className="inline-flex items-center pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium text-white">
                    Start Your Project
                  </span>
                  <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-white">
                    <img className="h-4 w-4" alt="Arrow" src="/figmaAssets/component-2.svg" />
                  </span>
                </Button>
                <Button variant="outline" className="h-auto rounded-[999px] border-[#0f0a1f29] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium text-[#0f0a1f] hover:bg-[#f5f0ff]" data-testid="button-view-work">
                  View Our Work
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 border-t border-[#ece8f3] pt-6 sm:gap-10">
                {[
                  { value: "48h", label: "Typical kickoff timeline" },
                  { value: "100%", label: "Mobile-first builds" },
                  { value: "UAE", label: "Dubai & Abu Dhabi based" },
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

            {/* Right side: browser + phone mockup card */}
            <div className="hidden w-full max-w-[560px] lg:block">
              <div className="relative h-[640px] overflow-hidden rounded-[24px] border border-[#ece8f3] bg-gradient-to-br from-[#f8f1ff] to-white">
                <div className="pointer-events-none absolute right-[-40px] top-[-60px] h-[280px] w-[280px] rounded-full bg-[#bd8cff] opacity-[0.25] blur-[60px]" />
                {/* Browser mockup */}
                <div className="absolute left-6 right-16 top-8 overflow-hidden rounded-[13px] bg-white shadow-[2px_2px_0px_0px_#b6b6b6,4px_4px_0px_0px_#797979,6px_6px_0px_0px_#3d3d3d]">
                  <div className="flex items-center gap-1.5 border-b border-[#f3f0f9] bg-[#fafaff] px-3 py-2">
                    <div className="h-[7px] w-[7px] rounded-full bg-[#ece8f3]" />
                    <div className="h-[7px] w-[7px] rounded-full bg-[#ece8f3]" />
                    <div className="h-[7px] w-[7px] rounded-full bg-[#ece8f3]" />
                    <div className="ml-2 flex-1 rounded-full border border-[#ece8f3] bg-white px-2 py-1">
                      <span className="[font-family:'Montserrat',Helvetica] text-[8px] text-[#6b6478]">hireninjas.ae/your-brand</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="mb-2 h-[42px] w-full rounded-[3px] bg-gradient-to-r from-[#f1e3ff] to-[#dabcff]" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-[52px] rounded-[3px] bg-[#f8f1ff]" />
                      <div className="h-[52px] rounded-[3px] bg-[#f3eeff]" />
                    </div>
                    <div className="mt-2 h-4 w-3/4 rounded bg-[#f0ebfa]" />
                    <div className="mt-1.5 h-3 w-1/2 rounded bg-[#f5f2fb]" />
                  </div>
                </div>

                {/* Service tags list */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                  {[
                    { title: "Custom Web Platforms", tag: "Scale" },
                    { title: "iOS & Android Apps", tag: "Mobile" },
                    { title: "E-Commerce Solutions", tag: "Commerce" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center justify-between rounded-[12px] border border-[#ece8f3] bg-white px-4 py-3.5">
                      <span className="[font-family:'Satoshi-Bold',Helvetica] text-[15px] font-bold text-[#0f0a1f]">{item.title}</span>
                      <span className="rounded-[999px] bg-[#f8f1ff] px-2.5 py-1 [font-family:'Montserrat',Helvetica] text-[11px] font-semibold text-[#591f97]">{item.tag}</span>
                    </div>
                  ))}
                </div>

                {/* Avatar group */}
                <div className="absolute bottom-[224px] right-6 flex items-center">
                  <div className="flex -space-x-2">
                    {["#8b3ae5", "#6c4ec9", "#4a1f80", "#591f97", "#7b2aba"].map((color, i) => (
                      <div key={i} className="h-[30px] w-[30px] rounded-full border-2 border-white" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                  <span className="ml-2 [font-family:'Montserrat',Helvetica] text-sm font-medium text-[#3a3447]">50+ delivered</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="relative w-full px-4 py-[80px] sm:px-6 lg:px-[140px]">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="mb-12 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2.5 self-start rounded-[999px] border border-[#00000029] px-3.5 py-2">
                <div className="h-1.5 w-1.5 rounded-[3px] bg-[#6ce5b1] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                <p className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-black uppercase whitespace-nowrap">What We Build</p>
              </div>
              <h2 className="max-w-[760px] [font-family:'Satoshi-Bold',Helvetica] text-[40px] font-bold leading-[1.15] tracking-[-0.96px] text-[#0f0a1f] sm:text-[48px]">
                Every type of digital product, delivered end-to-end.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className="flex flex-col gap-3 rounded-[16px] border border-[#ece8f3] bg-white p-6 transition-shadow hover:shadow-[0px_4px_20px_rgba(139,58,229,0.1)]" data-testid={`card-service-${s.title.replace(/\s+/g, "-").toLowerCase()}`}>
                  <span className="inline-flex w-fit items-center rounded-[999px] bg-[#f8f1ff] px-3 py-1 [font-family:'Montserrat',Helvetica] text-[11px] font-semibold tracking-[0.5px] text-[#591f97]">
                    {s.tag}
                  </span>
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-tight tracking-[-0.3px] text-[#0f0a1f]">{s.title}</h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22px] text-[#3a3447]">{s.description}</p>
                </article>
              ))}
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
                Three principles behind every product we ship.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((p) => (
                <article key={p.title} className="flex flex-col gap-4 rounded-[18px] border border-[#ece8f3] bg-white p-7 shadow-[0px_2px_12px_rgba(139,58,229,0.06)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#f8f1ff] text-2xl">{p.icon}</div>
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-xl font-bold leading-tight tracking-[-0.3px] text-[#0f0a1f]">{p.title}</h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22px] text-[#3a3447]">{p.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="relative w-full px-4 py-[80px] sm:px-6 lg:px-[140px]">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="mb-12 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2.5 self-start rounded-[999px] border border-[#00000029] px-3.5 py-2">
                <div className="h-1.5 w-1.5 rounded-[3px] bg-[#6ce5b1] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                <p className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-black uppercase whitespace-nowrap">Technology</p>
              </div>
              <h2 className="max-w-[760px] [font-family:'Satoshi-Bold',Helvetica] text-[40px] font-bold leading-[1.15] tracking-[-0.96px] text-[#0f0a1f] sm:text-[48px]">
                Modern stack. Battle-tested tools.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {techStack.map((stack) => (
                <div key={stack.category} className="flex flex-col gap-3 rounded-[16px] border border-[#ece8f3] bg-[#fafaff] p-5">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold tracking-[1.4px] uppercase text-[#6b6478]">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span key={item} className="rounded-[8px] border border-[#ece8f3] bg-white px-3 py-1.5 [font-family:'Montserrat',Helvetica] text-[13px] font-medium text-[#0f0a1f]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="relative w-full bg-[#fafaff] px-4 py-[80px] sm:px-6 lg:px-[140px]">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="mb-12 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2.5 self-start rounded-[999px] border border-[#00000029] px-3.5 py-2">
                <div className="h-1.5 w-1.5 rounded-[3px] bg-[#6ce5b1] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                <p className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-black uppercase whitespace-nowrap">What's Included</p>
              </div>
              <h2 className="max-w-[760px] [font-family:'Satoshi-Bold',Helvetica] text-[40px] font-bold leading-[1.15] tracking-[-0.96px] text-[#0f0a1f] sm:text-[48px]">
                A complete build, assembled around your goals.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {deliverables.filter((d) => !d.full).map((item) => (
                <article key={item.title} className={`flex flex-col gap-3 rounded-[16px] border border-[#ece8f3] bg-white p-6 ${item.wide ? "sm:col-span-2 lg:col-span-1" : ""}`} data-testid={`card-deliverable-${item.title.replace(/\s+/g, "-").toLowerCase()}`}>
                  <span className="inline-flex w-fit items-center rounded-[999px] bg-[#f8f1ff] px-3 py-1 [font-family:'Montserrat',Helvetica] text-[11px] font-semibold tracking-[0.5px] text-[#591f97]">{item.tag}</span>
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-tight tracking-[-0.3px] text-[#0f0a1f]">{item.title}</h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22px] text-[#3a3447]">{item.description}</p>
                </article>
              ))}
            </div>
            {deliverables.filter((d) => d.full).map((item) => (
              <article key={item.title} className="mt-4 flex flex-col gap-3 rounded-[16px] border border-[#ece8f3] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <div className="flex flex-col gap-3">
                  <span className="inline-flex w-fit items-center rounded-[999px] bg-[#f8f1ff] px-3 py-1 [font-family:'Montserrat',Helvetica] text-[11px] font-semibold tracking-[0.5px] text-[#591f97]">{item.tag}</span>
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-tight tracking-[-0.3px] text-[#0f0a1f]">{item.title}</h3>
                  <p className="max-w-[700px] [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22px] text-[#3a3447]">{item.description}</p>
                </div>
                <Button className="h-auto shrink-0 rounded-[999px] bg-[#8b39e5] px-2 py-2 pl-[22px] pr-2 hover:bg-[#7f32d5]">
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
        <section className="relative w-full px-4 py-[80px] sm:px-6 lg:px-[140px]">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="mb-12 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2.5 self-start rounded-[999px] border border-[#00000029] px-3.5 py-2">
                <div className="h-1.5 w-1.5 rounded-[3px] bg-[#6ce5b1] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                <p className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-black uppercase whitespace-nowrap">Our Process</p>
              </div>
              <h2 className="max-w-[760px] [font-family:'Satoshi-Bold',Helvetica] text-[40px] font-bold leading-[1.15] tracking-[-0.96px] text-[#0f0a1f] sm:text-[48px]">
                Five steps from brief to launch.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step) => (
                <article key={step.number} className="flex flex-col gap-4 rounded-[16px] border border-[#ece8f3] bg-white p-6" data-testid={`card-process-${step.number}`}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#8b39e5]">
                    <span className="[font-family:'Satoshi-Bold',Helvetica] text-sm font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[17px] font-bold leading-tight tracking-[-0.3px] text-[#0f0a1f]">{step.title}</h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22px] text-[#3a3447]">{step.description}</p>
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
                <p className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-white uppercase whitespace-nowrap">Start Building</p>
              </div>
              <h2 className="[font-family:'Satoshi-Black',Helvetica] text-[36px] font-black leading-[1.1] tracking-[-0.8px] text-white sm:text-[48px]">
                Ready to build your next digital product?
              </h2>
              <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[26px] text-[#f5efe6c7] sm:text-base">
                Tell us what you're building and we'll scope it, design it and ship it — on time, on budget, built to scale across Dubai and the UAE.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="h-auto rounded-[999px] bg-white px-2 py-2 pl-[22px] pr-2 text-[#14101f] hover:bg-white/95" data-testid="button-cta-start">
                  <span className="inline-flex items-center pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium">Start Your Project</span>
                  <span className="ml-3 grid h-9 w-9 place-items-center rounded-[18px] bg-[#3a0d8c]">
                    <img className="h-4 w-4" alt="Arrow" src="/figmaAssets/component-2.svg" />
                  </span>
                </Button>
                <Button variant="ghost" className="h-auto rounded-[999px] border border-solid border-[#f5efe629] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6]" data-testid="button-cta-consult">
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
