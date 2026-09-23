import { useEffect, useState } from 'react';
import Reveal from './Reveal.jsx';
import ScarfArt from './ScarfArt.jsx';
import { images, products, steps } from '../data.js';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <nav className="nav__links">
        <a href="#collection">Collection</a>
        <a href="#story">Story</a>
      </nav>
      <a href="#top" className="wordmark" aria-label="SAAZ home">SAAZ</a>
      <a href="#join" className="nav__cta">Join the drop</a>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__text">
        <p className="eyebrow hero__in" style={{ '--d': '100ms' }}>The first drop · Coming soon</p>
        <h1 className="hero__title hero__in" style={{ '--d': '250ms' }}>
          Jewelry for your bag, <em>inspired by India.</em>
        </h1>
        <p className="hero__lede hero__in" style={{ '--d': '450ms' }}>
          Silk, charms, and little pieces of home — reimagined for the bags you carry every day.
        </p>
        <a href="#join" className="btn hero__in" style={{ '--d': '600ms' }}>
          Join the first drop
        </a>
      </div>
      <div className="hero__media">
        <img
          src={images.hero}
          alt="A brown leather handbag styled with an ivory paisley silk twilly, gold beads, a red chili charm and a gold lotus charm."
        />
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="intro section">
      <Reveal className="intro__inner">
        <Ornament />
        <p className="intro__text">
          SAAZ turns the things we grew up around — a grandmother’s jhumkas, block-printed borders,
          jasmine in the hair, a chili hung for luck — into small, considered pieces for the bag you
          carry every day.
        </p>
        <p className="eyebrow">Silk twillies · Curated charms · Antique gold</p>
      </Reveal>
    </section>
  );
}

export function Collection() {
  return (
    <section className="collection section" id="collection">
      <Reveal className="section__head">
        <p className="eyebrow">Collection 01</p>
        <h2 className="section__title">The first pairings</h2>
      </Reveal>
      <div className="collection__grid">
        {products.map((p, i) => (
          <Reveal as="article" className="card" delay={i * 120} key={p.name}>
            <div className="card__media">
              <ScarfArt scarf={p.scarf} charms={p.charms} title={`${p.name} scarf and charm illustration`} />
              <span className="card__tag">Coming soon</span>
            </div>
            <h3 className="card__name">{p.name}</h3>
            <p className="card__note">{p.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const stepIcons = {
  scarf: (
    <path d="M24 8c-6 0-8 4-8 7 0 4 3 6 8 6s8-2 8-6c0-3-2-7-8-7Zm-3 13L12 42l6-3M27 21l9 21-6-3" />
  ),
  charms: (
    <>
      <circle cx="24" cy="10" r="4" />
      <path d="M24 14v8M16 24l8-2 8 2M16 24v6M32 24v6" />
      <circle cx="16" cy="33" r="3" />
      <path d="M32 30c3 3 3 9 0 12-3-3-3-9 0-12Z" />
    </>
  ),
  clip: (
    <>
      <circle cx="24" cy="16" r="9" />
      <path d="M24 25v6M18 36h12M12 42h24" />
    </>
  ),
};

export function HowItWorks() {
  return (
    <section className="how section">
      <Reveal className="section__head">
        <p className="eyebrow">How it works</p>
        <h2 className="section__title">Composed, not assembled</h2>
        <p className="section__sub">
          This isn’t a charm bar. Every scarf is paired with its charms in the studio, so each piece
          arrives finished — balanced in colour, weight and meaning.
        </p>
      </Reveal>
      <ol className="how__steps">
        {steps.map((s, i) => (
          <Reveal as="li" className="step" delay={i * 140} key={s.title}>
            <svg viewBox="0 0 48 48" className="step__icon" aria-hidden="true">
              {stepIcons[s.icon]}
            </svg>
            <span className="step__num">{['I', 'II', 'III'][i]}</span>
            <h3 className="step__title">{s.title}</h3>
            <p className="step__text">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function Story() {
  return (
    <section className="story" id="story">
      <Reveal className="story__media">
        <img src={images.detail} alt="A burgundy paisley silk twilly tied to a brown handbag with gold ghungroo bells, a lotus charm and a pearl-and-coin tassel." />
      </Reveal>
      <Reveal className="story__text" delay={150}>
        <p className="eyebrow">Our story</p>
        <h2 className="section__title">Heritage, worn lightly</h2>
        <p>
          We grew up between two wardrobes — the one saved for weddings and festivals, and the one we
          actually lived in. SAAZ is our way of bringing the first into the second.
        </p>
        <p>
          Not a costume, not a souvenir. Just a little piece of home, tied to the bag you take
          everywhere — quiet enough for Tuesday, meaningful enough to keep.
        </p>
      </Reveal>
    </section>
  );
}

export function Signup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | done

  const onSubmit = (e) => {
    e.preventDefault();
    // Placeholder: connect to Mailchimp, Klaviyo, ConvertKit, a Google Form, etc.
    console.info('SAAZ signup:', email);
    setStatus('done');
  };

  return (
    <section className="signup" id="join">
      <Reveal className="signup__inner">
        <Ornament light />
        <h2 className="signup__title">Be first to see the drop.</h2>
        <p className="signup__sub">A small first edition. Early access, and nothing else in your inbox.</p>
        {status === 'done' ? (
          <p className="signup__thanks">Thank you — you’re on the list.</p>
        ) : (
          <form className="signup__form" onSubmit={onSubmit}>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn--light">Join</button>
          </form>
        )}
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <span className="wordmark">SAAZ</span>
      <nav className="footer__social">
        <a href="#" aria-label="SAAZ on Instagram">Instagram</a>
        <a href="#" aria-label="SAAZ on TikTok">TikTok</a>
      </nav>
      <p className="footer__copy">© {new Date().getFullYear()} SAAZ. All rights reserved.</p>
    </footer>
  );
}

function Ornament({ light = false }) {
  return (
    <svg viewBox="0 0 120 20" className={`ornament ${light ? 'ornament--light' : ''}`} aria-hidden="true">
      <path d="M0 10h44M76 10h44" />
      <path d="M60 2c5 3 6 9 0 16-6-7-5-13 0-16Z" />
      <circle cx="50" cy="10" r="1.5" />
      <circle cx="70" cy="10" r="1.5" />
    </svg>
  );
}
