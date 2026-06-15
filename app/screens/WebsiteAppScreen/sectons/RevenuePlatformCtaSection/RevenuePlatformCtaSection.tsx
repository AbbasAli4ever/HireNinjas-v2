import { CtaBanner } from "@/components/CtaBanner";

export const RevenuePlatformCtaSection = (): JSX.Element => (
  <CtaBanner
    badge="LET'S TALK"
    title="Build a platform that drives revenue."
    description={<><a href="/" className="font-medium hover:underline">Meet our development specialists</a>{" for a complimentary consultation to learn how a high-performance website or mobile application can enhance your brand presence throughout Dubai and the UAE."}</>}
    primaryLabel="Book consultation"
    secondaryLabel="Review services"
  />
);
