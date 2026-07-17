'use client'

import { motion } from 'framer-motion'
import { Briefcase, CalendarDays, Laptop, Mic, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { experiences } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/site/section-heading'
import { Stagger, StaggerItem } from '@/components/site/reveal'

const typeIcons: Record<string, LucideIcon> = {
  Internship: Briefcase,
  Freelance: Laptop,
  Organization: Users,
  Event: Mic,
}

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="The journey so far"
          description="Roles and moments that shaped how I build and collaborate."
        />

        <div className="relative mt-16">
          <span
            aria-hidden="true"
            className="absolute left-5 top-2 bottom-2 w-px bg-border"
          />

          <Stagger className="flex flex-col gap-8" staggerChildren={0.14}>
            {experiences.map((exp) => {
              const Icon = typeIcons[exp.type] ?? Briefcase
              return (
                <StaggerItem key={`${exp.role}-${exp.organization}`}>
                  <div className="relative pl-16">
                    <motion.span
                      aria-hidden="true"
                      whileHover={{ scale: 1.1 }}
                      className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-2xl border border-border bg-surface text-accent shadow-sm"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.span>

                    <motion.article
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                      className="rounded-3xl border border-border bg-surface/70 p-6 backdrop-blur-sm transition-shadow hover:shadow-[0_16px_44px_rgb(46_42_38_/_0.1)]"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="font-heading text-lg font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/12 px-3 py-1 text-xs font-medium text-accent">
                          {exp.type}
                        </span>
                      </div>
                      <p className="mt-1 font-medium text-primary">{exp.organization}</p>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {exp.period}
                      </p>
                      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>
                    </motion.article>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
