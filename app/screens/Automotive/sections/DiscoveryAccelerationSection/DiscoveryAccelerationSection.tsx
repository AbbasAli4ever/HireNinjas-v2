import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const serviceItems = [
  { title: "Lead Generation/Campaigns", label: "Acquire" },
  { title: "Video Production", label: "Showcase" },
  { title: "Social Media Management", label: "Engage" },
  { title: "SEO Advertising", label: "Discover" },
  { title: "PPC Advertising", label: "Convert" },
];

export const DiscoveryAccelerationSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-0">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pt-[7.5px] pb-[7.69px] text-xs font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff] [font-family:'Montserrat',Helvetica]">
            FROM RESEARCH TO SHOWROOM CONVERSION
          </Badge>
          <div className="w-full">
            <h2 className="mt-[-1px] text-[36px] font-bold leading-[40px] tracking-[-0.72px] text-[#0f0a1f] sm:text-[42px] sm:leading-[46px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px] [font-family:'Satoshi-Bold',Helvetica]">
              Drive discovery and accelerate
              <br />
              purchase decisions.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,530px)_minmax(0,1fr)] lg:gap-[60px]">
          <div className="flex w-full max-w-[530px] flex-col items-start">
            <p className="mt-[-1px] text-base font-normal leading-[25.6px] tracking-[0] text-[#3a3447] [font-family:'Montserrat',Helvetica]">
              Our automotive digital marketing UAE campaigns combine
              <br />
              targeted lead generation, social media engagement, video
              <br />
              walkarounds and search advertising into campaigns designed to
              <br />
              promote vehicle discovery and purchase decisions. From
              <br />
              dealership networks and luxury automotive brands to new vehicle
              <br />
              launches - whether involving test drive bookings or online
              <br />
              enquiries or conversions across Dubai and Abu Dhabi automotive
              <br />
              audiences, our strategies help increase test drive bookings,
              <br />
              enquiries or sales conversions across this sector.
            </p>
          </div>
          <Card className="w-full rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
            <CardContent className="flex flex-col gap-3 p-4 sm:p-6 lg:p-7">
              {serviceItems.map((item) => (
                <article
                  key={item.title}
                  className="flex w-full items-center justify-between rounded-xl border border-solid border-[#ece8f3] bg-[#ffffff] px-4 py-3.5"
                >
                  <h3 className="pr-4 text-[15px] font-bold leading-6 tracking-[0] text-[#0f0a1f] [font-family:'Satoshi-Bold',Helvetica]">
                    {item.title}
                  </h3>
                  <Badge className="h-auto shrink-0 rounded-[999px] bg-[#f7f1ff] px-[9px] py-1 text-[11px] font-semibold leading-[17.6px] tracking-[0] text-[#591f97] hover:bg-[#f7f1ff] [font-family:'Montserrat',Helvetica]">
                    {item.label}
                  </Badge>
                </article>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
