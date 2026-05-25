import { Badge } from "@/components/ui/badge";
import { ContactSection } from "./sections/ContactSection/ContactSection";


const heroContent = {
  badge: "LET'S TALK",
  titleAlt:
    "Tell us about your business and goals, we'll come back with a tailored strategy proposal within 48 hours.",
  titleSrc:
    "https://c.animaapp.com/mpicaoeqyWY9E4/img/tell-us-about-your-business-and-goals--we-ll-come-back-with-a-ta.svg",
};

export const LetSTalk = (): JSX.Element => {
  return (
    <main className="w-full bg-[#ffffff]" data-model-id="499:11155">
      <section className="relative overflow-hidden bg-[#ffffff] pt-[73px]">
        <div className="pointer-events-none absolute inset-x-0 top-[16px] h-[430px] overflow-hidden">
          <div className="relative mx-auto h-full w-full max-w-[1440px] overflow-hidden">
            <div className="relative left-1/2 top-[-18.82%] h-[131.77%] w-[120%] -translate-x-1/2 blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-[73px] h-[440px] overflow-hidden">
          <div className="relative mx-auto h-full w-full max-w-[1440px] overflow-hidden">
            <div className="absolute left-1/2 top-[-47.65%] h-[242.87%] w-[120%] -translate-x-1/2 blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
          </div>
        </div>
        <div className="relative mx-auto flex min-h-[440px] w-full max-w-[1440px] items-center justify-center px-6 pb-16 pt-10">
          <div className="flex w-full max-w-[974px] flex-col items-center gap-6 text-center">
            <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#f7f1ff]">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
              <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4]">
                {heroContent.badge}
              </span>
            </Badge>
            <img
              className="relative h-auto w-full self-stretch"
              alt={heroContent.titleAlt}
              src={heroContent.titleSrc}
            />
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
};
