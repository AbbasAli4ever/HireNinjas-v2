import { Card, CardContent } from "@/components/ui/card";

const badgeText = "OUR APPROACH";

const paragraphs = [
  "HireNinjas' approach combines account-based marketing (ABM), technical content strategy, search visibility, and precision paid acquisition to engage decision makers at every stage of the buying journey.",
  "Since HireNinjas also supports international hiring and team scaling for SaaS, AI, and digital-first companies - our marketing strategies align directly with organisational growth plans - aiding enterprise teams throughout Dubai, Abu Dhabi, and international markets generate qualified opportunities that convert into tangible revenue.",
];

const supportStatement =
  "We support complex pipeline development rather than conducting isolated campaign activity — helping enterprise organisations maintain consistent momentum throughout the entire 18–24 month decision process.";

export const StructuredDemandSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 pb-14 pt-0 sm:px-6 sm:pb-20 xl:px-[140px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 lg:gap-12">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,564px)_minmax(0,516px)] lg:gap-10">
          <article className="flex flex-col items-start justify-center gap-6 sm:gap-8">
            <header className="flex w-full flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] px-3.5 py-[7px]">
                <span className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
                  <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                </span>
                <span className="flex w-fit items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
                  {badgeText}
                </span>
              </div>
              <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[26px] font-bold leading-[1.2] tracking-[-0.52px] text-[#0f0a1f] sm:text-[34px] sm:tracking-[-0.68px] md:text-[40px] lg:text-[46px] lg:leading-[var(--h-2-line-height)] lg:tracking-[var(--h-2-letter-spacing)]">
                Structured Demand Generation for Enterprise Pipelines
              </h2>
            </header>
            <div className="self-stretch [font-family:'Montserrat',Helvetica] text-[14px] font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-base sm:leading-[25.6px]">
              {paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={index > 0 ? "mt-5 sm:mt-6" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
          <div className="w-full">
            <div className="relative mx-auto aspect-square w-full max-w-[400px] rounded-3xl bg-[url(/enterprise/image.svg)] bg-[length:100%_100%] bg-center bg-no-repeat sm:max-w-[516px]">
              <Card className="absolute bottom-[21px] left-3 w-[calc(100%-24px)] rounded-lg border-[10px] border-solid border-[#ffffff1f] bg-white shadow-[0px_8px_18px_#00000005,0px_33px_33px_#00000005,0px_75px_45px_#00000003] sm:left-5 sm:w-[calc(100%-40px)]">
                <CardContent className="p-4 sm:p-6">
                  <p className="[font-family:'Manrope',Helvetica] text-[13px] font-semibold leading-[1.6] tracking-[0] text-[#161616] sm:text-base sm:leading-[25.6px]">
                    {supportStatement}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
