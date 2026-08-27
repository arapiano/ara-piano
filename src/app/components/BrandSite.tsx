"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useEffect, useState } from "react";

type Locale = "ja" | "en";

const stores = {
  sheetMusic: [
    ["Piascore", "https://store.piascore.com/publishers/7845", "Japan"],
    ["kokomu", "https://www.kokomu.jp/artist/ARAPIANO", "Japan"],
    ["mucome", "https://mucome.net/profile?id=1931", "Japan"],
    ["mymusic5", "https://www.mymusic5.com/ja/ARAPIANO", "Worldwide"],
    ["Mapianist", "https://www.mapianist.com/profile/1058756/main", "Worldwide"],
  ],
  goods: [["SUZURI", "https://suzuri.jp/ARAPIANO", "Official goods"]],
  character: [["LINE Stickers", "https://store.line.me/stickershop/author/6345996/ja", "Ara-chan"]],
  music: [
    ["Apple Music", "https://music.apple.com/jp/artist/arachang/1171190566", "Streaming"],
    ["Spotify", "https://open.spotify.com/artist/3QZmndnYJYWHYqJgUiNqkO", "Streaming"],
  ],
  bgm: [["Audiostock", "https://audiostock.jp/artists/11994", "BGM / Sound effects"]],
};

const awards = [
  { year: "2016", title: "The International Indie Gathering", ja: "Film Scoring Competition — Winner", en: "Film Scoring Competition — Winner", href: null },
  { year: "2021", title: "Audiostock CREATORS AWARD 2021", ja: "エリア別部門（関東）受賞", en: "Regional Award (Kanto)", href: "https://audiostock.jp/special/creators_award_2021" },
  { year: "2022", title: "Audiostock CREATORS AWARD 2022", ja: "年間総合 SILVER CREATOR受賞", en: "Annual SILVER CREATOR Award", href: "https://audiostock.jp/special/creators_award_2022" },
  { year: "2023", title: "Forbes JAPAN 2023年5月号", ja: "「新しい稼ぎ方を作る 日本で今注目のクリエイター図鑑」掲載", en: "Featured in “Creators to Watch in Japan”", href: "https://forbesjapan.com/magazine/detail/156" },
  { year: "2025", title: "Audiostock CREATORS AWARD 2025", ja: "年間総合 BEST CREATOR賞受賞", en: "Annual BEST CREATOR Award", href: "https://audiostock.jp/special/creators_award_2025" },
];

const text = {
  ja: {
    language: "EN", languageHref: "/en",
    heroYoutube: "YouTube", heroStore: "Storeを見る",
    storeIntro: "楽譜、グッズ、音楽配信など、ARA PIANOの作品を見つけられます。",
    sheetMusic: "楽譜", goods: "グッズ", character: "LINEスタンプ", music: "音楽配信", bgm: "BGM・音楽素材",
    youtubeIntro: "ピアノ演奏動画を中心に、楽曲解説や演奏テクニックなどを発信しています。",
    youtubeLink: "YouTubeチャンネルを見る",
    philosophyLead: <>音楽を、限られた人だけのものにしない。<br />学びたい人が、自分のペースで音楽を楽しめる場所をつくる。</>,
    philosophyBody: "難しさを理由に諦めるのではなく、弾ける喜びから始める。作曲、演奏、映像、教育を通して、音楽と人との距離を近づける。それが、ARA PIANOの目指す「音楽の民主化」である。",
    role: "作曲家・ピアノYouTuber・株式会社ARA PIANO代表",
    bio1: "「ピアノ演奏を日常に」をコンセプトに活動している。Audiostock提携クリエイターとして1,000曲以上の楽曲をリリースし、テレビ番組や映像作品へ楽曲を提供している。",
    bio2: "YouTubeチャンネル登録者数は16万人を超え、ピアノアレンジ楽譜の累計販売数は1万点以上。2025年には、Audiostock CREATORS AWARD「BEST CREATOR賞」を受賞している。",
    awardsLabel: "受賞歴・掲載実績",
    araTitle: "アラちゃん",
    araBody: "ARA PIANOの公式キャラクター。音楽のある日常を、やわらかく、親しみやすく伝えるクリエイティブパートナーとして、LINEスタンプやオリジナルグッズに登場している。",
    araLink: "アラちゃんのLINEスタンプを見る",
    contactIntro: "お仕事に関するお問い合わせはこちら。",
    name: "お名前", email: "メールアドレス", message: "お問い合わせ内容", send: "送信する", sending: "送信中…", sent: "お問い合わせを送信しました。", sendError: "送信できませんでした。時間をおいてもう一度お試しください。",
  },
  en: {
    language: "JP", languageHref: "/",
    heroYoutube: "YouTube", heroStore: "View Store",
    storeIntro: "Find ARA PIANO sheet music, original goods, music, and sound resources.",
    sheetMusic: "Sheet Music", goods: "Goods", character: "LINE Stickers", music: "Music Streaming", bgm: "BGM & Sound Resources",
    youtubeIntro: "Piano performances, song guides, and practical playing techniques for everyday music-making.",
    youtubeLink: "Visit the YouTube channel",
    philosophyLead: <>Music should not belong only to a gifted few.<br />We create a place where anyone can learn and enjoy music at their own pace.</>,
    philosophyBody: "Rather than giving up because music feels difficult, begin with the joy of being able to play. Through composition, performance, film, and education, ARA PIANO brings music closer to more people.",
    role: "Composer / Piano YouTuber / CEO of ARA PIANO Inc.",
    bio1: "Working under the idea of making piano part of daily life, Kazumasa Aramoto has released over 1,000 tracks as an Audiostock partner creator, with music featured in television and film.",
    bio2: "The ARA PIANO YouTube channel has more than 160,000 subscribers and over 10,000 sheet music sales. In 2025, he received Audiostock's BEST CREATOR Award.",
    awardsLabel: "Awards & Press",
    araTitle: "Ara-chan",
    araBody: "ARA PIANO's official character and creative companion, bringing a softer, more approachable expression to a life with music through LINE stickers and original goods.",
    araLink: "View Ara-chan LINE stickers",
    contactIntro: "For work inquiries, please contact us here.",
    name: "Name", email: "Email", message: "Message", send: "Send message", sending: "Sending…", sent: "Thank you. Your message has been sent.", sendError: "Your message could not be sent. Please try again later.",
  },
};

function ExternalArrow() {
  return <span className="external-arrow" aria-hidden="true">↗</span>;
}

function StoreGroup({ title, items, locale }: { title: string; items: string[][]; locale: Locale }) {
  return (
    <div className="store-group">
      <h3>{title}</h3>
      <div className="store-links">
        {items.map(([name, href, note]) => (
          <a href={locale === "en" && name === "mymusic5" ? "https://www.mymusic5.com/ARAPIANO" : href} target="_blank" rel="noopener noreferrer" key={name}>
            <span><strong>{name}</strong><small>{note}</small></span>
            <span className="external-label">External <ExternalArrow /></span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function BrandSite({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const t = text[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  const nav = ["About", "Store", "YouTube", "Contact"];
  const closeMenu = () => setMenuOpen(false);
  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatus("sending");
    try {
      const response = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setFormStatus("sent");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <main className="site-shell" lang={locale}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ARA PIANO home">ARA PIANO</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}
          <Link className="language" href={t.languageHref}>{t.language}</Link>
        </nav>
        <button className={`menu-button${menuOpen ? " open" : ""}`} type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? " open" : ""}`} aria-label="Mobile navigation">
          {nav.map((item, index) => <a href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}><span>0{index + 1}</span>{item}</a>)}
          <Link href={t.languageHref} onClick={closeMenu}><span>—</span>{t.language}</Link>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-light" aria-hidden="true" />
        <div className="hero-lockup">
          <h1 id="hero-title">ARA PIANO</h1>
          <p>Life with Piano.</p>
          <Image className="signature" src="/kazumasa-aramoto-signature.png" alt="Kazumasa Aramoto" width={292} height={43} priority />
          <div className="hero-actions">
            <a href="https://www.youtube.com/@arapiano" target="_blank" rel="noopener noreferrer">{t.heroYoutube}</a>
            <a href="#store">{t.heroStore}</a>
          </div>
        </div>
        <a className="scroll-hint" href="#store"><span>Scroll</span><i /></a>
      </section>

      <section className="section store" id="store">
        <div className="section-index">01</div>
        <div className="section-content">
          <div className="section-heading reveal"><p className="eyebrow">Store</p><h2>Store</h2><p>{t.storeIntro}</p></div>
          <div className="store-grid">
            <StoreGroup title={t.sheetMusic} items={stores.sheetMusic} locale={locale} />
            <StoreGroup title={t.goods} items={stores.goods} locale={locale} />
            <StoreGroup title={t.character} items={stores.character} locale={locale} />
            <StoreGroup title={t.music} items={stores.music} locale={locale} />
            <StoreGroup title={t.bgm} items={stores.bgm} locale={locale} />
          </div>
        </div>
      </section>

      <section className="section youtube" id="youtube">
        <div className="section-index">02</div>
        <div className="section-content">
          <div className="section-heading reveal"><p className="eyebrow">YouTube</p><h2>YouTube</h2><p>{t.youtubeIntro}</p></div>
          <a className="video-feature reveal" href="https://www.youtube.com/watch?v=3HIj15kQJ_0" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://img.youtube.com/vi/3HIj15kQJ_0/maxresdefault.jpg" alt="スパークル ピアノ演奏動画" width="1280" height="720" loading="lazy" />
            <span className="play"><i /></span>
          </a>
          <a className="text-link reveal" href="https://www.youtube.com/@arapiano" target="_blank" rel="noopener noreferrer">{t.youtubeLink}<span>External <ExternalArrow /></span></a>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-index">03</div>
        <div className="section-content">
          <p className="eyebrow reveal">About</p>
          <div className="philosophy-block reveal"><p className="sub-label">ARA PIANO</p><h2>Music, made<br />more accessible.</h2><p className="philosophy-lead">{t.philosophyLead}</p><p className="body-copy">{t.philosophyBody}</p></div>
          <div className="profile-block reveal">
            <div><p className="sub-label">Artist</p><h2>Kazumasa<br />Aramoto</h2><p className="role">{t.role}</p></div>
            <div className="profile-copy"><p>{t.bio1}</p><p>{t.bio2}</p></div>
          </div>
          <div className="facts reveal"><div><strong>1,000+</strong><span>Original works</span></div><div><strong>160K+</strong><span>YouTube community</span></div><div><strong>10K+</strong><span>Scores delivered</span></div><div><strong>2025</strong><span>Best Creator Award</span></div></div>
          <details className="awards reveal">
            <summary><span><small>Awards &amp; Press</small>{t.awardsLabel}</span><i aria-hidden="true">＋</i></summary>
            <div className="awards-list">
              {awards.map((award) => {
                const content = <><time>{award.year}</time><span><strong>{award.title}</strong><small>{locale === "ja" ? award.ja : award.en}</small></span></>;
                return award.href
                  ? <a className="award-row" href={award.href} target="_blank" rel="noopener noreferrer" key={award.year}>{content}<ExternalArrow /></a>
                  : <div className="award-row no-link" key={award.year}>{content}<span aria-hidden="true" /></div>;
              })}
            </div>
          </details>
          <div className="character-block reveal"><div><p className="sub-label">Official character</p><h3>{t.araTitle}</h3><Image className="character-image" src="/ara-chan.png" alt={t.araTitle} width={240} height={240} /></div><div><p>{t.araBody}</p><a href="https://store.line.me/stickershop/author/6345996/ja" target="_blank" rel="noopener noreferrer">{t.araLink}<ExternalArrow /></a></div></div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="section-index">04</div>
        <div className="section-content">
          <div className="section-heading compact reveal"><p className="eyebrow">Contact</p><h2>Contact</h2><p>{t.contactIntro}</p></div>
          <form action="https://formspree.io/f/xykqkgbq" method="POST" className="contact-form reveal" onSubmit={submitContact}>
            <label>{t.name}<input type="text" name="name" autoComplete="name" required /></label>
            <label>{t.email}<input type="email" name="email" autoComplete="email" required /></label>
            <label className="message">{t.message}<textarea name="message" rows={4} required /></label>
            <button type="submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? t.sending : t.send}<span aria-hidden="true">→</span></button>
            <p className={`form-status ${formStatus}`} aria-live="polite">{formStatus === "sent" ? t.sent : formStatus === "error" ? t.sendError : ""}</p>
          </form>
        </div>
      </section>

      <footer className="footer"><a className="brand" href="#top">ARA PIANO</a><p>Life with Piano.</p><nav aria-label="Social links"><a href="https://www.youtube.com/@arapiano" target="_blank" rel="noopener noreferrer">YouTube ↗</a><a href="https://x.com/aramotokazumasa" target="_blank" rel="noopener noreferrer">X ↗</a><a href="https://www.instagram.com/arapiano_arachang/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://note.com/ara_piano" target="_blank" rel="noopener noreferrer">note ↗</a></nav><small>© {new Date().getFullYear()} ARA PIANO</small></footer>
    </main>
  );
}
