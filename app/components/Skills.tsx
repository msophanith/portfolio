'use client';

import { skillGroups } from '../utils/constant';
import { FadeUp, Stagger, StaggerItem } from './AnimationWrapper';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#111]"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 md:mb-32">
        <div>
          <FadeUp delay={0}>
            <p className="section-label mb-6 text-sm">Expertise</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-display text-[clamp(3.5rem,8vw,6rem)] leading-none text-white">
              Skills &<br />Technologies
            </h2>
          </FadeUp>
        </div>
        <FadeUp delay={0.12}>
          <p className="max-w-md text-text-light font-sans font-light leading-relaxed">
            Frontend-focused developer with a solid foundation in building
            responsive and user-friendly interfaces. Passionate about clean code
            and continuous learning.
          </p>
        </FadeUp>
      </div>

      {/* Skill groups */}
      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-[#1a1a1a]">
        {skillGroups.map((group) => (
          <StaggerItem key={group.category}>
            <div className="skills-card p-10 md:p-12 border-[#1a1a1a] hover:bg-[#0e0e0e] transition-colors duration-300 group h-full">
              <p className="skills-category font-mono text-xs tracking-[0.35em] uppercase text-text-muted mb-6 transition-colors duration-300">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill-large transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Extra line */}
      <FadeUp delay={0.1}>
        <div className="mt-20 pt-20 border-t border-[#111] flex flex-col md:flex-row gap-16 md:gap-32">
          {[
            { label: 'Languages', value: 'TypeScript · JavaScript · Python' },
            { label: 'Practices', value: 'Agile · CI/CD · TDD · Pair programming' },
            { label: 'Soft Skills', value: 'Collaboration · Communication · Problem-solving' },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-mono text-xs tracking-[0.35em] uppercase text-text-dim mb-3">{item.label}</p>
              <p className="text-text-light font-sans font-light">{item.value}</p>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
