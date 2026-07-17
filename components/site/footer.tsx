import { Heart, Mail } from 'lucide-react'
import { navItems, profile } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from '@/components/site/brand-icons'

const socials = [
  { label: 'GitHub', href: profile.github, icon: GithubIcon },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-sm">
            <a href="#home" className="font-heading text-lg font-bold text-foreground">
              {profile.name}
            </a>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
              Designing and engineering warm, human-centered digital experiences — one thoughtful
              detail at a time.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
          <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. Built with
            <Heart className="h-3.5 w-3.5 text-accent" />
            and curiosity.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
