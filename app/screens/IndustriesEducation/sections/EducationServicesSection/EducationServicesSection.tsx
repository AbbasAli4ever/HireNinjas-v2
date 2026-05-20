import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    number: "01",
    title: (
      <>
        Lead Generation
        <br />
        &amp; Campaigns
      </>
    ),
    icon: "https://c.animaapp.com/mpe13x2e1PeVVk/img/component-4-1.svg",
    compact: false,
  },
  {
    number: "02",
    title: <>Digital Marketing Strategy</>,
    icon: "https://c.animaapp.com/mpe13x2e1PeVVk/img/component-4-5.svg",
    compact: true,
  },
  {
    number: "03",
    title: <>Social Media Management</>,
    icon: "https://c.animaapp.com/mpe13x2e1PeVVk/img/component-4-2.svg",
    compact: true,
  },
  {
    number: "04",
    title: <>SEO/PPC Advertising</>,
    icon: "https://c.animaapp.com/mpe13x2e1PeVVk/img/component-4-4.svg",
    compact: true,
  },
  {
    number: "05",
    title: (
      <>
        Student Recruitment
        <br />
        Funnel Optimisation
      </>
    ),
    icon: "https://c.animaapp.com/mpe13x2e1PeVVk/img/component-4-3.svg",
    compact: false,
  },
  {
    number: "06",
    title: (
      <>
        International Campaign
        <br />
        Planning Support
      </>
    ),
    icon: "https://c.animaapp.com/mpe13x2e1PeVVk/img/component-4.svg",
    compact: false,
  },
];

export const EducationServicesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-titan-white border-y border-[#ece8f3] px-6 py-[60px] md:px-10 lg:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-[27px]">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.67px]">
          <Badge
            variant="outline"
            className="h-auto rounded-[999px] border border-[#00000029] bg-transparent px-3.5 py-[7px] text-black hover:bg-transparent"
          >
            <span className="mr-2.5 flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="flex items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] leading-[18px]">
              SERVICES FOR EDUCATION PROVIDERS
            </span>
          </Badge>
          <h2 className="w-full [font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[40px] tracking-[-0.72px] text-ebony sm:text-[40px] sm:leading-[44px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
            HireNinjas partners with
            <br />
            education organisations for
            <br />
            various services including:
          </h2>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 pt-[20.91px] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.number}
              className="rounded-2xl border border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent
                className={`relative flex h-full flex-col items-start overflow-hidden rounded-2xl px-7 pt-7 ${
                  service.compact
                    ? "gap-3.5 pb-[65.66px]"
                    : "gap-[13.3px] pb-[38.01px]"
                }`}
              >
                <div className="grid h-11 w-11 place-items-center rounded-[11px] bg-magnolia">
                  <img
                    className="h-[22px] w-[22px]"
                    alt=""
                    src={service.icon}
                  />
                </div>
                <div
                  className={`flex w-full flex-col items-start px-0 ${
                    service.compact
                      ? "pt-[3px] pb-[0.8px]"
                      : "pt-[3.7px] pb-[0.8px]"
                  }`}
                >
                  <p className="mt-[-1.00px] flex w-full items-center font-satoshi-bold-upper text-[length:var(--satoshi-bold-upper-font-size)] font-[number:var(--satoshi-bold-upper-font-weight)] leading-[var(--satoshi-bold-upper-line-height)] tracking-[var(--satoshi-bold-upper-letter-spacing)] text-purple-heart [font-style:var(--satoshi-bold-upper-font-style)]">
                    {service.number}
                  </p>
                </div>
                <div className="flex w-full flex-col items-start">
                  <h3 className="mt-[-1.00px] w-full [font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-ebony">
                    {service.title}
                  </h3>
                </div>
                <div className="pointer-events-none absolute bottom-[-29px] right-[-29px] h-[140px] w-[140px] rounded-[70px] opacity-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_70%)]" />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex w-full max-w-[787.78px] flex-col items-start">
          <p className="[font-family:'Montserrat',Helvetica] text-[17px] font-normal leading-[27.2px] tracking-[0] text-tuna">
            These services enable education providers to increase enquiry volume
            while simultaneously
            <br />
            increasing applicant quality.
          </p>
        </div>
      </div>
    </section>
  );
};
