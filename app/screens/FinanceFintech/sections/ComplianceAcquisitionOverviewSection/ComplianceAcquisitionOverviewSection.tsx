import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const overviewContent = {
  eyebrow: "AUTHORITY + PRECISION = QUALIFIED PIPELINE",
  title: "Compliance-aware acquisition for finance brands.",
  description:
    "Our Financial services marketing UAE firm combines precision paid acquisition, authority-building content strategy, search visibility optimisation and AI-powered targeting in order to attract high-value customer segments. From fintech platforms and lending providers through wealth management firms and insurance brands; our digital finance strategies assist organisations expand their reach and build customer trust across Dubai, Abu Dhabi and MENA region.",
  image: "https://c.animaapp.com/mpicaoeqyWY9E4/img/image.png",
};

export const ComplianceAcquisitionOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 sm:px-10 md:px-16 lg:px-[140px] lg:py-[70px]">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-8">
          <Card className="overflow-hidden rounded-2xl border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <img
                src={overviewContent.image}
                alt="Financial growth dashboard illustration"
                className="block aspect-[580/516] w-full rounded-2xl object-cover"
              />
            </CardContent>
          </Card>
          <div className="flex flex-col items-start justify-center gap-6 lg:gap-8">
            <header className="flex w-full max-w-[760px] flex-col items-start gap-4">
              <Badge
                variant="outline"
                className="h-auto rounded-full border border-[#00000029] bg-white px-3.5 py-[7px] text-black hover:bg-white"
              >
                <span className="mr-2.5 flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
                  <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                </span>
                <span className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] leading-[18px]">
                  {overviewContent.eyebrow}
                </span>
              </Badge>
              <h2 className="self-stretch font-h-2 text-[length:var(--h-2-font-size)] font-[number:var(--h-2-font-weight)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#0f0a1f] [font-style:var(--h-2-font-style)]">
                {overviewContent.title}
              </h2>
            </header>
            <p className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] tracking-[0] text-[#3a3447]">
              {overviewContent.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
