import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const talentCards = [
  {
    title: "Front End Developer",
    availability: "Available · 48h",
    image: "https://c.animaapp.com/mpe3o2jeYfuFFD/img/background.png",
  },
  {
    title: "PPC Manager",
    availability: "Available · 72h",
    image: "https://c.animaapp.com/mpe3o2jeYfuFFD/img/background-1.png",
  },
  {
    title: "UI/UX Designer",
    availability: "Available · 24h",
    image: "https://c.animaapp.com/mpe3o2jeYfuFFD/img/background-2.png",
  },
  {
    title: "Full Stack Dev",
    availability: "Available · 48h",
    image: "https://c.animaapp.com/mpe3o2jeYfuFFD/img/background-3.png",
  },
  {
    title: "SEO Specialist",
    availability: "Available · 24h",
    image: "https://c.animaapp.com/mpe3o2jeYfuFFD/img/background-5.png",
  },
  {
    title: "Business Analyst",
    availability: "Available · 72h",
    image: "https://c.animaapp.com/mpe3o2jeYfuFFD/img/background-4.png",
  },
];

export const StaffAugmentationHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-[430px] overflow-hidden pointer-events-none">
        <div className="relative left-[-10%] top-[-18.82%] h-[131.77%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="pointer-events-none absolute left-[-10%] top-[-22.28%] h-[156.01%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative mx-auto flex min-h-[685px] w-full max-w-[1440px] flex-col justify-center px-6 py-16 sm:px-10 lg:px-[140px]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_426px] lg:gap-[67px]">
          <header className="flex max-w-[564px] flex-col items-start gap-[21.2px]">
            <div className="inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
              <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4] whitespace-nowrap">
                STAFF AUGMENTATION
              </span>
            </div>
            <div className="w-full pb-[0.6px]">
              <img
                className="h-auto w-full max-w-[564px]"
                alt="Staff augmentation services that help companies build teams fast"
                src="https://c.animaapp.com/mpe3o2jeYfuFFD/img/staff-augmentation-services-that-help-companies-build-teams-fast.svg"
              />
            </div>
            <p className="max-w-[667.29px] [font-family:'Montserrat',Helvetica] text-lg font-normal leading-[28.8px] text-[#3a3447]">
              Secure pre-vetted professionals globally through Staff
              <br />
              Augmentation Services designed to speed up team-building
              <br />
              without recruitment delays or long-term hiring risks.
            </p>
            <div className="flex flex-wrap items-start gap-4 sm:gap-6">
              <Button
                className="h-auto rounded-[999px] bg-[#8b39e5] pl-[22px] pr-2 py-1.5 hover:bg-[#7d2fda]"
                type="button"
              >
                <span className="inline-flex items-center gap-3">
                  <span className="inline-flex flex-col items-center pl-3.5">
                    <span className="[font-family:'Inter',Helvetica] text-center text-[14.5px] font-medium leading-normal text-white">
                      Book a Free Consultation
                    </span>
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-white">
                    <img
                      className="h-4 w-4"
                      alt="Component"
                      src="https://c.animaapp.com/mpe3o2jeYfuFFD/img/component-2.svg"
                    />
                  </span>
                </span>
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-[999px] border-[#8b39e529] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-normal text-[#8b39e5] hover:bg-[#f7f1ff] hover:text-[#8b39e5]"
                type="button"
              >
                See process
              </Button>
            </div>
          </header>
          <aside className="relative">
            <Card className="relative h-auto overflow-hidden rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
              <CardContent className="relative p-[23px]">
                <div className="grid grid-cols-2 gap-2.5">
                  {talentCards.map((card) => (
                    <article
                      key={card.title}
                      className="relative flex min-h-[113.19px] flex-col items-start gap-2 rounded-[14px] border border-solid border-[#ece8f3] bg-[#ffffff33] p-3.5 backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]"
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
