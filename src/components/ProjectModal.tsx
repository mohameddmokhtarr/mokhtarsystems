import { useEffect, useRef } from "react";
import { X, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

      {/* Panel */}
      <div
        ref={scrollRef}
        className="project-modal relative w-full sm:max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0D0D0D] border border-white/[0.08] sm:rounded-none"
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-7 sm:px-10 py-5 bg-[#0D0D0D]/96 backdrop-blur-xl border-b border-white/[0.06]">
          <div>
            <span className="block text-[9px] font-mono tracking-[3.5px] uppercase text-[#E05A2B]">
              {project.category}
            </span>
            <h2 className="mt-0.5 font-display text-xl sm:text-2xl uppercase tracking-tight text-white">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center border border-white/15 text-white/50 hover:text-white hover:border-white/40 transition-all duration-200"
            aria-label="Close project"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-7 sm:px-10 pb-12 space-y-14 pt-8">
          {/* Cover */}
          <div className="aspect-[4/5] sm:aspect-[16/9] overflow-hidden bg-white/[0.03]">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Brief */}
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
            <div>
              <div className="text-[9px] font-mono tracking-[3.5px] uppercase text-[#E05A2B] mb-4">
                Challenge
              </div>
              <p className="text-sm text-white/50 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <div className="text-[9px] font-mono tracking-[3.5px] uppercase text-[#E05A2B] mb-4">
                Solution
              </div>
              <p className="text-sm text-white/50 leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <div className="text-[9px] font-mono tracking-[3.5px] uppercase text-[#E05A2B] mb-4">
                Deliverables
              </div>
              <ul className="space-y-2.5">
                {project.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-white/50">
                    <ChevronRight
                      size={13}
                      className="mt-0.5 text-[#E05A2B] shrink-0"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <div className="text-[9px] font-mono tracking-[3.5px] uppercase text-white/25 mb-6">
              Gallery
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {project.gallery.map((src) => (
                <div
                  key={src}
                  className="aspect-[3/4] overflow-hidden bg-white/[0.03]"
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Videos */}
          {project.videos && project.videos.length > 0 && (
            <div>
              <div className="text-[9px] font-mono tracking-[3.5px] uppercase text-white/25 mb-6">
                Motion
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {project.videos.map((src) => (
                  <div
                    key={src}
                    className="aspect-[3/4] overflow-hidden bg-white/[0.03]"
                  >
                    <video
                      src={src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Takeaways */}
          <div className="border border-white/[0.07] p-7 sm:p-9">
            <div className="text-[9px] font-mono tracking-[3.5px] uppercase text-[#E05A2B] mb-8">
              Key Takeaways
            </div>
            <div className="space-y-7">
              {[
                { label: 'Creative Direction', text: project.keyTakeaways.creative },
                { label: 'AI Workflow', text: project.keyTakeaways.workflow },
                { label: 'Business Impact', text: project.keyTakeaways.business },
              ].map(({ label, text }) => (
                <div key={label} className="flex gap-5">
                  <div className="mt-[7px] w-1 h-1 rounded-full bg-[#E05A2B] shrink-0" />
                  <div>
                    <div className="text-[9px] font-mono tracking-[2.5px] uppercase text-white/25 mb-2">
                      {label}
                    </div>
                    <p className="text-sm text-white/65 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
