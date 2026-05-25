import { Badge } from "@/components/ui/badge";

const descriptionLines = [
  "Explore flexible digital marketing packages designed for growth in Dubai businesses, from",
  "SEO-specific SEO packages and social media packages that boost leads and visibility, all the",
  "way through to providing dedicated account managers and ensuring zero hidden fees are",
  "included with each plan.",
];

export const HeroValueSection = (): JSX.Element => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden px-6 py-14 sm:px-10 md:px-16 lg:px-[140px] lg:py-[70px]">
      <div className="absolute inset-x-[-10%] top-[-10%] h-[59.89%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <div className="relative z-10 flex w-full max-w-[1160px] flex-col items-center gap-8 text-center">
        <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 py-2 hover:bg-[#f7f1ff]">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
          <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] leading-[19.2px] text-[#8a39e4]">
            PACKAGES &amp; PRICING
          </span>
        </Badge>
        <img
          className="h-auto w-full max-w-[760px]"
          alt="Digital marketing packages in Dubai with clear pricing and built for growth"
          src="https://c.animaapp.com/mpl6davuOYe2Kc/img/digital-marketing-packages-in-dubai-with-clear-pricing-and-built.svg"
        />
        <p className="max-w-[920px] [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22px] text-[#3a3447] sm:text-base sm:leading-7 lg:text-lg lg:leading-[28.8px]">
          {descriptionLines.map((line, index) => (
            <span key={`description-line-${index}`}>
              {line}
              {index < descriptionLines.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};
