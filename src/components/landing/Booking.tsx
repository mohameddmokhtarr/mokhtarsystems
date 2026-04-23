import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Booking = () => {
  return (
    <section id="book" className="py-20 sm:py-32 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="reveal text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-balance">
            If the numbers matter, <span className="text-primary">book the call.</span>
          </h2>
          <p className="reveal mt-6 text-lg text-muted-foreground">
            30 minutes. Straight answers. Clear next steps.
          </p>
        </div>

        <div className="reveal mt-16 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border bg-card p-10 sm:p-16 text-center">
            <Calendar className="mx-auto text-primary" size={48} />
            <p className="mt-6 text-sm text-muted-foreground uppercase tracking-widest">
              Calendly Embed Placeholder
            </p>
            <h3 className="mt-2 text-2xl font-bold">Pick a time that works</h3>
            <Button
              size="lg"
              className="mt-8 rounded-full px-8 h-12 font-semibold"
            >
              Open Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;