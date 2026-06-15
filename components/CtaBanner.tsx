import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface CtaBannerProps {
  badge: string;
  title: string;
  description: React.ReactNode;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel: string;
  secondaryHref?: string;
  /** Wrapper section className – use for outer padding/margin overrides */
  className?: string;
}

export const CtaBanner = ({
  badge,
  title,
  description,
  primaryLabel,
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "/contact",
  className = "w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-[60px]",
}: CtaBannerProps): JSX.Element => {
  return (
    <section className={className}>
      <Card className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
        {/* Background gradient */}
        <CardContent className="relative flex flex-col items-start gap-4 sm:gap-[15.1px] overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-14 lg:p-14 xl:p-20 [background:linear-gradient(157deg,rgba(89,31,151,1)_0%,rgba(45,2,85,1)_100%)]">
          {/* Right-side spotlight glow */}
          <div
            className="pointer-events-none absolute z-0 blur-[10px] [background:radial-gradient(70.71%_70.71%_at_50%_50%,rgba(189,140,255,0.50)_0%,rgba(189,140,255,0.00)_70%)]"
            style={{ right: "-116px", top: "-207.743px", width: "696px", height: "695.575px" }}
          />
          {/* Badge */}
          <Badge className="relative z-10 h-auto rounded-[999px] border border-solid border-[#ffffff2e] bg-[#ffffff1f] px-3.5 pb-[7.69px] pt-[7.5px] hover:bg-[#ffffff1f]">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-white" aria-hidden="true" />
              <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-semibold leading-[19.2px] tracking-[1.2px] text-white sm:text-xs sm:tracking-[1.68px]">
                {badge}
              </span>
            </span>
          </Badge>

          {/* Title */}
          <header className="relative z-10 w-full max-w-[460px] pt-0.5">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[28px] font-bold leading-[1.1] tracking-[-0.56px] text-white sm:text-[34px] sm:tracking-[-0.68px] md:text-[40px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-0.92px]">
              {title}
            </h2>
          </header>

          {/* Description */}
          <div className="relative z-10 w-full lg:max-w-[697px]">
            <p className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[1.6] text-[#ffffffd1] sm:text-[15px] sm:leading-[27.2px] lg:text-[17px]">
              {description}
            </p>
          </div>

          {/* Buttons */}
          <nav className="relative z-10 flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Button
              asChild
              type="button"
              className="relative h-12 w-full justify-between rounded-[999px] bg-white py-3.5 pl-[22px] pr-2 text-[#14101f] hover:bg-white/95 sm:w-auto sm:justify-start"
            >
              <a href={primaryHref}>
                <span className="inline-flex flex-1 items-center justify-center pl-3.5 sm:flex-none sm:justify-start">
                  <span className="[font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-none tracking-[0] text-[#14101f] sm:text-[14.5px]">
                    {primaryLabel}
                  </span>
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[18px] bg-[#3a0d8c]">
                  <img className="h-4 w-4" alt="" src="/figmaAssets/arrow-white.svg" />
                </span>
              </a>
            </Button>
            <Button
              asChild
              type="button"
              variant="ghost"
              className="h-12 w-full rounded-[999px] border border-solid border-[#f5efe629] px-[22px] py-3.5 [font-family:'Inter',Helvetica] text-[13.5px] font-medium leading-none tracking-[0] text-[#f5efe6] hover:bg-white/5 hover:text-[#f5efe6] sm:w-auto sm:text-[14.5px]"
            >
              <a href={secondaryHref}>{secondaryLabel}</a>
            </Button>
          </nav>
        </CardContent>
      </Card>
    </section>
  );
};
