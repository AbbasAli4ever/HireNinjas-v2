import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const partnerBadge = "GROWTH PARTNER";

const partnerDescription = [
  "Whilst HireNinjas provides companies across Dubai, Abu Dhabi and the wider UAE with expert talent acquisition and digital marketing solutions that accelerate growth faster.",
  "They serve businesses through powerful services including staff augmentation solutions for global staffing requirements as well as digital marketing expertise.",
];

const partnerQuote =
  "HireNinjas provides comprehensive marketing strategies and recruitment of elite professionals worldwide for businesses at every stage of growth, whether that means leads, visibility or scalable team";

export const TalentMarketingPartnerSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-4 sm:px-6 lg:px-0">
      <Card className="mx-auto w-full max-w-[1160px] rounded-[32px] border-0 bg-white shadow-none sm:rounded-[40px] lg:rounded-[56px]">
        <CardContent className="p-5 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <article className="flex flex-col items-start gap-4">
              <Badge
                variant="outline"
                className="inline-flex h-auto items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] bg-transparent px-3.5 py-[7px] text-left shadow-none hover:bg-transparent"
              >
                <span className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
                  <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                </span>
                <span className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
                  {partnerBadge}
                </span>
              </Badge>
              <img
                className="h-auto w-full max-w-[472px]"
                alt="Your growth partner for Talent & Marketing"
                src="/figmaAssets/your-growth-partner-for-talent---marketing.svg"
              />
              <div className="space-y-6 opacity-[0.56] [font-family:'Manrope',Helvetica] text-base font-medium leading-6 tracking-[0] text-[#1e1e1e]">
                {partnerDescription.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
            <div
              className="relative min-h-[320px] overflow-hidden rounded-[24px] bg-[url(/figmaAssets/image-1.svg)] bg-cover bg-center bg-no-repeat sm:min-h-[420px] lg:min-h-[516px]"
              aria-label="Talent marketing partner visual"
            >
              <Card className="absolute bottom-5 left-5 w-[calc(100%-40px)] max-w-[431px] rounded-lg border-[10px] border-solid border-[#ffffff1f] bg-white shadow-[0px_8px_18px_#00000005,0px_33px_33px_#00000005,0px_75px_45px_#00000003,0px_133px_53px_transparent,0px_208px_58px_transparent]">
                <CardContent className="p-6">
                  <p className="[font-family:'Manrope',Helvetica] text-base font-semibold leading-[25.6px] tracking-[0] text-[#161616]">
                    {partnerQuote}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
