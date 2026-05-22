import { Badge } from "@/components/ui/badge";

const platformIcons = [
  {
    name: "Instagram",
    src: "/social-media/socials.svg",
    className: "w-full max-w-[1076.82px]",
  },
];

export const PlatformSupportSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 py-[10px] sm:gap-8">
        <header className="flex w-full flex-col items-center gap-3 text-center sm:gap-[16.83px] lg:max-w-[760px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-[#8a39e4] hover:bg-[#f7f1ff]">
            <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] sm:text-xs sm:tracking-[1.68px]">
              PLATFORMS WE MANAGE FOR UAE BUSINESSES
            </span>
          </Badge>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[26px] font-bold leading-[32px] tracking-[-0.52px] text-[#0f0a1f] sm:text-[34px] sm:leading-[38px] sm:tracking-[-0.68px] md:text-[40px] md:leading-[44px] md:tracking-[-0.8px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
            We support full-service
            <br />
            management across:
          </h2>
        </header>
        <div className="flex w-full justify-center ">
          {platformIcons.map((platform) => (
            <img
              key={platform.name}
              className={`${platform.className} h-auto`}
              alt="Platforms we manage for UAE businesses"
              src={platform.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};