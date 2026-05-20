import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const marketingItems = [
  { title: "Acquisition funnels", tag: "Enrol" },
  { title: "Search visibility", tag: "SEO" },
  { title: "Paid advertising", tag: "Acquire" },
  { title: "Social engagement", tag: "Connect" },
  { title: "Landing experiences", tag: "Convert" },
];

const descriptionParagraphs = [
  `Education marketing demands long-term visibility, trust-building,
and multi-stage engagement from both parents and students.
HireNinjas assists schools, universities, training institutes, and
higher education providers by offering structured enrolment
marketing systems designed to increase enquiries, open day
attendance, confirmed applications, etc.`,
  `HireNinjas' approach integrates student acquisition funnels,
search visibility optimization, paid advertising campaigns, social
media engagement strategies and conversion-focused landing
experiences tailored to the education decision journey. Leveraging
global hiring infrastructure - we help education providers across
Dubai, Abu Dhabi and international recruitment markets scale
outreach campaigns quickly without increasing internal
operational complexity.`,
];

export const ApplicantConversionSection = (): JSX.Element => {
  return (
    <section className="w-full px-6 py-16 md:px-10 lg:px-[120px] lg:py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge
            variant="outline"
            className="h-auto rounded-[999px] border border-solid border-[#00000029] bg-transparent px-3.5 py-[7px] font-normal shadow-none hover:bg-transparent"
          >
            <span className="mr-2.5 flex h-1.5 w-1.5 items-start justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black whitespace-nowrap">
              STRUCTURED MARKETING TO DRIVE STUDENT ENROLMENT GROWTH
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[40px] tracking-[-0.92px] text-ebony sm:text-[42px] sm:leading-[46px] lg:text-[46px] lg:leading-[49.7px]">
              From enquiry to
              <br />
              confirmed application.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,530px)_minmax(0,1fr)] lg:gap-[60px]">
          <article className="flex w-full max-w-[530px] flex-col items-start gap-[16.01px]">
            {descriptionParagraphs.map((paragraph, index) => (
              <p
                key={`description-${index}`}
                className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] tracking-[0] text-tuna whitespace-pre-line"
              >
                {paragraph}
              </p>
            ))}
          </article>
          <Card className="w-full rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
            <CardContent className="flex flex-col gap-3 p-7">
              {marketingItems.map((item) => (
                <div
                  key={item.title}
                  className="flex w-full items-center justify-between rounded-xl border border-solid border-[#ece8f3] bg-white px-4 py-3.5"
                >
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[15px] font-bold leading-6 tracking-[0] text-ebony">
                    {item.title}
                  </h3>
                  <Badge className="h-auto rounded-[999px] bg-magnolia px-[9px] py-1 [font-family:'Montserrat',Helvetica] text-[11px] font-semibold leading-[17.6px] tracking-[0] text-daisy-bush shadow-none hover:bg-magnolia">
                    {item.tag}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};