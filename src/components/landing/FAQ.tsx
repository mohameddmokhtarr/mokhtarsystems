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
      "I build custom AI systems that live inside your existing business. For AI Content Systems, this means automated workflows for research, writing, editing, and publishing. For AI Visuals, this means AI-generated product and campaign photography. No shoots, no logistics, no waiting. I don't sell software. I build and hand over the systems so you own them.",
  },
  {
    question: "Is this consulting or implementation?",
    answer:
      "Pure implementation. I don't advise and leave. I build it inside your business, connect it to your tools, document everything, and train your team to run it. You own the system when I'm done.",
  },
  {
    question: "Who is this for?",
    answer:
      "Teams with 5+ people doing repetitive manual work (content creation, data processing, scheduling, reporting), or brands that need consistent product/campaign photography without booking shoots. You need some budget for development but don't need technical skills. I handle that part.",
  },
  {
    question: "How long does an engagement take?",
    answer:
      "Depends on the service. AI Visuals is fast: your first batch of AI-generated product or fashion images is ready within 48–72 hours of receiving your brief and brand assets. AI Content Systems take a bit longer to build properly: expect 2–3 weeks to design, build, and hand over your automated content pipeline. Either way, you're seeing real output before the end of the first month.",
  },
];

const FAQ = () => {
  return (
    <section className="py-28 sm:py-40 border-t-2 border-[#1A1512] bg-dot-grid">
      <div className="container">
        <div className="reveal mb-6">
          <span className="tag">FAQ</span>
        </div>
        <h2 className="reveal font-display text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight max-w-4xl leading-[0.9] text-[#2A1F18]">
          Common <span className="bg-[#E8896A] text-white border-2 border-[#1A1512] px-3 inline-block shadow-brutal -rotate-1">Questions</span>.
        </h2>

        <div className="reveal mt-20 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="card-light px-6 data-[state=open]:bg-[#F5B89A]/30 transition-colors"
              >
                <AccordionTrigger className="py-6 text-left text-base sm:text-lg font-display uppercase tracking-tight hover:no-underline text-[#2A1F18] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[#2A1F18] text-base sm:text-[17px] leading-relaxed font-medium">
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
