import { Card, CardContent } from "@/components/ui/card";

const challenges = [
  { id: "1", title: "Expensive Local Hiring" },
  { id: "2", title: "Short Recruitment Cycles" },
  { id: "3", title: "Unreliable Freelancers" },
  { id: "4", title: "Weak Marketing Performance" },
  { id: "5", title: "Cross Border Compliance Risks" },
  { id: "6", title: "Limited Internal Capacity" },
];

export const CommonGrowthChallengesSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-[70px] sm:px-6 lg:px-[140px]">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-[50px]">
        <header className="flex w-full max-w-[590px] flex-col items-center justify-center gap-6 text-center">
          <p className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-[#6a6478]">
            PROBLEM - SOLUTION
          </p>
          <h2 className="max-w-[510px] [font-family:'Satoshi-Bold',Helvetica] text-center text-4xl font-normal leading-[1.2] sm:text-5xl">
            <span className="font-[number:var(--h-2-font-weight)] font-h-2 text-[length:var(--h-2-font-size)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#3a0d8c] [font-style:var(--h-2-font-style)]">
              Common Growth{" "}
            </span>
            <span className="font-[number:var(--h-2-font-weight)] font-h-2 text-[length:var(--h-2-font-size)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#14101f] [font-style:var(--h-2-font-style)]">
              Challenges We Solve
            </span>
          </h2>
          <p className="w-full [font-family:'Inter',Helvetica] text-lg font-normal leading-[27.9px] tracking-[0] text-[#3a3445]">
            HireNinjas provides an efficient method for increasing team and
            marketing performance quickly and seamlessly
          </p>
        </header>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map((challenge) => (
            <Card
              key={challenge.id}
              className="border-0 bg-transparent p-0 shadow-none"
            >
              <CardContent className="p-0">
                <button
                  type="button"
                  className="group flex h-[110px] w-full items-center gap-0 text-left"
                >
                  <div className="relative z-10 flex h-20 w-[81px] shrink-0 items-center justify-center">
                    <div className="absolute left-0 top-px h-20 w-[79px] rounded-[39.5px/39.94px] border-[3px] border-solid border-white bg-[#f8f5ff]" />
                    <span className="relative z-10 flex items-center justify-center [font-family:'Satoshi-Black',Helvetica] text-2xl font-black leading-[26.4px] text-[#3a0d8c]">
                      {challenge.id}
                    </span>
                  </div>
                  <div className="relative -ml-[26px] flex h-[110px] min-w-0 flex-1 items-center rounded-[18px] bg-white pl-[52px] pr-6 shadow-[2px_0px_5px_#00000008,9px_0px_9px_#00000008,21px_0px_13px_#00000005,38px_0px_15px_transparent,59px_0px_17px_transparent]">
                    <span className="[font-family:'Inter',Helvetica] text-base font-normal leading-[26.4px] tracking-[-0.48px] text-black">
                      {challenge.title}
                    </span>
                  </div>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
