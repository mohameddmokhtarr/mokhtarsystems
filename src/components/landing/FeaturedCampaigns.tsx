import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

interface Props {
  onOpen: (project: Project) => void;
}

const campaigns = projects.filter((p) => !!p.brandOverview);

const capabilitiesFor = (p: Project): string[] => {
  const caps: string[] = ["Creative Direction"];
  if (p.gallery.length > 0)          caps.push("AI Visual Production");
  if (p.videos && p.videos.length > 0) caps.push("AI Film Production");
  if (p.websiteDigital)              caps.push("Website Built");
  return caps;
};

const FeaturedCampaigns = ({ onOpen }: Props) => (
  <section id="campaigns" className="border-t border-[#ECECEC]">
    {campaigns.map((project, i) => (
      <article
        key={project.id}
        className="border-b border-[#ECECEC]"
      >
        {/* Project header row */}
        <div className="container py-6 sm:py-8">
          <div className="reveal flex items-center justify-between">
            <span className="text-xs font-mono text-[#707070] tracking-widest">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-xs font-mono text-[#707070] tracking-widest uppercase">
              {project.category}
            </span>
          </div>
        </div>

        {/* Full-width image */}
        <div
          className="reveal overflow-hidden cursor-pointer"
          style={{ transitionDelay: "0.05s" }}
          onClick={() => onOpen(project)}
        >
          <div className="overflow-hidden" style={{ height: "65vh" }}>
            <img
              src={project.coverImage}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-900 ease-spring hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Project info row */}
        <div className="container py-7 sm:py-9">
          <div
            className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-5"
            style={{ transitionDelay: "0.1s" }}
          >
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-[#0A0A0A] tracking-tight leading-none">
                {project.title}
              </h2>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {capabilitiesFor(project).map((cap, ci) => (
                  <span key={cap} className="text-xs font-mono text-[#707070] uppercase tracking-widest">
                    {ci > 0 && <span className="mr-3 opacity-30">·</span>}
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpen(project)}
              className="shrink-0 hover-line text-sm text-[#0A0A0A] font-medium whitespace-nowrap self-start sm:self-auto"
            >
              View Case →
            </button>
          </div>
        </div>
      </article>
    ))}
  </section>
);

export default FeaturedCampaigns;
