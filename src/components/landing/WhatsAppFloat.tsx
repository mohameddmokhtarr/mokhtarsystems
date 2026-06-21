import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href="https://wa.me/201229588884"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white border-2 border-ink shadow-brutal hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg transition-all duration-200"
      >
        <MessageCircle size={28} fill="white" strokeWidth={1.5} />
      </a>
      <span className="absolute bottom-full mb-3 right-0 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:right-full sm:mr-3 sm:mb-0 whitespace-nowrap rounded-full bg-card border-2 border-ink px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 shadow-brutal pointer-events-none">
        Chat on WhatsApp
      </span>
    </div>
  );
};

export default WhatsAppFloat;
