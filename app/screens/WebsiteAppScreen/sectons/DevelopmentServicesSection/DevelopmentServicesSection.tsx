import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const serviceCards = [
  {
    id: "01",
    label: "DESIGN",
    title: "Custom Website Design",
    description:
      "At Hireninjas, we specialise in crafting tailored websites tailored specifically for each of our client businesses, creating stunning interfaces designed with brand consistency in mind and standing out from competitors through templated solutions.",
    icon: "https://c.animaapp.com/mp5dxvs5vBeNIx/img/component-4-5.svg",
    colSpan: "lg:col-span-6",
    dark: false,
  },
  {
    id: "02",
    label: "MOBILE",
    title: "Mobile App Development",
    description:
      "Create intuitive mobile applications for iOS and Android using native or cross-platform frameworks that offer seamless user experiences with long-term engagement potential.",
    icon: "https://c.animaapp.com/mp5dxvs5vBeNIx/img/component-4-11.svg",
    colSpan: "lg:col-span-6",
    dark: false,
  },
  {
    id: "03",
    label: "COMMERCE",
    title: "E-Commerce Development",
    description:
      "Create scalable online stores using Shopify, WooCommerce or custom frameworks - each featuring secure payment gateway integration and conversion-focused checkout experiences for maximum conversions.",
    icon: "https://c.animaapp.com/mp5dxvs5vBeNIx/img/component-4-4.svg",
    colSpan: "lg:col-span-4",
    dark: false,
  },
  {
    id: "04",
    label: "CMS",
    title: "CMS Integration",
    description:
      "Our CMS services integrate flexible content management systems such as WordPress and Webflow into your organization so your internal team can update content effortlessly without technical complexity.",
    icon: "https://c.animaapp.com/mp5dxvs5vBeNIx/img/component-4.svg",
    colSpan: "lg:col-span-4",
    dark: false,
  },
  {
    id: "05",
    label: "CONNECT",
    title: "API and CRM Integration",
    description:
      "Integrate your website with CRM platforms, ERP systems, marketing automation tools and third-party services in order to streamline operations and increase data visibility.",
    icon: "https://c.animaapp.com/mp5dxvs5vBeNIx/img/component-4-2.svg",
    colSpan: "lg:col-span-4",
    dark: false,
  },
  {
    id: "06",
    label: "SECURE",
    title: "Security & Hosting — Wrestle Your Platform Cleanly",
    description:
      "Get protection with SSL encryption, CDN performance layers, automated backups and managed hosting environments designed to keep your platform safe.",
    icon: "https://c.animaapp.com/mp5dxvs5vBeNIx/img/component-4-10.svg",
    colSpan: "lg:col-span-12",
    dark: true,
  },
];

export const DevelopmentServicesSection = (): JSX.Element => {
  return (
    <section
      className="relative w-full px-8 py-[80px] md:px-10 lg:px-[0px]"
      aria-labelledby="development-services-heading"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[16.83px]">
          <Badge className="inline-flex h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px] [font-family:'Montserrat',Helvetica] text-xs font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff]">
            OUR WEBSITE AND APP DEVELOPMENT SERVICES
          </Badge>
          <div className="w-full">
            <h2
              id="development-services-heading"
              className="mt-[-1.00px] self-stretch [font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[1.08] tracking-[-0.92px] text-[#0f0a1f] sm:text-[42px] lg:text-[46px]"
            >
              A full development stack
              <br />— from pixel to production.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {serviceCards.map((card) => (
            <Card
              key={card.id}
              className={`relative overflow-hidden rounded-2xl border shadow-none ${
                card.dark
                  ? "border-transparent bg-[linear-gradient(164deg,rgba(45,2,85,1)_0%,rgba(26,10,61,1)_100%)]"
                  : "border-[#ece8f3] bg-white"
              } ${card.colSpan}`}
            >
              <CardContent className="flex h-full flex-col items-start gap-2.5 p-7">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-[11px] ${
                    card.dark ? "bg-[#ffffff1a]" : "bg-[#f7f1ff]"
                  }`}
                >
                  <img className="h-[22px] w-[22px]" alt="" src={card.icon} />
                </div>
                <div className="flex w-full flex-col items-start px-0 pb-[0.8px] pt-[7px]">
                  <p
                    className={`mt-[-1.00px] self-stretch [font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[2.08px] ${
                      card.dark ? "text-[#bd8cff]" : "text-[#8a39e4]"
                    }`}
                  >
                    {card.id} — {card.label}
                  </p>
                </div>
                <div
                  className={`flex flex-col items-start px-0 pb-0 pt-1 ${
                    card.dark ? "max-w-[307.33px]" : "w-full"
                  }`}
                >
                  <h3
                    className={`mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] ${
                      card.dark ? "text-white" : "self-stretch text-[#0f0a1f]"
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>
                <div
                  className={`flex flex-col items-start ${
                    card.dark ? "max-w-[595.8px]" : "w-full"
                  }`}
                >
                  <p
                    className={`mt-[-1.00px] [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] ${
                      card.dark
                        ? "text-[#ffffffc7]"
                        : "self-stretch text-[#3a3447]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
