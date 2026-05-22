import { Card, CardContent } from "@/components/ui/card";

const differentiators = [
  {
    title: "Senior-Level Strategic Expertise",
    description:
      "Gain access to experienced marketing strategists with extensive knowledge across SEO, paid advertising, lead generation, branding and digital growth channels",
  },
  {
    title: "Action Plans Ready To Go",
    description:
      "Each consultation provides structured recommendations and action plans instead of theory-heavy presentations.",
  },
  {
    title: "Catering specifically to UAE Market Conditions",
    description:
      "Our recommendations take into account audience behavior, platform performance and competitive positioning within Dubai and wider UAE market conditions",
  },
];

export const MarketingExpertiseSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fafaff] border-y border-[#ece8f3]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 px-5 py-10 sm:gap-[50px] sm:px-8 sm:py-14 lg:px-8 lg:py-[70px] xl:px-[140px]">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-3 sm:gap-4">
          <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-solid border-[#00000029] px-3.5 py-[7px]">
            <span className="flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
            </span>
            <span className="font-inter text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
              HIRING HIRENINJAS FOR MARKETING CONSULTATIONS
            </span>
          </div>
          <h2 className="self-stretch font-satoshi text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#0f0a1f] sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.68px] md:text-[40px] md:leading-[44px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
            <span className="inline xl:block">Senior expertise. Action-ready</span>{" "}
            <span className="inline xl:block">output.</span>
          </h2>
        </header>
        <div className="w-full max-w-[1200px]">
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {differentiators.map((item) => (
              <Card
                key={item.title}
                className="h-full rounded-2xl border border-solid border-[#ece8f3] bg-white shadow-none"
              >
                <CardContent className="flex h-full flex-col items-start gap-5 p-5 sm:gap-6 sm:p-6 lg:gap-8 lg:p-8">
                  <div className="grid h-10 w-10 grid-cols-[40px] grid-rows-[40px] rounded-xl bg-[#f7f1ff] sm:h-11 sm:w-11 sm:grid-cols-[44px] sm:grid-rows-[44px] lg:h-12 lg:w-12 lg:grid-cols-[48px] lg:grid-rows-[48px]">
                    <img
                      className="col-[1_/_2] row-[1_/_2] h-5 w-5 self-center justify-self-center sm:h-[22px] sm:w-[22px]"
                      alt="Component"
                      src="/marketing/chat.svg"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-3 sm:gap-4">
                    <h3 className="font-satoshi text-[18px] font-bold leading-[22px] tracking-[-0.36px] text-[#0f0a1f] sm:text-[20px] sm:leading-[24px] lg:text-[23px] lg:leading-[27.6px] lg:tracking-[-0.46px]">
                      {item.title}
                    </h3>
                    <p className="font-montserrat text-[13px] font-normal leading-[1.6] tracking-[0] text-[#3a3447] sm:text-[14px] lg:text-[15px] lg:leading-6">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
