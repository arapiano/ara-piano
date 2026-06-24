"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Store", href: "#store" },
  { label: "YouTube", href: "#youtube" },
  { label: "Contact", href: "#contact" },
];

export default function HomeEn() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
          <a href="#" className="text-sm font-semibold tracking-wide">
            ARA PIANO
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="/" className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
              日本語
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-[#1d1d1f] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-[#1d1d1f] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#1d1d1f] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-black/5 px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#1d1d1f]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="/" className="text-sm text-[#6e6e73]">日本語</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <p className="text-sm tracking-[0.2em] uppercase text-white/70 mb-6">
            Life with Piano
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-6 text-white">
            ARA PIANO
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light mb-12">
            Bringing piano into everyday life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.youtube.com/@arapiano"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#1d1d1f] text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
            <a
              href="#store"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/40 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Sheet Music
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6e6e73] mb-4">About</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            Composer &amp; Pianist
          </h2>
          <div className="space-y-4 text-[#6e6e73] leading-relaxed mb-6">
            <p className="text-lg font-medium text-[#1d1d1f]">Kazumasa Aramoto</p>
            <p className="text-sm text-[#6e6e73]">Composer · Piano YouTuber · CEO of ARA PIANO Inc.</p>
          </div>
          <div className="space-y-5 text-[#6e6e73] leading-relaxed mb-16">
            <p>
              A composer and piano YouTuber based in Japan, dedicated to the concept of "Life with Piano." As an Audiostock partner creator, he has released over 1,000 original tracks, with music featured in TV programs and video productions. His YouTube channel "ARA PIANO" has grown to over 150,000 subscribers, and his piano arrangement sheet music has sold over 10,000 copies.
            </p>
            <p>
              In 2025, he received the Audiostock CREATORS AWARD "Best Creator" prize. As CEO of ARA PIANO Inc., he continues to pursue composition, arrangement, and music education — creating an environment where more people can enjoy music in their everyday lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "150K+", label: "YouTube Subscribers" },
              { number: "10,000+", label: "Sheet Music Sold" },
              { number: "Award", label: "Audiostock Best Creator 2025" },
            ].map((item) => (
              <div key={item.label} className="text-center py-8 border-t border-black/10">
                <p className="text-3xl font-semibold tracking-tight mb-2">{item.number}</p>
                <p className="text-sm text-[#6e6e73]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store */}
      <section id="store" className="py-32 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6e6e73] mb-4">Store</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Store</h2>

          {/* Sheet Music */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6">Sheet Music</h3>
            <div className="space-y-3">
              <p className="text-xs font-medium text-[#6e6e73] uppercase tracking-widest mb-3">International</p>
              {[
                { name: "mymusic5", href: "https://www.mymusic5.com/ja/ARAPIANO" },
                { name: "Mapianist", href: "https://www.mapianist.com/profile/1058756/sheet/post" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 bg-white rounded-2xl hover:shadow-sm transition-shadow"
                >
                  <p className="font-medium">{item.name}</p>
                  <svg className="w-4 h-4 text-[#6e6e73] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
              <p className="text-xs font-medium text-[#6e6e73] uppercase tracking-widest mb-3 pt-4">Japan</p>
              {[
                { name: "Piascore", href: "https://store.piascore.com/publishers/7845" },
                { name: "kokomu", href: "https://www.kokomu.jp/artist/ARAPIANO" },
                { name: "mucome", href: "https://mucome.net/profile?id=1931" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 bg-white rounded-2xl hover:shadow-sm transition-shadow"
                >
                  <p className="font-medium">{item.name}</p>
                  <svg className="w-4 h-4 text-[#6e6e73] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Goods */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6">Goods</h3>
            <a
              href="https://suzuri.jp/ARAPIANO"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 bg-white rounded-2xl hover:shadow-sm transition-shadow"
            >
              <div>
                <p className="font-medium">SUZURI</p>
                <p className="text-sm text-[#6e6e73] mt-1">Official ARA PIANO merchandise.</p>
              </div>
              <svg className="w-4 h-4 text-[#6e6e73] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* BGM */}
          <div>
            <h3 className="text-lg font-semibold mb-6">BGM / Sound Effects</h3>
            <a
              href="https://audiostock.net/artists/933"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 bg-white rounded-2xl hover:shadow-sm transition-shadow"
            >
              <div>
                <p className="font-medium">Audiostock</p>
                <p className="text-sm text-[#6e6e73] mt-1">Royalty-free music and sound effects for commercial use.</p>
              </div>
              <svg className="w-4 h-4 text-[#6e6e73] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* YouTube */}
      <section id="youtube" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6e6e73] mb-4">YouTube</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            YouTube Channel
          </h2>
          <p className="text-[#6e6e73] mb-12">
            Piano performances, arrangement tutorials, and music for everyday life.
          </p>

          <div className="aspect-video rounded-2xl overflow-hidden mb-8">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/uhwJuXJvOyo"
              title="ARA PIANO"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <a
            href="https://www.youtube.com/@arapiano"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
          >
            Visit Channel
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6e6e73] mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-[#6e6e73] mb-12">
            For business inquiries, collaborations, or any questions, feel free to reach out.
          </p>

          <form action="https://formspree.io/f/xykqkgbq" method="POST" className="space-y-6 mb-16">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-black/10 rounded-xl text-sm focus:outline-none focus:border-black/30 transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-black/10 rounded-xl text-sm focus:outline-none focus:border-black/30 transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                name="message"
                placeholder="Your message..."
                className="w-full px-4 py-3 border border-black/10 rounded-xl text-sm focus:outline-none focus:border-black/30 transition-colors bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#1d1d1f] text-white text-sm font-medium rounded-full hover:bg-[#3d3d3f] transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="border-t border-black/10 pt-12">
            <p className="text-sm text-[#6e6e73] mb-6">Follow</p>
            <div className="flex gap-6">
              <a href="https://www.youtube.com/@arapiano" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">YouTube</a>
              <a href="https://x.com/aramotokazumasa" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">X</a>
              <a href="https://www.instagram.com/arapiano_arachang/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-black/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold">ARA PIANO</p>
          <p className="text-xs text-[#6e6e73]">
            © {new Date().getFullYear()} ARA PIANO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
