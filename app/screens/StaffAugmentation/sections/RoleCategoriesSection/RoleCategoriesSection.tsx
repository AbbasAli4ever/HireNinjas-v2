import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const roleCategories = [
  {
    title: "Marketing Roles",
    description: null,
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
    description: null,
    items: ["Graphic Designers", "Video Editors", "Motion Designers"],
  },
  {
    title: "Business and Data Roles",
    description: null,
    items: ["Business Analysts", "CRM Specialists", "Operations Coordinators"],
  },
];

const cardClassNames = [
  "lg:min-h-[418.33px]",
  "lg:min-h-[418.33px]",
  "lg:min-h-[220.56px]",
  "lg:min-h-[220.56px]",
];

export const RoleCategoriesSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 pb-0 pt-14 sm:px-6 sm:pt-24 lg:px-12 xl:px-[140px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-10 sm:gap-12">
        <header className="flex w-full max-w-[760px] flex-col items-start gap-4 sm:gap-[17px]">
          <Badge className="h-auto rounded-[999px] border border-[#f0e2ff] bg-magnolia px-3.5 pb-[7.69px] pt-[7.5px] font-montserrat-semibold-upper text-[length:var(--montserrat-semibold-upper-font-size)] font-[number:var(--montserrat-semibold-upper-font-weight)] leading-[var(--montserrat-semibold-upper-line-height)] tracking-[var(--montserrat-semibold-upper-letter-spacing)] text-purple-heart hover:bg-magnolia">
            ROLES WE FILL
          </Badge>
          <div className="w-full pb-[0.69px]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[26px] font-bold leading-[1.2] tracking-[-0.52px] text-ebony sm:text-[34px] sm:tracking-[-0.92px] sm:leading-[1.08] md:text-[40px] lg:text-[46px] lg:leading-[49.7px]">
              HireNinjas provides flexible Staff Augmentation Services across marketing, technology, creative, and business operations roles globally.
            </h2>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {roleCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`h-full rounded-2xl border border-[#ece8f3] bg-white shadow-none ${cardClassNames[index]}`}
            >
              <CardContent
                className={`flex h-full flex-col items-start px-4 pt-5 sm:px-6 sm:pt-[23px] ${
                  index === 0
                    ? "gap-3.5 pb-6 lg:pb-[79.6px]"
                    : index === 1
                      ? "gap-3 pb-5 sm:gap-[13.4px] sm:pb-6"
                      : "gap-3.5 pb-5 sm:pb-6"
                }`}
              >
                <header className="w-full">
                  <h3 className="font-satoshi-bold text-[length:var(--satoshi-bold-font-size)] font-[number:var(--satoshi-bold-font-weight)] leading-[var(--satoshi-bold-line-height)] tracking-[var(--satoshi-bold-letter-spacing)] text-purple-heart">
                    {category.title}
                  </h3>
                </header>
                <ul
                  className={`flex w-full flex-col items-start ${
                    index === 1 ? "gap-2 pt-[0.6px]" : "gap-2"
                  }`}
                >
                  {category.items.map((item, itemIndex) => {
                    const isLast = itemIndex === category.items.length - 1;

                    return (
                      <li
                        key={item}
                        className={`flex w-full items-center gap-2.5 px-0 pb-[7.89px] pt-[7.5px] ${
                          !isLast
                            ? "border-b border-[#ece8f3] [border-bottom-style:dashed]"
                            : ""
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-[3px] bg-heliotrope"
                        />
                        <span className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-ebony">
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                {category.description ? (
                  <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] tracking-[0] text-dolphin">
                    HireNinja offers IT staff augmentation placement services through its structured delivery model for faster onboarding and productivity.
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
