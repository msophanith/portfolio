'use client'

import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { links, Resume } from '../utils/constant'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    /*
     * Tailwind v4: .nav-scrolled is defined as a utility in @layer utilities
     * inside globals.css — no config file needed.
     */
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', color: 'var(--color-cream)', textDecoration: 'none', transition: 'color 300ms' }}
          onMouseOver={e => (e.currentTarget.style.color = 'var(--color-gold)')}
          onMouseOut={e  => (e.currentTarget.style.color = 'var(--color-cream)')}
        >
          SPN
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <a key={link.label} href={link.href} className="nav-link">{link.label}</a>
          ))}
        </div>

        {/* Desktop CTA + Theme Toggle */}
        <div className="hidden md:flex items-center gap-6">
          <ThemeToggle />
          <a href={Resume.href} className="nav-link" target='_blank'>Resume</a>
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '0.6rem 1.25rem',
              border: '1px solid var(--color-border-mid)',
              color: 'var(--color-muted-5)',
              textDecoration: 'none',
              transition: 'border-color 300ms, color 300ms',
            }}
            onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-gold)' }}
            onMouseOut={e  => { e.currentTarget.style.borderColor = 'var(--color-border-mid)'; e.currentTarget.style.color = 'var(--color-muted-5)' }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {[
              menuOpen ? 'rotate-45 translate-y-2' : '',
              menuOpen ? 'opacity-0' : '',
              menuOpen ? '-rotate-45 -translate-y-2' : '',
            ].map((cls, i) => (
              <span
                key={i}
                className={`block h-px transition-all duration-300 ${cls}`}
                style={{ width: '24px', background: 'var(--color-cream)' }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`mobile-menu md:hidden ${menuOpen ? 'open' : ''}`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
