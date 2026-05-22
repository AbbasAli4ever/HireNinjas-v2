import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    category: "IDENTITY",
    title: "Brand Film Production",
    description:
      "Cinematic storytelling videos designed to communicate your identity clearly and create emotional connections.",
  },
  {
    category: "CORPORATE",
    title: "Corporate Videos",
    description:
      "Professional overview videos, executive interviews, and internal communications content tailored for business.",
  },
  {
    category: "CONVERSION",
    title: "Ad Creatives",
    description:
      "High-converting video ads produced for Meta, Google, TikTok and YouTube campaigns.",
  },
  {
    category: "MOTION GRAPHICS",
    title: "Animated Explainers",
    description:
      "Engaging 2D and 3D animated videos that transform complex services or product journeys into visual narratives.",
  },
  {
    category: "LIVE EVENTS",
    title: "Event Coverage",
    description:
      "Complete event coverage, including keynote recording, highlight reels, and livestream production.",
  },
  {
    category: "SOCIAL",
    title: "Social Video Content",
    description:
      "Vertical short-form videos optimized for Instagram Reels, TikTok and YouTube Shorts to maximize visibility.",
  },
];

export const ProductionServicesGridSection = (): JSX.Element => {
  return (
    <section className="w-full border-y border-[#ece8f3] bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-8 lg:py-[70px] xl:px-[140px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] px-3.5 py-[7px]">
            <span className="flex h-1.5 w-1.5 items-start justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="flex w-fit items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
              OUR SPECIALIZED SERVICES
            </span>
          </div>
          <div className="flex w-full flex-col items-start">
            <h2 className="mt-[-1.00px] self-stretch [font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.68px] md:text-[40px] md:leading-[44px] md:tracking-[-0.8px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              <span className="inline xl:block">A complete production toolkit,</span>{" "}
              <span className="inline xl:block">assembled around your goals.</span>
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="relative overflow-hidden rounded-2xl border border-solid border-[#ece8f3] bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-2.5 p-5 sm:p-6 lg:p-7">
                <div className="grid h-11 w-11 grid-cols-[44px] grid-rows-[44px] rounded-[11px] bg-[#f7f1ff]">
                  <img
                    className="relative col-[1_/_2] row-[1_/_2] h-[22px] w-[22px] self-center justify-self-center"
                    alt="Component"
                    src="/video/chat.svg"
                  />
                </div>
                <div className="flex w-full flex-col items-start px-0 pb-[0.8px] pt-[7px]">
                  <p className="mt-[-1.00px] flex w-fit items-center whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[2.08px] text-[#8a39e4]">
                    {service.category}
                  </p>
                </div>
                <div className="flex w-full flex-col items-start px-0 pb-0 pt-[3.99px]">
                  <h3 className="mt-[-1.00px] flex self-stretch items-center [font-family:'Satoshi-Bold',Helvetica] text-[18px] font-bold leading-[22px] tracking-[-0.36px] text-[#0f0a1f] sm:text-[20px] sm:leading-[24px] lg:text-[23px] lg:leading-[27.6px] lg:tracking-[-0.46px]">
                    {service.title}
                  </h3>
                </div>
                <div className="flex w-full flex-col items-start">
                  <p className="mt-[-1.00px] flex self-stretch items-center [font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-[14px] lg:text-[15px] lg:leading-6">
                    {service.description}
                  </p>
                </div>
                <div className="pointer-events-none absolute bottom-[-29px] right-[-29px] h-[140px] w-[140px] rounded-[70px] opacity-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_70%)]" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
