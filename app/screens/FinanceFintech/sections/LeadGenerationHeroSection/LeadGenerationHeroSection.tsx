import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const complianceItems = [
  { label: "CBUAE", status: "Approved" },
  { label: "FSRA", status: "Approved" },
  { label: "SCA disclosures", status: "Verified" },
];

const stats = [
  { title: "CBUAE", description: "Reviewed before launch" },
  { title: "FSRA", description: "Compliant acquisition" },
  { title: "MENA", description: "Regional reach" },
];

export const LeadGenerationHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-[-57px] h-[430px] overflow-hidden">
        <div className="relative left-1/2 h-[131.77%] w-[120%] -translate-x-1/2 translate-y-[-18.82%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="absolute inset-0">
        <div className="h-full w-[120%] -translate-x-[10%] -translate-y-[24.24%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="relative mx-auto flex min-h-[865px] w-full max-w-[1440px] items-center px-6 py-16 sm:px-10 lg:px-[140px]">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_511px] lg:gap-8">
          <div className="relative z-10 flex max-w-[653px] flex-col items-start gap-[20.9px]">
            <div className="inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
              <span className="flex w-fit items-center whitespace-nowrap [font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4]">
                INDUSTRIES · FINANCE &amp; FINTECH
              </span>
            </div>
            <header className="flex w-full flex-col items-start">
              <img
                className="h-auto w-full max-w-[633px]"
                alt="Finance and fintech solutions designed for scalable lead generation"
                src="https://c.animaapp.com/mpicaoeqyWY9E4/img/finance-and-fintech-solutions-designed-for-scalable-lead-generat.svg"
              />
            </header>
            <div className="flex w-full max-w-[667.29px] flex-col items-start pt-[1.1px]">
              <p className="mt-[-1.00px] self-stretch [font-family:'Montserrat',Helvetica] text-lg font-normal leading-[28.8px] tracking-[0] text-[#3a3447]">
                Financial services organizations operate in an increasingly
                <br />
                regulated marketing environment. HireNinjas&#39; fintech
                marketing
                <br />
                agency Dubai services helps banks, insurance providers,
                investment firms and fintech startups build credibility,
                generate qualified enquiries and scale customer acquisition with
                targeted digital strategies that meet regional compliance
                expectations.
              </p>
            </div>
            <div className="flex flex-wrap items-start gap-4 sm:gap-6">
              <Button className="h-auto rounded-[999px] bg-[#8b39e5] px-2 py-1.5 hover:bg-[#7f33d2]">
                <span className="inline-flex h-12 items-center gap-3 pl-[22px] pr-0">
                  <span className="inline-flex flex-col items-center pl-3.5">
                    <span className="[font-family:'Inter',Helvetica] text-center text-[14.5px] font-medium leading-[normal] tracking-[0] text-white">
                      Free Strategy Call
                    </span>
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-white">
                    <img
                      className="h-4 w-4"
                      alt="Component"
                      src="https://c.animaapp.com/mpicaoeqyWY9E4/img/component-2.svg"
                    />
                  </span>
                </span>
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-[999px] border border-solid border-[#8b39e529] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[0] text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5]"
              >
                See Services
              </Button>
            </div>
            <div className="flex w-full flex-wrap items-start gap-x-[28px] gap-y-5 pb-0 pt-[19.1px]">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-[56px] min-w-[113px] flex-col justify-start border-l-2 border-[#d9bbff] pl-4"
                >
                  <div className="[font-family:'Satoshi-Bold',Helvetica] text-[22px] font-bold leading-[35.2px] tracking-[-0.44px] text-[#0f0a1f]">
                    {item.title}
                  </div>
                  <div className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478]">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[511px] lg:mx-0 lg:min-h-[675px]">
            <img
              className="relative z-[1] ml-auto h-auto w-full max-w-[451px] rounded-[32px] object-cover"
              alt="Image"
              src="https://c.animaapp.com/mpicaoeqyWY9E4/img/image-28-1.png"
            />
            <Card className="absolute left-0 top-[77px] z-[2] w-full max-w-[291px] rounded-xl border-0 bg-[#ffffffe6] shadow-[4px_4px_56px_#0000001a] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
              <CardContent className="relative flex flex-col items-start gap-4 p-4">
                <div className="absolute inset-0 rounded-[14px] bg-[#ffffff01] shadow-[0px_16px_30px_-22px_#140a282e]" />
                <div className="relative flex w-full items-center gap-2">
                  <img
                    className="h-7 w-7"
                    alt="Background"
                    src="https://c.animaapp.com/mpicaoeqyWY9E4/img/background-8.svg"
                  />
                  <div className="inline-flex flex-col items-start">
                    <div className="[font-family:'Montserrat',Helvetica] text-base font-medium leading-5 tracking-[0.01px] text-[#414d55]">
                      Compliance review · Q3 26
                    </div>
                  </div>
                </div>
                <div className="relative flex w-full flex-col items-start gap-2">
                  {complianceItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex w-full items-center gap-2.5"
                    >
                      <img
                        className="h-[18px] w-[22px]"
                        alt="Margin"
                        src="https://c.animaapp.com/mpicaoeqyWY9E4/img/margin.svg"
                      />
                      <span className="[font-family:'Montserrat',Helvetica] text-[11px] font-normal leading-[17.6px] tracking-[0] text-[#6b6478]">
                        {item.label}
                      </span>
                      <span className="pl-1 [font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[22.4px] tracking-[0] text-black">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="absolute bottom-[90px] right-0 z-[2] h-[250px] w-full max-w-[367px] overflow-hidden rounded-[14px] border-0 bg-[#fbfbfb] shadow-[0px_4px_4px_#00000040]">
              <CardContent className="relative flex h-full flex-col items-start gap-[10.01px] p-8">
                <div className="relative z-[2] flex w-[146.42px] flex-col items-start">
                  <div className="[font-family:'Montserrat',Helvetica] text-base font-medium leading-5 tracking-[0.01px] text-[#414d55]">
                    Qualified enquiries
                  </div>
                  <div className="[font-family:'Satoshi-Bold',Helvetica] text-[26px] font-bold leading-[41.6px] tracking-[-0.52px] text-[#591f97]">
                    +264%
                  </div>
                </div>
                <img
                  className="absolute left-[-10.90%] top-[16.82%] h-[70.09%] w-[121.59%]"
                  alt="Vector"
                  src="https://c.animaapp.com/mpicaoeqyWY9E4/img/vector-1.svg"
                />
                <img
                  className="absolute left-[-10.90%] top-[16.82%] h-[96.52%] w-[121.59%]"
                  alt="Vector"
                  src="https://c.animaapp.com/mpicaoeqyWY9E4/img/vector.svg"
                />
                <Card className="absolute bottom-5 right-5 z-[2] w-[88px] rounded-xl border-0 bg-neutral-10 shadow-[4px_4px_56px_#0000001a]">
                  <CardContent className="flex flex-col items-start gap-2 p-3">
                    <div className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[0] text-neutral-60">
                      CPL
                    </div>
                    <div className="inline-flex flex-col items-start">
                      <div className="[font-family:'Satoshi-Bold',Helvetica] text-base font-bold leading-4 tracking-[-0.32px] text-black">
                        ↓ 38%
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
