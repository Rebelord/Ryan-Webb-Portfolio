import Link from 'next/link';

type NextProjectProps = {
  eyebrow: string;
  href: string;
  title: string;
  summary: string;
  tone: 'blue' | 'ink';
};

export default function NextProject({
  eyebrow,
  href,
  title,
  summary,
  tone,
}: NextProjectProps) {
  return (
    <aside
      className={`next-project next-project--${tone} section-shell`}
      data-reveal="section"
    >
      <Link
        aria-label={`Next project: ${title}`}
        className="next-project-link"
        href={href}
      >
        <span className="next-project-eyebrow">{eyebrow}</span>
        <span className="next-project-title">{title}</span>
        <span className="next-project-summary">{summary}</span>
        <span aria-hidden="true" className="next-project-arrow">
          <span className="arrow diagonal">→</span>
        </span>
      </Link>
    </aside>
  );
}
