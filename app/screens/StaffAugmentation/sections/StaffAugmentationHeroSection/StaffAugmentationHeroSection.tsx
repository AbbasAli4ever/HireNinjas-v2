import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const talentCards = [
  {
    title: "Front End Developer",
    availability: "Available · 48h",
    image: "/video/av.svg",
  },
  {
    title: "PPC Manager",
    availability: "Available · 72h",
    image: "/video/av1.svg",
  },
  {
    title: "UI/UX Designer",
    availability: "Available · 24h",
    image: "/video/av2.svg",
  },
  {
    title: "Full Stack Dev",
    availability: "Available · 48h",
    image: "/video/av3.svg",
  },
  {
    title: "SEO Specialist",
    availability: "Available · 24h",
    image: "/video/av4.svg",
  },
  {
    title: "Business Analyst",
    availability: "Available · 72h",
    image: "/video/av5.svg",
  },
];

export const StaffAugmentationHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-[430px] overflow-hidden pointer-events-none">
        <div className="relative left-[-10%] top-[-18.82%] h-[131.77%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="pointer-events-none absolute left-[-10%] top-[-22.28%] h-[156.01%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto flex min-h-[685px] w-full max-w-[1440px] flex-col justify-center px-4 py-12 sm:px-10 sm:py-16 xl:px-[140px]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_426px] lg:gap-[67px]">
          <header className="flex w-full max-w-[564px] flex-col items-start gap-5 sm:gap-[21.2px]">
            <div className="inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
              <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4] whitespace-nowrap">
                STAFF AUGMENTATION
              </span>
            </div>

               <header className="flex w-full flex-col items-start pb-[0.6px]">
            <h1
              className="text-[32px] leading-[1.1] tracking-[-1px] sm:text-[44px] sm:tracking-[-1.6px] md:text-5xl lg:text-[52px] xl:text-[56px] xl:tracking-[-2.52px] xl:leading-[110%]"
              style={{
                fontFamily: '"Satoshi", Helvetica, sans-serif',
                fontWeight: 700,
              }}
            >
              <span style={{ color: "#0F0A1F", display: "block" }}>
                Staff Augmentation Services That Help
              </span>
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(101deg, #8B3AE5 0%, #591F97 60%, #0F0A1F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Companies Build Teams Fast
              </span>
            </h1>
          </header>

            <p className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[1.6] text-[#3a3447] sm:text-lg sm:leading-[28.8px]">
              Secure pre-vetted professionals globally through Staff
              Augmentation Services designed to speed up team-building
              without recruitment delays or long-term hiring risks.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-start sm:gap-4">
              <Button className="relative h-14 sm:h-auto w-full sm:w-auto rounded-[999px] bg-[#8b39e5] py-2 pr-2 pl-[22px] hover:bg-[#7d2fda]">
              <span className="relative flex w-full sm:w-auto items-center justify-center sm:justify-start gap-3">
                <span className="[font-family:'Inter',Helvetica] text-center text-[14.5px] font-medium leading-[normal] tracking-[0] text-white">
                  Book a Free Consultation
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-white absolute right-0 sm:static">
                  <img
                    className="h-4 w-4"
                    alt="Component"
                    src="/figmaAssets/arrow-purple.svg"
                  />
                </span>
              </span>
            </Button>
              <Button
                variant="outline"
                className="h-12 w-full rounded-[999px] border-[#8b39e529] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-normal text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5] sm:w-auto"
                type="button"
              >
                See process
              </Button>
            </div>
          </header>
          <aside className="relative">
            <Card className="relative h-auto overflow-hidden rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
              <CardContent className="relative p-3.5 sm:p-[23px]">
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {talentCards.map((card) => (
                    <article
                      key={card.title}
                      className="relative flex min-h-[100px] flex-col items-start gap-2 rounded-[14px] border border-solid border-[#ece8f3] bg-[#ffffff33] p-3 backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] sm:min-h-[113.19px] sm:p-3.5"
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-[14px] border-2 border-solid border-white shadow-[0px_12px_28px_-22px_#140a282e] backdrop-blur-[2.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100%)]" />
                      <div
                        className="relative h-[34px] w-[34px] rounded-[17px] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${card.image})` }}
                        aria-hidden="true"
                      />
                      <div className="relative flex w-full flex-col items-start">
                        <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[15.6px] tracking-[0] text-[#0f0a1f]">
                          {card.title}
                        </h3>
                      </div>
                      <div className="relative flex w-full items-center gap-[6px]">
                        <span className="relative h-[7px] w-[7px] rounded-[3.5px] bg-green-600">
                          <span className="absolute inset-0 rounded-[3.5px] bg-[#ffffff01] shadow-[0px_0px_0px_3px_#16a34a26]" />
                        </span>
                        <span className="[font-family:'Montserrat',Helvetica] text-[11px] font-normal leading-[17.6px] tracking-[0] text-[#6b6478]">
                          {card.availability}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="pointer-events-none absolute bottom-[-32%] right-[-2%] h-[70.88%] w-[325px] opacity-70 blur-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.35)_0%,rgba(139,58,229,0)_70%)]" />
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
};
