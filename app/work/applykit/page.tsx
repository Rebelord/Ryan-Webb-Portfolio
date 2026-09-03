import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../../theme-toggle';

export const metadata: Metadata = {
  title: 'ApplyKit Case Study | Ryan Webb',
  description:
    'How Ryan Webb designed and built a calm, local-first macOS workflow for tracking applications, understanding fit, and keeping next steps visible.',
  alternates: { canonical: '/work/applykit/' },
  openGraph: {
    title: 'ApplyKit Case Study | Ryan Webb',
    description:
      'A native macOS product built around calm workflow, explainable scoring, and local data ownership.',
    url: '/work/applykit/',
    images: ['/projects/applykit/product-overview.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApplyKit Case Study | Ryan Webb',
    description:
      'A native macOS product built around calm workflow, explainable scoring, and local data ownership.',
    images: ['/projects/applykit/product-overview.webp'],
  },
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className={diagonal ? 'arrow diagonal' : 'arrow'}>
      →
    </span>
  );
}

const principles = [
  {
    title: 'Calm by default',
    copy: 'Show the next decision without turning the search into a dashboard of noise.',
  },
  {
    title: 'Local by design',
    copy: 'Keep the core tracker and search profile in readable files on the user’s Mac.',
  },
  {
    title: 'Explain the score',
    copy: 'Surface the evidence behind role fit instead of presenting an opaque ranking.',
  },
];

const applyKitStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://ryandwebb.com/work/applykit/#software',
  name: 'ApplyKit',
  url: 'https://ryandwebb.com/work/applykit/',
  description: 'A calm, local-first macOS application for tracking job applications, understanding role fit, and keeping next steps visible.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'macOS',
  softwareVersion: 'Working v1.0',
  author: {
    '@type': 'Person',
    '@id': 'https://ryandwebb.com/#person',
    name: 'Ryan Webb',
    url: 'https://ryandwebb.com/',
  },
  image: 'https://ryandwebb.com/projects/applykit/product-overview.webp',
  featureList: [
    'Local-first application tracking',
    'Explainable role-fit scoring',
    'Stage-aware interview workflows',
    'CSV and TSV import',
    'JSON backup and local data ownership',
  ],
};

export default function ApplyKitCaseStudy() {
  return (
    <main className="case-study case-study--applykit">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(applyKitStructuredData).replace(/</g, '\\u003c'),
        }}
      />
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

        <div className="header-actions">
          <ThemeToggle />
          <Link className="header-link" href="/#work">
            All work <Arrow diagonal />
          </Link>
        </div>
      </header>

      <article>
        <header className="case-hero section-shell">
          <p className="case-label">Independent product case study · Working v1.0</p>
          <div className="case-hero-grid">
            <div>
              <p className="eyebrow">Native macOS product · 2026</p>
              <h1>ApplyKit</h1>
            </div>
            <p className="case-deck">
              Turning a fragmented job search into a calm, local-first workflow.
              Designed and built to organize applications, explain role fit, and
              keep the next decision visible.
            </p>
          </div>

          <dl className="case-meta case-meta--balanced">
            <div><dt>Role &amp; responsibilities</dt><dd>Independent product designer and developer · Strategy, UI/UX, SwiftUI implementation, workflow design &amp; QA</dd></div>
            <div><dt>Timeline &amp; status</dt><dd>2026 · Working v1.0 · Active independent product</dd></div>
            <div><dt>Platform &amp; tools</dt><dd>Native macOS · SwiftUI · Figma · local Codable JSON</dd></div>
            <div><dt>Constraints &amp; validation</dt><dd>Private local data · Explainable scoring · Core tracker, imports, reminders, and stage-aware workflows implemented</dd></div>
          </dl>

          <figure className="case-hero-media applykit-media">
            <Image
              src="/projects/applykit/product-overview.webp"
              alt="ApplyKit shown in a desktop mockup with a selected product-design role, application details, and explainable fit analysis"
              width={1200}
              height={800}
              priority
              unoptimized
            />
            <figcaption>The refined ApplyKit workspace, presented with demonstration data rather than the private live tracker.</figcaption>
          </figure>
        </header>

        <section className="case-section section-shell case-overview" data-reveal="section">
          <div className="case-section-title">
            <p className="eyebrow">01 / Overview</p>
            <h2>One place for the evidence and the next action.</h2>
          </div>
          <div className="case-prose">
            <p className="case-lead">
              A serious job search rarely lives in one place. Listings collect in
              tabs, status updates drift into spreadsheets, and the reason one role
              looked promising gets harder to recover.
            </p>
            <p>
              ApplyKit brings saved roles, application state, descriptions, fit
              evidence, notes, follow-ups, and interview details into one native
              desktop workspace, without making a hosted account the center of the experience.
            </p>
          </div>
          <div className="case-gallery applykit-gallery applykit-onboarding-gallery" data-reveal="stagger">
            <figure>
              <Image
                src="/projects/applykit/welcome.webp"
                alt="ApplyKit welcome screen guiding a new user to set up the search profile used for fit scoring"
                width={1106}
                height={1201}
                unoptimized
              />
              <figcaption>The welcome state explains why a search profile matters before asking for setup.</figcaption>
            </figure>
            <figure>
              <Image
                src="/projects/applykit/empty-library.webp"
                alt="ApplyKit empty job library with options to import a job from a URL or create one manually"
                width={1106}
                height={1201}
                unoptimized
              />
              <figcaption>The empty library turns a blank workspace into two clear ways to add the first role.</figcaption>
            </figure>
          </div>
          <ol className="goal-grid">
            {principles.map((principle, index) => (
              <li key={principle.title}>
                <span>0{index + 1}</span>
                <p><strong>{principle.title}</strong>{principle.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-section case-section--ink applykit-score-section">
          <div className="section-shell" data-reveal="section">
            <div className="case-section-title">
              <p className="eyebrow">02 / Explainable fit</p>
              <h2>A score that shows its work.</h2>
            </div>
            <div className="case-prose">
              <p className="case-lead">
                Fit scores create false confidence when their inputs are hidden.
                ApplyKit uses a deterministic model built from the user’s own priorities.
              </p>
              <p>
                Target titles contribute 30 points, required terms 50, and preferred
                terms 20. Avoided terms subtract 10 points each, capped at 30. Matched,
                missing, and avoided terms stay visible so the score can be questioned.
              </p>
            </div>
            <div className="score-breakdown" aria-label="ApplyKit fit-score weighting">
              <div><strong>30</strong><span>Target titles</span></div>
              <div><strong>50</strong><span>Required terms</span></div>
              <div><strong>20</strong><span>Preferred terms</span></div>
              <div><strong>−30</strong><span>Maximum avoided-term penalty</span></div>
            </div>
            <figure className="qa-media applykit-media applykit-detail-media">
              <Image
                src="/projects/applykit/job-detail.webp"
                alt="ApplyKit job detail workspace showing a selected role, application fields, an 88-point fit score, and matched, missing, and avoided terms"
                width={1105}
                height={1201}
                unoptimized
              />
              <figcaption>The updated detail view keeps the fit result and the evidence behind it visible beside the working record.</figcaption>
            </figure>
          </div>
        </section>

        <section className="case-section section-shell decision-story" data-reveal="section">
          <div className="decision-copy">
            <p className="eyebrow">03 / Search profile</p>
            <h2>Make the model personal and inspectable.</h2>
            <p className="case-lead">
              The profile turns general matching into an explicit set of priorities.
            </p>
            <p>
              Titles and three groups of terms can be edited alongside salary,
              location, and remote preferences. The result supports judgment instead
              of pretending to replace it.
            </p>
            <div className="decision-note">
              <span>Product decision</span>
              Use scoring as traceable evidence, not as an automated verdict.
            </div>
          </div>
          <figure className="case-media applykit-media">
            <Image
              src="/projects/applykit/search-profile.webp"
              alt="ApplyKit Search Profile reference with target titles, required skills, preferred skills, avoided terms, salary, location, and remote preference"
              width={1100}
              height={1306}
              unoptimized
            />
            <figcaption>The search profile exposes the inputs behind every score.</figcaption>
          </figure>
        </section>

        <section className="results-strip section-shell" aria-label="ApplyKit system scope" data-reveal="stagger">
          <div><strong>5</strong><span>Application statuses</span></div>
          <div><strong>4</strong><span>Scoring signal groups</span></div>
          <div><strong>100</strong><span>Point score model</span></div>
          <div><strong>JSON</strong><span>Local data core</span></div>
        </section>

        <section className="case-section section-shell decision-story decision-story--reverse" data-reveal="section">
          <div className="decision-copy">
            <p className="eyebrow">04 / Stage-aware workflow</p>
            <h2>Reveal interview tools when they become useful.</h2>
            <p className="case-lead">
              Moving into an interview changes the information a person needs to see.
            </p>
            <p>
              Round, date and time, interviewers, interview type, and preparation notes
              appear in the job context at that stage. Follow-up and interview reminders
              remain attached to the same underlying record.
            </p>
            <div className="decision-note">
              <span>Outcome</span>
              Preparation stays with the role, its description, score evidence, and earlier notes.
            </div>
          </div>
          <figure className="case-media applykit-media">
            <Image
              src="/projects/applykit/interview-detail.webp"
              alt="ApplyKit job detail reference showing an Interview status with round, date, interviewers, type, and preparation notes using demonstration data"
              width={1100}
              height={1340}
              unoptimized
            />
            <figcaption>Stage-specific fields keep interview preparation in the application’s existing context.</figcaption>
          </figure>
        </section>

        <section className="case-section section-shell" data-reveal="section">
          <div className="gallery-heading">
            <div>
              <p className="eyebrow">05 / Scale &amp; portability</p>
              <h2>Start anywhere. Keep an exit path.</h2>
            </div>
            <p>
              Manual and URL-based entry support new roles. CSV and TSV import,
              duplicate handling, bulk status changes, CSV export, and JSON backup
              help an existing search move in, and let the data move back out.
            </p>
          </div>
          <div className="case-gallery applykit-gallery" data-reveal="stagger">
            <figure>
              <Image src="/projects/applykit/add-job.webp" alt="ApplyKit Add Job reference with role details, status, description, notes, and follow-up controls" width={1100} height={1306} unoptimized />
              <figcaption>Focused entry supports manual details alongside URL-based draft import.</figcaption>
            </figure>
            <figure>
              <Image src="/projects/applykit/bulk-selection.webp" alt="ApplyKit bulk-selection workspace summarizing three selected roles, their status mix, collective fit, and available actions" width={1200} height={880} unoptimized />
              <figcaption>The refined bulk view summarizes the selection before exposing changes across multiple records.</figcaption>
            </figure>
            <figure className="gallery-tall">
              <Image src="/projects/applykit/settings.webp" alt="ApplyKit Settings reference showing export, backup, import, reminder, appearance, and local-storage information" width={1200} height={990} unoptimized />
              <figcaption>Data controls make backup, migration, reminders, and local storage visible.</figcaption>
            </figure>
          </div>
        </section>

        <section className="case-section case-section--acid">
          <div className="section-shell case-closing" data-reveal="section">
            <div>
              <p className="eyebrow">Reflection</p>
              <h2>Clarity, explanation, ownership.</h2>
            </div>
            <div>
              <p className="case-lead">
                ApplyKit’s value comes less from adding another job board and more
                from keeping the evidence and next action for every opportunity intact.
              </p>
              <p>
                The core tracker uses local Codable JSON rather than a remote database.
                That choice reduces account and infrastructure complexity while matching
                the sensitive, personal nature of the work.
              </p>
              <div className="roadmap-card">
                <span>Next validation pass</span>
                <h3>Capture the implemented product</h3>
                <p>
                  Run the current project in full Xcode, replace design-reference
                  screens with sanitized build captures, and verify keyboard and
                  VoiceOver behavior before making broader quality claims.
                </p>
                <strong>Evidence first</strong>
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
