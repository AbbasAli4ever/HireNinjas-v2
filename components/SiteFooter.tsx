const services = [
  "Digital Strategy", "Web & App", "Social Media", "Lead Generation",
  "SEO & PPC", "Video Production", "Branding", "AI Marketing",
];

const industriesAndTeams = [
  "B2B & Enterprise", "Real Estate", "Staff Augmentation", "Consultations",
];

const contactItems = [
  "Book a Free Consultation", "hello@hireninjas.ae", "Dubai · UAE",
];

export const SiteFooter = () => {
  return (
    <footer className="border-t border-[#ece8f3] bg-[#fafaff]">
      <div className="mx-auto w-full max-w-[1160px] px-4 pb-9 pt-16 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col gap-10">
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <section className="flex h-fit flex-col items-start gap-3.5">
              <a href="/" className="shrink-0">
          <img
            className="h-10 w-[180px] object-cover"
            alt="Hire Ninjas"
            src="/navbar/navlogo.svg"
          />
        </a>
              <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447]">
                Performance-led digital agency for ambitious brands across Dubai and the UAE.
              </p>
            </section>
            <nav aria-label="Services" className="flex h-fit flex-col items-start gap-4">
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[1.30px] text-[#0f0a1f]">SERVICES</h3>
              <ul className="flex w-full flex-col items-start gap-2.5">
                {services.map((item) => (
                  <li key={item} className="w-full">
                    <button type="button" className="flex w-full items-start text-left [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447] transition-colors hover:text-[#4a0d8c]">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Industries and teams" className="flex h-fit flex-col items-start gap-4">
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[1.30px] text-[#0f0a1f]">INDUSTRIES &amp; TEAMS</h3>
              <ul className="flex w-full flex-col items-start gap-2.5">
                {industriesAndTeams.map((item) => (
                  <li key={item} className="w-full">
                    <button type="button" className="flex w-full items-start text-left [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447] transition-colors hover:text-[#4a0d8c]">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <address className="flex h-fit flex-col items-start gap-4 not-italic">
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] text-[13px] font-bold leading-[20.8px] tracking-[1.30px] text-[#0f0a1f]">GET IN TOUCH</h3>
              <ul className="flex w-full flex-col items-start gap-2.5">
                {contactItems.map((item) => (
                  <li key={item} className="w-full">
                    <button type="button" className="flex w-full items-start text-left [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#3a3447] transition-colors hover:text-[#4a0d8c]">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </address>
          </div>
          <div className="flex flex-col gap-4 border-t border-[#ece8f3] pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478] whitespace-nowrap">
              © HireNinjas · Dubai · UAE
            </p>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-5">
              <div className="flex items-center gap-1">
                <a
                  href="/privacy-policy"
                  className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478] transition-colors hover:text-[#4a0d8c]"
                >
                  Privacy Policy
                </a>
                <span aria-hidden="true" className="text-[#d6d2e0]">·</span>
                <a
                  href="/terms-and-conditions"
                  className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478] transition-colors hover:text-[#4a0d8c]"
                >
                  Terms &amp; Conditions
                </a>
              </div>
              <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478] whitespace-nowrap">
                Crafted for measurable growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
