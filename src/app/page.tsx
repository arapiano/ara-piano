"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Sheet Music", href: "#sheet-music" },
  { label: "YouTube", href: "#youtube" },
  { label: "Music", href: "#music" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
          <a href="#" className="text-sm font-semibold tracking-wide">
            ARA PIANO
          </a>

          {/* Desktop nav */}
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
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <span className={`block w-5 h-px bg-[#1d1d1f] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-[#1d1d1f] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#1d1d1f] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
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
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14">
        <p className="text-sm tracking-[0.2em] uppercase text-[#6e6e73] mb-6">
          Life with Piano
        </p>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-6">
          ARA PIANO
        </h1>
        <p className="text-xl md:text-2xl text-[#6e6e73] font-light mb-12">
          ピアノ演奏を日常に。
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.youtube.com/@arapiano"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1d1d1f] text-white text-sm font-medium rounded-full hover:bg-[#3d3d3f] transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube
          </a>
          <a
            href="#sheet-music"
            className="inline-flex items-center justify-center px-8 py-3 border border-[#1d1d1f]/20 text-sm font-medium rounded-full hover:bg-[#f5f5f7] transition-colors"
          >
            楽譜を見る
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-[#c7c7cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6e6e73] mb-4">About</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            作曲家・ピアニスト
          </h2>
          <div className="prose prose-lg text-[#6e6e73] leading-relaxed space-y-6 mb-16">
            <p>
              ARA PIANOは、「ピアノ演奏を日常に」をテーマに活動する作曲家・ピアニストです。
              初心者でも気軽にピアノを楽しめる世界を目指し、演奏動画・楽譜・オリジナル音楽を届けています。
            </p>
            <p>
              {/* ここに自己紹介文を追加できます */}
            </p>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "15万+", label: "YouTube登録者" },
              { number: "1万+", label: "楽譜販売累計" },
              { number: "受賞", label: "Audiostock BEST CREATOR Award" },
            ].map((item) => (
              <div key={item.label} className="text-center py-8 border-t border-black/10">
                <p className="text-3xl font-semibold tracking-tight mb-2">{item.number}</p>
                <p className="text-sm text-[#6e6e73]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sheet Music */}
      <section id="sheet-music" className="py-32 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6e6e73] mb-4">Sheet Music</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">楽譜販売</h2>
          <p className="text-[#6e6e73] mb-12">
            初心者から上級者まで楽しめる楽譜を販売しています。
          </p>

          <div className="space-y-3">
            <p className="text-xs font-medium text-[#6e6e73] uppercase tracking-widest mb-4">国内販売</p>
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
            <p className="text-xs font-medium text-[#6e6e73] uppercase tracking-widest mb-4 pt-6">海外販売</p>
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
          </div>
        </div>
      </section>

      {/* YouTube */}
      <section id="youtube" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6e6e73] mb-4">YouTube</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            チャンネル紹介
          </h2>
          <p className="text-[#6e6e73] mb-12">
            ピアノ演奏動画を中心に、楽曲解説や演奏テクニックなどを発信しています。
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
            チャンネルを見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Music */}
      <section id="music" className="py-32 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6e6e73] mb-4">Music</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">音楽作品</h2>

          <div className="grid grid-cols-1 gap-4">
            <a
              href="https://audiostock.jp/artists/11994"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-white rounded-2xl hover:shadow-sm transition-shadow"
            >
              <div>
                <h3 className="font-medium mb-1">Audiostock</h3>
                <p className="text-sm text-[#6e6e73]">BGM・効果音など、商用利用可能な音楽素材を提供しています。</p>
              </div>
              <svg className="w-4 h-4 text-[#6e6e73] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6e6e73] mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">お問い合わせ</h2>
          <p className="text-[#6e6e73] mb-12">
            お仕事のご依頼やご質問はこちらからお気軽にどうぞ。
          </p>

          <form className="space-y-6 mb-16">
            <div>
              <label className="block text-sm font-medium mb-2">お名前</label>
              <input
                type="text"
                placeholder="山田 太郎"
                className="w-full px-4 py-3 border border-black/10 rounded-xl text-sm focus:outline-none focus:border-black/30 transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">メールアドレス</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 border border-black/10 rounded-xl text-sm focus:outline-none focus:border-black/30 transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">メッセージ</label>
              <textarea
                rows={5}
                placeholder="メッセージをご記入ください"
                className="w-full px-4 py-3 border border-black/10 rounded-xl text-sm focus:outline-none focus:border-black/30 transition-colors bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#1d1d1f] text-white text-sm font-medium rounded-full hover:bg-[#3d3d3f] transition-colors"
            >
              送信する
            </button>
          </form>

          {/* SNS Links */}
          <div className="border-t border-black/10 pt-12">
            <p className="text-sm text-[#6e6e73] mb-6">SNS</p>
            <div className="flex gap-6">
              <a
                href="https://www.youtube.com/@arapiano"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.youtube.com/@arapiano"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://x.com/aramotokazumasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
              >
                X
              </a>
              <a
                href="https://www.instagram.com/arapiano_arachang/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
              >
                Instagram
              </a>
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
