import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="reveal mx-auto max-w-5xl">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Play size={28} className="ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm sm:text-base text-muted-foreground">
            2 minutes. No fluff. Just proof.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;