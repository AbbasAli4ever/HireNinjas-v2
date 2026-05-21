import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const serviceItems = [
  { title: "Corporate Websites", label: "Brand" },
  { title: "Landing Pages", label: "Convert" },
  { title: "E-Commerce Stores", label: "Sell" },
  { title: "Custom Web Platforms", label: "Scale" },
  { title: "iOS & Android Apps", label: "Mobile" },
];

const paragraphs = [
  <>
    Your website is at the core of your digital presence and plays an integral
    role in business expansion. At HireNinjas, we design and develop
    high-performance websites and mobile applications for companies throughout
    Dubai and UAE with speed, usability and conversion-focused architecture in
    mind.
  </>,
  <>
    No matter if it&apos;s a corporate website, high-converting landing pages,
    an e-commerce store, or custom web platform - our development approach
    prioritizes performance, scalability and user experience. Each project is
    structured for SEO visibility, seamless integrations and long-term growth.
  </>,
];

export const DevelopmentShowcaseSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white px-4 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:py-20 xl:px-8">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-start gap-8 sm:gap-10 lg:gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-4 lg:gap-[16.83px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pt-[7.5px] pb-[7.69px] text-left hover:bg-[#f7f1ff]">
            <span className="[font-family:'Montserrat',Helvetica] text-[10px] sm:text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4]">
              HIRENINJAS DELIVERS CONVERTING DIGITAL EXPERIENCES
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[1.15] tracking-[-0.8px] text-[#0f0a1f] sm:text-[36px] sm:tracking-[-0.92px] md:text-[40px] lg:text-[46px] lg:leading-[49.7px]">
              <span className="xl:block">Engineered for speed, </span>
              <span className="xl:block">usability, and conversion.</span>
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 items-start gap-8 xl:grid-cols-2 xl:gap-[60px]">
          <article className="flex w-full flex-col items-start gap-4 self-start">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`paragraph-${index}`}
                className="[font-family:'Montserrat',Helvetica] text-sm sm:text-base font-normal leading-[1.6] xl:leading-[25.6px] tracking-[0] text-[#3a3447]"
              >
                {paragraph}
              </p>
            ))}
          </article>
          <Card className="w-full rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
            <CardContent className="flex flex-col gap-3 p-5 sm:p-6 xl:p-7">
              {serviceItems.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl border border-solid border-[#ece8f3] bg-white px-4 py-3.5 text-left transition-colors hover:bg-[#fcfaff]"
                >
                  <span className="[font-family:'Satoshi-Bold',Helvetica] text-[15px] font-bold leading-6 tracking-[0] text-[#0f0a1f]">
                    {item.title}
                  </span>
                  <span className="inline-flex rounded-[999px] bg-[#f7f1ff] px-[9px] py-1">
                    <span className="[font-family:'Montserrat',Helvetica] text-[11px] font-semibold leading-[17.6px] tracking-[0] text-[#591f97]">
                      {item.label}
                    </span>
                  </span>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
