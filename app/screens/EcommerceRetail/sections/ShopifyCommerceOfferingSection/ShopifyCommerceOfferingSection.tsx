import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const offerings = [
  {
    title: "Lead Generation & Campaigns",
    tag: "Acquire",
  },
  {
    title: "SEO & PPC Advertising",
    tag: "Discover",
  },
  {
    title: "Social Media Management",
    tag: "Engage",
  },
  {
    title: "AI-Powered Marketing",
    tag: "Optimise",
  },
];

export const ShopifyCommerceOfferingSection = (): JSX.Element => {
  return (
    <section className="relative mt-[70px] w-full px-4 md:px-8 lg:px-[140px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge
            variant="outline"
            className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pt-[7.5px] pb-[7.69px] [font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] leading-[19.2px] text-[#8a39e4] hover:bg-[#f7f1ff]"
          >
            ACQUIRE EFFICIENTLY. CONVERT MORE. RETAIN LONGER.
          </Badge>
          <div className="w-full">
            <h2 className="mt-[-1.00px] self-stretch [font-family:'Satoshi-Bold',Helvetica] text-[46px] font-bold tracking-[-0.92px] leading-[49.7px] text-[#0f0a1f]">
              Built for Shopify brands, D2C,
              <br />
              and omnichannel retailers.
            </h2>
          </div>
        </header>
        <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-[60px]">
          <div className="flex w-full flex-col items-start self-start">
            <p className="mt-[-1.00px] [font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] text-[#3a3447]">
              Our ecommerce SEO and paid acquisition campaigns combine
              <br />
              Google Shopping optimisation, Meta and TikTok advertising,
              <br />
              conversion-focused landing experiences and AI-powered
              <br />
              performance analysis in order to maximise ROAS optimization for
              <br />
              any marketing spend. From supporting Shopify brands and
              <br />
              omnichannel retailers to fast-growing D2C companies based out
              <br />
              of Dubai or Abu Dhabi markets, our strategies can help
              <br />
              businesses scale customer acquisition while simultaneously
              <br />
              increasing long-term customer lifetime value across Dubai and
              <br />
              Abu Dhabi markets.
            </p>
          </div>
          <Card className="w-full self-start rounded-2xl border border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] p-0 shadow-none">
            <CardContent className="flex flex-col gap-3 p-7">
              {offerings.map((offering) => (
                <article
                  key={offering.title}
                  className="flex w-full items-center justify-between rounded-xl border border-[#ece8f3] bg-[#ffffff] px-4 py-3.5"
                >
                  <h3 className="mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] text-[15px] font-bold leading-6 tracking-[0] text-[#0f0a1f]">
                    {offering.title}
                  </h3>
                  <Badge className="h-auto rounded-[999px] bg-[#f7f1ff] px-[9px] py-1 [font-family:'Montserrat',Helvetica] text-[11px] font-semibold leading-[17.6px] tracking-[0] text-[#591f97] hover:bg-[#f7f1ff]">
                    {offering.tag}
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
