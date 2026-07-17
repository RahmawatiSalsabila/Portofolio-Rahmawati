'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { profile } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/site/section-heading'
import { Reveal } from '@/components/site/reveal'
import { GithubIcon, LinkedinIcon } from '@/components/site/brand-icons'

type Channel = {
  label: string
  value: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const channels: Channel[] = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'GitHub', value: '@salsabila-dev', href: profile.github, icon: GithubIcon },
  { label: 'LinkedIn', value: 'Salsabila Rahmawati', href: profile.linkedin, icon: LinkedinIcon },
]

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project, a research idea, or just want to say hello? My inbox is always open."
        />

        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-primary p-8 text-primary-foreground md:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-primary-foreground/10 blur-3xl"
            />

            <div className="relative">
              <h3 className="text-balance font-heading text-2xl font-bold md:text-3xl">
                Ready when you are.
              </h3>
              <p className="mt-3 max-w-lg text-pretty leading-relaxed text-primary-foreground/80">
                Whether it&apos;s a full-stack build, an educational tool, or a friendly chat about
                tech, reach out through any of the channels below.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {channels.map((channel) => (
                  <motion.a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="group flex flex-col gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-foreground/15">
                        <channel.icon className="h-5 w-5" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-primary-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-primary-foreground/60">
                        {channel.label}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-semibold">{channel.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:scale-[1.03] active:scale-95"
              >
                <Mail className="h-4 w-4" />
                Send me an email
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
