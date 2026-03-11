'use client'

import { useEffect, useRef } from 'react'
import { projects } from '../utils/constant'

function ArrowIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
      <path d="M5 3H3C2.447 3 2 3.447 2 4V13C2 13.553 2.447 14 3 14H12C12.553 14 13 13.553 13 13V11M9 2H14M14 2V7M14 2L7 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = sectionRef.current?.querySelectorAll('[data-reveal]')
    items?.forEach((item) => {
      const el = item as HTMLElement
      el.style.opacity = '0'
      el.style.transform = 'translateY(32px)'
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16 md:mb-24">
        <div>
          <p data-reveal className="section-label mb-4">Selected Work</p>
          <h2 data-reveal className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-white">
            Projects
          </h2>
        </div>
        <a
          data-reveal
          href="https://github.com/sophanithmey?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-text-muted hover:text-gold transition-colors duration-300"
        >
          All on GitHub <ExternalIcon />
        </a>
      </div>

      {/* Project list */}
      <div className="space-y-px">
        {projects.map((project, i) => (
          <div
            key={project.index}
            data-reveal
            style={{ transitionDelay: `${i * 80}ms` }}
            className="project-card group"
          >
            {/* Card inner */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                {/* Left */}
                <div className="flex items-start gap-6">
                  <span className="font-mono text-xs text-text-dim pt-1.5 shrink-0">{project.index}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 border border-border-mid text-text-dim">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono tracking-wider text-text-muted">{project.category}</p>
                  </div>
                </div>

                {/* Year + Arrow */}
                <div className="flex items-center gap-4 md:pt-1 pl-12 md:pl-0">
                  <span className="font-mono text-xs text-text-dim">{project.year}</span>
                  <a
                    href={project.link}
                    className="flex items-center justify-center w-9 h-9 border border-border-mid text-text-muted group-hover:border-gold group-hover:text-gold transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowIcon />
                  </a>
                </div>
              </div>

              {/* Description */}
              <div className="pl-12">
                <p className="text-text-light font-sans font-light text-sm md:text-base leading-relaxed mb-5 max-w-xl">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
