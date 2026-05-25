import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type PackageCard = {
  title: string;
  description?: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
  note?: string;
};

type PackageGroup = {
  title: React.ReactNode;
  description: string;
  vatNote?: string;
  columns: 2 | 3;
  packages: PackageCard[];
};

const checkIconSrc =
  "https://c.animaapp.com/mpl6davuOYe2Kc/img/component-1.svg";

const packageGroups: PackageGroup[] = [
  {
    title: "Search Engine Optimization (SEO) Packages",
    description:
      "Our comprehensive SEO packages for UAE businesses are specifically tailored to increase search  visibility, increase organic traffic and establish long-term authority within a competitive UAE market.",
    vatNote: "Prices do not include VAT.",
    columns: 3,
    packages: [
      {
        title: "Starter SEO Package",
        description:
          "Best for startups and early-stage businesses looking to launch their search visibility.",
        price: "AED 1,500",
        period: "per month",
        features: [
          "Up to 5 optimized website pages",
          "10 targeted keywords",
          "5 SEO blog posts per month",
          "Technical SEO optimization (On-Page + Off-Page)",
          "Keyword research and competitor analysis",
          "Content marketing strategy framework",
          "Monthly SEO performance reporting",
          "Dedicated account manager",
          "Up to 20% of tracked keywords reaching Google Page 1 within 5–6 months*",
        ],
        cta: "Get Started",
      },
      {
        title: "Our Most Popular Business SEO Package",
        description:
          "Best for growing companies scaling organic lead generation",
        price: "AED 2,500",
        period: "/ month",
        features: [
          "Up to 10 optimized website pages",
          "20 targeted keywords",
          "10 SEO blog posts per month",
          "Advanced On-Page optimization",
          "Technical SEO optimization (On-Page + Off-Page)",
          "Keyword research and competitor benchmarking",
          "Structured content marketing execution",
          "Monthly performance reporting dashboard",
          "Dedicated account manager",
          "Up to 20% of tracked keywords reaching Google Page 1 within 5–6 months*",
        ],
        cta: "Get Started",
        highlighted: true,
        badge: "MOST POPULAR",
      },
      {
        title: "Premium SEO Package",
        description:
          "Best for established businesses and regional expansion strategies",
        price: "AED 5,000",
        period: "/ month",
        features: [
          "Up to 20 optimized website pages",
          "40 targeted keywords",
          "15 SEO blog posts per month",
          "Advanced technical SEO optimization",
          "International SEO targeting strategy",
          "Authority backlink acquisition strategy",
          "Full On-Page and Off-Page optimization",
          "Advanced keyword research strategy",
          "Monthly performance analytics reporting",
          "Dedicated account manager",
          "Up to 20% of tracked keywords reaching Google Page 1 within 5–6 months*",
        ],
        cta: "Get Started",
      },
    ],
  },
  {
    title: (
      <>
        Social Media Marketing
        <br />
        Packages UAE
      </>
    ),
    description:
      "These structured social media packages UAE brands use help increase engagement, strengthen brand visibility, and generate inbound enquiries through consistent content execution and platform-specific campaign strategy.",
    vatNote: "All prices exclude VAT.",
    columns: 3,
    packages: [
      {
        title: "Starter Social Media Package",
        description:
          "Best for startups building a professional social presence",
        price: "AED 1,500",
        period: "/ month",
        features: [
          "Content creation and graphic design",
          "Posting and scheduling across platforms",
          "Engagement support and comment monitoring",
          "Monthly performance insights report",
          "Dedicated account manager",
          "Meta Ads campaign setup support",
          "1 revision cycle per month",
          "8 static posts per month (Facebook or Instagram)",
          "1 Meta Ads campaign",
          "Single-platform management",
        ],
        cta: "Get Started",
      },
      {
        title: "Business Social Media Package",
        description:
          "Best for brands increasing engagement and lead generation",
        price: "AED 2,500",
        period: "/ month",
        features: [
          "Content creation and graphic design",
          "Posting and scheduling across platforms",
          "Community engagement management",
          "Monthly analytics and performance insights",
          "Dedicated account manager",
          "Paid ads management support",
          "2 revision cycles per month",
          "12 posts per month across 2 platforms (Facebook / Instagram / LinkedIn)",
          "2 short-form reels per month",
          "2 Meta Ads campaigns",
          "Two-platform management support",
        ],
        cta: "Get Started",
        highlighted: true,
        badge: "MOST POPULAR",
      },
      {
        title: "Premium Social Media Package",
        description:
          "Best for fast-growing brands scaling multi-platform visibility",
        price: "AED 4,000",
        period: "/ month",
        features: [
          "Content creation and graphic design",
          "Posting and scheduling across platforms",
          "Full engagement and community management",
          "Advanced analytics reporting dashboard",
          "Dedicated account manager",
          "Paid ads campaign optimization support",
          "3 revision cycles per month",
          "15 posts per month across 3 platforms (Facebook, Instagram, TikTok or LinkedIn)",
          "4 short-form reels per month",
          "4 Meta Ads campaigns",
          "Three-platform management support",
        ],
        cta: "Get Started",
      },
    ],
  },
  {
    title: "Growth Performance Packages (Recommended for Scaling Businesses)",
    description:
      "Most UAE companies combine SEO + paid media + social execution. These bundled marketing agency packages Dubai growth teams prefer accelerate results faster than single-channel strategies.",
    columns: 2,
    packages: [
      {
        title: "Growth Package",
        price: "AED 7,500",
        period: "/ month",
        features: [
          "SEO Business Package included",
          "Social Media Business Package included",
          "Google Ads campaign setup + optimization",
          "Landing page conversion optimization support",
          "Monthly strategy calls",
          "Performance dashboard reporting",
          "Dedicated account manager",
        ],
        note: "Best for companies targeting consistent inbound lead generation across multiple channels.",
        cta: "Get Started",
      },
      {
        title: "Performance Package",
        price: "AED 12,000",
        period: "/ month",
        features: [
          "Premium SEO Package included",
          "Premium Social Media Package included",
          "Google Ads + Meta Ads management",
          "Conversion funnel optimization",
          "Multi-channel attribution tracking",
          "Quarterly growth strategy roadmap",
          "Priority execution support",
          "Senior strategy lead assigned",
        ],
        note: "Best for organisations scaling aggressively across Dubai, Abu Dhabi, and GCC markets.",
        cta: "Get Started",
        highlighted: true,
        badge: "RECOMMENDED",
      },
    ],
  },
];

const FeatureItem = ({
  text,
  highlighted = false,
}: {
  text: string;
  highlighted?: boolean;
}) => {
  return (
    <li className="flex items-start gap-2.5">
      <span
        className={`mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[7px] ${
          highlighted ? "bg-[#ffffff1f]" : "bg-[#f7f1ff]"
        }`}
      >
        <img className="h-2.5 w-2.5" alt="Component" src={checkIconSrc} />
      </span>
      <span
        className={`[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[20.3px] ${
          highlighted ? "text-[#ffffffd1]" : "text-[#3a3447]"
        }`}
      >
        {text}
      </span>
    </li>
  );
};

const PricingCard = ({ pkg }: { pkg: PackageCard }) => {
  const highlighted = Boolean(pkg.highlighted);

  return (
    <Card
      className={`relative h-full rounded-2xl border ${
        highlighted
          ? "border-transparent bg-[linear-gradient(180deg,rgba(26,10,61,1)_0%,rgba(46,16,101,1)_100%)] shadow-[0px_24px_50px_-28px_#3c14aa8c]"
          : "border-[#ece8f3] bg-[#ffffff]"
      }`}
    >
      {pkg.badge ? (
        <div className="absolute left-7 top-[-11px] z-10 rounded-[999px] bg-white px-3 py-1.5 shadow-[0px_6px_16px_-8px_#140a2866]">
          <span className="relative flex items-center [font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold leading-[17.6px] tracking-[1.32px] text-[#591f97]">
            {pkg.badge}
          </span>
        </div>
      ) : null}

      <CardContent className="flex h-full flex-col gap-[18px] px-7 py-8">
        <header className="space-y-[18px]">
          <div className="flex flex-col items-start">
            <h3
              className={`[font-family:'Satoshi-Bold',Helvetica] text-[22px] font-bold leading-[26.4px] tracking-[-0.44px] ${
                highlighted ? "text-white" : "text-[#0f0a1f]"
              }`}
            >
              {pkg.title}
            </h3>
          </div>
          {pkg.description ? (
            <p
              className={`min-h-[42px] [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] ${
                highlighted ? "text-[#ffffffc7]" : "text-[#3a3447]"
              }`}
            >
              {pkg.description}
            </p>
          ) : null}

          <div
            className={`flex items-baseline gap-2 border-y pt-3.5 pb-2.5 [border-top-style:dashed] [border-bottom-style:dashed] ${
              highlighted ? "border-[#ffffff2e]" : "border-[#ece8f3]"
            }`}
          >
            <span
              className={`[font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[34px] tracking-[-1.02px] ${
                highlighted ? "text-white" : "text-[#0f0a1f]"
              }`}
            >
              {pkg.price}
            </span>
            <span
              className={`[font-family:'Montserrat',Helvetica] text-[13px] font-medium leading-[20.8px] ${
                highlighted ? "text-[#ffffff99]" : "text-[#6b6478]"
              }`}
            >
              {pkg.period}
            </span>
          </div>
        </header>
        <ul className="flex flex-1 flex-col gap-2.5">
          {pkg.features.map((feature) => (
            <FeatureItem
              key={`${pkg.title}-${feature}`}
              text={feature}
              highlighted={highlighted}
            />
          ))}
        </ul>
        {pkg.note ? (
          <p
            className={`pt-1 [font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22.4px] ${
              highlighted ? "text-[#ffffffc7]" : "text-[#3a3447]"
            }`}
          >
            {pkg.note}
          </p>
        ) : null}

        <Button
          type="button"
          variant="ghost"
          className={`h-auto w-full rounded-[999px] border px-[18px] pt-[13.5px] pb-[13.89px] hover:bg-transparent ${
            highlighted
              ? "border-transparent bg-white text-[#591f97] hover:text-[#591f97]"
              : "border-[#f0e2ff] bg-[#f7f1ff] text-[#8a39e4] hover:text-[#8a39e4]"
          }`}
        >
          <span className="[font-family:'Montserrat',Helvetica] text-sm font-bold leading-[22.4px]">
            {pkg.cta}
          </span>
          <span className="ml-2 [font-family:'Montserrat',Helvetica] text-sm font-bold leading-[22.4px]">
            →
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};

export const TieredServicePackagesSection = (): JSX.Element => {
  return (
    <section className="relative mt-[73.8px] w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-[140px]">
        {packageGroups.map((group) => (
          <section
            key={
              typeof group.title === "string"
                ? group.title
                : "group-with-multiline-title"
            }
            className="flex w-full flex-col items-center gap-12"
          >
            <header className="flex w-full max-w-[688px] flex-col items-center justify-center gap-6">
              <h2 className="text-center [font-family:'Satoshi-Bold',Helvetica] text-[34px] font-bold leading-[40px] tracking-[-0.68px] text-[#0f0a1f] sm:text-[40px] sm:leading-[44px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
                {group.title}
              </h2>
              <p className="text-center [font-family:'Montserrat',Helvetica] text-base font-normal leading-[25.6px] text-[#3a3447]">
                {group.description}
              </p>
            </header>
            <div className="flex w-full flex-col items-start gap-4">
              {group.vatNote ? (
                <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20.8px] text-[#6b6478]">
                  {group.vatNote}
                </p>
              ) : null}

              <div
                className={`grid w-full gap-[22px] pt-[18px] ${
                  group.columns === 3
                    ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                    : "grid-cols-1 lg:grid-cols-2"
                }`}
              >
                {group.packages.map((pkg) => (
                  <PricingCard key={pkg.title} pkg={pkg} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};
