import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href="https://wa.me/201229588884"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 hover:scale-110 transition-transform duration-200"
      >
        <MessageCircle size={28} fill="white" strokeWidth={1.5} />
      </a>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100 shadow-lg pointer-events-none">
        Chat on WhatsApp
      </span>
    </div>
  );
};

export default WhatsAppFloat;
