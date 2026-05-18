import { Badge } from "@/components/ui/badge";

const platformIcons = [
  {
    name: "Instagram",
    src: "https://c.animaapp.com/mp6yzze1tTdE4q/img/group-465.png",
    className: "w-full max-w-[1076.82px]",
  },
];

export const PlatformSupportSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 py-[10px]">
        <header className="flex w-full max-w-[760px] flex-col items-center gap-[16.83px] text-center">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] text-[#8a39e4] hover:bg-[#f7f1ff]">
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px]">
              PLATFORMS WE MANAGE FOR UAE BUSINESSES
            </span>
          </Badge>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[38px] tracking-[-0.68px] text-[#0f0a1f] sm:text-[40px] sm:leading-[44px] sm:tracking-[-0.8px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
            We support full-service
            <br />
            management across:
          </h2>
        </header>
        <div className="flex w-full justify-center">
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