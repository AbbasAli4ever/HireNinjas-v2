import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const challenges = [
  {
    number: "01",
    title: ["Showroom Lead", "Generation"],
    description: [
      "At Showroom Marketing Dubai, our",
      "skilled car dealership marketing",
      "partners create hyper-targeted",
      "advertising campaigns designed to",
      "increase qualified enquiries, test",
      "drive bookings, and showroom visits",
      "from potential vehicle buyers with",
      "strong intent.",
    ],
  },
  {
    number: "02",
    title: ["Model Launch Activations"],
    description: [
      "We create car launch marketing",
      "campaigns using 360deg digital",
      "activation strategies that generate",
      "anticipation prior to release while",
      "driving early enquiries through social",
      "media, paid advertising and video-first",
      "storytelling campaigns.",
    ],
  },
  {
    number: "03",
    title: ["Digital Retailing"],
    description: [
      "Modern buyers research vehicles",
      "online before visiting dealerships. Our",
      "automotive digital marketing",
      "strategies involve virtual showroom",
      "experiences, vehicle configuration",
      "journeys and video walkarounds",
      "designed to convert visitors to serious",
      "sales inquiries.",
    ],
  },
];

export const KeyChallengesSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-10 xl:px-[140px] xl:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pt-[7.5px] pb-[7.69px] text-[#8a39e4] hover:bg-[#f7f1ff]">
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] leading-[19.2px] whitespace-nowrap">
              KEY CHALLENGES WE OVERCOME
            </span>
          </Badge>
          <div className="w-full">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[1.08] tracking-[-0.92px] text-[#0f0a1f] sm:text-[40px] lg:text-[46px] lg:leading-[49.7px]">
              Footfall, launches, and
              <br />
              digital retailing — solved.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map((challenge) => (
            <Card
              key={challenge.number}
              className="rounded-2xl border border-solid border-[#ece8f3] bg-[#ffffff] shadow-none"
            >
              <CardContent className="relative flex h-full flex-col items-start gap-3 overflow-hidden px-8 pt-8 pb-8">
                <div className="pointer-events-none absolute top-[25px] right-[22px]">
                  <span className="[font-family:'Satoshi-Bold',Helvetica] text-[56px] font-bold leading-[56px] tracking-[-2.24px] text-[#f7f1ff]">
                    {challenge.number}
                  </span>
                </div>
                <h3 className="relative z-10 pr-12 [font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
                  {challenge.title.map((line, index) => (
                    <span key={`${challenge.number}-title-${index}`}>
                      {line}
                      {index < challenge.title.length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="relative z-10 [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-[#3a3447]">
                  {challenge.description.map((line, index) => (
                    <span key={`${challenge.number}-description-${index}`}>
                      {line}
                      {index < challenge.description.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};