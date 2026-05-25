import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const officeCards = [
  {
    title: "Dubai Office",
    location: "Dubai, UAE",
    email: "hello@hireninjas.io",
    icon: "https://c.animaapp.com/mpicaoeqyWY9E4/img/background.svg",
  },
  {
    title: "Abu Dhabi Office",
    location: "Abu Dhabi, UAE",
    email: "abudhabi@hireninjas.io",
    icon: "https://c.animaapp.com/mpicaoeqyWY9E4/img/background-9.svg",
  },
];

const formFields = [
  {
    id: "first-name",
    label: "FIRST NAME",
    defaultValue: "Sara",
    className: "",
  },
  {
    id: "last-name",
    label: "LAST NAME",
    defaultValue: "Al Mansouri",
    className: "",
  },
  {
    id: "business-email",
    label: "BUSINESS EMAIL",
    defaultValue: "sara@company.ae",
    className: "",
  },
  {
    id: "company",
    label: "COMPANY",
    defaultValue: "Company name",
    className: "",
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-[70px] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-16">
        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <aside className="flex w-full flex-col items-start gap-4">
            {officeCards.map((office) => (
              <Card
                key={office.title}
                className="w-full rounded-2xl border border-[#ece8f3] bg-white shadow-none"
              >
                <CardContent className="flex flex-col items-start gap-1 p-6">
                  <img
                    className="h-10 w-10"
                    alt={office.title}
                    src={office.icon}
                  />
                  <div className="flex w-full flex-col items-start pt-[9px]">
                    <h3 className="mt-[-1.00px] flex items-center self-stretch [font-family:'Satoshi-Bold',Helvetica] text-lg font-bold leading-[23.4px] tracking-[-0.36px] text-[#0f0a1f]">
                      {office.title}
                    </h3>
                  </div>
                  <div className="flex w-full flex-col items-start pb-2">
                    <p className="mt-[-1.00px] flex items-center self-stretch [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447]">
                      {office.location}
                    </p>
                  </div>
                  <div className="flex w-full items-center gap-2 border-t border-[#ece8f3] pt-3 [border-top-style:dashed]">
                    <img
                      className="h-3.5 w-3.5"
                      alt="Email icon"
                      src="https://c.animaapp.com/mpicaoeqyWY9E4/img/svg.svg"
                    />
                    <a
                      href={`mailto:${office.email}`}
                      className="w-fit [font-family:'Montserrat',Helvetica] text-sm font-semibold leading-[22.4px] tracking-[0] text-[#8a39e4] whitespace-nowrap"
                    >
                      {office.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="relative w-full overflow-hidden rounded-2xl border-0 bg-[linear-gradient(164deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)] shadow-none">
              <CardContent className="relative p-6">
                <div className="pointer-events-none absolute left-[30%] top-[-50%] h-[271.57%] w-[80%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(189,140,255,0.5)_0%,rgba(189,140,255,0)_70%)] blur-[10px]" />
                <div className="relative flex w-full items-start gap-3.5">
                  <img
                    className="h-11 w-11"
                    alt="Overlay"
                    src="https://c.animaapp.com/mpicaoeqyWY9E4/img/overlay.svg"
                  />
                  <div className="flex flex-1 flex-col">
                    <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-base font-bold leading-[25.6px] tracking-[0] text-white">
                      Response Guarantee
                    </h3>
                    <p className="mt-[3px] [font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#ffffffc7]">
                      At Digital Marketing Agency Dubai, we guarantee a
                      <br />
                      response within 48 hours for every inquiry submitted via
                      <br />
                      our contact page - guaranteed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
          <Card className="relative w-full rounded-3xl border border-[#ece8f3] bg-white shadow-[0px_30px_70px_-40px_#140a2840]">
            <CardContent className="relative px-6 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10 lg:px-12 lg:pb-16 lg:pt-12">
              <header className="flex flex-col items-start gap-1.5">
                <h2 className="mt-[-1.00px] flex items-center self-stretch [font-family:'Satoshi-Bold',Helvetica] text-[32px] font-bold leading-[34.6px] tracking-[-0.64px] text-[#0f0a1f]">
                  Send us a message
                </h2>
                <p className="mt-[-1.00px] flex items-center self-stretch [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-[#3a3447]">
                  We&#39;ll respond within 48 hours · No spam, ever.
                </p>
              </header>
              <form className="flex flex-col items-start gap-5 pt-[22px]">
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                  {formFields.map((field) => (
                    <div
                      key={field.id}
                      className={`flex w-full flex-col items-start gap-1.5 ${field.className}`}
                    >
                      <label
                        htmlFor={field.id}
                        className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[0.48px] text-[#3a3447]"
                      >
                        {field.label}
                      </label>
                      <Input
                        id={field.id}
                        defaultValue={field.defaultValue}
                        className="h-[46px] rounded-xl border-[#ece8f3] bg-[#fafaff] px-4 py-3.5 [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[normal] tracking-[0] text-[#6b6478] placeholder:text-[#6b6478] focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  ))}

                  <div className="flex w-full flex-col items-start gap-1.5 md:col-span-2">
                    <label
                      htmlFor="service"
                      className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[0.48px] text-[#3a3447]"
                    >
                      SERVICE INTERESTED IN
                    </label>
                    <Select>
                      <SelectTrigger
                        id="service"
                        className="h-[46px] rounded-xl border-[#ece8f3] bg-[#fafaff] px-4 py-3.5 [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[19px] tracking-[0] text-[#0f0a1f] focus:ring-0 focus:ring-offset-0"
                      >
                        <SelectValue placeholder="Select a service…" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="select-a-service">
                          Select a service…
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex w-full flex-col items-start gap-1.5 md:col-span-2">
                    <label
                      htmlFor="goals"
                      className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[0.48px] text-[#3a3447]"
                    >
                      TELL US ABOUT YOUR GOALS
                    </label>
                    <Textarea
                      id="goals"
                      defaultValue="Briefly describe your business goals..."
                      className="min-h-[130px] rounded-xl border-[#ece8f3] bg-[#fafaff] px-4 py-[13px] [font-family:'Montserrat',Helvetica] text-[15px] font-normal leading-[22.5px] tracking-[0] text-[#6b6478] placeholder:text-[#6b6478] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="[font-family:'Montserrat',Helvetica] text-xs font-normal leading-[19.2px] tracking-[0] text-[#6b6478]">
                    We&#39;ll respond within 48 hours · No spam, ever.
                  </p>
                  <Button
                    type="submit"
                    className="h-auto rounded-[999px] border border-transparent bg-[#8a39e4] px-[22px] py-3.5 shadow-[inset_0px_1px_0px_1px_#fffefe4c,0px_14px_30px_-14px_#8a39e4b2] hover:bg-[#8a39e4]/95"
                  >
                    <span className="[font-family:'Montserrat',Helvetica] text-[15px] font-semibold leading-[normal] tracking-[0] text-white">
                      Send Message
                    </span>
                    <span className="[font-family:'Montserrat',Helvetica] text-[15px] font-bold leading-[normal] tracking-[0] text-white">
                      →
                    </span>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <Card className="w-full rounded-3xl border border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] shadow-none">
          <CardContent className="flex flex-col items-start gap-[11.4px] p-8 sm:p-10 lg:p-14">
            <div className="inline-flex items-center gap-2 rounded-[999px] border border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
              <span className="[font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4] whitespace-nowrap">
                FREE CONSULTATION SUPPORT
              </span>
            </div>
            <div className="flex w-full flex-col items-start px-0 pb-[0.59px] pt-[1.6px]">
              <h3 className="mt-[-1.00px] flex items-center self-stretch [font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[33.6px] tracking-[-0.56px] text-[#0f0a1f]">
                A tailored next step, not a sales pitch.
              </h3>
            </div>
            <div className="max-w-[741.44px]">
              <p className="mt-[-1.00px] [font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] tracking-[0] text-[#3a3447]">
                If you&#39;re exploring growth strategy, campaign execution, or
                hiring support, you can use this
                <br />
                HireNinjas contact UAE consultation form to request a free
                marketing consultation in Dubai
                <br />
                or Abu Dhabi. Our team reviews every enquiry carefully and
                responds with next-step
                <br />
                recommendations tailored to your business goals.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
