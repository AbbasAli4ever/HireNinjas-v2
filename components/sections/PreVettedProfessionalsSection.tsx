import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const sectionData = {
  eyebrow: "STAFF AUGMENTATION",
  titleStart: "Brings pre-vetted ",
  titleHighlight: "professionals",
  descriptionFirst:
    "HireNinjas helps UAE companies quickly expand marketing, product, engineering, and operations teams within 48-72 hours depending on role complexity by providing qualified candidates to fill key positions quickly.",
  descriptionSecond:
    "Your internal team can focus on growth while we handle talent sourcing, screening, onboarding coordination and compliance for you. Our Digital Marketing Services Section delivers results-driven digital marketing services.",
  image: {
    src: "/figmaAssets/image.png",
    alt: "Pre-vetted professionals",
  },
  callout:
    "Brings professionals directly into your team without lengthy hiring cycles and overhead costs.",
};

export const PreVettedProfessionalsSection = () => {
  return (
    <section className="relative w-full px-4 py-6 sm:px-6">
      <Card className="mx-auto w-full max-w-[1160px] rounded-[32px] border-0 bg-white shadow-none sm:rounded-[40px] xl:rounded-[56px]">
        <CardContent className="p-5 sm:p-8 lg:p-10 xl:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-8">
            <div className="relative min-w-0">
              <div className="relative overflow-hidden rounded-3xl aspect-square">
                <Image
                  fill
                  alt={sectionData.image.alt}
                  src={sectionData.image.src}
                  className="rounded-3xl object-cover"
                />
              </div>
              <div className="relative -mt-24 ml-4 mr-4 sm:ml-5 sm:mr-10 lg:mr-16 xl:mr-[85px]">
                <Card className="rounded-lg border-[10px] border-[#ffffff1f] bg-white shadow-[0px_8px_18px_#00000005,0px_33px_33px_#00000005,0px_75px_45px_#00000003,0px_133px_53px_transparent,0px_208px_58px_transparent]">
                  <CardContent className="p-5 sm:p-6">
                    <p className="[font-family:'Manrope',Helvetica] text-base font-semibold leading-[25.6px] tracking-[0] text-[#161616]">
                      {sectionData.callout}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex min-w-0 flex-col items-start gap-4">
              <Badge
                variant="outline"
                className="h-auto rounded-[999px] border border-[#00000029] bg-transparent px-3.5 py-[7px] hover:bg-transparent"
              >
                <span className="mr-2.5 flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
                  <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                </span>
                <span className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[1.68px] text-black">
                  {sectionData.eyebrow}
                </span>
              </Badge>
              <header className="w-full">
                <h2 className="flex flex-wrap items-center [font-family:'Satoshi-Bold',Helvetica] text-4xl font-normal leading-[48px] text-transparent sm:text-5xl">
                  <span className="font-h-2 text-[length:var(--h-2-font-size)] font-[number:var(--h-2-font-weight)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#0e0e0e] [font-style:var(--h-2-font-style)]">
                    {sectionData.titleStart}
                  </span>
                  <span className="font-h-2 text-[length:var(--h-2-font-size)] font-[number:var(--h-2-font-weight)] leading-[var(--h-2-line-height)] tracking-[var(--h-2-letter-spacing)] text-[#3a0d8c] [font-style:var(--h-2-font-style)]">
                    {sectionData.titleHighlight}
                  </span>
                </h2>
              </header>
              <div className="w-full [font-family:'Manrope',Helvetica] text-base font-medium leading-6 tracking-[0] text-[#1e1e1e] opacity-[0.56]">
                <p>{sectionData.descriptionFirst}</p>
                <p className="mt-6">{sectionData.descriptionSecond}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
