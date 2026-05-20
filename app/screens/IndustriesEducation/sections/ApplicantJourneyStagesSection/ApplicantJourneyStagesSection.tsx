import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const stages = [
  {
    number: "01",
    title: ["Enrollment Campaigns"],
    description: [
      "Education providers must fill seats",
      "within predetermined academic",
      "timelines. At HireNinjas, we develop",
      "tailored enrolment campaigns to",
      "generate inquiries, campus visits, open",
      "day attendance and completed",
      "applications well ahead of each",
      "academic intake cycle.",
    ],
    numberPosition: "right-5",
    contentPadding: "pt-8 pb-[83.65px]",
  },
  {
    number: "02",
    title: ["Parent and", "Student Decision"],
    description: [
      "Journeys Both students and their",
      "parents evaluate institutions",
      "differently. We design content",
      "strategies and advertising journeys",
      "tailored specifically for parents seeking",
      "reassurance while simultaneously",
      "engaging students, to drive",
      "institutional differentiation across",
      "both audiences.",
    ],
    numberPosition: "right-[11px]",
    contentPadding: "pt-[31.33px] pb-8",
  },
  {
    number: "03",
    title: ["International", "Student Recruitment"],
    description: [
      "HireNinjas' multilingual digital",
      "acquisition campaigns targeting",
      "prospective students across GCC",
      "markets, South Asia and Europe help",
      "institutions expand applicant pools",
      "beyond local markets.",
    ],
    numberPosition: "right-[13px]",
    contentPadding: "pt-[31.33px] pb-[104px]",
  },
];

export const ApplicantJourneyStagesSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-16 md:px-10 lg:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge
            variant="outline"
            className="h-auto rounded-[999px] border border-solid border-[#00000029] bg-transparent px-3.5 py-[7px] text-left font-normal shadow-none hover:bg-transparent"
          >
            <span className="mr-2.5 flex h-1.5 w-1.5 items-start justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black whitespace-nowrap">
              COMMON EDUCATION MARKETING CHALLENGES WE SOLVE
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[38px] font-bold leading-[42px] tracking-[-0.92px] text-ebony sm:text-[46px] sm:leading-[49.7px]">
              From open day to
              <br />
              applicant confirmed.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stages.map((stage) => (
            <Card
              key={stage.number}
              className="relative h-full rounded-2xl border border-solid border-[#ece8f3] bg-white shadow-none"
            >
              <div
                className={`pointer-events-none absolute top-[25px] ${stage.numberPosition} [font-family:'Satoshi-Bold',Helvetica] text-[56px] font-bold leading-[56px] tracking-[-2.24px] text-magnolia`}
              >
                {stage.number}
              </div>
              <CardContent
                className={`flex h-full flex-col items-start gap-3 px-8 ${stage.contentPadding}`}
              >
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-ebony">
                  {stage.title.map((line, index) => (
                    <span key={`${stage.number}-title-${index}`}>
                      {line}
                      {index < stage.title.length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="[font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-tuna">
                  {stage.description.map((line, index) => (
                    <span key={`${stage.number}-description-${index}`}>
                      {line}
                      {index < stage.description.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
