const projects = [
  {
    number: '01',
    title: 'ApplyKit',
    category: 'macOS app · SwiftUI',
    description:
      'A private, local-first job application tracker with explainable role-fit scoring and a calm native interface.',
    accent: 'project-blue',
  },
  {
    number: '02',
    title: 'Rebelord Media',
    category: 'Independent practice · Digital',
    description:
      'An evolving creative practice for thoughtful brands, useful products, and experiments across the web.',
    accent: 'project-lime',
  },
  {
    number: '03',
    title: 'Portfolio v1',
    category: 'Web design · React',
    description:
      'A focused portfolio built from scratch to document the work, the thinking, and the progress behind it.',
    accent: 'project-coral',
  },
];

const experience = [
  {
    period: 'Now',
    title: 'Building in public',
    detail: 'React, TypeScript, product design, and small useful tools.',
  },
  {
    period: 'Ongoing',
    title: 'Independent creative work',
    detail: 'Brand thinking, digital experiences, and visual communication.',
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className={diagonal ? 'arrow diagonal' : 'arrow'}>
      →
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ryan Webb, home">
          <span className="brand-mark">RW</span>
          <span>Ryan Webb</span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-link" href="#contact">
          Let&apos;s talk <Arrow diagonal />
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-kicker">
          <span className="status-dot" />
          Available for thoughtful work
        </div>

        <h1>
          I design thoughtful digital experiences <em>and build them.</em>
        </h1>

        <div className="hero-footer">
          <p>
            Designer and emerging React developer focused on clear ideas,
            useful products, and details that make the web feel human.
          </p>
          <a className="circle-link" href="#work" aria-label="See selected work">
            <Arrow />
          </a>
        </div>

        <div className="hero-object" aria-hidden="true">
          <div className="object-label">DESIGN / CODE / CURIOSITY</div>
          <div className="object-orbit orbit-one" />
          <div className="object-orbit orbit-two" />
          <div className="object-core">
            <span>RW</span>
          </div>
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>A few things I&apos;ve been making.</h2>
          <p className="section-count">(03 projects)</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className={`project-visual ${project.accent}`}>
                <span className="project-number">{project.number}</span>
                <div className="project-window">
                  <div className="window-bar"><i /><i /><i /></div>
                  <div className="window-content"><span /><span /><span /></div>
                </div>
                <div className="project-stamp">CASE STUDY</div>
              </div>

              <div className="project-copy">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#contact" aria-label={`Ask Ryan about ${project.title}`}>
                  View project <Arrow diagonal />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-intro">
          <p className="eyebrow">A little about me</p>
          <h2>Curious by default. <em>Always learning.</em></h2>
        </div>

        <div className="about-grid">
          <div className="portrait-card" aria-hidden="true">
            <div className="portrait-monogram">R</div>
            <p>Make it clear.<br />Make it useful.<br />Make it yours.</p>
          </div>

          <div className="about-copy">
            <p className="about-lead">
              I&apos;m Ryan—a multidisciplinary creative sharpening my skills in
              React and TypeScript while making practical digital products.
            </p>
            <p>
              My best work lives where design and development overlap: a strong
              idea, a clean system, and enough personality to be remembered.
              I care about craft, plain language, and leaving things better than
              I found them.
            </p>

            <div className="experience-list">
              {experience.map((item) => (
                <div className="experience-row" key={item.title}>
                  <span>{item.period}</span>
                  <div><h3>{item.title}</h3><p>{item.detail}</p></div>
                </div>
              ))}
            </div>

            <a className="text-link" href="#contact">
              Request full résumé <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>Let&apos;s make something <em>worth sharing.</em></h2>
        <a className="contact-button" href="mailto:hello@ryanwebb.dev">
          Start a conversation <Arrow diagonal />
        </a>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">RW</span><span>Ryan Webb</span>
        </a>
        <p>Designing, building, and learning.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Ryan Webb</p>
      </footer>
    </main>
  );
}
