import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertConsultationSchema } from "@shared/schema";

const formSchema = insertConsultationSchema.extend({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Please enter your company name"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const services = [
  { value: "digital-strategy", label: "Digital Marketing Strategy" },
  { value: "web-app-development", label: "Web & App Development" },
  { value: "lead-generation", label: "Lead Generation" },
  { value: "seo-ppc", label: "SEO & PPC" },
  { value: "social-media", label: "Social Media" },
  { value: "video-production", label: "Video Production" },
  { value: "branding", label: "Branding & Identity" },
  { value: "staff-augmentation", label: "Staff Augmentation" },
  { value: "ai-marketing", label: "AI-Powered Marketing" },
  { value: "not-sure", label: "Not sure yet — I need guidance" },
];

const budgets = [
  { value: "under-5k", label: "Under AED 5,000 / month" },
  { value: "5k-15k", label: "AED 5,000 – 15,000 / month" },
  { value: "15k-30k", label: "AED 15,000 – 30,000 / month" },
  { value: "30k-60k", label: "AED 30,000 – 60,000 / month" },
  { value: "60k-plus", label: "AED 60,000+ / month" },
  { value: "project-based", label: "One-time / project-based" },
];

const trustSignals = [
  { label: "Response time", value: "< 2 hours" },
  { label: "Market", value: "Dubai & UAE" },
  { label: "First session", value: "Free" },
];

export const ContactPage = (): JSX.Element => {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormValues) =>
      apiRequest("POST", "/api/consultations", data),
    onSuccess: () => {
      toast({
        title: "Request received!",
        description: "We'll be in touch within 2 business hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us at hello@hireninjas.ae",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return (
    <div className="w-full bg-white">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="relative w-full overflow-hidden bg-white px-4 pb-0 pt-[80px] sm:px-6 lg:px-[120px]">
          <div className="pointer-events-none absolute left-[20%] top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#8b3ae5] opacity-[0.10] blur-[100px]" />
          <div className="pointer-events-none absolute right-[-5%] top-0 h-[420px] w-[460px] rounded-full bg-[#bd8cff] opacity-[0.22] blur-[80px]" />
          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-5 pb-[60px] text-center">
            <div className="inline-flex items-center gap-2.5 rounded-[999px] border border-[#00000029] px-3.5 py-2">
              <div className="h-1.5 w-1.5 rounded-[3px] bg-[#6ce5b1] shadow-[0px_0px_0px_4px_#6ce5b12e]" />
              <p className="[font-family:'Inter',Helvetica] text-xs font-normal tracking-[1.68px] text-black uppercase whitespace-nowrap">
                Free Consultation
              </p>
            </div>
            <h1 className="max-w-[780px] [font-family:'Satoshi-Black',Helvetica] text-[44px] font-black leading-[1.05] tracking-[-1.2px] text-[#0f0a1f] sm:text-[56px] lg:text-[68px]">
              Let's build something that grows your business
            </h1>
            <p className="max-w-[560px] [font-family:'Montserrat',Helvetica] text-base font-normal leading-[26px] text-[#3a3447] sm:text-[17px]">
              Tell us about your brand and goals. Our team will review your brief and come back with a tailored plan — no fluff, no obligation.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-8">
              {trustSignals.map((s) => (
                <div key={s.label} className="flex flex-col items-center border-l-2 border-[#8b3ae5] pl-4 text-left">
                  <span className="[font-family:'Satoshi-Black',Helvetica] text-[20px] font-black leading-tight tracking-[-0.4px] text-[#0f0a1f]">
                    {s.value}
                  </span>
                  <span className="[font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[19px] text-[#6b6478]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORM + SIDEBAR */}
        <section className="relative w-full px-4 py-[60px] sm:px-6 lg:px-[120px]">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
            {/* FORM CARD */}
            <div className="flex-1 rounded-[24px] border border-[#ece8f3] bg-white p-7 shadow-[0px_4px_32px_rgba(139,58,229,0.08)] sm:p-10">
              <div className="mb-8 flex flex-col gap-1.5">
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] text-[26px] font-bold leading-tight tracking-[-0.4px] text-[#0f0a1f]">
                  Book your free consultation
                </h2>
                <p className="[font-family:'Montserrat',Helvetica] text-sm font-normal leading-[22px] text-[#6b6478]">
                  Fill in the form below and we'll reach out within 2 business hours.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5" data-testid="form-consultation">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="[font-family:'Montserrat',Helvetica] text-[13px] font-semibold text-[#0f0a1f]">
                            Full name <span className="text-[#8b3ae5]">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ahmad Al Rashidi"
                              className="h-12 rounded-[10px] border-[#ece8f3] bg-[#fafaff] text-[#0f0a1f] placeholder:text-[#b0a8c0] focus-visible:border-[#8b3ae5] focus-visible:ring-[#8b3ae5]/20"
                              data-testid="input-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="[font-family:'Montserrat',Helvetica] text-[13px] font-semibold text-[#0f0a1f]">
                            Work email <span className="text-[#8b3ae5]">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@company.ae"
                              className="h-12 rounded-[10px] border-[#ece8f3] bg-[#fafaff] text-[#0f0a1f] placeholder:text-[#b0a8c0] focus-visible:border-[#8b3ae5] focus-visible:ring-[#8b3ae5]/20"
                              data-testid="input-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="[font-family:'Montserrat',Helvetica] text-[13px] font-semibold text-[#0f0a1f]">
                          Company name <span className="text-[#8b3ae5]">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your company"
                            className="h-12 rounded-[10px] border-[#ece8f3] bg-[#fafaff] text-[#0f0a1f] placeholder:text-[#b0a8c0] focus-visible:border-[#8b3ae5] focus-visible:ring-[#8b3ae5]/20"
                            data-testid="input-company"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="[font-family:'Montserrat',Helvetica] text-[13px] font-semibold text-[#0f0a1f]">
                            Service interest <span className="text-[#8b3ae5]">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger
                                className="h-12 rounded-[10px] border-[#ece8f3] bg-[#fafaff] text-[#0f0a1f] focus:border-[#8b3ae5] focus:ring-[#8b3ae5]/20"
                                data-testid="select-service"
                              >
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-[12px] border-[#ece8f3]">
                              {services.map((s) => (
                                <SelectItem key={s.value} value={s.value} data-testid={`option-service-${s.value}`}>
                                  {s.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="[font-family:'Montserrat',Helvetica] text-[13px] font-semibold text-[#0f0a1f]">
                            Monthly budget <span className="text-[#8b3ae5]">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger
                                className="h-12 rounded-[10px] border-[#ece8f3] bg-[#fafaff] text-[#0f0a1f] focus:border-[#8b3ae5] focus:ring-[#8b3ae5]/20"
                                data-testid="select-budget"
                              >
                                <SelectValue placeholder="Select a budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-[12px] border-[#ece8f3]">
                              {budgets.map((b) => (
                                <SelectItem key={b.value} value={b.value} data-testid={`option-budget-${b.value}`}>
                                  {b.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="[font-family:'Montserrat',Helvetica] text-[13px] font-semibold text-[#0f0a1f]">
                          Tell us about your goals{" "}
                          <span className="font-normal text-[#b0a8c0]">(optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="What are you hoping to achieve? Any context helps us prepare for the call."
                            className="min-h-[120px] resize-none rounded-[10px] border-[#ece8f3] bg-[#fafaff] text-[#0f0a1f] placeholder:text-[#b0a8c0] focus-visible:border-[#8b3ae5] focus-visible:ring-[#8b3ae5]/20"
                            data-testid="textarea-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="mt-1 h-auto w-full rounded-[999px] bg-[#8b39e5] px-2 py-2 pl-[22px] pr-2 hover:bg-[#7f32d5] disabled:opacity-70"
                    data-testid="button-submit"
                  >
                    <span className="inline-flex flex-1 items-center justify-center pl-3.5 [font-family:'Inter',Helvetica] text-[15px] font-medium text-white">
                      {mutation.isPending ? "Sending your request…" : "Book My Free Consultation"}
                    </span>
                    <span className="ml-3 grid h-10 w-10 place-items-center rounded-[18px] bg-white">
                      <img className="h-4 w-4" alt="Arrow" src="/figmaAssets/component-2.svg" />
                    </span>
                  </Button>

                  <p className="text-center [font-family:'Montserrat',Helvetica] text-xs font-normal leading-[19px] text-[#b0a8c0]">
                    No spam, no commitment. We'll only reach out about your enquiry.
                  </p>
                </form>
              </Form>
            </div>

            {/* SIDEBAR */}
            <aside className="flex w-full flex-col gap-5 lg:w-[340px] lg:shrink-0">
              {/* What happens next */}
              <div className="rounded-[18px] border border-[#ece8f3] bg-[#fafaff] p-6">
                <h3 className="mb-4 [font-family:'Satoshi-Bold',Helvetica] text-[15px] font-bold tracking-[-0.2px] text-[#0f0a1f]">
                  What happens next
                </h3>
                <ol className="flex flex-col gap-4">
                  {[
                    { step: "01", text: "We review your brief and research your market within 2 hours." },
                    { step: "02", text: "A senior strategist reaches out to schedule a 30-min call." },
                    { step: "03", text: "We present a tailored proposal — strategy, scope and investment." },
                    { step: "04", text: "You decide. No pressure, no aggressive follow-ups." },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#8b3ae5]">
                        <span className="[font-family:'Satoshi-Bold',Helvetica] text-[11px] font-bold text-white">{item.step}</span>
                      </div>
                      <p className="pt-0.5 [font-family:'Montserrat',Helvetica] text-[13px] font-normal leading-[20px] text-[#3a3447]">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact info */}
              <div className="rounded-[18px] border border-[#ece8f3] bg-white p-6">
                <h3 className="mb-4 [font-family:'Satoshi-Bold',Helvetica] text-[15px] font-bold tracking-[-0.2px] text-[#0f0a1f]">
                  Prefer to reach out directly?
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: "✉️", label: "Email", value: "hello@hireninjas.ae" },
                    { icon: "📍", label: "Location", value: "Dubai, UAE" },
                    { icon: "🕐", label: "Hours", value: "Sun – Thu, 9am – 7pm GST" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="mt-0.5 text-base leading-none">{item.icon}</span>
                      <div className="flex flex-col gap-0">
                        <span className="[font-family:'Satoshi-Bold',Helvetica] text-[12px] font-bold tracking-[0.8px] uppercase text-[#6b6478]">{item.label}</span>
                        <span className="[font-family:'Montserrat',Helvetica] text-[13px] font-medium text-[#0f0a1f]">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services quick links */}
              <div className="rounded-[18px] border border-[#f1e3ff] bg-gradient-to-b from-[#f8f1ff] to-white p-6">
                <h3 className="mb-4 [font-family:'Satoshi-Bold',Helvetica] text-[15px] font-bold tracking-[-0.2px] text-[#0f0a1f]">
                  Popular services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Digital Strategy",
                    "Web & App Dev",
                    "Lead Generation",
                    "SEO & PPC",
                    "Social Media",
                    "Branding",
                    "Video Production",
                    "AI Marketing",
                  ].map((tag) => (
                    <span key={tag} className="rounded-[999px] border border-[#e8d9ff] bg-white px-3 py-1.5 [font-family:'Montserrat',Helvetica] text-[12px] font-medium text-[#3a3447]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};
