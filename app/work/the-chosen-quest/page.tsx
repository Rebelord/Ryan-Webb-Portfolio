import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Chosen Quest Case Study | Ryan Webb',
  description:
    'How Ryan Webb rebuilt a classroom RPG into a cohesive desktop experience through product direction, interface systems, testing, and accountable AI-assisted development.',
  openGraph: {
    title: 'The Chosen Quest Case Study | Ryan Webb',
    description:
      'A human-directed, AI-assisted redesign spanning gameplay systems, interface design, testing, and release preparation.',
    images: ['/projects/the-chosen-quest/title-screen.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Chosen Quest Case Study | Ryan Webb',
    description:
      'A human-directed, AI-assisted redesign spanning gameplay systems, interface design, testing, and release preparation.',
    images: ['/projects/the-chosen-quest/title-screen.png'],
  },
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className={diagonal ? 'arrow diagonal' : 'arrow'}>
      →
    </span>
  );
}

const goals = [
  'Make the game easier to understand and operate.',
  'Give the experience a recognizable visual identity.',
  'Improve functionality without losing testable behavior.',
];

const collaborationLoop = [
  'Audit',
  'Define constraints',
  'Explore options',
  'Choose a direction',
  'Implement',
  'Render & test',
  'Review',
  'Refine',
];

export default function TheChosenQuestCaseStudy() {
  return (
    <main className="case-study">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Ryan Webb, home">
          <span className="brand-mark">RW</span>
          <span>Ryan Webb</span>
        </Link>

        <nav aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <Link className="header-link" href="/#work">
          All work <Arrow diagonal />
        </Link>
      </header>

      <article>
        <header className="case-hero section-shell">
          <p className="case-label">AI collaboration case study · Active private beta</p>
          <div className="case-hero-grid">
            <div>
              <p className="eyebrow">Independent product · 2026</p>
              <h1>The Chosen Quest</h1>
            </div>
            <p className="case-deck">
              Rebuilding a classroom RPG into a cohesive desktop experience.
              A human-directed, AI-assisted redesign spanning gameplay systems,
              interface design, visual quality control, testing, and release preparation.
            </p>
          </div>

          <dl className="case-meta">
            <div><dt>Role</dt><dd>Product direction, UI/UX design, workflow direction, playtesting & QA</dd></div>
            <div><dt>Product</dt><dd>Desktop role-playing game</dd></div>
            <div><dt>Platform</dt><dd>Java desktop</dd></div>
            <div><dt>Status</dt><dd>Active private beta</dd></div>
          </dl>

          <figure className="case-hero-media">
            <Image
              src="/projects/the-chosen-quest/title-screen.png"
              alt="The Chosen Quest title over a dark fantasy mountain valley with new quest and load quest controls"
              width={1440}
              height={900}
              priority
              unoptimized
            />
            <figcaption>The Enhanced Edition establishes a painterly fantasy and restrained Art Deco direction.</figcaption>
          </figure>
        </header>

        <section className="case-section section-shell case-overview" data-reveal="section">
          <div className="case-section-title">
            <p className="eyebrow">01 / Overview</p>
            <h2>A visual refresh became a connected product effort.</h2>
          </div>
          <div className="case-prose">
            <p className="case-lead">
              The Chosen Quest began as a classroom console RPG. The Enhanced
              Edition asks what it takes to turn that foundation into a legible,
              atmospheric, and dependable desktop product without erasing the
              character of the original.
            </p>
            <p>
              Character choices needed to persist into exploration and combat.
              New artwork needed responsive framing. Gameplay changes needed
              repeatable validation. The interface, underlying rules, and review
              process had to evolve together.
            </p>
          </div>
          <ol className="goal-grid">
            {goals.map((goal, index) => (
              <li key={goal}><span>0{index + 1}</span><p>{goal}</p></li>
            ))}
          </ol>
        </section>

        <section className="case-section case-section--ink">
          <div className="section-shell case-process" data-reveal="section">
            <div className="case-section-title">
              <p className="eyebrow">02 / The collaboration model</p>
              <h2>AI increased execution capacity. Judgment stayed human.</h2>
            </div>
            <div className="case-prose">
              <p className="case-lead">
                Plausible output was never treated as finished output. Every change
                moved through a repeatable direction, implementation, and review loop.
              </p>
              <p>
                AI assisted with codebase analysis, option generation, implementation,
                test coverage, documentation, and selected visual production. I retained
                responsibility for the product intent: defining constraints, choosing
                tradeoffs, reviewing results, and deciding what was ready to keep.
              </p>
            </div>
            <ol className="process-loop" aria-label="Human and AI collaboration loop">
              {collaborationLoop.map((step, index) => (
                <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="case-section section-shell decision-story" data-reveal="section">
          <div className="decision-copy">
            <p className="eyebrow">03 / Character system</p>
            <h2>One system, not sixteen unrelated screens.</h2>
            <p className="case-lead">
              A neutral charcoal, parchment, and antique-gold shell holds stable
              geometry while class color and race heraldry behave as modular identity layers.
            </p>
            <p>
              The interface supports four races and four classes without sacrificing
              interaction states, contrast, or readability. Class identity leads;
              race ornament stays quieter; functional colors keep their established meanings.
            </p>
            <div className="decision-note">
              <span>Outcome</span>
              Character identity now follows the player into the hero rail, inventory,
              combat feedback, and outcome screens.
            </div>
          </div>
          <figure className="case-media">
            <Image
              src="/projects/the-chosen-quest/character-creation.png"
              alt="Character creation interface showing race and class choices, Combat Paths, portrait, meters, statistics, and equipment"
              width={1440}
              height={900}
              unoptimized
            />
            <figcaption>Race, class, Combat Path, portrait, and equipment information share one responsive system.</figcaption>
          </figure>
        </section>

        <section className="results-strip section-shell" aria-label="System scope" data-reveal="stagger">
          <div><strong>4</strong><span>Playable races</span></div>
          <div><strong>4</strong><span>Playable classes</span></div>
          <div><strong>16</strong><span>Supported race/class combinations</span></div>
          <div><strong>1</strong><span>Connected identity system</span></div>
        </section>

        <section className="case-section section-shell decision-story decision-story--reverse" data-reveal="section">
          <div className="decision-copy">
            <p className="eyebrow">04 / Gameplay systems</p>
            <h2>Turning class choice into a play style.</h2>
            <p className="case-lead">
              Combat Paths give each class two readable starting approaches while
              equipment can later unlock a different current style.
            </p>
            <p>
              The Rogue exploration established the model: compare equipment,
              action sequence, strength, and tradeoff instead of relying on flavor
              text alone. The player&apos;s origin remains visible even as their equipment changes.
            </p>
            <div className="decision-note">
              <span>Outcome</span>
              Path and style information persists through character creation,
              exploration, inventory, combat, saved games, and player-facing status.
            </div>
          </div>
          <figure className="case-media">
            <Image
              src="/projects/the-chosen-quest/rogue-combat-path-concept.png"
              alt="Art Deco concept comparing Rogue Assassin and Skirmisher combat paths through equipment, action loops, strengths, and tradeoffs"
              width={1672}
              height={941}
              unoptimized
            />
            <figcaption>The Rogue concept compares two starting identities through concrete play consequences.</figcaption>
          </figure>
        </section>

        <section className="case-section section-shell qa-story" data-reveal="section">
          <div className="case-section-title">
            <p className="eyebrow">05 / Quality process</p>
            <h2>Making polish testable.</h2>
          </div>
          <div className="case-prose">
            <p className="case-lead">
              A change was not complete because one screenshot looked right. It
              had to survive representative content, interaction states, target
              compositions, and gameplay behavior.
            </p>
            <p>
              Render checks cover representative screens and control states;
              deterministic simulations exercise combat builds; structured
              playtesting turns observations into durable backlog work. This
              separates visual confidence from behavioral confidence while requiring both.
            </p>
          </div>
          <figure className="qa-media">
            <Image
              src="/projects/the-chosen-quest/button-states.png"
              alt="Rendered matrix of fantasy interface button states used for visual quality checks"
              width={900}
              height={390}
              unoptimized
            />
            <figcaption>Interaction states were treated as a system and reviewed through visual regression output.</figcaption>
          </figure>
        </section>

        <section className="case-section section-shell" data-reveal="section">
          <div className="gallery-heading">
            <div>
              <p className="eyebrow">06 / Current experience</p>
              <h2>A connected fantasy interface.</h2>
            </div>
            <p>
              The current private beta brings character state, exploration,
              encounters, combat, inventory, commerce, save/load, audio, and
              release preparation into one visual system.
            </p>
          </div>
          <div className="case-gallery" data-reveal="stagger">
            <figure className="gallery-wide">
              <Image src="/projects/the-chosen-quest/exploration.png" alt="Fantasy RPG exploration interface with hero state, illustrated location, travel actions, and world map" width={1440} height={900} unoptimized />
              <figcaption>Exploration keeps hero state, location context, actions, and map information visible together.</figcaption>
            </figure>
            <figure className="gallery-wide">
              <Image src="/projects/the-chosen-quest/combat.png" alt="Combat interface featuring a shadow dragon, enemy information, player actions, battle log, hero rail, and map" width={1440} height={900} unoptimized />
              <figcaption>Combat combines illustrated encounters with readable threat, resource, action, and battle-log information.</figcaption>
            </figure>
            <figure className="gallery-tall">
              <Image src="/projects/the-chosen-quest/inventory.png" alt="Dark fantasy inventory listing equipment with path, style, gold, relic, and return controls" width={760} height={720} unoptimized />
              <figcaption>Inventory exposes origin path, current style, equipment state, relics, and actionable gear information.</figcaption>
            </figure>
          </div>
        </section>

        <section className="case-section case-section--acid">
          <div className="section-shell case-closing" data-reveal="section">
            <div>
              <p className="eyebrow">Reflection</p>
              <h2>Intent, implementation, evidence, revision.</h2>
            </div>
            <div>
              <p className="case-lead">
                The most important artifact is not a single generated screen or
                feature. It is the process that connects those four things.
              </p>
              <p>
                AI accelerated analysis and implementation, but it did not decide
                what made the product coherent. Strong constraints, durable
                documentation, automated checks, screenshots, and playtesting each
                caught a different class of problem.
              </p>
              <div className="roadmap-card">
                <span>Planned next</span>
                <h3>Playable browser comparison</h3>
                <p>
                  Separate Original and Enhanced editions are being prepared for a
                  guided comparison. They will remain unavailable until loading,
                  input, save/reset, and responsive behavior are validated.
                </p>
                <strong>Browser editions in development</strong>
              </div>
            </div>
          </div>
        </section>
      </article>

      <footer className="site-footer section-shell">
        <Link className="footer-brand" href="/">Ryan Webb</Link>
        <p>Designer and developer building thoughtful digital experiences.</p>
        <div className="social-links">
          <Link href="/#work">All work</Link>
          <a href="https://www.linkedin.com/in/ryandwebb" target="_blank" rel="noreferrer">LinkedIn</a>
          <Link href="/#contact">Contact</Link>
        </div>
        <p className="copyright">© 2026 Ryan Webb</p>
      </footer>
    </main>
  );
}
