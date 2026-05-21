export const TermsAndConditions = (): JSX.Element => {
  const items = [
    {
      label: "Use of Services",
      body: "HireNinjas provides global recruitment, payroll, EOR, and workforce management services for lawful business use.",
    },
    {
      label: "No Hiring Guarantee",
      body: "We do not guarantee employment outcomes or hiring results. Final hiring decisions rest with the client.",
    },
    {
      label: "Responsibilities",
      body: "Clients and candidates must provide accurate information and comply with applicable laws.",
    },
    {
      label: "Fees",
      body: "Fees apply only as agreed in written proposals or service agreements.",
    },
    {
      label: "Confidentiality",
      body: "All shared business and candidate information must remain confidential.",
    },
    {
      label: "Intellectual Property",
      body: "All website content and branding belong to HireNinjas and may not be used without permission.",
    },
    {
      label: "Limitation of Liability",
      body: "HireNinjas is not liable for indirect or consequential losses arising from use of the platform.",
    },
    {
      label: "Updates & Governing Law",
      body: "We may update these Terms at any time. Continued use constitutes acceptance. Applicable law will be defined in service agreements.",
    },
  ];

  return (
    <main className="relative w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-[-10%] top-[-10%] h-[60%] w-[120%] blur-[10px] [background:radial-gradient(50%_50%_at_20%_30%,rgba(139,58,229,0.18)_0%,rgba(139,58,229,0)_60%),radial-gradient(50%_50%_at_85%_20%,rgba(189,140,255,0.35)_0%,rgba(189,140,255,0)_60%)]" />
      <section className="relative mx-auto w-full max-w-[900px] px-4 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pb-[7.69px] pt-[7.5px]">
          <span className="h-1.5 w-1.5 rounded-[3px] bg-[#8a39e4]" />
          <span className="[font-family:'Montserrat',Helvetica] text-[10px] sm:text-xs font-semibold leading-[19.2px] tracking-[1.68px] text-[#8a39e4]">
            LEGAL
          </span>
        </div>

        <h1
          className="text-[36px] leading-[1.1] tracking-[-1.2px] sm:text-[44px] sm:tracking-[-1.6px] md:text-5xl lg:text-[56px] lg:leading-[1.05] lg:tracking-[-2px]"
          style={{
            fontFamily: '"Satoshi", Helvetica, sans-serif',
            fontWeight: 700,
            color: "#0F0A1F",
          }}
        >
          Terms &amp; Conditions
        </h1>

        <p className="mt-5 max-w-[640px] [font-family:'Montserrat',Helvetica] text-sm sm:text-base font-normal leading-[1.7] text-[#3a3447]">
          These terms describe how HireNinjas works with clients and candidates across our services. By using our website or engaging with us, you agree to the terms below.
        </p>

        <ol className="mt-10 flex flex-col gap-3 sm:gap-4">
          {items.map((item, index) => (
            <li
              key={item.label}
              className="flex items-start gap-4 rounded-2xl border border-solid border-[#ece8f3] bg-white p-5 sm:p-6 shadow-[0px_18px_40px_-22px_#140a280f]"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-[#8a39e4] [font-family:'Satoshi-Bold',Helvetica] text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5 pt-[1px]">
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[17px] sm:text-lg font-bold leading-[1.3] tracking-[-0.34px] text-[#0f0a1f]">
                  {item.label}
                </h2>
                <p className="[font-family:'Montserrat',Helvetica] text-sm sm:text-[15px] font-normal leading-[1.7] text-[#3a3447]">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl border border-solid border-[#f0e2ff] bg-[linear-gradient(180deg,rgba(248,241,255,1)_0%,rgba(255,255,255,1)_100%)] p-6 sm:p-7">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-xl sm:text-2xl font-bold leading-[1.2] tracking-[-0.46px] text-[#0f0a1f]">
            Contact Us
          </h2>
          <p className="mt-2 [font-family:'Montserrat',Helvetica] text-sm sm:text-base font-normal leading-[1.7] text-[#3a3447]">
            Questions? Reach us at{" "}
            <a
              href="mailto:hello@hireninjas.io"
              className="font-semibold text-[#8a39e4] underline underline-offset-2 hover:text-[#591f97]"
            >
              hello@hireninjas.io
            </a>
            .
          </p>
          <p className="mt-3 [font-family:'Satoshi-Bold',Helvetica] text-sm sm:text-base font-bold text-[#0f0a1f]">
            HireNinjas — Global Hiring. Simplified.
          </p>
        </div>
      </section>
    </main>
  );
};
