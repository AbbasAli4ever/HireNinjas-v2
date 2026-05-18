import { Card, CardContent } from "@/components/ui/card";

const challenges = [
  { id: "1", title: "Local Hiring" },
  { id: "2", title: "Short Recruitment Cycles" },
  { id: "3", title: "Unreliable Freelancers" },
  { id: "4", title: "Weak Marketing Performance" },
  { id: "5", title: "Cross Border Compliance Risks" },
  { id: "6", title: "Limited Internal Capacity" },
];

export const CommonGrowthChallengesSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-[70px]">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:gap-[50px]">
        <header className="flex w-full max-w-[590px] flex-col items-center justify-center gap-4 text-center sm:gap-6">
          <p className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-[#6a6478]">
            PROBLEM - SOLUTION
          </p>
          <h2 className="max-w-[510px] [font-family:'Satoshi-Bold',Helvetica] text-center text-[28px] font-black leading-[1.15] tracking-[-0.5px] sm:text-4xl sm:tracking-[-1px] xl:text-5xl">
            <span className="text-[#3a0d8c]">Common Growth </span>
            <span className="text-[#14101f]">Challenges We Solve</span>
          </h2>
          <p className="w-full [font-family:'Inter',Helvetica] text-sm font-normal leading-6 tracking-[0] text-[#3a3445] sm:text-base lg:text-lg lg:leading-[27.9px]">
            HireNinjas provides an efficient method for increasing team and marketing performance quickly and seamlessly
          </p>
        </header>
        <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="border-0 bg-transparent p-0 shadow-none">
              <CardContent className="p-0">
                <button type="button" className="group flex h-[90px] w-full items-center gap-0 text-left sm:h-[110px]">
                  <div className="relative z-10 flex h-[68px] w-[68px] shrink-0 items-center justify-center sm:h-20 sm:w-[81px]">
                    <div className="absolute left-0 top-px h-[68px] w-[67px] rounded-[34px/34.3px] border-[3px] border-solid border-white bg-[#f8f5ff] transition-colors duration-300 group-hover:bg-[#3a0d8c] sm:h-20 sm:w-[79px] sm:rounded-[39.5px/39.94px]" />
                    <span className="relative z-10 flex items-center justify-center [font-family:'Satoshi-Black',Helvetica] text-xl font-black leading-none text-[#3a0d8c] transition-colors duration-300 group-hover:text-white sm:text-2xl sm:leading-[26.4px]">
                      {challenge.id}
                    </span>
                  </div>
                  <div className="relative -ml-[22px] flex h-[90px] min-w-0 flex-1 items-center rounded-[14px] bg-white pl-[44px] pr-4 shadow-[2px_0px_5px_#00000008,9px_0px_9px_#00000008,21px_0px_13px_#00000005,38px_0px_15px_transparent,59px_0px_17px_transparent] transition-shadow duration-300 group-hover:shadow-[0px_12px_28px_-8px_#3a0d8c1f,2px_0px_5px_#00000008] sm:-ml-[26px] sm:h-[110px] sm:rounded-[18px] sm:pl-[52px] sm:pr-6">
                    <span className="[font-family:'Inter',Helvetica] text-sm font-normal leading-snug tracking-[-0.48px] text-black sm:text-base sm:leading-[26.4px]">
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
