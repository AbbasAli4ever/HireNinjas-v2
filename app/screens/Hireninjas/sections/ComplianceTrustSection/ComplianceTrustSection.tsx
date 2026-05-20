import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const featureItems = [
  { title: "Compliance-first", label: "MOH" },
  { title: "Search visibility", label: "SEO" },
  { title: "Paid acquisition", label: "Acquire" },
  { title: "Practitioner content", label: "Authority" },
  { title: "Conversion sites", label: "Convert" },
];

export const ComplianceTrustSection = (): JSX.Element => {
  return (
    <section className="w-full px-6 py-16 md:px-10 lg:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex max-w-[760px] flex-col items-start gap-[16.83px]">
          <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] px-3.5 py-[7px]">
            <span className="flex h-1.5 w-1.5 items-start justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <p className="flex w-fit items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
              SUPPORTS HEALTHCARE PROVIDERS WITH COMPLIANT, PATIENT-FOCUSED
              MARKETING
            </p>
          </div>
          <h2 className="self-stretch font-h-2 text-[length:var(--h-2-font-size)] font-[number:var(--h-2-font-weight)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#0f0a1f] [font-style:var(--h-2-font-style)]">
            Compliance, trust, and
            <br />
            qualified appointment volume. Goddess
          </h2>
        </header>
        <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,530px)_minmax(0,1fr)] lg:gap-[60px]">
          <div className="flex h-fit flex-col items-start gap-4">
            <p className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] tracking-[0] text-tuna">
              Healthcare marketing requires striking an effective balance
              <br />
              between regulatory compliance, patient trust-building, and
              <br />
              appointment generation. HireNinjas can assist clinics, hospitals,
              <br />
              diagnostic centres and specialist healthcare providers by
              <br />
              creating performance-based marketing systems compliant
              <br />
              with UAE healthcare advertising regulations and patient
              <br />
              communication standards.
            </p>
            <p className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] tracking-[0] text-tuna">
              HireNinjas provides search visibility optimization, paid
              acquisition
              <br />
              campaigns, practitioner authority content production and
              <br />
              conversion-focused website experiences to increase qualified
              <br />
              patient enquiries while maintaining brand credibility.
              <br />
              Furthermore, with our global hiring and execution infrastructure
              <br />
              supporting Dubai, Abu Dhabi and regional expansion markets for
              <br />
              healthcare organizations in scale marketing performance without
              <br />
              increasing internal operational complexity.
            </p>
          </div>
          <Card className="w-full rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] p-0 shadow-none">
            <CardContent className="flex flex-col gap-3 p-7">
              {featureItems.map((item) => (
                <article
                  key={item.title}
                  className="flex w-full items-center justify-between rounded-xl border border-solid border-[#ece8f3] bg-white px-4 py-3.5"
                >
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[15px] font-bold leading-6 tracking-[0] text-ebony">
                    {item.title}
                  </h3>
                  <Badge className="h-auto rounded-[999px] bg-magnolia px-[9px] py-1 font-montserrat-semibold text-[length:var(--montserrat-semibold-font-size)] font-[number:var(--montserrat-semibold-font-weight)] leading-[var(--montserrat-semibold-line-height)] tracking-[var(--montserrat-semibold-letter-spacing)] text-daisy-bush hover:bg-magnolia [font-style:var(--montserrat-semibold-font-style)]">
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
