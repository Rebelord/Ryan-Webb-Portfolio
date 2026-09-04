import Image from 'next/image';
import ThemeToggle from './theme-toggle';

const clientSites = [
  { number: '01', title: 'Keim Financial Group', category: 'Financial planning', url: 'https://www.keimfinancialgroup.com/', image: '/projects/client-sites/keim-financial-group.webp', alt: 'Sailboat crossing bright blue water, imagery featured by Keim Financial Group', width: 1200, height: 387 },
  { number: '02', title: 'Diversified Wealth Management', category: 'Wealth management', url: 'https://www.diversifiedwealthmanagement.com/', image: '/projects/client-sites/diversified-wealth-management.webp', alt: 'Autumn shoreline and lake landscape featured by Diversified Wealth Management', width: 1200, height: 801 },
  { number: '03', title: 'Bowen Financial Group', category: 'Financial services', url: 'https://www.bowenfg.com/', image: '/projects/client-sites/bowen-financial-group.webp', alt: 'Family gathered together at home, imagery featured by Bowen Financial Group', width: 1200, height: 679 },
  { number: '04', title: 'OsteoStrong Tustin', category: 'Health & wellness', url: 'https://osteostrongtustin.com/', image: '/projects/client-sites/osteostrong-tustin.webp', alt: 'OsteoStrong Tustin lobby and training space', width: 1200, height: 900 },
  { number: '05', title: 'Jaime’s Plumbing', category: 'Home services', url: 'https://jaimesplumbingpro.com/', image: '/projects/client-sites/jaimes-plumbing.webp', alt: 'Plumbing tools and fixtures featured by Jaime’s Plumbing', width: 1200, height: 800 },
  { number: '06', title: 'Water of Texas', category: 'Water systems', url: 'https://wateroftexas.com/', image: '/projects/client-sites/water-of-texas.webp', alt: 'Water of Texas technicians beside a residential water-treatment installation', width: 725, height: 408 },
];

const archiveDesigns = [
  {
    title: 'OsteoStrong',
    description: 'A local studio concept designed to explain unfamiliar bone-strengthening modalities and encourage visitors to book a free session.',
    image: '/projects/osteostrong.webp',
    tone: 'archive-gold',
    width: 527,
    height: 1800,
  },
  {
    title: 'Woof Houze',
    description: 'A friendly service-site concept for a humane, fear-free canine training and wellness business.',
    image: '/projects/woof-houze.webp',
    tone: 'archive-red',
    width: 570,
    height: 1800,
  },
  {
    title: 'All Season Adventures',
    description: 'An energetic booking concept for Colorado ATV, UTV, and snowmobile rentals and guided tours.',
    image: '/projects/all-season-adventures.webp',
    tone: 'archive-orange',
    width: 560,
    height: 1800,
  },
  {
    title: 'EV Charging OC',
    description: 'A local-service concept designed to build trust and generate estimates for residential EV charger installation in Orange County.',
    image: '/projects/ev-charging-oc.webp',
    tone: 'archive-blue',
    width: 606,
    height: 1800,
  },
];

const experience = [
  {
    period: 'Current',
    title: 'React & TypeScript development',
    detail: 'Building this portfolio and practical digital products in public.',
  },
  {
    period: 'Product',
    title: 'ApplyKit',
    detail: 'Product design and SwiftUI development for a local-first macOS app.',
  },
  {
    period: 'Client work',
    title: 'FMG & WebDigital Inc.',
    detail: 'Contributed to client website design and development across multiple industries.',
  },
];

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://ryandwebb.com/#person',
      name: 'Ryan Webb',
      url: 'https://ryandwebb.com/',
      image: 'https://ryandwebb.com/og.jpg',
      sameAs: [
        'https://www.linkedin.com/in/ryandwebb',
        'https://github.com/Rebelord',
      ],
      jobTitle: [
        'Design Engineer',
        'Senior UX/UI Designer',
        'Front-End Developer focused on UI and design systems',
      ],
      knowsAbout: [
        'Design engineering',
        'UX/UI design',
        'Product design',
        'Front-end development',
        'Design systems',
        'Responsive web design',
        'Accessibility',
        'React',
        'TypeScript',
        'Prototyping',
        'Information architecture',
        'Conversion-focused design',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://ryandwebb.com/#website',
      name: 'Ryan Webb Portfolio',
      url: 'https://ryandwebb.com/',
      description: 'Selected product, UX/UI design, and front-end development work by Ryan Webb.',
      creator: { '@id': 'https://ryandwebb.com/#person' },
      inLanguage: 'en-US',
    },
  ],
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData).replace(/</g, '\\u003c'),
        }}
      />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RW, Ryan Webb, home">
          <span className="brand-mark">RW</span>
          <span>Ryan Webb</span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <a className="header-link" href="#contact">
            Let&apos;s talk <Arrow diagonal />
          </a>
        </div>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-kicker">
          <span className="status-dot" />
          Designing connections that work
        </div>

        <h1>
          I design thoughtful digital experiences <em>and build them.</em>
        </h1>

        <div className="hero-footer">
          <p>
            Design engineer and senior UX/UI designer building thoughtful,
            accessible digital products with React, TypeScript, and front-end code.
          </p>
          <a className="circle-link" href="#work" aria-label="See selected work">
            <Arrow />
          </a>
        </div>

        <div className="hero-object" aria-hidden="true">
          <div className="object-label">DESIGN / CODE / CURIOSITY</div>
          <div className="object-axis object-axis-x" />
          <div className="object-axis object-axis-y" />
          <div className="object-orbit orbit-one" />
          <div className="object-orbit orbit-two" />
          <div className="object-orbit orbit-three" />
          <span className="object-node node-one" />
          <span className="object-node node-two" />
          <span className="object-node node-three" />
          <div className="object-core"><span>RW</span></div>
        </div>
      </section>

      <section className="practice section-shell" aria-labelledby="practice-title" data-reveal="section">
        <div className="practice-heading">
          <p className="eyebrow">What I do</p>
          <h2 id="practice-title">Bridge design intent and working front-end experiences.</h2>
        </div>
        <div className="practice-list">
          <article>
            <h3>Design engineering</h3>
            <p>I translate UX/UI and product design decisions into responsive, accessible interfaces using React, TypeScript, and front-end code.</p>
          </article>
          <article>
            <h3>Systems and structure</h3>
            <p>I create design systems, information architecture, and reusable patterns that keep products coherent from prototype through implementation.</p>
          </article>
          <article>
            <h3>Conversion-focused web design</h3>
            <p>I improve content hierarchy, interaction paths, and responsive behavior so digital experiences are clearer, more useful, and easier to act on.</p>
          </article>
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-heading" data-reveal="section">
          <p className="eyebrow">Selected work</p>
          <h2>Products, websites, and the thinking behind them.</h2>
          <p className="section-count">(08 selected projects)</p>
        </div>

        <article className="product-feature" data-reveal="section">
          <div className="product-visual product-visual--applykit">
            <Image
              src="/projects/applykit-overview.webp"
              alt="ApplyKit macOS workspace showing saved jobs, application details, and an explainable 88-point fit score"
              width={800}
              height={450}
              loading="lazy"
              unoptimized
            />
            <span className="project-number">01 / Owned product</span>
          </div>

          <div className="product-copy">
            <p className="project-category">Product design · SwiftUI · macOS</p>
            <h3>ApplyKit</h3>
            <p className="product-lead">A calmer way to run a job search.</p>
            <p>
              A private, local-first application tracker designed and built to
              save roles, understand fit, and keep every next step visible. The
              product pairs a native macOS interface with explainable scoring
              and a workflow built around real job-search decisions.
            </p>
            <ul className="project-tags" aria-label="ApplyKit capabilities">
              <li>Product strategy</li>
              <li>Interface design</li>
              <li>SwiftUI development</li>
            </ul>
            <a href="/work/applykit/">
              View the case study <Arrow diagonal />
            </a>
          </div>
        </article>

        <article className="product-feature product-feature--quest" data-reveal="section">
          <div className="product-copy">
            <p className="project-category">Product design · Java · AI-assisted development</p>
            <h3>The Chosen Quest</h3>
            <p className="product-lead">A classroom RPG, redesigned into a cohesive desktop experience.</p>
            <p>
              An active private-beta redesign combining gameplay systems, a
              modular fantasy interface, visual quality control, and release
              testing. The work explores how human product direction and
              AI-assisted implementation can stay accountable to clear design
              constraints.
            </p>
            <ul className="project-tags" aria-label="The Chosen Quest capabilities">
              <li>Product direction</li>
              <li>Interface systems</li>
              <li>AI workflow direction</li>
            </ul>
            <a href="/work/the-chosen-quest/">
              View the case study <Arrow diagonal />
            </a>
          </div>

          <div className="product-visual product-visual--quest">
            <Image
              src="/projects/the-chosen-quest/character-creation.webp"
              alt="The Chosen Quest character creation interface showing race, class, Combat Path, portrait, statistics, and equipment choices"
              width={800}
              height={500}
              loading="lazy"
              unoptimized
            />
            <span className="project-number">02 / Independent case study</span>
          </div>
        </article>

        <div className="client-intro" data-reveal="section">
          <div>
            <p className="eyebrow">Selected client websites</p>
            <h3>Work made in collaboration.</h3>
          </div>
          <p>
            I contributed to the design and development of these live client
            websites while working with FMG and WebDigital Inc. The collection
            spans financial services, wellness, home services, and regional
            businesses.
          </p>
        </div>

        <div className="client-grid" data-reveal="stagger">
          {clientSites.map((site) => (
            <a
              className="client-card"
              href={site.url}
              key={site.title}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${site.title}`}
            >
              <div className="client-card-media">
                <Image
                  src={site.image}
                  alt={site.alt}
                  width={site.width}
                  height={site.height}
                  loading="lazy"
                  unoptimized
                />
                <span className="client-number">{site.number}</span>
              </div>
              <div className="client-card-content">
                <p>{site.category}</p>
                <h4>{site.title}</h4>
                <span className="client-link">View live site <Arrow diagonal /></span>
              </div>
            </a>
          ))}
        </div>

        <div className="archive-intro" data-reveal="section">
          <div>
            <p className="eyebrow">From the design archive</p>
            <h3>Full-page concepts, gathered in Figma.</h3>
          </div>
          <a
            className="text-link archive-link"
            href="https://www.figma.com/design/wIHXSvOkLPGf4rNSIkFKiu/Example-Designs?node-id=0-1"
            target="_blank"
            rel="noreferrer"
          >
            Open the Figma collection <Arrow diagonal />
          </a>
        </div>

        <div className="archive-grid" data-reveal="stagger">
          {archiveDesigns.map((design, index) => (
            <figure className={`archive-card ${design.tone}`} key={design.title}>
              <div className="archive-browser">
                <div className="browser-bar" aria-hidden="true"><i /><i /><i /></div>
                <Image
                  src={design.image}
                  alt={`${design.title} website design`}
                  width={design.width}
                  height={design.height}
                  loading="lazy"
                  unoptimized
                />
              </div>
              <figcaption>
                <div className="archive-card-heading">
                  <span>0{index + 1}</span>
                  <strong>{design.title}</strong>
                </div>
                <p>{design.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-intro" data-reveal="section">
          <p className="eyebrow">A little about me</p>
          <h2>Curious by default. <em>Always learning.</em></h2>
        </div>

        <div className="about-grid" data-reveal="section">
          <div className="portrait-card" aria-hidden="true">
            <div className="portrait-monogram">R</div>
            <p>Make it clear.<br />Make it useful.<br />Make it yours.</p>
          </div>

          <div className="about-copy">
            <p className="about-lead">
              I&apos;m Ryan, a design engineer and senior UX/UI designer connecting
              product thinking, design systems, and front-end implementation.
            </p>
            <p>
              My work lives where design and development overlap: understanding
              the real problem, shaping a clear system, and giving the result
              enough personality to be remembered. I bring client website
              experience, hands-on product thinking, and a habit of learning by
              making.
            </p>

            <div className="experience-list">
              {experience.map((item) => (
                <div className="experience-row" key={item.title}>
                  <span>{item.period}</span>
                  <div><h3>{item.title}</h3><p>{item.detail}</p></div>
                </div>
              ))}
            </div>

            <div className="about-links">
              <a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">
                View résumé <Arrow diagonal />
              </a>
              <a className="text-link" href="mailto:hello@ryandwebb.com?subject=Detailed%20r%C3%A9sum%C3%A9%20request">
                Request detailed résumé <Arrow diagonal />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact" data-reveal="section">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>Let&apos;s make something <em>worth sharing.</em></h2>
        <p className="contact-availability">
          Open to full-time roles bridging UX/UI design and front-end
          development.
        </p>
        <a
          className="contact-button"
          href="mailto:hello@ryandwebb.com"
        >
          Email Ryan <Arrow diagonal />
        </a>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">RW</span><span>Ryan Webb</span>
        </a>
        <p>Designing, building, and learning.</p>
        <div className="social-links">
          <a href="mailto:hello@ryandwebb.com">Email <Arrow diagonal /></a>
          <a href="https://www.linkedin.com/in/ryandwebb" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
          <a href="https://github.com/Rebelord" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Ryan Webb</p>
      </footer>
    </main>
  );
}
