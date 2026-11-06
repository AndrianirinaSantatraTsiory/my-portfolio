import { useEffect, useRef, useState, type ReactNode } from "react";
import { profile, experiences, skills, stack, projects, education, languages, services, logos } from "./data";

/* Apparition au scroll, utilisée seulement pour les blocs de contenu */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${seen ? "in" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* Le moment fort : une classe Java qui s'écrit sous les yeux du visiteur */
const CODE = `public class Developer {
  String name  = "Santatra Tsiory";
  String city  = "Antananarivo";
  String[] stack = {
    "Java", "Spring Boot",
    "Python", "PostgreSQL"
  };

  boolean solvesProblems() {
    return true; // CodinGame
  }
}`;

function CodeCard() {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(CODE.length); return; }
    const id = setInterval(() => setN((v) => (v < CODE.length ? v + 1 : v)), 28);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="code" aria-label="Extrait de code Java décrivant le développeur">
      <div className="code-bar"><i /><i /><i /><span>Developer.java</span></div>
      <pre>{CODE.slice(0, n)}<b className="caret" /></pre>
    </div>
  );
}

/* Logo techno avec repli sur une pastille d'initiales */
function Logo({ name, size = 28 }: { name: string; size?: number }) {
  const [bad, setBad] = useState(!logos[name]);
  if (bad) {
    const ini = name.split(" ").map((w) => w[0]).join("").slice(0, 2);
    return <span className="logo-fallback" style={{ width: size, height: size, fontSize: size * 0.4 }}>{ini}</span>;
  }
  return <img src={logos[name]} alt="" width={size} height={size} loading="lazy" onError={() => setBad(true)} />;
}

/* Aperçus d'interface improvisés : remplacez-les par vos captures via "image" dans data.ts */
function Mockup({ variant, image, name }: { variant: string; image: string; name: string }) {
  if (image) return <div className="shot"><img src={image} alt={`Aperçu de ${name}`} loading="lazy" /></div>;
  return (
    <div className={`shot mock ${variant}`} role="img" aria-label={`Aperçu improvisé de ${name}`}>
      <div className="mock-bar"><i /><i /><i /></div>
      {variant === "chat" && (<div className="mock-body"><p className="b l" /><p className="b r" /><p className="b l s" /><p className="b r s" /><div className="input" /></div>)}
      {variant === "phone" && (<div className="mock-body"><div className="phone"><span /><span /><span /><span className="btnx" /></div></div>)}
      {variant === "report" && (<div className="mock-body grid">{Array.from({ length: 18 }, (_, i) => <span key={i} className={i < 3 ? "h" : ""} />)}</div>)}
      {variant === "stock" && (<div className="mock-body"><div className="bars">{[60, 85, 40, 95, 70].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div></div>)}
    </div>
  );
}

type Status = "idle" | "sending" | "sent" | "error";
function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const id = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
    if (!id) { // Sans service configuré : ouvre le client mail avec le message prérempli
      const body = `${d.message}\n\n${d.firstName} ${d.lastName} (${d.email})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
      return;
    }
    setStatus("sending");
    try {
      const r = await fetch(`https://formspree.io/f/${id}`, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
      if (!r.ok) throw new Error();
      setStatus("sent"); form.reset();
    } catch { setStatus("error"); }
  };
  return (
    <form className="form" onSubmit={submit}>
      <label>Prénom<input name="firstName" required autoComplete="given-name" /></label>
      <label>Nom<input name="lastName" required autoComplete="family-name" /></label>
      <label className="wide">E-mail<input name="email" type="email" required autoComplete="email" /></label>
      <label className="wide">Sujet<input name="subject" required /></label>
      <label className="wide">Message<textarea name="message" rows={5} required /></label>
      <button className="btn primary wide" disabled={status === "sending"}>{status === "sending" ? "Envoi en cours" : "Envoyer le message"}</button>
      <p className="wide status" role="status">
        {status === "sent" && "Message envoyé. Je vous réponds très vite."}
        {status === "error" && "L'envoi a échoué. Réessayez ou écrivez-moi directement par e-mail."}
      </p>
    </form>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <Reveal><h2>{title}</h2></Reveal>
      {children}
    </section>
  );
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="skill">
      <div className="skill-head"><span className="sk-name"><Logo name={name} size={22} />{name}</span><span>{level}%</span></div>
      <div className="track"><div className="fill" style={{ width: seen ? `${level}%` : "0%", transitionDelay: `${delay}ms` }} /></div>
    </div>
  );
}

export default function App() {
  const glow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: PointerEvent) => {
      glow.current?.style.setProperty("--x", `${e.clientX}px`);
      glow.current?.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="glow" ref={glow} aria-hidden="true" />
      <header className="nav">
        <a href="#top" className="logo">ST.</a>
        <button className="burger" aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
        <nav className={open ? "open" : ""} onClick={() => setOpen(false)}>
          <a href="#apropos">À propos</a>
          <a href="#services">Services</a>
          <a href="#experiences">Expériences</a>
          <a href="#competences">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#contact" className="pill">Me contacter</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <p className="hello">Bonjour, je suis</p>
            <h1>
              <span className="line l1">{profile.firstName}</span>
              <span className="line l2">{profile.lastName}</span>
            </h1>
            <p className="role">{profile.role}</p>
            <p className="lead">Je conçois des API Java robustes et j'automatise les données pour qu'elles servent à décider.</p>
            <div className="cta">
              <a className="btn primary" href="#projets">Voir mes projets</a>
              <a className="btn" href={profile.cv} download>Télécharger mon CV</a>
            </div>
          </div>
          <div className="hero-side">
            <div className="photo">
              <img src="/photo.png" alt="Portrait de Santatra Tsiory Andrianirina" width={270} height={270} />
            </div>
            <CodeCard />
          </div>
        </section>

        <Section id="apropos" title="À propos">
          <Reveal delay={80}><p className="about">{profile.about}</p></Reveal>
          <Reveal delay={160}>
            <div className="chips">
              {languages.map((l) => (
                <div key={l.name} className="lang">
                  <span>{l.name}</span>
                  <span className="dots" aria-label={`${l.level} sur 5`}>
                    {Array.from({ length: 5 }, (_, i) => <i key={i} className={i < l.level ? "on" : ""} />)}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>

        <Section id="services" title="Services">
          <div className="services">
            {services.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <article className="service">
                  <Logo name={v.icon} size={40} />
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                  <a href="#contact">Me contacter</a>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="experiences" title="Expériences">
          <ol className="timeline">
            {experiences.map((x, i) => (
              <li key={x.org}>
                <Reveal delay={i * 70}>
                  <p className="period">{x.period}</p>
                  <h3>{x.title} <span>chez {x.org}</span></h3>
                  <p>{x.text}</p>
                  <div className="tags">{x.tags.map((t) => <em key={t}>{t}</em>)}</div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="competences" title="Compétences">
          <div className="skills-grid">
            <div>{skills.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 120} />)}</div>
            <div className="stack">
              {stack.map((g) => (
                <Reveal key={g.label}>
                  <h3>{g.label}</h3>
                  <div className="tags">{g.items.map((t) => <em key={t}><Logo name={t} size={16} />{t}</em>)}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section id="projets" title="Projets">
          <div className="projects">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <article className="project">
                  <Mockup variant={p.variant} image={p.image} name={p.name} />
                  <p className="meta">{p.org}, {p.year}</p>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                  <div className="tags">{p.tags.map((t) => <em key={t}>{t}</em>)}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="formation" title="Formation et certifications">
          <ul className="edu">
            {education.map((e, i) => (
              <li key={e.title}>
                <Reveal delay={i * 60}>
                  <span className="year">{e.year}</span>
                  <div>
                    <h3>{e.link ? <a href={e.link} target="_blank" rel="noreferrer">{e.title}</a> : e.title}</h3>
                    <p>{e.where}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Travaillons ensemble">
          <div className="contact">
            <Reveal>
              <p className="about">Un projet, une mission ou une question ? Écrivez-moi, je réponds rapidement.</p>
              <ul className="info">
                <li><b>E-mail</b><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
                <li><b>Téléphone</b><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
                <li><b>Adresse</b>{profile.city}</li>
              </ul>
              <a className="btn" href={profile.cv} download>Télécharger mon CV</a>
            </Reveal>
            <Reveal delay={100}><ContactForm /></Reveal>
          </div>
        </Section>
      </main>

      <footer className="foot">
        <div className="foot-grid">
          <div><a href="#top" className="logo">ST.</a><p>{profile.role}<br />{profile.city}</p></div>
          <div><h4>Menu</h4><a href="#apropos">À propos</a><a href="#experiences">Expériences</a><a href="#projets">Projets</a><a href="#contact">Contact</a></div>
          <div><h4>Réseaux</h4><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.kaggle} target="_blank" rel="noreferrer">Kaggle</a><a href={profile.codingame} target="_blank" rel="noreferrer">CodinGame</a></div>
          <div><h4>Ressources</h4><a href={profile.cv} download>Télécharger mon CV</a></div>
        </div>
        <p className="copy">© {new Date().getFullYear()} {profile.firstName} {profile.lastName}. Tous droits réservés.</p>
      </footer>
    </>
  );
}
