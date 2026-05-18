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
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-8 [&>*:first-child]:order-2 [&>*:last-child]:order-1 lg:[&>*:first-child]:order-1 lg:[&>*:last-child]:order-2">
            <div className="relative min-w-0 pb-4 sm:pb-6 lg:pb-0">
              <div className="relative overflow-hidden rounded-2xl aspect-square sm:rounded-3xl">
                <Image
                  fill
                  alt={sectionData.image.alt}
                  src={sectionData.image.src}
                  className="rounded-2xl object-cover sm:rounded-3xl"
                />
              </div>
              <div className="relative -mt-28 ml-3 mr-3 sm:-mt-36 sm:ml-8 sm:mr-10 lg:-mt-44 lg:mr-16 xl:mr-[85px]">
                <Card className="rounded-lg border-[6px] border-[#ffffff1f] bg-white shadow-[0px_8px_18px_#00000005,0px_33px_33px_#00000005,0px_75px_45px_#00000003,0px_133px_53px_transparent,0px_208px_58px_transparent] sm:border-[10px]">
                  <CardContent className="p-4 sm:p-5 lg:p-6">
                    <p className="[font-family:'Manrope',Helvetica] text-sm font-semibold leading-[22px] tracking-[0] text-[#161616] sm:text-base sm:leading-[25.6px]">
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
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-black leading-[1.1] tracking-[-0.5px] sm:text-4xl sm:leading-[1.1] sm:tracking-[-1px] xl:text-5xl xl:leading-[1.1]">
                  <span className="text-[#0e0e0e]">{sectionData.titleStart}</span>
                  <span className="text-[#3a0d8c]">{sectionData.titleHighlight}</span>
                </h2>
              </header>
              <div className="w-full [font-family:'Manrope',Helvetica] text-sm font-medium leading-6 tracking-[0] text-[#1e1e1e] opacity-[0.56] sm:text-base">
                <p>{sectionData.descriptionFirst}</p>
                <p className="mt-4 sm:mt-6">{sectionData.descriptionSecond}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
