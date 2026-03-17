"use client";

import { rewards } from "../utils/constant";
import { FadeUp, Stagger, StaggerItem } from "./AnimationWrapper";

const typeColors: Record<string, string> = {
  Award: "text-gold border-[#3a3020]",
  Academic: "text-green border-[#1a2e22]",
  Competition: "text-text-muted border-[#2a2520]",
};

export default function Rewards() {
  return (
    <section
      id="rewards"
      className="py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto border-t border-[#111]"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 md:mb-24">
        <div>
          <FadeUp delay={0}>
            <p className="section-label mb-4">Recognition</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-white">
              Awards &<br />
              <em className="text-gold not-italic">Achievements</em>
            </h2>
          </FadeUp>
        </div>
        <FadeUp delay={0.12}>
          <p className="max-w-sm font-sans font-light text-sm text-text-muted leading-relaxed">
            A collection of milestones earned through dedication, collaboration,
            and a relentless drive to deliver excellent work.
          </p>
        </FadeUp>
      </div>

      {/* Grid */}
      <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-px border border-[#1a1a1a]">
        {rewards.map((reward) => (
          <StaggerItem key={reward.title}>
            <div className="p-8 md:p-10 border-[#1a1a1a] hover:bg-[#0e0e0e] transition-colors duration-300 group relative overflow-hidden h-full">
              {/* Faint corner accent */}
              <span
                className="absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-[#2a2520] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 right-0 h-16 w-px bg-gradient-to-b from-[#2a2520] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Type badge + year */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`font-mono text-[0.6rem] tracking-widest uppercase border px-2.5 py-1 ${typeColors[reward.type] ?? "text-text-dim border-[#2a2a2a]"}`}
                >
                  {reward.type}
                </span>
                <span className="font-mono text-xs text-text-dim">{reward.year}</span>
              </div>

              <h3 className="font-display text-xl md:text-2xl text-white leading-snug mb-1 group-hover:text-gold transition-colors duration-300">
                {reward.title}
              </h3>
              <p className="font-mono text-xs tracking-wider text-text-muted mb-5">{reward.issuer}</p>
              <p className="font-sans font-light text-sm text-text-muted leading-relaxed">{reward.description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
