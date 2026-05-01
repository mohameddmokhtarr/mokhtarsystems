import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly do you implement?",
    answer:
      "AI systems that automate specific workflows inside your business — usually content production, internal operations, and reporting. The scope is defined after the first call.",
  },
  {
    question: "Is this consulting or implementation?",
    answer:
      "Implementation. I build the system inside your stack, integrate it with your tools, and hand it over with documentation. Advice is part of the work, not the product.",
  },
  {
    question: "Who is this for?",
    answer:
      "Established businesses with real operational volume — content teams, agencies, and operators who want output to scale without growing headcount in proportion.",
  },
  {
    question: "How long does an engagement take?",
    answer:
      "Most systems are designed and implemented in 4–8 weeks, depending on scope and the state of your existing tools and data.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 sm:py-28 border-t border-border">
      <div className="container">
        <h2 className="reveal text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight max-w-4xl">
          Common Questions<span className="text-primary">.</span>
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
