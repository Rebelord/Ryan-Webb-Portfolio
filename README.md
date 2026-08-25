# Ryan Webb Portfolio

A multi-route React and TypeScript portfolio built with standard Next.js. The
production build is a static export, so it can be hosted by Porkbun or any other
provider that serves HTML, CSS, and JavaScript.

## Personalize before sharing widely

- Replace the generic LinkedIn and GitHub URLs in `app/page.tsx` with profile URLs.
- Configure `hello@ryandwebb.com` as a Porkbun mailbox or email forward.
- Replace the Rebelord Media and Portfolio v1 descriptions with final case-study copy and destination URLs.
- Add a real résumé PDF to `public/resume.pdf`, then change the résumé link back to `/resume.pdf`.

## Local development

```bash
pnpm dev
```

## Production build

```bash
pnpm build
```

The deployable site is generated in `out/`. Upload the contents of that folder
to a static host or connect it to an automated deployment workflow.

Set `NEXT_PUBLIC_SITE_URL` to the final `https://` domain during the build so
canonical links and social-sharing images use the production address. Until a
domain is selected, metadata falls back to `https://ryandwebb.com`.

## Hosting profile

- Static output with no Cloudflare, Vercel, or IONOS runtime dependency
- Directory-style routes for `/work/applykit/` and `/work/the-chosen-quest/`
- No database, server functions, authentication, or provider-specific storage
- Compatible with Porkbun Static Hosting, GitHub Pages, Netlify, Cloudflare
  Pages, and ordinary Apache or Nginx web hosting

## Porkbun deployment

The GitHub Actions workflow in `.github/workflows/publish-porkbun.yml` runs on
every push to `main`. It builds the site and force-publishes only the contents
of `out/` to the `porkbun` branch.

In Porkbun GitHub Connect, choose:

- Repository: `Rebelord/Ryan-Webb-Portfolio`
- Branch: `porkbun`

Keep development work on `main`. Do not connect Porkbun directly to `main`,
because that branch contains the source code rather than the generated site.
