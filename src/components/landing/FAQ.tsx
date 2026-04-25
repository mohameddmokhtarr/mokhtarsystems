import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long until I see results?",
    answer:
      "Most brands see measurable movement in weeks 2–3. The system is built for compounding, not spikes.",
  },
  {
    question: "Do I need to create the content myself?",
    answer:
      "No. We handle research, hooks, captions, and the calendar. You review and approve.",
  },
  {
    question: "What types of brands do you work with?",
    answer:
      "Consumer brands, F&B, and personal brands focused on organic growth. If you're running paid ads only, we're not the right fit.",
  },
  {
    question: "What happens on the first call?",
    answer:
      "30 minutes. We audit your current content, identify your biggest gaps, and tell you exactly what we'd build. No pitch deck.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 sm:py-28 border-t border-border">
      <div className="container">
        <h2 className="reveal text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight max-w-4xl">
          Quick Answers<span className="text-primary">.</span>
        </h2>

        <div className="reveal mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="py-6 text-left text-base sm:text-lg font-semibold hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
