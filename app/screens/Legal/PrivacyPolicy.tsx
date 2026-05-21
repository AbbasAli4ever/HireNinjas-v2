export const PrivacyPolicy = (): JSX.Element => {
  const sections: { title: string; body?: string; bullets?: string[] }[] = [
    {
      title: "Information We Collect",
      bullets: [
        "Personal and business details you provide (name, email, company, role).",
        "Hiring and role-related information shared for recruitment purposes.",
        "Candidate data submitted with consent (CVs, verification details).",
        "Basic technical data for website performance and security.",
      ],
    },
    {
      title: "How We Use Information",
      body: "We use your data to deliver hiring, payroll, EOR, and workforce services, communicate with you, ensure compliance, and improve our platform.",
    },
    {
      title: "Data Sharing",
      body: "We never sell your data. Information is shared only with trusted partners involved in hiring, compliance, payroll, or when legally required.",
    },
    {
      title: "Data Protection",
      body: "We use industry-standard security measures to protect your information.",
    },
    {
      title: "Your Rights",
      body: "You may request access, correction, or deletion of your data by contacting us at hello@hireninjas.io.",
    },
    {
      title: "Updates",
      body: "This policy may be updated from time to time. Changes will be posted on this page.",
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
          Privacy Policy
        </h1>

        <p className="mt-5 max-w-[640px] [font-family:'Montserrat',Helvetica] text-sm sm:text-base font-normal leading-[1.7] text-[#3a3447]">
          At HireNinjas, we respect your privacy and are committed to protecting your information. This policy explains how we collect and use data when you use our website or services.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:gap-5">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-solid border-[#ece8f3] bg-white p-5 sm:p-6 shadow-[0px_18px_40px_-22px_#140a280f]"
            >
              <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-lg sm:text-xl font-bold leading-[1.25] tracking-[-0.34px] text-[#0f0a1f]">
                {section.title}
              </h2>
              {section.body && (
                <p className="mt-2 [font-family:'Montserrat',Helvetica] text-sm sm:text-[15px] font-normal leading-[1.7] text-[#3a3447]">
                  {section.title === "Your Rights" ? (
                    <>
                      You may request access, correction, or deletion of your data by contacting{" "}
                      <a
                        href="mailto:hello@hireninjas.io"
                        className="font-semibold text-[#8a39e4] underline underline-offset-2 hover:text-[#591f97]"
                      >
                        hello@hireninjas.io
                      </a>
                      .
                    </>
                  ) : (
                    section.body
                  )}
                </p>
              )}
              {section.bullets && (
                <ul className="mt-3 flex flex-col gap-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 [font-family:'Montserrat',Helvetica] text-sm sm:text-[15px] font-normal leading-[1.7] text-[#3a3447]"
                    >
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-[3px] bg-[#8a39e4]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

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
