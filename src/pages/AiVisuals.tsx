import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const SelectedWork = () => {
  useReveal();
  const [modal, setModal] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-16 sm:pt-52 sm:pb-20 border-b border-[#ECECEC]">
          <div className="container">
            <div className="reveal">
              <span className="text-xs font-mono tracking-widest uppercase text-[#707070]">
                Portfolio
              </span>
            </div>
            <h1
              className="reveal mt-5 font-display uppercase text-[#0A0A0A] leading-[0.88]"
              style={{
                fontSize: "clamp(3.5rem, 11vw, 12rem)",
                letterSpacing: "-0.04em",
                transitionDelay: "0.1s",
              }}
            >
              Selected<br />Work
            </h1>
            <p
              className="reveal mt-8 max-w-md text-sm text-[#707070] leading-relaxed"
              style={{ transitionDelay: "0.2s" }}
            >
              Campaigns, product shoots, and content systems built for modern brands.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
              {projects.map((project, i) => (
                <button
                  key={project.id}
                  onClick={() => setModal(project)}
                  className="reveal text-left group"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[3/4] bg-[#F5F5F5]">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/30 transition-all duration-500 ease-out" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 border border-white/60 flex items-center justify-center">
                        <ArrowUpRight size={16} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="mt-4">
                    <div className="text-[10px] font-mono tracking-widest uppercase text-[#707070] mb-1.5">
                      {project.category}
                    </div>
                    <h3 className="font-display text-base sm:text-lg uppercase tracking-tight text-[#0A0A0A] group-hover:opacity-60 transition-opacity duration-200">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#707070] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-[#ECECEC] py-20 sm:py-28">
          <div className="container text-center">
            <p className="reveal text-xs font-mono tracking-widest uppercase text-[#707070] mb-6">
              Start a Project
            </p>
            <h2
              className="reveal font-display uppercase text-[#0A0A0A]"
              style={{ fontSize: "clamp(2rem, 6vw, 6rem)", letterSpacing: "-0.04em" }}
            >
              Let's work together.
            </h2>
            <div className="reveal mt-8" style={{ transitionDelay: "0.15s" }}>
              <a
                href="/#contact"
                className="inline-block text-sm text-[#707070] hover:text-[#0A0A0A] transition-colors hover-line"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ProjectModal project={modal} onClose={() => setModal(null)} />
    </div>
  );
};

export default SelectedWork;
