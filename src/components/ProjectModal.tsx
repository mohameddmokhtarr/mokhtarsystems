import { useEffect, useRef } from "react";
import { X, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const Label = ({ children }: { children: string }) => (
  <div className="text-[9px] font-mono tracking-[3.5px] uppercase text-[#707070] mb-4">
    {children}
  </div>
);

const Block = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <Label>{label}</Label>
    {children}
  </div>
);

const Body = ({ children }: { children: string }) => (
  <p className="text-sm text-[#707070] leading-relaxed">{children}</p>
);

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const scrollRef  = useRef<HTMLDivElement>(null);
  const isCaseStudy = !!project?.brandOverview;

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
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
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="modal-backdrop absolute inset-0 bg-[#0A0A0A]/50 backdrop-blur-md" />

      {/* Panel */}
      <div
        ref={scrollRef}
        className="project-modal scrollbar-none relative w-full sm:max-w-4xl max-h-[92vh] overflow-y-auto bg-white border border-[#ECECEC] sm:rounded-none"
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-7 sm:px-10 py-5 bg-white/95 backdrop-blur-sm border-b border-[#ECECEC]">
          <div>
            <span className="block text-[9px] font-mono tracking-[3.5px] uppercase text-[#707070]">
              {project.category}
            </span>
            <h2 className="mt-0.5 font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0A0A0A]">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center border border-[#ECECEC] text-[#707070] hover:text-[#0A0A0A] hover:border-[#0A0A0A] transition-all duration-200"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-7 sm:px-10 pb-12 space-y-14 pt-8">
          {/* Cover */}
          <div className="aspect-[4/5] sm:aspect-[16/9] overflow-hidden bg-[#F5F5F5]">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {isCaseStudy ? (
            <>
              {/* 01 — Project Overview */}
              {project.projectOverview && (
                <div>
                  <Label>Project Overview</Label>
                  <p className="text-sm text-[#707070] leading-relaxed max-w-2xl">
                    {project.projectOverview}
                  </p>
                </div>
              )}

              {/* 02-03 — Brand Overview + Business Goal */}
              <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
                {project.brandOverview && (
                  <Block label="Brand Overview">
                    <Body>{project.brandOverview}</Body>
                  </Block>
                )}
                {project.businessGoal && (
                  <Block label="Business Goal">
                    <Body>{project.businessGoal}</Body>
                  </Block>
                )}
              </div>

              {/* 04-05-06 — Creative Direction / Strategy / Concept */}
              <div className="border-t border-[#ECECEC] pt-12 grid sm:grid-cols-3 gap-8 sm:gap-10">
                {project.creativeDirection && (
                  <Block label="Creative Direction">
                    <Body>{project.creativeDirection}</Body>
                  </Block>
                )}
                {project.creativeStrategy && (
                  <Block label="Creative Strategy">
                    <Body>{project.creativeStrategy}</Body>
                  </Block>
                )}
                {project.campaignConcept && (
                  <Block label="Campaign Concept">
                    <Body>{project.campaignConcept}</Body>
                  </Block>
                )}
              </div>

              {/* 09 — AI Image Production */}
              {project.gallery.length > 0 && (
                <div className="border-t border-[#ECECEC] pt-12">
                  <Label>AI Image Production</Label>
                  {project.aiImageProduction && (
                    <p className="text-sm text-[#707070] leading-relaxed mb-6">
                      {project.aiImageProduction}
                    </p>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {project.gallery.map((src) => (
                      <div key={src} className="aspect-[3/4] overflow-hidden bg-[#F5F5F5]">
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
              )}

              {/* 10 — AI Video Production */}
              {project.videos && project.videos.length > 0 && (
                <div className="border-t border-[#ECECEC] pt-12">
                  <Label>AI Video Production</Label>
                  {project.aiVideoProduction && (
                    <p className="text-sm text-[#707070] leading-relaxed mb-6">
                      {project.aiVideoProduction}
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.videos.map((src) => (
                      <div key={src} className="aspect-[9/16] sm:aspect-video overflow-hidden bg-[#F5F5F5]">
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

              {/* 11-12 — Website / Digital + Content System */}
              {(project.websiteDigital || project.contentSystem) && (
                <div className="border-t border-[#ECECEC] pt-12 grid sm:grid-cols-2 gap-8 sm:gap-10">
                  {project.websiteDigital && (
                    <Block label="Website / Digital">
                      <Body>{project.websiteDigital}</Body>
                    </Block>
                  )}
                  {project.contentSystem && (
                    <Block label="Content System">
                      <Body>{project.contentSystem}</Body>
                    </Block>
                  )}
                </div>
              )}

              {/* 13 — Campaign Assets */}
              {project.campaignAssets && (
                <div className="border-t border-[#ECECEC] pt-12">
                  <Label>Campaign Assets</Label>
                  <p className="text-sm text-[#707070] leading-relaxed max-w-2xl">
                    {project.campaignAssets}
                  </p>
                </div>
              )}

              {/* 14 — Final Deliverables */}
              <div className="border-t border-[#ECECEC] pt-12">
                <Label>Final Deliverables</Label>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {project.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-[#707070]">
                      <ChevronRight size={13} className="mt-0.5 text-[#0A0A0A] shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 15-16 — Results + Learnings */}
              <div className="border border-[#ECECEC] p-7 sm:p-9">
                <div className="text-[9px] font-mono tracking-[3.5px] uppercase text-[#0A0A0A] mb-8">
                  Results & Learnings
                </div>
                {project.results && (
                  <div className="mb-8 pb-8 border-b border-[#ECECEC]">
                    <div className="text-[9px] font-mono tracking-[2.5px] uppercase text-[#707070] mb-3">
                      Results
                    </div>
                    <p className="text-sm text-[#0A0A0A] leading-relaxed">{project.results}</p>
                  </div>
                )}
                <div className="space-y-7">
                  {[
                    { label: "Creative Direction", text: project.keyTakeaways.creative },
                    { label: "AI Workflow",        text: project.keyTakeaways.workflow },
                    { label: "Business Impact",    text: project.keyTakeaways.business },
                  ].map(({ label, text }) => (
                    <div key={label} className="flex gap-5">
                      <div className="mt-[7px] w-1 h-1 rounded-full bg-[#0A0A0A] shrink-0" />
                      <div>
                        <div className="text-[9px] font-mono tracking-[2.5px] uppercase text-[#707070] mb-2">
                          {label}
                        </div>
                        <p className="text-sm text-[#0A0A0A] leading-relaxed">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Simple layout */}
              <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
                <Block label="Challenge">
                  <Body>{project.challenge}</Body>
                </Block>
                <Block label="Solution">
                  <Body>{project.solution}</Body>
                </Block>
                <div>
                  <Label>Deliverables</Label>
                  <ul className="space-y-2.5">
                    {project.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-[#707070]">
                        <ChevronRight size={13} className="mt-0.5 text-[#0A0A0A] shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {project.gallery.length > 0 && (
                <div>
                  <div className="text-[9px] font-mono tracking-[3.5px] uppercase text-[#707070] mb-6">
                    Gallery
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {project.gallery.map((src) => (
                      <div key={src} className="aspect-[3/4] overflow-hidden bg-[#F5F5F5]">
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
              )}

              {project.videos && project.videos.length > 0 && (
                <div>
                  <div className="text-[9px] font-mono tracking-[3.5px] uppercase text-[#707070] mb-6">
                    Motion
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {project.videos.map((src) => (
                      <div key={src} className="aspect-[3/4] overflow-hidden bg-[#F5F5F5]">
                        <video src={src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="border border-[#ECECEC] p-7 sm:p-9">
                <div className="text-[9px] font-mono tracking-[3.5px] uppercase text-[#0A0A0A] mb-8">
                  Key Takeaways
                </div>
                <div className="space-y-7">
                  {[
                    { label: "Creative Direction", text: project.keyTakeaways.creative },
                    { label: "AI Workflow",        text: project.keyTakeaways.workflow },
                    { label: "Business Impact",    text: project.keyTakeaways.business },
                  ].map(({ label, text }) => (
                    <div key={label} className="flex gap-5">
                      <div className="mt-[7px] w-1 h-1 rounded-full bg-[#0A0A0A] shrink-0" />
                      <div>
                        <div className="text-[9px] font-mono tracking-[2.5px] uppercase text-[#707070] mb-2">
                          {label}
                        </div>
                        <p className="text-sm text-[#0A0A0A] leading-relaxed">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
