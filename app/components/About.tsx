'use client';

import { useEffect, useRef } from 'react';

import { stats } from '../utils/constant';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-reveal]');
    items?.forEach((item) => {
      const el = item as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id='about'
      ref={sectionRef}
      className='py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto border-t border-[#111]'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24'>
        {/* Left column */}
        <div>
          <p data-reveal className='section-label mb-4'>
            About
          </p>
          <h2
            data-reveal
            className='font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-white mb-10'
          >
            Crafting at the
            <br />
            intersection of
            <br />
            <em className='text-gold not-italic'>code & design</em>
          </h2>

          <div
            data-reveal
            className='space-y-5 font-sans font-light leading-relaxed text-text-light'
          >
            <p>
              I'm Sophanith Mey, a mid-level frontend developer based in Phnom Penh,
              Cambodia. I focus on building user-friendly web applications —
              from reusable components and interactive features to scalable
              Next.js projects.
            </p>
            <p>
              My experience includes working with startups and collaborative teams. 
              I value clean code, accessibility, and creating seamless user experiences. 
              I believe that great interfaces simplify the user's journey.
            </p>
            <p>
              Outside of work, I enjoy learning new technologies, sharing knowledge 
              through writing, and supporting junior developers in their growth.
            </p>
          </div>

          <div data-reveal className='mt-10 flex gap-6'>
            {[
              {
                label: 'GitHub',
                href: 'https://github.com/sophanithmey',
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    className='w-5 h-5'
                    fill='currentColor'
                  >
                    <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
                  </svg>
                ),
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/msphanith/',
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    className='w-5 h-5'
                    fill='currentColor'
                  >
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.label}
                className='flex items-center justify-center w-10 h-10 border border-border-mid text-text-muted hover:border-gold hover:text-gold transition-all duration-300'
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right column — stats */}
        <div className='flex flex-col justify-end'>
          <div
            data-reveal
            className='grid grid-cols-2 gap-px border border-[#1a1a1a]'
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-8 border-[#1a1a1a] ${i < 2 ? 'border-b' : ''} ${
                  i % 2 === 0 ? 'border-r' : ''
                } group hover:bg-[#111] transition-colors duration-300`}
              >
                <div className='font-display text-5xl text-white mb-2 group-hover:text-gold transition-colors duration-300'>
                  {stat.value}
                </div>
                <div className='font-mono text-xs tracking-widest uppercase text-text-muted'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div
            data-reveal
            className='mt-8 p-6 border border-[#1a1a1a] bg-surface'
          >
            <p className='section-label mb-3'>Currently</p>
            <p className='font-sans font-light text-text-muted text-sm leading-relaxed'>
              Frontend Developer at{' '}
              <span className='text-white'>Wingmall</span> — working on the
              developer experience platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
