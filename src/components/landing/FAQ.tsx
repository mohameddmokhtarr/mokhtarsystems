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
