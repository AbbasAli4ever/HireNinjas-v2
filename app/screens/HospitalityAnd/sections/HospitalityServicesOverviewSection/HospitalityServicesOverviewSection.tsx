import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const heroStats = [
  {
    title: "Direct",
    description: "Less reliance on OTAs",
  },
  {
    title: "Seasonal",
    description: "Ramadan · Summer · Winter",
  },
  {
    title: "Global",
    description: "Leisure + international",
  },
];

const bookingFields = [
  {
    label: "CHECK-IN",
    value: "Fri 26 Sep",
  },
  {
    label: "CHECK-OUT",
    value: "Mon 29 Sep",
  },
  {
    label: "GUESTS",
    value: "2 adults",
  },
];

const channelStats = [
  {
    name: "Direct site",
    value: "+186%",
    highlighted: true,
  },
  {
    name: "Instagram",
    value: "+94%",
    highlighted: false,
  },
  {
    name: "YouTube",
    value: "+71%",
    highlighted: false,
  },
  {
    name: "Search",
    value: "+52%",
    highlighted: false,
  },
];

const storytellingItems = [
  {
    title: "Social Media Management",
    tag: "Engage",
  },
  {
    title: "Video Production",
    tag: "Story",
  },
  {
    title: "Lead Generation & Campaigns",
    tag: "Acquire",
  },
  {
    title: "Branding & Identity",
    tag: "Position",
  },
];

const serviceToolkitCards = [
  {
    number: "01",
    title: "Social Media Management",
    icon: "https://c.animaapp.com/mpi3sdlaIyjTSm/img/component-4-5.svg",
  },
  {
    number: "02",
    title: "Video Production",
    icon: "https://c.animaapp.com/mpi3sdlaIyjTSm/img/component-4-4.svg",
  },
  {
    number: "03",
    title: "Lead Generation & Campaigns",
    icon: "https://c.animaapp.com/mpi3sdlaIyjTSm/img/component-4-1.svg",
  },
  {
    number: "04",
    title: "Branding & Identity",
    icon: "https://c.animaapp.com/mpi3sdlaIyjTSm/img/component-4-3.svg",
  },
];

const challengeCards = [
  {
    number: "01",
    title: "Direct Booking Campaigns",
    description:
      "At Hireninjas, we specialize in creating performance-driven campaigns to reduce reliance on OTA platforms and increase direct bookings via targeted paid media ads, remarketing strategies, and conversion-centric landing experiences.",
  },
  {
    number: "02",
    title: "Experience Marketing",
    description:
      "Our tourism marketing agency Dubai team creates video-first storytelling campaigns and social media posts that showcase guest experience, property positioning and destination appeal in order to draw in leisure travellers as well as international travellers.",
  },
  {
    number: "03",
    title: "Seasonal Campaigns",
    description:
      "Our marketing campaigns in the restaurant and hospitality sectors are strategically designed to align with significant seasons and trends, such as Ramadan (a period when individuals tend to dine out more during the evening), summer staycation, the bustling winter tourism season, and UAE National Day. Each aspect is customized to draw in your target clientele at the right time.",
  },
];

export const HospitalityServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-[430px] overflow-hidden pointer-events-none">
        <div className="relative h-full w-full blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col">
        <section className="w-full px-6 pb-16 pt-12 md:px-10 lg:px-[120px] lg:pb-[86px] lg:pt-[84px]">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <article className="flex w-full max-w-[685px] flex-col items-start gap-[21.2px]">
              <Badge className="h-auto rounded-[999px] border border-solid border-[#00000029] bg-transparent px-3.5 py-[7px] [font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-black hover:bg-transparent">
                <span className="mr-2.5 flex h-1.5 w-1.5 items-center justify-center rounded-[3px] bg-[#6ce5b1]">
                  <span className="h-1.5 w-1.5 rounded-[3px] bg-[#ffffff01] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
                </span>
                HOSPITALITY &amp; TOURISM
              </Badge>
              <div className="w-full">
                <img
                  className="h-auto w-full max-w-full"
                  alt="Hospitality tourism"
                  src="https://c.animaapp.com/mpi3sdlaIyjTSm/img/hospitality---tourism-built-to-attract-high--value-travelers.svg"
                />
              </div>
              <p className="[font-family:'Montserrat',Helvetica] text-lg font-normal leading-[28.8px] tracking-[0] text-tuna">
                Dubai and Abu Dhabi are among the world&apos;s most competitive
                tourism destinations, where hotels, resorts, restaurants and
                travel operators must stand out across global booking platforms
                and digital discovery channels. HireNinjas&apos; hospitality
                marketing agency services in Dubai specializes in helping
                tourism brands attract high-value visitors through creative
                storytelling supported by precise digital distribution
                strategies.
              </p>
              <div className="flex flex-wrap items-start gap-4 md:gap-6">
                <Button
                  className="h-auto rounded-[999px] bg-[#8b39e5] pl-[22px] pr-2 py-1.5 hover:bg-[#8b39e5]"
                  type="button"
                >
                  <span className="pl-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium text-white">
                    Free Strategy Call
                  </span>
                  <span className="ml-3 grid h-9 w-9 place-items-center rounded-full bg-white">
                    <ArrowRightIcon className="h-4 w-4 text-[#8b39e5]" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto rounded-[999px] border-[#8b39e529] px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium text-[#8b39e5] hover:bg-transparent"
                  type="button"
                >
                  See Services
                </Button>
              </div>
              <div className="flex w-full flex-wrap items-start gap-x-7 gap-y-4 pt-[18.8px]">
                {heroStats.map((stat) => (
                  <div
                    key={stat.title}
                    className="flex min-h-[58px] flex-col justify-start border-l-2 border-[#d9bbff] pl-4"
                  >
                    <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[22px] font-bold leading-[35.2px] tracking-[-0.44px] text-ebony">
                      {stat.title}
                    </h3>
                    <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-dolphin">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
            <Card className="relative w-full max-w-[483px] overflow-hidden rounded-3xl border border-solid border-[#ece8f3] bg-transparent shadow-none [background:radial-gradient(50%_50%_at_0%_0%,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_60%)]">
              <CardContent className="relative p-[23px]">
                <div className="flex flex-col gap-[11.99px]">
                  <Card className="relative rounded-[14px] border border-solid border-[#ece8f3] bg-white shadow-[0px_16px_30px_-22px_#140a282e]">
                    <CardContent className="relative flex flex-col gap-3.5 p-[18px]">
                      <header className="flex items-center justify-between gap-4">
                        <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-base font-bold leading-[25.6px] tracking-[0] text-ebony">
                          Marina Resort &amp; Spa
                        </h3>
                        <div className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[1px] text-buttercup">
                          ★ ★ ★ ★ ★
                        </div>
                      </header>
                      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                        {bookingFields.map((field) => (
                          <div
                            key={field.label}
                            className="flex min-h-[57px] flex-col gap-[0.59px] rounded-lg border border-solid border-[#ece8f3] px-2.5 pb-2 pt-[7px]"
                          >
                            <div className="[font-family:'Montserrat',Helvetica] text-[11px] font-normal leading-[17.6px] tracking-[0] text-dolphin">
                              {field.label}
                            </div>
                            <div className="[font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[22.4px] tracking-[0] text-ebony">
                              {field.value}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-end justify-between gap-4 border-t border-dashed border-[#ece8f3] pt-2.5">
                        <div className="flex flex-col gap-[0.01px]">
                          <div className="flex items-end gap-1">
                            <span className="[font-family:'Satoshi-Bold',Helvetica] text-2xl font-bold leading-[38.4px] tracking-[-0.48px] text-purple-heart">
                              AED 1,290
                            </span>
                            <span className="[font-family:'Satoshi-Bold',Helvetica] pb-1 text-xs font-bold leading-[19.2px] tracking-[-0.48px] text-dolphin">
                              /night
                            </span>
                          </div>
                          <div className="font-montserrat-regular-strikethrough text-[length:var(--montserrat-regular-strikethrough-font-size)] font-[number:var(--montserrat-regular-strikethrough-font-weight)] leading-[var(--montserrat-regular-strikethrough-line-height)] tracking-[var(--montserrat-regular-strikethrough-letter-spacing)] text-dolphin line-through [font-style:var(--montserrat-regular-strikethrough-font-style)]">
                            AED 1,580 on OTAs
                          </div>
                        </div>
                        <Button
                          className="h-auto rounded-[999px] bg-purple-heart px-3.5 py-[7.5px] font-montserrat-bold text-[length:var(--montserrat-bold-font-size)] font-[number:var(--montserrat-bold-font-weight)] leading-[var(--montserrat-bold-line-height)] tracking-[var(--montserrat-bold-letter-spacing)] text-white hover:bg-purple-heart [font-style:var(--montserrat-bold-font-style)]"
                          type="button"
                        >
                          Book Direct
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="grid grid-cols-2 gap-2.5">
                    {channelStats.map((channel) => (
                      <Card
                        key={channel.name}
                        className={`rounded-xl border shadow-[0px_8px_22px_-20px_#140a282e] ${
                          channel.highlighted
                            ? "border-transparent bg-cherry-pie"
                            : "border-[#ece8f3] bg-white"
                        }`}
                      >
                        <CardContent className="flex min-h-[51.59px] items-center justify-between gap-4 p-3">
                          <span
                            className={`[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[0] ${
                              channel.highlighted ? "text-white" : "text-ebony"
                            }`}
                          >
                            {channel.name}
                          </span>
                          <span
                            className={`[font-family:'Satoshi-Bold',Helvetica] text-base font-bold leading-[25.6px] tracking-[0] ${
                              channel.highlighted
                                ? "text-heliotrope"
                                : "text-purple-heart"
                            }`}
                          >
                            {channel.value}
                          </span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute bottom-[-20%] left-[60%] h-[63.35%] w-[69.69%] blur-[10px] opacity-70 [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.35)_0%,rgba(139,58,229,0)_70%)]" />
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full px-6 py-[70px] md:px-10 lg:px-[140px]">
          <div className="flex flex-col gap-12">
            <header className="flex max-w-[760px] flex-col items-start gap-[16.83px]">
              <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-magnolia px-3.5 pb-[7.69px] pt-[7.5px] font-montserrat-semibold-upper text-[length:var(--montserrat-semibold-upper-font-size)] font-[number:var(--montserrat-semibold-upper-font-weight)] leading-[var(--montserrat-semibold-upper-line-height)] tracking-[var(--montserrat-semibold-upper-letter-spacing)] text-purple-heart hover:bg-magnolia [font-style:var(--montserrat-semibold-upper-font-style)]">
                STORYTELLING + DISTRIBUTION = DIRECT BOOKINGS
              </Badge>
              <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[1.08] tracking-[-0.92px] text-ebony md:text-[46px]">
                Built for hotels, restaurants
                <br />
                &amp; tourism brands.
                              </h2>
            </header>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[60px]">
              <div className="flex items-start">
                <p className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] tracking-[0] text-tuna">
                  Our hospitality digital marketing UAE campaigns combine social
                  media management, high-impact video production, performance
                  advertising and destination-specific branding to increase
                  direct bookings and strengthen brand recognition. Whether
                  supporting hotel groups, boutique properties or tourism
                  experiences in Dubai and Abu Dhabi travel markets, our
                  strategies aim to reduce third-party booking platforms while
                  improving campaign performance across both travel audiences.
                </p>
              </div>
              <Card className="rounded-2xl border border-solid border-[#f0e2ff] bg-transparent shadow-none [background:linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)]">
                <CardContent className="flex flex-col gap-3 p-7">
                  {storytellingItems.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between gap-4 rounded-xl border border-solid border-[#ece8f3] bg-white px-4 py-3.5"
                    >
                      <span className="[font-family:'Satoshi-Bold',Helvetica] text-[15px] font-bold leading-6 tracking-[0] text-ebony">
                        {item.title}
                      </span>
                      <Badge className="h-auto rounded-[999px] bg-magnolia px-[9px] py-1 font-montserrat-semibold text-[length:var(--montserrat-semibold-font-size)] font-[number:var(--montserrat-semibold-font-weight)] leading-[var(--montserrat-semibold-line-height)] tracking-[var(--montserrat-semibold-letter-spacing)] text-daisy-bush hover:bg-magnolia [font-style:var(--montserrat-semibold-font-style)]">
                        {item.tag}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full border-y border-solid border-[#ece8f3] bg-titan-white px-6 py-24 md:px-10 lg:px-[140px]">
          <div className="flex w-full max-w-[1200px] flex-col items-start gap-12">
            <header className="flex max-w-[760px] flex-col items-start gap-[16.83px]">
              <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-magnolia px-3.5 pb-[7.69px] pt-[7.5px] font-montserrat-semibold-upper text-[length:var(--montserrat-semibold-upper-font-size)] font-[number:var(--montserrat-semibold-upper-font-weight)] leading-[var(--montserrat-semibold-upper-line-height)] tracking-[var(--montserrat-semibold-upper-letter-spacing)] text-purple-heart hover:bg-magnolia [font-style:var(--montserrat-semibold-upper-font-style)]">
                KEY SERVICES PROVIDED
              </Badge>
              <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[1.08] tracking-[-0.92px] text-ebony md:text-[46px]">
                A focused hospitality
                <br />
                marketing toolkit.
              </h2>
            </header>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {serviceToolkitCards.map((card) => (
                <Card
                  key={card.number}
                  className="relative overflow-hidden rounded-2xl border border-solid border-[#ece8f3] bg-white shadow-none"
                >
                  <CardContent className="flex h-full flex-col items-start gap-3.5 px-7 pb-10 pt-7">
                    <div className="grid h-11 w-11 place-items-center rounded-[11px] bg-magnolia">
                      <img
                        className="h-[22px] w-[22px]"
                        alt="Component"
                        src={card.icon}
                      />
                    </div>
                    <div className="[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[2.08px] text-purple-heart">
                      {card.number}
                    </div>
                    <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-ebony">
                      {card.title}
                    </h3>
                    <div className="absolute bottom-[-29px] right-[-29px] h-[140px] w-[140px] rounded-[70px] opacity-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_70%)]" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full px-6 py-[70px] md:px-10 lg:px-[140px]">
          <div className="flex flex-col gap-12">
            <header className="flex max-w-[760px] flex-col items-start gap-[16.83px]">
              <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-magnolia px-3.5 pb-[7.69px] pt-[7.5px] font-montserrat-semibold-upper text-[length:var(--montserrat-semibold-upper-font-size)] font-[number:var(--montserrat-semibold-upper-font-weight)] leading-[var(--montserrat-semibold-upper-line-height)] tracking-[var(--montserrat-semibold-upper-letter-spacing)] text-purple-heart hover:bg-magnolia [font-style:var(--montserrat-semibold-upper-font-style)]">
                KEY CHALLENGES WE OVERCOME
              </Badge>
              <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[1.08] tracking-[-0.92px] text-ebony md:text-[46px]">
                Less commission.
                <br />
                More direct bookings.
              </h2>
            </header>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              {challengeCards.map((card) => (
                <Card
                  key={card.number}
                  className="relative overflow-hidden rounded-2xl border border-solid border-[#ece8f3] bg-white shadow-none"
                >
                  <CardContent className="relative flex h-full flex-col items-start gap-3 p-8">
                    <div className="absolute right-[11px] top-[25px] [font-family:'Satoshi-Bold',Helvetica] text-[56px] font-bold leading-[56px] tracking-[-2.24px] text-magnolia">
                      {card.number}
                    </div>
                    <h3 className="relative z-[1] max-w-[80%] [font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-ebony">
                      {card.title}
                    </h3>
                    <p className="relative z-[1] font-montserrat-regular text-[length:var(--montserrat-regular-font-size)] font-[number:var(--montserrat-regular-font-weight)] leading-[var(--montserrat-regular-line-height)] tracking-[var(--montserrat-regular-letter-spacing)] text-tuna [font-style:var(--montserrat-regular-font-style)]">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
