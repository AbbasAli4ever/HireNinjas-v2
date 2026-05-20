import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const paragraphs = [
  `Educational institutions rely on multiple vendors for branding, advertising and recruitment outreach efforts; HireNinjas can act as a single partner supporting campaign strategy, execution teams and funnel optimisation to allow institutions to scale enrollment campaigns without increasing internal coordination complexity.`,
  `HireNinjas provides structured marketing infrastructure designed for predictable enrollment growth. From new academic programs and admissions increases to strengthening local student pipelines across Dubai and Abu Dhabi, HireNinjas ensures steady enrollment growth.`,
];

export const PredictableGrowthSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-6 sm:px-6 lg:px-[120px]">
      <Card className="relative w-full overflow-hidden rounded-[24px] border border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
        <div className="pointer-events-none absolute inset-x-0 top-[-180px] mx-auto h-[718px] w-[59.89%] min-w-[280px] blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)]" />
        <CardContent className="relative flex flex-col items-start gap-3 p-6 sm:p-10 lg:gap-[11.3px] lg:p-20">
          <Badge
            variant="outline"
            className="h-auto rounded-[999px] border-[#00000029] bg-transparent px-3.5 py-[7px] text-black shadow-none hover:bg-transparent"
          >
            <span className="mr-2.5 flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] whitespace-normal sm:whitespace-nowrap">
              HIRENINJAS&apos; MARKETING INFRASTRUCTURE FOR GROWING EDUCATION
              INSTITUTIONS
            </span>
          </Badge>
          <header className="max-w-[460.37px] pt-[5.37px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[1.08] tracking-[-0.92px] text-ebony sm:text-[42px] lg:text-[46px] lg:leading-[49.7px]">
              One partner.
              <br />
              Predictable
              <br />
              enrolment growth.
            </h2>
          </header>
          <div className="max-w-[697.75px] space-y-[11.3px] text-tuna">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`predictable-growth-paragraph-${index}`}
                className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[25px] tracking-[0] sm:text-[17px] sm:leading-[27.2px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};