"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Store", href: "#store" },
  { label: "YouTube", href: "#youtube" },
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
            <a href="/en" className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
              EN
            </a>
          </div>

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
            <a href="/en" className="text-sm text-[#6e6e73]">EN</a>
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
            ピアノ演奏を日常に。
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
              ストアを見る
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Brand Message */}
      <section id="brand" className="py-40 px-6 bg-[#0e0d0c] text-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-medium text-center mb-20">
            ピアノ演奏を日常に。
          </p>
          <div className="space-y-8 text-center">
            <p className="text-base md:text-lg leading-loose font-light text-white/60 md:hidden">
              ピアノは、一部の特別な人だけの<br />
              ものではありません。
            </p>
            <p className="text-base md:text-lg leading-loose font-light text-white/60 hidden md:block">
              ピアノは、一部の特別な人だけのものではありません。
            </p>

            <p className="text-base md:text-lg leading-loose font-light text-white/60 md:hidden">
              好きな曲を一曲<br />
              弾けるようになること。<br />
              家で少しだけ<br />
              鍵盤に触れること。<br />
              誰かの前で演奏して<br />
              笑顔になれること。
            </p>
            <p className="text-base md:text-lg leading-loose font-light text-white/60 hidden md:block">
              好きな曲を一曲弾けるようになること。<br />
              家で少しだけ鍵盤に触れること。<br />
              誰かの前で演奏して笑顔になれること。
            </p>

            <p className="text-base md:text-lg leading-loose text-white/90 md:hidden">
              そんな小さな喜びが、毎日の暮らしを<br />
              少し豊かにしてくれると信じています。
            </p>
            <p className="text-base md:text-lg leading-loose text-white/90 hidden md:block">
              そんな小さな喜びが、毎日の暮らしを少し豊かにしてくれると信じています。
            </p>

            <p className="text-base md:text-lg leading-loose font-light text-white/60 md:hidden">
              ARA PIANOでは、<br />
              「難しいから諦める」のではなく、<br />
              「弾ける楽しさから始める」<br />
              ことを大切にしています。
            </p>
            <p className="text-base md:text-lg leading-loose font-light text-white/60 hidden md:block">
              ARA PIANOでは、「難しいから諦める」のではなく、<br />
              「弾ける楽しさから始める」ことを大切にしています。
            </p>

            <p className="text-base md:text-lg leading-loose font-light text-white/60 md:hidden">
              初心者でも挑戦しやすい<br />
              アレンジやレッスンを通して、<br />
              一人でも多くの方が<br />
              ピアノを身近に感じられるよう<br />
              活動しています。
            </p>
            <p className="text-base md:text-lg leading-loose font-light text-white/60 hidden md:block">
              初心者でも挑戦しやすいアレンジやレッスンを通して、<br />
              一人でも多くの方がピアノを身近に感じられるよう活動しています。
            </p>

            <p className="text-base md:text-lg leading-loose text-white/90 md:hidden">
              演奏の上手さだけを<br />
              目指すのではなく、<br />
              音楽を楽しむ時間そのものが、<br />
              人生の豊かさにつながる。
            </p>
            <p className="text-base md:text-lg leading-loose text-white/90 hidden md:block">
              演奏の上手さだけを目指すのではなく、<br />
              音楽を楽しむ時間そのものが、人生の豊かさにつながる。
            </p>

            <p className="text-base md:text-lg leading-loose font-light text-white/60 md:hidden">
              そんな思いを込めて、<br />
              「ピアノ演奏を日常に。」<br />
              という言葉を活動の中心に掲げています。
            </p>
            <p className="text-base md:text-lg leading-loose font-light text-white/60 hidden md:block">
              そんな思いを込めて、<br />
              「ピアノ演奏を日常に。」という言葉を活動の中心に掲げています。
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6e6e73] mb-4">About</p>
          <p className="text-2xl font-semibold tracking-tight mb-2">
            新本 和正（Kazumasa Aramoto）
          </p>
          <p className="text-sm text-[#6e6e73] mb-12">
            作曲家・ピアノYouTuber・株式会社ARA PIANO代表
          </p>
          <div className="space-y-5 text-[#6e6e73] leading-relaxed mb-16">
            <p>
              「ピアノ演奏を日常に」をコンセプトに活動する作曲家・ピアノYouTuber。Audiostock提携クリエイターとして1,000曲以上の楽曲をリリースし、テレビ番組や映像作品などへ楽曲提供を行う。YouTubeチャンネル「ARA PIANO」の登録者数は15万人を超え、ピアノアレンジ楽譜の累計販売数は1万点を超える。
            </p>
            <p>
              2025年にはAudiostock CREATORS AWARD「BEST CREATOR賞」を受賞。現在は株式会社ARA PIANO代表として、作曲・編曲・音楽教育を通じて、より多くの人が音楽を楽しめる環境づくりに取り組んでいる。
            </p>
          </div>

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

      {/* Store */}
      <section id="store" className="py-32 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6e6e73] mb-4">Store</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">ストア</h2>

          {/* Sheet Music */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6">楽譜</h3>
            <div className="space-y-3">
              <p className="text-xs font-medium text-[#6e6e73] uppercase tracking-widest mb-3">国内販売</p>
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
              <p className="text-xs font-medium text-[#6e6e73] uppercase tracking-widest mb-3 pt-4">海外販売</p>
              {[
                { name: "mymusic5", href: "https://www.mymusic5.com/ja/ARAPIANO" },
                { name: "Mapianist", href: "https://www.mapianist.com/profile/1058756/main" },
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
            <h3 className="text-lg font-semibold mb-6">グッズ</h3>
            <div className="space-y-3">
              <a
                href="https://store.line.me/stickershop/author/6345996/ja"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-white rounded-2xl hover:shadow-sm transition-shadow"
              >
                <div>
                  <p className="font-medium">LINE スタンプ</p>
                  <p className="text-sm text-[#6e6e73] mt-1">ARA PIANOオリジナルLINEスタンプを販売しています。</p>
                </div>
                <svg className="w-4 h-4 text-[#6e6e73] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://suzuri.jp/ARAPIANO"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-white rounded-2xl hover:shadow-sm transition-shadow"
              >
                <div>
                  <p className="font-medium">SUZURI</p>
                  <p className="text-sm text-[#6e6e73] mt-1">ARA PIANOオリジナルグッズを販売しています。</p>
                </div>
                <svg className="w-4 h-4 text-[#6e6e73] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* BGM */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6">BGM</h3>
            <a
              href="https://audiostock.jp/artists/11994"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 bg-white rounded-2xl hover:shadow-sm transition-shadow"
            >
              <div>
                <p className="font-medium">Audiostock</p>
                <p className="text-sm text-[#6e6e73] mt-1">BGM・効果音など、商用利用可能な音楽素材を提供しています。</p>
              </div>
              <svg className="w-4 h-4 text-[#6e6e73] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Music Streaming */}
          <div>
            <h3 className="text-lg font-semibold mb-6">音楽配信</h3>
            <div className="space-y-3">
              {[
                { name: "Apple Music", href: "https://music.apple.com/jp/artist/arachang/1171190566" },
                { name: "Spotify", href: "https://open.spotify.com/artist/3QZmndnYJYWHYqJgUiNqkO" },
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

          <a
            href="https://www.youtube.com/watch?v=uhwJuXJvOyo"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-video rounded-2xl overflow-hidden mb-8 bg-black group"
          >
            <img
              src="https://img.youtube.com/vi/uhwJuXJvOyo/maxresdefault.jpg"
              alt="久石譲「Summer」初心者でも絶対弾ける！ピアノの弾き方"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.onerror = null;
                img.src = "https://img.youtube.com/vi/uhwJuXJvOyo/hqdefault.jpg";
              }}
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 flex items-center justify-center rounded-full bg-black/60 group-hover:bg-red-600/85 transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </span>
          </a>

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

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6e6e73] mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">お問い合わせ</h2>
          <p className="text-[#6e6e73] mb-12">
            お仕事のご依頼やご質問はこちらからお気軽にどうぞ。
          </p>

          <form action="https://formspree.io/f/xykqkgbq" method="POST" className="space-y-6 mb-16">
            <div>
              <label className="block text-sm font-medium mb-2">お名前</label>
              <input
                type="text"
                name="name"
                placeholder="山田 太郎"
                className="w-full px-4 py-3 border border-black/10 rounded-xl text-sm focus:outline-none focus:border-black/30 transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">メールアドレス</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 border border-black/10 rounded-xl text-sm focus:outline-none focus:border-black/30 transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">メッセージ</label>
              <textarea
                rows={5}
                name="message"
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

          <div className="border-t border-black/10 pt-12">
            <p className="text-sm text-[#6e6e73] mb-6">SNS</p>
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
