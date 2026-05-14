import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = ["Digital Strategy", "Web & App", "Social Media", "Lead Generation", "SEO & PPC", "Video Production", "Branding", "AI Marketing"];
const industriesAndTeams = ["B2B & Enterprise", "Real Estate", "Staff Augmentation", "Consultations"];
const contactItems = ["Book a Free Consultation", "hello@hireninjas.ae", "Dubai · UAE"];

export const CallToActionSection = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto w-full max-w-[1160px] px-4 py-10 sm:px-6 lg:px-8 lg:py-[70px]">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="rounded-[28px] bg-[#4a0d8c] px-6 py-10 sm:px-10 md:px-16 lg:px-40 lg:py-[50px]">
            <div className="flex flex-col items-center justify-center gap-[21.3px] text-center">
              <header className="max-w-[760px]">
                <h2 className="mt-[-1.00px] [font-family:'Satoshi-Black',Helvetica] text-[34px] font-normal leading-[1.05] text-transparent sm:text-[44px] lg:text-[56px] lg:leading-[56px]">
                  <span className="font-black tracking-[0] leading-[67.2px] text-white">
                    Forget guesswork.
                    <br />
                  </span>
                  <span className="[font-family:'ABeeZee',Helvetica] italic tracking-[-0.79px] leading-[67.2px] text-white">
                    Start scaling.
                  </span>
                </h2>
              </header>
              <p className="max-w-[820px] [font-family:'Inter',Helvetica] text-[15px] font-normal leading-[26.4px] tracking-[0] text-[#f5efe6c7] sm:text-[16px] lg:text-[17px]">
                With HireNinjas, you can strengthen teams and create smarter marketing systems,
                <br />
                this way everyone wins.
                <br />
                <br />
                No matter the situation, whether you are hiring talent or expanding brand recognition
                <br />
                in Dubai and Abu Dhabi, our services help you move faster with confidence.
              </p>
              <nav aria-label="Call to action" className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                <Button type="button" className="h-auto rounded-[999px] bg-white pl-[22px] pr-2 py-1.5 text-[#14101f] hover:bg-white/95">
                  <span className="inline-flex items-center gap-3">
                    <span className="inline-flex flex-col items-center pl-3.5">
                      <span className="[font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[0] text-center text-[#14101f]">
                        Book consultation
                      </span>
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-[18px] bg-[#3a0d8c]">
                      <Image width={16} height={16} alt="Arrow" src="/figmaAssets/component-2.svg" className="h-4 w-4" />
                    </span>
                  </span>
                </Button>
                <Button type="button" variant="ghost" className="h-auto rounded-[999px] border border-solid border-[#f5efe629] bg-transparent px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[0] text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6]">
                  See case studies
                </Button>
              </nav>
            </div>
          </CardContent>
        </Card>
      </div>
      <footer className="border-t border-[#ece8f3] bg-[#fafaff]">
        <div className="mx-auto w-full max-w-[1160px] px-4 pb-9 pt-16 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col gap-10">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
              <section className="flex h-fit flex-col items-start gap-3.5">
                <div className="flex w-full items-center gap-2.5">
                  <div className="relative flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,rgba(139,58,229,1)_0%,rgba(89,31,151,1)_100%)]">
                    <div className="absolute left-0 top-0 h-[30px] w-[30px] rounded-[9px] bg-[#ffffff01] shadow-[0px_6px_18px_-8px_#8a39e4b2]" />
                    <span className="relative flex w-fit items-center justify-center [font-family:'Satoshi-Bold',Helvetica] text-center text-sm font-bold leading-[22.4px] tracking-[-0.36px] text-white whitespace-nowrap">H</span>
                  </div>
                  <div className="inline-flex flex-col items-start">
                    <span className="mt-[-1.00px] flex w-fit items-center [font-family:'Satoshi-Bold',Helvetica] text-lg font-bold leading-[28.8px] tracking-[-0.36px] text-[#0f0a1f] whitespace-nowrap">HireNinjas</span>
                  </div>
                </div>
                <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447]">
                  Performance-led digital agency for<br />ambitious brands across Dubai and the UAE.
                </p>
              </section>
              <nav aria-label="Services" className="flex h-fit flex-col items-start gap-4">
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[1.30px] text-[#0f0a1f]">SERVICES</h3>
                <ul className="flex w-full flex-col items-start gap-2.5">
                  {services.map((item) => (
                    <li key={item} className="w-full">
                      <button type="button" className="flex w-full items-start text-left [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447] transition-colors hover:text-[#4a0d8c]">{item}</button>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav aria-label="Industries and teams" className="flex h-fit flex-col items-start gap-4">
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[1.30px] text-[#0f0a1f]">INDUSTRIES &amp; TEAMS</h3>
                <ul className="flex w-full flex-col items-start gap-2.5">
                  {industriesAndTeams.map((item) => (
                    <li key={item} className="w-full">
                      <button type="button" className="flex w-full items-start text-left [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447] transition-colors hover:text-[#4a0d8c]">{item}</button>
                    </li>
                  ))}
                </ul>
              </nav>
              <address className="flex h-fit flex-col items-start gap-4 not-italic">
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[1.30px] text-[#0f0a1f]">GET IN TOUCH</h3>
                <ul className="flex w-full flex-col items-start gap-2.5">
                  {contactItems.map((item) => (
                    <li key={item} className="w-full">
                      <button type="button" className="flex w-full items-start text-left [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447] transition-colors hover:text-[#4a0d8c]">{item}</button>
                    </li>
                  ))}
                </ul>
              </address>
            </div>
            <div className="flex flex-col gap-4 border-t border-[#ece8f3] pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478] whitespace-nowrap">© HireNinjas · Dubai · UAE</p>
              <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478] whitespace-nowrap">Crafted for measurable growth</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
