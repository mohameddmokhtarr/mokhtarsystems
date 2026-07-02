import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Booking from "@/components/landing/Booking";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/data/projects";

const TABS: { label: string; value: ProjectCategory | 'All' }[] = [
  { label: 'All', value: 'All' },
  { label: 'Fashion', value: 'Fashion' },
  { label: 'Luxury', value: 'Luxury' },
  { label: 'Commercial', value: 'Commercial' },
  { label: 'Motion', value: 'Motion' },
];

const SelectedWork = () => {
  useReveal();
  const [modal, setModal] = useState<Project | null>(null);
  const [active, setActive] = useState<ProjectCategory | 'All'>('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8E4DF]">
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="pt-36 pb-16 sm:pt-52 sm:pb-20 bg-[#0A0A0A]">
          <div className="container">
            <div className="reveal">
              <span className="text-[9px] font-mono tracking-[4px] uppercase text-[#E05A2B]">
                Portfolio
              </span>
            </div>
            <h1 className="reveal mt-4 font-display text-[3.5rem] sm:text-[6rem] lg:text-[8rem] leading-[0.88] tracking-tight uppercase text-white">
              Selected <span className="italic-serif">Work</span>
            </h1>
            <p className="reveal mt-6 max-w-lg text-[#555] text-sm sm:text-base leading-relaxed">
              A curated selection of campaigns, product shoots, and content systems. Built for modern brands.
            </p>
          </div>
        </section>

        {/* ── Filter tabs ── */}
        <section className="border-b border-white/[0.06] bg-[#0A0A0A] sticky top-[57px] sm:top-[65px] z-40">
          <div className="container">
            <div className="flex gap-0 overflow-x-auto scrollbar-none -mb-px">
              {TABS.map(tab => (
                <button
                  key={tab.value}
                  onClick={() => setActive(tab.value)}
                  className={`shrink-0 px-5 py-4 text-[9px] font-mono tracking-[3px] uppercase border-b-2 transition-colors duration-200 ${
                    active === tab.value
                      ? 'border-[#E05A2B] text-white'
                      : 'border-transparent text-white/30 hover:text-white/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Project grid ── */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
              {filtered.map((project, i) => (
                <button
                  key={project.id}
                  onClick={() => setModal(project)}
                  className="reveal text-left group"
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[3/4] bg-white/[0.025]">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-500 ease-out" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-11 h-11 border border-white/40 flex items-center justify-center backdrop-blur-sm">
                        <ArrowUpRight size={17} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[9px] font-mono tracking-[3px] uppercase text-[#E05A2B] mb-1.5">
                        {project.category}
                      </div>
                      <h3 className="font-display text-base sm:text-lg uppercase tracking-tight text-white/90 group-hover:text-white transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-[11px] text-white/30 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={13}
                      className="text-white/15 group-hover:text-white/50 transition-colors duration-200 shrink-0 mt-1"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <Booking />
      </main>
      <Footer />

      <ProjectModal project={modal} onClose={() => setModal(null)} />
    </div>
  );
};

export default SelectedWork;
