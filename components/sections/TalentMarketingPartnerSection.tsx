import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const partnerBadge = "GROWTH PARTNER";

const partnerDescription = [
  "Whilst HireNinjas provides companies across Dubai, Abu Dhabi and the wider UAE with expert talent acquisition and digital marketing solutions that accelerate growth faster.",
  "They serve businesses through powerful services including staff augmentation solutions for global staffing requirements as well as digital marketing expertise.",
];

const partnerQuote =
  "HireNinjas provides comprehensive marketing strategies and recruitment of elite professionals worldwide for businesses at every stage of growth, whether that means leads, visibility or scalable team";

export const TalentMarketingPartnerSection = () => {
  return (
    <section className="w-full px-4 py-4 mt-10 sm:px-6">
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
              <h2 className="[font-family:'Satoshi-Black',Helvetica] text-[32px] font-black leading-[1.05] tracking-[-0.8px] text-[#0f0a1f] sm:text-[42px] sm:tracking-[-1px] lg:text-[45px]">
                Your Growth Partner for{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(101deg, #8B3AE5 0%, #591F97 60%, #0F0A1F 100%)" }}
                >
                  Talent &amp; Marketing
                </span>
              </h2>
              <div className="space-y-4 opacity-[0.56] [font-family:'Manrope',Helvetica] text-sm font-medium leading-6 tracking-[0] text-[#1e1e1e] sm:space-y-6 sm:text-base">
                {partnerDescription.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
            <div
              className="relative min-h-[280px] overflow-hidden rounded-[20px] bg-[url(/figmaAssets/image-1.svg)] bg-cover bg-center bg-no-repeat sm:min-h-[380px] sm:rounded-[24px] lg:min-h-[516px]"
              aria-label="Talent marketing partner visual"
            >
              <Card className="absolute bottom-3 left-3 w-[calc(100%-24px)] max-w-[431px] rounded-lg border-[6px] border-solid border-[#ffffff1f] bg-white shadow-[0px_8px_18px_#00000005,0px_33px_33px_#00000005,0px_75px_45px_#00000003,0px_133px_53px_transparent,0px_208px_58px_transparent] sm:bottom-5 sm:left-5 sm:w-[calc(100%-40px)] sm:border-[10px]">
                <CardContent className="p-4 sm:p-6">
                  <p className="[font-family:'Manrope',Helvetica] text-sm font-semibold leading-[22px] tracking-[0] text-[#161616] sm:text-base sm:leading-[25.6px]">
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
