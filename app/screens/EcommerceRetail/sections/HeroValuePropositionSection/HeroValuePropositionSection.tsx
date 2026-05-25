import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const HeroValuePropositionSection = (): JSX.Element => {
  const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

  const bars = [
    { height: "h-3.5" },
    { height: "h-6" },
    { height: "h-[34px]" },
    { height: "h-[51.1px]" },
    { height: "h-[58px]" },
    { height: "h-16" },
    { height: "h-[70px]" },
  ];

  const products = [
    {
      name: "Marina Tote Bag",
      price: "AED 320",
      carts: "+118 carts",
      className: "top-8 left-[-43px]",
    },
    {
      name: "Ocean Tumbler",
      price: "AED 89",
      carts: "+76 carts",
      className: "bottom-4 right-[-40px]",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-[-80px] h-[430px] overflow-hidden">
        <div className="relative left-1/2 h-[131.77%] w-[120%] -translate-x-1/2 blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-24.24%] h-[123.54%] w-[120%] -translate-x-1/2 blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      </div>
      <div className="relative mx-auto flex min-h-[865px] w-full max-w-[1440px] flex-col justify-center px-6 py-16 sm:px-10 lg:px-[120px]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,667px)_minmax(360px,451px)] lg:gap-[62px]">
          <header className="flex flex-col items-start gap-[13.4px]">
            <div className="inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
              <span className="whitespace-nowrap [font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4]">
                ECOMMERCE &amp; RETAIL
              </span>
            </div>
            <div className="flex w-full flex-col items-start px-0 pb-[0.6px] pt-[7.76px]">
              <img
                className="h-auto w-full max-w-[590px]"
                alt="Ecommerce retail"
                src="https://c.animaapp.com/mpicaoeqyWY9E4/img/ecommerce---retail-that-scale-your-online-store-profitably.svg"
              />
            </div>
            <div className="flex w-full max-w-[667.29px] flex-col items-start px-0 pb-0 pt-[7.89px]">
              <p className="mt-[-1.00px] self-stretch [font-family:'Montserrat',Helvetica] text-lg font-normal leading-[28.8px] tracking-[0] text-[#3a3447]">
                Dubai and Abu Dhabi businesses in need of digital marketing for
                e-commerce or retail needs need only look no further. We
                specialise in digital marketing for both these industries in
                Dubai &amp; Abu Dhabi.
              </p>
            </div>
            <div className="flex w-full max-w-[667.29px] flex-col items-start">
              <p className="mt-[-1.00px] self-stretch [font-family:'Montserrat',Helvetica] text-lg font-normal leading-[28.8px] tracking-[0] text-[#3a3447]">
                E-commerce in the UAE is growing quickly as online retailers and
                D2C brands compete on marketplaces, social commerce platforms,
                and performance advertising channels. HireNinjas&#39; specialist
                ecommerce marketing agency Dubai supports online stores by
                helping acquire customers cost-efficiently while improving
                conversion rates and increasing repeat purchases through
                structured full-funnel marketing strategies.
              </p>
            </div>
            <nav
              className="inline-flex flex-wrap items-start gap-6 pt-1"
              aria-label="Hero actions"
            >
              <Button
                type="button"
                className="h-auto rounded-[999px] bg-[#8b39e5] pl-[22px] pr-2 py-1.5 text-white hover:bg-[#7c2fd9]"
              >
                <span className="inline-flex items-center gap-3">
                  <span className="inline-flex flex-col items-center pl-3.5 pr-0">
                    <span className="[font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-normal tracking-[0] text-center text-white">
                      Free Strategy Call
                    </span>
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-white">
                    <img
                      className="h-4 w-4"
                      alt="Component"
                      src="https://c.animaapp.com/mpicaoeqyWY9E4/img/component-2.svg"
                    />
                  </span>
                </span>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-12 rounded-[999px] border border-solid border-[#8b39e529] bg-transparent px-[22px] py-3.5 hover:bg-[#f7f1ff]"
              >
                <span className="[font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-normal tracking-[0] text-center text-[#8b39e5]">
                  See Services
                </span>
              </Button>
            </nav>
          </header>
          <div className="relative mx-auto w-full max-w-[451px]">
            <div className="relative overflow-visible rounded-[32px]">
              <img
                className="h-auto w-full rounded-[32px] object-cover"
                alt="Image"
                src="https://c.animaapp.com/mpicaoeqyWY9E4/img/image-28.png"
              />
              {products.map((product) => (
                <Card
                  key={product.name}
                  className={`absolute ${product.className} w-[116px] rounded-xl border-0 bg-neutral-10 shadow-[4px_4px_56px_#0000001a]`}
                >
                  <CardContent className="relative flex flex-col items-start p-3">
                    <div className="absolute inset-0 rounded-xl bg-[#ffffff01] shadow-[0px_10px_22px_-20px_#140a282e]" />
                    <div className="relative flex w-full flex-col items-start">
                      <div className="flex items-center whitespace-nowrap [font-family:'Satoshi-Regular',Helvetica] text-xs font-normal leading-[14.4px] tracking-[0] text-[#0f0a1f]">
                        {product.name}
                      </div>
                      <div className="flex items-center [font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[22.4px] tracking-[0] text-black">
                        {product.price}
                      </div>
                    </div>
                    <div className="relative [font-family:'Montserrat',Helvetica] text-[11px] font-normal leading-[17.6px] tracking-[0] text-[#6b6478]">
                      {product.carts}
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="absolute bottom-12 left-[-22px] w-[271px] rounded-2xl border-0 bg-white shadow-[0px_1px_8px_#6e6e6e1a]">
                <CardContent className="p-4">
                  <div className="mb-4 flex flex-col gap-3">
                    <Card className="w-[153px] rounded-xl border-0 bg-neutral-10 shadow-[4px_4px_56px_#0000001a]">
                      <CardContent className="relative flex flex-col items-start p-3">
                        <div className="absolute inset-0 rounded-[14px] bg-[#ffffff01] shadow-[0px_18px_40px_-22px_#140a282e]" />
                        <div className="relative flex w-full flex-col items-start pb-[0.59px]">
                          <div className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[18px] tracking-[0] text-neutral-60">
                            Roas
                          </div>
                        </div>
                        <div className="relative whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-[26px] font-bold leading-[41.6px] tracking-[-0.52px] text-[#591f97]">
                          7.4×
                        </div>
                        <div className="relative inline-flex items-center gap-1">
                          <img
                            className="h-4 w-4"
                            alt="Arrow up"
                            src="https://c.animaapp.com/mpicaoeqyWY9E4/img/arrow-up.svg"
                          />
                          <div className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[19.2px] tracking-[0] text-green-600">
                            22% last 30 days
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <div className="pl-1 [font-family:'Montserrat',Helvetica] text-base font-medium leading-5 tracking-[0.01px] text-[#414d55]">
                      Daily sales
                    </div>
                  </div>
                  <div className="flex h-[88px] items-end justify-between gap-[10px] px-1">
                    {bars.map((bar, index) => (
                      <div
                        key={`bar-${index}`}
                        className="flex h-[70px] w-3 items-end rounded-[999px] bg-[#e4eaf0]"
                      >
                        <div
                          className={`w-full rounded-[999px] bg-[linear-gradient(0deg,rgba(124,58,237,1)_0%,rgba(139,58,229,1)_100%)] ${bar.height}`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 grid grid-cols-7 gap-[10px] px-1">
                    {days.map((day) => (
                      <div
                        key={day}
                        className="[font-family:'Poppins',Helvetica] text-center text-[8px] font-normal leading-none tracking-[0.67px] text-[#414d55]"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
