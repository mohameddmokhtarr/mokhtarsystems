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
      "We build custom AI systems that live inside your existing tech stack. This includes content automation workflows (research, writing, editing, publishing), internal process automation (data entry, report generation, task management), and AI assistants that handle repetitive work. We don't sell you software—we build and hand over the systems so you own them.",
  },
  {
    question: "Is this consulting or implementation?",
    answer:
      "Pure implementation. We don't advise and leave—we build it inside your business, connect it to your tools, document everything, and train your team to run it. You own the system when we're done.",
  },
  {
    question: "Who is this for?",
    answer:
      "Teams with 5+ people doing repetitive manual work (content creation, data processing, scheduling, reporting). You need some budget for development but don't need technical skills—we handle that part.",
  },
  {
    question: "How long does an engagement take?",
    answer:
      "Typically 6-12 weeks depending on complexity. We start with audit and design (2-3 weeks), move to implementation (3-6 weeks), then hand over and training (1-2 weeks).",
  },
];

const FAQ = () => {
  return (
    <section className="py-28 sm:py-40 border-t-2 border-ink bg-secondary">
      <div className="container">
        <div className="reveal inline-block rounded-full border-2 border-ink bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-brutal mb-6">
          FAQ
        </div>
        <h2 className="reveal font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight max-w-4xl leading-[0.9]">
          Common <span className="bg-primary text-primary-foreground border-2 border-ink px-3 inline-block shadow-brutal -rotate-1">Questions</span>.
        </h2>

        <div className="reveal mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border-2 border-ink bg-card px-6 shadow-brutal data-[state=open]:bg-accent transition-colors"
              >
                <AccordionTrigger className="py-6 text-left text-base sm:text-lg font-display uppercase tracking-tight hover:no-underline transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-foreground/80 text-base leading-relaxed">
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
