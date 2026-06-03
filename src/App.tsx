import { useEffect, useState, useCallback } from "react";

// ===== DATA =====
const NAV = [
  { label: "Home", href: "#home" },
  { label: "About Deva", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

type GalleryItem = {
  title: string;
  category: string;
  img: string;
};

// Curated images for fine-line / script / floral / micro-realism tattoos
const GALLERY: GalleryItem[] = [
  {
    title: "Forearm Script",
    category: "Minimalist Text",
    img: "https://images.pexels.com/photos/9358717/pexels-photo-9358717.png?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Delicate Floral Wrap",
    category: "Fine-Line Floral",
    img: "https://images.pexels.com/photos/33537664/pexels-photo-33537664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Cursive Heart Script",
    category: "Script Tattoo",
    img: "https://images.pexels.com/photos/21301309/pexels-photo-21301309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Cherry Blossom Branch",
    category: "Fine-Line Botanical",
    img: "https://images.pexels.com/photos/37189540/pexels-photo-37189540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Micro Portrait",
    category: "Micro-Realism",
    img: "https://images.pexels.com/photos/33222631/pexels-photo-33222631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Single Stem Rose",
    category: "Fine-Line Floral",
    img: "https://images.pexels.com/photos/5004241/pexels-photo-5004241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Small Word Piece",
    category: "Minimalist Text",
    img: "https://images.pexels.com/photos/29225276/pexels-photo-29225276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Ornamental Details",
    category: "Fine-Line Ornament",
    img: "https://images.pexels.com/photos/12950503/pexels-photo-12950503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Calla Lily Study",
    category: "Fine-Line Floral",
    img: "https://images.pexels.com/photos/33935829/pexels-photo-33935829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Feather Texture",
    category: "Micro-Realism",
    img: "https://images.pexels.com/photos/6659655/pexels-photo-6659655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Monochrome Portrait",
    category: "Micro-Realism",
    img: "https://images.pexels.com/photos/12742814/pexels-photo-12742814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Delicate Script",
    category: "Script Tattoo",
    img: "https://images.pexels.com/photos/3279570/pexels-photo-3279570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Ornamental Band",
    category: "Fine-Line Ornament",
    img: "https://images.pexels.com/photos/10034349/pexels-photo-10034349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Lotus Line Work",
    category: "Fine-Line Floral",
    img: "https://images.pexels.com/photos/33537664/pexels-photo-33537664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Water Droplet Study",
    category: "Micro-Realism",
    img: "https://images.pexels.com/photos/12742814/pexels-photo-12742814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Petite Wordmark",
    category: "Minimalist Text",
    img: "https://images.pexels.com/photos/9358717/pexels-photo-9358717.png?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Fine-Line Script",
    category: "Script Tattoo",
    img: "https://images.pexels.com/photos/29225276/pexels-photo-29225276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Botanical Sketch",
    category: "Fine-Line Botanical",
    img: "https://images.pexels.com/photos/37189540/pexels-photo-37189540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Micro Realism Face",
    category: "Micro-Realism",
    img: "https://images.pexels.com/photos/4912590/pexels-photo-4912590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
  {
    title: "Cursive Mantra",
    category: "Script Tattoo",
    img: "https://images.pexels.com/photos/7908905/pexels-photo-7908905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800",
  },
];

// SVG circular logo
function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full h-full rounded-full neon-border overflow-hidden animate-pulse-ring bg-gradient-to-br from-ink to-ink-deep flex items-center justify-center">
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff1f3d" />
              <stop offset="100%" stopColor="#7a0015" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="56" fill="none" stroke="#222" strokeWidth="1" />
          <circle cx="60" cy="60" r="48" fill="none" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.7" />
          {/* Stylized lotus / monk silhouette */}
          <g fill="none" stroke="#ff1f3d" strokeWidth="1.4" strokeLinecap="round">
            <path d="M60 30 C48 40, 40 52, 42 66 C44 78, 54 84, 60 84 C66 84, 76 78, 78 66 C80 52, 72 40, 60 30 Z" opacity="0.9" />
            <path d="M60 30 L60 84" opacity="0.5" />
            <path d="M50 50 C55 46, 65 46, 70 50" opacity="0.6" />
            <path d="M48 60 C54 56, 66 56, 72 60" opacity="0.6" />
            <path d="M50 72 C55 69, 65 69, 70 72" opacity="0.6" />
          </g>
          {/* outer tick marks */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 60 + Math.cos(angle) * 48;
            const y1 = 60 + Math.sin(angle) * 48;
            const x2 = 60 + Math.cos(angle) * 54;
            const y2 = 60 + Math.sin(angle) * 54;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ff1f3d" strokeWidth="1" opacity={i % 3 === 0 ? 0.8 : 0.3} />;
          })}
        </svg>
      </div>
    </div>
  );
}

// ===== HEADER =====
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-neon/20 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo + Brand */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 shrink-0">
            <Logo />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg tracking-[0.18em] text-bone group-hover:text-neon-soft transition-colors">
              URBAN MONK
            </div>
            <div className="text-[10px] tracking-[0.4em] text-neon-soft uppercase">Tattoo Studio</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="nav-link text-sm font-medium tracking-widest uppercase text-parchment"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex neon-btn text-white text-xs font-bold tracking-[0.15em] uppercase px-5 py-3 rounded-sm"
        >
          Book Your Session
        </a>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 flex items-center justify-center text-neon"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neon/20 bg-ink/98 backdrop-blur-lg">
          <div className="px-6 py-5 flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-parchment py-2 border-b border-ink-border"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="neon-btn text-white text-xs font-bold tracking-[0.15em] uppercase px-5 py-3 rounded-sm text-center mt-2"
            >
              Book Your Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ===== HERO =====
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden brick-hero grain-overlay vignette">
      {/* decorative cross marks */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 w-8 h-8 border-l border-t border-neon/30" />
        <div className="absolute top-32 right-10 w-8 h-8 border-r border-t border-neon/30" />
        <div className="absolute bottom-24 left-10 w-8 h-8 border-l border-b border-neon/30" />
        <div className="absolute bottom-24 right-10 w-8 h-8 border-r border-b border-neon/30" />
      </div>

      {/* Artist silhouette image (background) */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 hidden md:block overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0505] via-transparent to-transparent z-10" />
        <img
          src="/images/artist-deva.jpg"
          alt="Deva — Lead Artist at Urban Monk Tattoo Studio"
          className="w-full h-full object-cover object-center opacity-50 animate-slow-zoom"
          style={{ filter: "contrast(1.05) saturate(0.95)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Tagline bar */}
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-neon/40 rounded-sm bg-ink-deep/60 backdrop-blur-sm animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
            </span>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-neon-soft">
              Now Taking Bookings · Chennai
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-bone tracking-tight animate-fade-in-up">
            Ink is My
            <br />
            <span className="neon-text animate-flicker italic">Therapy.</span>
          </h1>

          {/* Sub tagline */}
          <p className="mt-4 font-script text-3xl sm:text-4xl text-neon-soft/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Turn Your Story Into Art.
          </p>

          {/* Subhead */}
          <p
            className="mt-8 text-lg sm:text-xl text-parchment/90 max-w-xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.35s", animationFillMode: "both" }}
          >
            Premium custom tattooing by <span className="text-neon-soft font-semibold">Deva</span> at Urban Monk Tattoo
            Studio. Specializing in fine-line work, script, florals, and micro-realism.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          >
            <a
              href="#contact"
              className="neon-btn text-white text-sm font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-sm text-center flex items-center justify-center gap-3"
            >
              Secure Your Spot
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#gallery"
              className="ghost-btn text-sm font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-sm text-center"
            >
              View Portfolio
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg animate-fade-in-up"
            style={{ animationDelay: "0.7s", animationFillMode: "both" }}
          >
            {[
              { num: "2+", label: "Years Experience" },
              { num: "30+", label: "Custom Projects" },
              { num: "100%", label: "Hygiene First" },
            ].map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="font-display font-black text-3xl sm:text-4xl text-neon neon-text-soft">{s.num}</div>
                <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-ink-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-float">
        <span className="text-[10px] tracking-[0.4em] uppercase text-ink-muted">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-neon to-transparent" />
      </div>
    </section>
  );
}

// ===== ABOUT =====
function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-ink-deep">
      {/* Decorative */}
      <div className="absolute top-20 left-0 w-[300px] h-[300px] rounded-full bg-neon/5 blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-neon/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <div className="text-xs font-bold tracking-[0.5em] uppercase text-neon-soft mb-4">— Meet the Artist —</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-bone leading-tight">
            The Hand Behind <span className="neon-text">The Ink</span>
          </h2>
          <div className="slash-divider mt-8 max-w-md mx-auto">
            <span className="text-neon">✦</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative reveal">
            {/* backdrop frame */}
            <div className="absolute -inset-4 border border-neon/30 hidden sm:block" />
            <div className="absolute -inset-1 bg-gradient-to-br from-neon/20 to-transparent hidden sm:block" />
            <div className="relative aspect-[4/5] overflow-hidden group">
              <img
                src="/images/artist-deva.jpg"
                alt="Deva — Lead Tattoo Artist at Urban Monk Studio, Chennai"
                className="w-full h-full object-cover object-center transition-transform duration-[1500ms] group-hover:scale-105"
                style={{ filter: "contrast(1.05) saturate(0.95)" }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              {/* Hover reveal panel */}
              <div className="absolute inset-x-6 bottom-6 p-5 border border-neon/40 bg-ink/80 backdrop-blur-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-xs tracking-[0.3em] uppercase text-neon-soft mb-1">Deva</div>
                <div className="font-display font-bold text-bone text-lg">Creative Force</div>
                <div className="text-xs text-parchment/80 mt-2">Precision · Hygiene · Story-Driven</div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-neon" />
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-neon" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-neon" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-neon" />
            </div>
            {/* Signature tag */}
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-ink border border-neon/40 px-5 py-3">
              <div className="font-script text-2xl text-neon-soft leading-none">Deva</div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-ink-muted mt-1">— Lead Artist</div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal">
            <div className="inline-block mb-5">
              <span className="text-xs tracking-[0.4em] uppercase text-neon border border-neon/40 px-3 py-1.5">About Deva</span>
            </div>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-bone leading-tight mb-6">
              Turning Personal Stories <br />
              Into <span className="neon-text-soft text-neon">Timeless Ink.</span>
            </h3>

            <p className="text-parchment/90 leading-[1.9] text-base sm:text-lg">
              Meet <span className="text-neon-soft font-semibold">Deva</span>, the creative force behind Urban Monk Tattoo Studio.
              With over <span className="text-bone font-semibold">2 years of professional experience</span> and a portfolio of{" "}
              <span className="text-bone font-semibold">30+ successfully completed custom projects</span>, Deva specializes in bringing
              personal stories to life.
            </p>

            <p className="text-parchment/80 leading-[1.9] text-base sm:text-lg mt-5">
              Operating from his dedicated studio in Chennai, his work focuses on{" "}
              <span className="text-neon-soft">precision</span>,{" "}
              <span className="text-neon-soft">immaculate hygiene</span>, and a{" "}
              <span className="text-neon-soft">collaborative design process</span> that ensures your ink is uniquely yours.
            </p>

            {/* Specialties */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Fine-Line Art", "Script & Text", "Floral Line Work", "Micro-Realism"].map((s) => (
                <div key={s} className="flex items-center gap-3 p-4 border border-ink-border bg-ink-panel hover:border-neon/50 transition-all">
                  <div className="w-1.5 h-1.5 bg-neon rounded-full shrink-0" />
                  <span className="text-sm text-bone font-medium tracking-wide">{s}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="neon-btn text-white text-sm font-bold tracking-[0.2em] uppercase px-7 py-4 rounded-sm text-center"
              >
                Start Your Design
              </a>
              <a href="#gallery" className="ghost-btn text-sm font-bold tracking-[0.2em] uppercase px-7 py-4 rounded-sm text-center">
                See the Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== GALLERY =====
function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % GALLERY.length)),
    []
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  return (
    <section id="gallery" className="relative py-28 bg-ink">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center reveal">
        <div className="text-xs font-bold tracking-[0.5em] uppercase text-neon-soft mb-4">— Portfolio —</div>
        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-bone leading-tight">
          Our Latest Work & <br className="sm:hidden" />
          <span className="neon-text">Custom Designs</span>
        </h2>
        <p className="mt-6 text-parchment/80 max-w-2xl mx-auto text-base sm:text-lg">
          A curated selection of fine-line pieces, minimalist script, delicate florals, and micro-realism portraits. Click any piece
          to view the detail.
        </p>
        <div className="slash-divider mt-8 max-w-md mx-auto">
          <span className="text-neon">✦</span>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {GALLERY.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`gallery-card aspect-square reveal ${i % 5 === 0 ? "md:col-span-2 md:row-span-2 md:aspect-auto" : ""}`}
              style={{ transitionDelay: `${(i % 10) * 40}ms` }}
              aria-label={`View ${g.title}`}
            >
              <img src={g.img} alt={g.title} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 z-[3] translate-y-2 opacity-0 group-hover:translate-y-0 hover:opacity-100 transition-all duration-300">
                <div className="text-[10px] tracking-[0.25em] uppercase text-neon-soft">{g.category}</div>
                <div className="text-sm font-display font-bold text-bone text-shadow-sm mt-1">{g.title}</div>
              </div>
              {/* Number corner */}
              <div className="absolute top-2 left-2 z-[3] text-[10px] tracking-[0.3em] text-neon-soft font-mono opacity-80">
                #{String(i + 1).padStart(2, "0")}
              </div>
              {/* Zoom icon */}
              <div className="absolute top-2 right-2 z-[3] w-7 h-7 rounded-full bg-ink/80 border border-neon/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <svg className="w-3.5 h-3.5 text-neon-soft" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                  <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-16 text-center reveal">
          <p className="text-parchment/80 mb-5">Like what you see? Let's create something uniquely yours.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 neon-btn text-white text-sm font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-sm"
          >
            Commission a Design
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] lightbox-backdrop flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-neon/50 text-neon-soft hover:bg-neon/10 transition-colors"
          >
            <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-neon/50 text-neon-soft hover:bg-neon/10 transition-colors items-center justify-center"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-neon/50 text-neon-soft hover:bg-neon/10 transition-colors items-center justify-center"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-4xl w-full aspect-square border border-neon/40 overflow-hidden neon-border">
              <img
                src={GALLERY[active].img}
                alt={GALLERY[active].title}
                className="w-full h-full object-contain bg-ink-deep"
              />
            </div>
            <div className="mt-5 text-center">
              <div className="text-[10px] tracking-[0.4em] uppercase text-neon-soft">{GALLERY[active].category}</div>
              <div className="font-display font-bold text-bone text-xl mt-1">{GALLERY[active].title}</div>
              <div className="text-ink-muted text-xs mt-2 font-mono">
                {active + 1} / {GALLERY.length} · Click outside or press ESC to close
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ===== CONTACT =====
function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-ink-deep overflow-hidden brick-bg grain-overlay">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="text-xs font-bold tracking-[0.5em] uppercase text-neon-soft mb-4">— Let's Talk —</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-bone leading-tight">
            Ready to Get <span className="neon-text">Inked?</span>
          </h2>
          <p className="mt-5 text-parchment/80 max-w-2xl mx-auto text-base sm:text-lg">
            Consultations are free. Share your idea, reference images, and placement — we'll craft a design that's uniquely yours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Info card */}
          <div className="reveal space-y-5">
            <InfoCard
              icon={<PhoneIcon />}
              tag="Click-to-Call"
              title="+91 91761 74774"
              subtitle="Available 11 AM – 9 PM IST"
              href="tel:+919176174774"
              cta="Call Now"
            />
            <InfoCard
              icon={<MailIcon />}
              tag="Studio Name"
              title="Urban Monk Tattoo Studio"
              subtitle="Custom tattooing · Free consultations"
              href="#contact"
              cta="Visit the Studio"
            />
            <InfoCard
              icon={<PinIcon />}
              tag="Address"
              title="368, Avvai Shanmugham Salai"
              subtitle="Marina Beach, Mylapore, Chennai, Tamil Nadu 600005, India"
              href="https://maps.google.com/?q=Mylapore+Chennai+600005"
              cta="Open in Google Maps"
            />
          </div>

          {/* Map placeholder */}
          <div className="relative reveal">
            <div className="absolute -inset-3 border border-neon/30 hidden md:block" />
            <div className="relative h-full min-h-[420px] map-placeholder border border-ink-border overflow-hidden">
              {/* "Map" content */}
              <div className="absolute inset-0 flex flex-col">
                {/* Top bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-ink-border bg-ink/60 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-neon-soft">Live Location</span>
                  </div>
                  <span className="text-[10px] text-ink-muted font-mono">CHENNAI · TN · IN</span>
                </div>

                {/* Grid / street lines */}
                <div className="relative flex-1">
                  {/* Street diagonals */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                    <path d="M0,120 L400,80" stroke="rgba(255,31,61,0.18)" strokeWidth="8" />
                    <path d="M80,0 L60,300" stroke="rgba(255,31,61,0.15)" strokeWidth="6" />
                    <path d="M280,0 L300,300" stroke="rgba(255,31,61,0.12)" strokeWidth="5" />
                    <path d="M0,220 L400,200" stroke="rgba(255,31,61,0.1)" strokeWidth="4" />
                    <path d="M0,40 L400,60" stroke="rgba(255,31,61,0.08)" strokeWidth="3" />
                  </svg>

                  {/* Landmark dots */}
                  {[
                    { x: "22%", y: "30%", label: "Marina Beach" },
                    { x: "70%", y: "25%", label: "Mylapore" },
                    { x: "18%", y: "75%", label: "T Nagar" },
                    { x: "75%", y: "72%", label: "Adyar" },
                  ].map((d) => (
                    <div key={d.label} className="absolute" style={{ left: d.x, top: d.y }}>
                      <div className="flex flex-col items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-soft shadow-[0_0_8px_rgba(255,31,61,0.8)]" />
                        <div className="text-[9px] tracking-widest uppercase text-parchment/50 mt-1">{d.label}</div>
                      </div>
                    </div>
                  ))}

                  {/* Main pin */}
                  <div className="absolute" style={{ left: "50%", top: "52%" }}>
                    <div className="pin-drop" style={{ position: "absolute", left: 0, top: 0 }}>
                      <svg width="36" height="48" viewBox="0 0 36 48">
                        <path
                          d="M18 2C9.16 2 2 9.16 2 18c0 13 16 28 16 28s16-15 16-28c0-8.84-7.16-16-16-16z"
                          fill="#ff1f3d"
                          stroke="#fff"
                          strokeWidth="1.5"
                          style={{ filter: "drop-shadow(0 4px 12px rgba(255,31,61,0.7))" }}
                        />
                        <circle cx="18" cy="18" r="5" fill="#fff" />
                      </svg>
                    </div>
                    <div className="absolute top-12 -translate-x-1/2 left-0 whitespace-nowrap">
                      <div className="bg-ink border border-neon/50 px-3 py-1.5">
                        <div className="text-[10px] tracking-[0.25em] uppercase text-neon-soft">You Are Here</div>
                        <div className="text-xs font-display font-bold text-bone">Urban Monk Studio</div>
                      </div>
                    </div>
                  </div>

                  {/* Pulse ring at pin */}
                  <div
                    className="absolute w-8 h-8 rounded-full border-2 border-neon/60 animate-pulse-ring"
                    style={{ left: "calc(50% - 16px)", top: "calc(52% - 16px)" }}
                  />
                </div>

                {/* Bottom CTA */}
                <div className="border-t border-ink-border p-5 bg-ink/80 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-neon-soft">Find Us</div>
                      <div className="text-sm text-bone font-medium mt-1">Mylapore, Chennai 600005</div>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Mylapore+Chennai+600005"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="neon-btn text-white text-xs font-bold tracking-[0.2em] uppercase px-5 py-3 rounded-sm whitespace-nowrap"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Big bottom CTA */}
        <div className="mt-20 relative reveal">
          <div className="relative border border-neon/40 bg-ink p-10 sm:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,31,61,0.15),transparent_70%)]" />
            <div className="relative">
              <div className="text-xs tracking-[0.4em] uppercase text-neon-soft mb-3">— Limited Slots Available —</div>
              <h3 className="font-display font-black text-3xl sm:text-5xl text-bone leading-tight">
                Your Story, <span className="neon-text animate-flicker">Permanent.</span>
              </h3>
              <p className="mt-5 text-parchment/80 max-w-xl mx-auto text-base sm:text-lg">
                Book a free consultation with Deva today. Walk-ins welcome, but appointments are preferred.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+919176174774"
                  className="neon-btn text-white text-sm font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-sm flex items-center gap-3"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Call +91 91761 74774
                </a>
                <a
                  href="https://maps.google.com/?q=Mylapore+Chennai+600005"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ghost-btn text-sm font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-sm"
                >
                  Visit the Studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  tag,
  title,
  subtitle,
  href,
  cta,
}: {
  icon: React.ReactNode;
  tag: string;
  title: string;
  subtitle: string;
  href: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer noopener"
      className="group relative block p-6 sm:p-8 bg-ink-panel border border-ink-border hover:border-neon/60 transition-all duration-300"
    >
      {/* corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-neon opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-neon opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-start gap-5">
        <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-ink-deep border border-neon/40 text-neon group-hover:neon-border transition-all">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] tracking-[0.3em] uppercase text-neon-soft mb-1">{tag}</div>
          <div className="font-display font-bold text-xl sm:text-2xl text-bone group-hover:text-neon-soft transition-colors leading-tight">
            {title}
          </div>
          <div className="text-sm text-parchment/70 mt-2 leading-relaxed">{subtitle}</div>
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-neon group-hover:gap-4 transition-all">
            {cta}
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C7.58 2 4 5.58 4 10c0 6 8 12 8 12s8-6 8-12c0-4.42-3.58-8-8-8z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

// ===== FOOTER =====
function Footer() {
  return (
    <footer className="relative bg-ink border-t border-neon/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12">
                <Logo />
              </div>
              <div>
                <div className="font-display font-bold text-lg tracking-[0.18em] text-bone">URBAN MONK</div>
                <div className="text-[10px] tracking-[0.4em] text-neon-soft uppercase">Tattoo Studio</div>
              </div>
            </div>
            <p className="text-parchment/70 text-sm leading-relaxed">
              Premium custom tattooing by Deva. Fine-line art, script, florals, and micro-realism. Chennai, India.
            </p>
          </div>
          <div>
            <div className="text-xs font-bold tracking-[0.3em] uppercase text-neon-soft mb-4">Navigate</div>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-parchment/80 hover:text-neon-soft text-sm transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold tracking-[0.3em] uppercase text-neon-soft mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-parchment/80">
              <li>
                <a href="tel:+919176174774" className="hover:text-neon-soft transition-colors">
                  +91 91761 74774
                </a>
              </li>
              <li className="leading-relaxed">
                368, Avvai Shanmugham Salai,<br />
                Marina Beach, Mylapore,<br />
                Chennai, Tamil Nadu 600005
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-ink-muted tracking-wider">
            © {new Date().getFullYear()} Urban Monk Tattoo Studio. All Rights Reserved.
          </div>
          <div className="text-xs text-ink-muted tracking-wider">
            Crafted with <span className="text-neon">♥</span> and ink in Chennai.
          </div>
        </div>
      </div>
    </footer>
  );
}

// ===== REVEAL ON SCROLL =====
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ===== APP =====
export default function App() {
  useReveal();
  return (
    <div className="relative min-h-screen bg-ink text-bone selection:bg-neon selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
