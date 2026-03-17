"use client";

import { educationData, certifications } from "../utils/constant";
import { FadeUp, Stagger, StaggerItem } from "./AnimationWrapper";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto border-t border-[#111]"
    >
      {/* Header */}
      <div className="mb-16 md:mb-24">
        <FadeUp delay={0}>
          <p className="section-label mb-4">Background</p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-white">
            Education &<br />
            <em className="text-gold not-italic">Certifications</em>
          </h2>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left — Formal Education */}
        <div>
          <FadeUp delay={0}>
            <p className="font-mono text-xs tracking-[0.35em] uppercase text-text-dim mb-8">
              Formal Education
            </p>
          </FadeUp>

          <Stagger className="space-y-4">
            {educationData.map((edu) => (
              <StaggerItem key={edu.degree}>
                <div className="border border-[#1a1a1a] p-8 hover:bg-[#0e0e0e] transition-colors duration-300 group">
                  <span className="inline-block font-mono text-[0.6rem] tracking-widest uppercase text-text-dim border border-[#2a2a2a] px-2.5 py-1 mb-6">
                    {edu.period}
                  </span>
                  <h3 className="font-display text-xl text-white leading-snug mb-1 group-hover:text-gold transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-xs tracking-wider text-text-muted mb-1">{edu.institution}</p>
                  <p className="font-mono text-xs tracking-wide text-text-dim mb-6">{edu.location}</p>
                  <p className="font-sans font-light text-sm text-text-muted leading-relaxed mb-6">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((tag) => (
                      <span key={tag} className="skill-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Right — Certifications */}
        <div>
          <FadeUp delay={0}>
            <p className="font-mono text-xs tracking-[0.35em] uppercase text-text-dim mb-8">
              Certifications
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="border border-[#1a1a1a] divide-y divide-[#1a1a1a]">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-6 flex items-start justify-between gap-4 hover:bg-[#0e0e0e] transition-colors duration-300 group"
                >
                  <a href={cert.href} target="_blank" rel="noopener noreferrer">
                    <p className="font-sans font-light text-sm text-white group-hover:text-gold transition-colors duration-300 mb-1">
                      {cert.title}
                    </p>
                    <p className="font-mono text-xs tracking-wide text-text-dim">{cert.issuer}</p>
                  </a>
                  <span className="font-mono text-xs text-text-dim whitespace-nowrap pt-0.5">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Continuous learning note */}
          <FadeUp delay={0.16}>
            <div className="mt-8 p-6 border border-[#1a1a1a] bg-surface">
              <p className="section-label mb-3">Continuous Learning</p>
              <p className="font-sans font-light text-text-muted text-sm leading-relaxed">
                Committed to staying at the edge of the frontend ecosystem —
                exploring new frameworks, tooling, and design patterns through
                hands-on projects and community engagement.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
