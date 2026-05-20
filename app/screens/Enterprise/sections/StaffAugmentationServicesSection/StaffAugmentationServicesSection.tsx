import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const roleGroups = [
  {
    title: "Marketing Roles",
    description: undefined,
    className: "lg:min-h-[418px]",
    items: [
      "Digital Marketing Specialists",
      "SEO Specialists",
      "PPC Campaign Managers",
      "Social Media Managers",
      "Content Writers",
      "Email Marketing Specialists",
    ],
  },
  {
    title: "Technology Staff Augmentation Roles",
    description:
      "HireNinja offers IT staff augmentation placement services through its structured delivery model for faster onboarding and productivity.",
    className: "lg:min-h-[418px]",
    items: [
      "Front End Developers",
      "Back End Developers",
      "Full Stack Developers",
      "Mobile App Developers",
      "U/UX Designers",
      "QA Testers",
    ],
  },
  {
    title: "Creative Roles",
    description: undefined,
    className: "lg:min-h-[220px]",
    items: ["Graphic Designers", "Video Editors", "Motion Designers"],
  },
  {
    title: "Business and Data Roles",
    description: undefined,
    className: "lg:min-h-[220px]",
    items: ["Business Analysts", "CRM Specialists", "Operations Coordinators"],
  },
];

export const StaffAugmentationServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-16 md:px-10 lg:px-[120px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-[17px]">
          <Badge className="h-auto rounded-[999px] border border-solid border-[#f0e2ff] bg-[#f7f1ff] px-3.5 pt-[7.5px] pb-[7.69px] text-xs font-semibold tracking-[1.68px] text-[#8a39e4] hover:bg-[#f7f1ff] [font-family:'Montserrat',Helvetica]">
            ROLES WE FILL
          </Badge>
          <div className="w-full pt-0 pb-[0.69px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[36px] font-bold leading-[42px] tracking-[-0.92px] text-[#0f0a1f] sm:text-[40px] sm:leading-[45px] lg:text-[46px] lg:leading-[49.7px]">
              HireNinjas provides flexible
              <br />
              Staff Augmentation Services.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {roleGroups.map((group) => (
            <Card
              key={group.title}
              className={`w-full rounded-2xl border border-solid border-[#ece8f3] bg-white shadow-none ${group.className}`}
            >
              <CardContent className="flex h-full flex-col items-start gap-3.5 px-6 pt-[23px] pb-6">
                <header className="w-full">
                  <h3 className="flex items-center [font-family:'Satoshi-Bold',Helvetica] text-lg font-bold leading-[23.4px] tracking-[-0.36px] text-[#8a39e4]">
                    {group.title}
                  </h3>
                </header>
                <ul
                  className={`flex w-full flex-col items-start ${
                    group.title === "Technology Staff Augmentation Roles"
                      ? "gap-2 pt-[0.6px]"
                      : "gap-2"
                  }`}
                >
                  {group.items.map((item, index) => {
                    const isLast = index === group.items.length - 1;

                    return (
                      <li
                        key={item}
                        className={`flex w-full items-center gap-2.5 px-0 pt-[7.5px] pb-[7.89px] ${
                          isLast
                            ? ""
                            : "border-b border-[#ece8f3] [border-bottom-style:dashed]"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-[3px] bg-[#bd8cff]"
                        />
                        <span className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#0f0a1f]">
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                {group.description ? (
                  <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-[#6b6478]">
                    {group.description}
                  </p>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
