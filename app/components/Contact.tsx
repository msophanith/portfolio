'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  const email = 'meysophanith@hotmail.com'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

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
      el.style.transform = 'translateY(28px)'
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id='contact'
      ref={sectionRef}
      className='py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto border-t border-[#111]'
    >
      {/* Header */}
      <div className='max-w-2xl mb-16 md:mb-24'>
        <p data-reveal className='section-label mb-4'>
          Get in touch
        </p>
        <h2
          data-reveal
          className='font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] text-white mb-8'
        >
          Let's build something{' '}
          <span className='text-gold italic'>remarkable</span>
          <span className='text-text-dim'>.</span>
        </h2>
        <p
          data-reveal
          className='text-text-light font-sans font-light md:text-lg leading-relaxed'
        >
          I'm always open to the right opportunities — full-time roles,
          freelance projects, consulting, or just a conversation about
          development.
        </p>
      </div>

      {/* CTA Row */}
      <div
        data-reveal
        className='flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-20 md:mb-28'
      >
        <a href={`mailto:${email}`} className='cta-button-primary group'>
          <span>Send an Email</span>
          <svg
            className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M2 8H14M14 8L9 3M14 8L9 13'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </a>

        <button
          onClick={copyEmail}
          className='cta-button-ghost group flex items-center gap-3'
        >
          <span className='font-mono text-xs'>
            {copied ? 'Copied!' : email}
          </span>
          {copied ? (
            <svg className='w-4 h-4 text-green' viewBox='0 0 16 16' fill='none'>
              <path
                d='M3 8L6.5 11.5L13 4.5'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          ) : (
            <svg
              className='w-4 h-4 transition-transform duration-300 group-hover:scale-110'
              viewBox='0 0 16 16'
              fill='none'
            >
              <rect
                x='5'
                y='5'
                width='8'
                height='8'
                rx='1'
                stroke='currentColor'
                strokeWidth='1.25'
              />
              <path
                d='M3 11V3H11'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          )}
        </button>
      </div>

      {/* Divider + Footer */}
      <div
        data-reveal
        className='pt-10 border-t border-[#111] flex flex-col md:flex-row items-start md:items-center justify-between gap-6'
      >
        <div className='flex items-center gap-2'>
          <span className='font-display text-text-muted'>SPN</span>
          <span className='font-mono text-[10px] tracking-[0.3em] uppercase text-text-dim'>
            · Sophanith MEY · {new Date().getFullYear()}
          </span>
        </div>

        <p className='font-mono text-[10px] tracking-wider text-text-dim'>
          Built with Next.js · Tailwind CSS · TypeScript
        </p>

        <div className='flex items-center gap-1'>
          <span className='w-1.5 h-1.5 rounded-full bg-red-500' />
          <span className='font-mono text-[10px] tracking-[0.3em] uppercase text-text-muted'>
            Not Open to work
          </span>
        </div>
      </div>
    </section>
  );
}
