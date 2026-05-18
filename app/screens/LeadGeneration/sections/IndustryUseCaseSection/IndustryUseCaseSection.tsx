import { Badge } from "../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../components/ui/card";

const industryCards = [
  {
    title: (
      <>
        Real Estate Developers
        <br />
        &amp; Agencies
      </>
    ),
    imageSrc:
      "https://c.animaapp.com/mpaw8ml1N6JcQv/img/magnific-minimalistic-monochrome-i-2946479372-1.png",
    cardHeight: "min-h-[261px]",
    cardRotation: "rotate-[10deg]",
    imageWrapClass: "w-[150px] h-[115px]",
    imageClass:
      "absolute w-[111.79%] h-[121.13%] top-[-10.57%] left-[-5.90%] rotate-[-10deg]",
  },
  {
    title: "Healthcare Providers & Clinics",
    imageSrc:
      "https://c.animaapp.com/mpaw8ml1N6JcQv/img/magnific-minimalistic-monochrome-i-2946531379-1.png",
    cardHeight: "min-h-[261px]",
    cardRotation: "rotate-[5deg]",
    imageWrapClass: "w-[151px] h-[115px]",
    imageClass:
      "absolute w-[106.24%] h-[111.09%] top-[-5.54%] left-[-3.12%] rotate-[-5deg]",
  },
  {
    title: "B2B Service Companies",
    imageSrc:
      "https://c.animaapp.com/mpaw8ml1N6JcQv/img/magnific-minimalistic-monochrome-i-2946640160-1.png",
    cardHeight: "min-h-[261px]",
    cardRotation: "",
    imageWrapClass: "w-[149px] h-[115px]",
    imageClass: "w-full h-full object-contain",
  },
  {
    title: "SaaS & Tech Firms",
    imageSrc:
      "https://c.animaapp.com/mpaw8ml1N6JcQv/img/magnific-minimalistic-monochrome-i-2946695405-1.png",
    cardHeight: "min-h-[261px]",
    cardRotation: "rotate-[-5deg]",
    imageWrapClass: "w-[119px] h-[115px]",
    imageClass:
      "absolute w-[108.04%] h-[108.64%] top-[-4.32%] left-[-4.02%] rotate-[5deg]",
  },
  {
    title: "Education & Training Institutes",
    imageSrc:
      "https://c.animaapp.com/mpaw8ml1N6JcQv/img/magnific-minimalistic-monochrome-i-2946668694-1.png",
    cardHeight: "min-h-[261px]",
    cardRotation: "rotate-[-10deg]",
    imageWrapClass: "w-[126px] h-[115px]",
    imageClass:
      "absolute w-[114.33%] h-[117.51%] top-[-8.76%] left-[-7.16%] rotate-[10deg]",
  },
];

export const IndustryUseCaseSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-12 sm:px-6 md:px-10 md:py-16 lg:px-16 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">
        <header className="flex w-full max-w-[760px] flex-col items-center gap-[16.83px] text-center">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-xs font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff] [font-family:'Montserrat',Helvetica]">
            INDUSTRIES WE GENERATE LEADS FOR
          </Badge>
          <h2 className="w-full [font-family:'Satoshi-Bold',Helvetica] text-[32px] font-bold leading-[36px] tracking-[-0.64px] text-[#0f0a1f] sm:text-[38px] sm:leading-[42px] md:text-[46px] md:leading-[49.7px] md:tracking-[-0.92px]">
            HireNinjas supports lead generation campaigns for:
          </h2>
        </header>
        <div className="mt-10 grid w-full max-w-[980px] grid-cols-2 place-items-center gap-x-3 gap-y-6 sm:grid-cols-3 md:mt-14 md:flex md:flex-wrap md:items-start md:justify-center md:gap-0">
          {industryCards.map((card, index) => (
            <Card
              key={`industry-card-${index}`}
              className={`w-[189px] border border-[#ece8f3] bg-white p-2 shadow-none ${card.cardHeight} ${card.cardRotation} ${
                index === 0 ? "md:mt-[23px]" : ""
              } ${index === 1 ? "md:mt-[8px] md:-ml-[16px]" : ""} ${
                index === 2 ? "md:-ml-[16px] z-30" : ""
              } ${index === 3 ? "md:mt-[8px] md:-ml-[16px] z-20" : ""} ${
                index === 4 ? "md:mt-[25px] md:-ml-[16px] z-10" : ""
              } rounded-2xl`}
            >
              <CardContent className="flex h-full flex-col items-start gap-2.5 p-0">
                <div className="relative h-[195px] w-[173px] overflow-hidden rounded-2xl bg-[#f3f3f3]">
                  <div
                    className={`relative left-1/2 top-1/2 ${card.imageWrapClass} -translate-x-1/2 -translate-y-1/2`}
                  >
                    {index === 2 ? (
                      <div
                        className="h-full w-full bg-[url(https://c.animaapp.com/mpaw8ml1N6JcQv/img/magnific-minimalistic-monochrome-i-2946640160-1.png)] bg-[100%_100%] bg-no-repeat"
                        aria-hidden="true"
                      />
                    ) : (
                      <img
                        className={card.imageClass}
                        alt="Magnific"
                        src={card.imageSrc}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-center self-stretch text-center [font-family:'Satoshi_Variable-Medium',Helvetica] text-base font-medium leading-[19.2px] tracking-[0] text-[#0f0a1f]">
                  {card.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
