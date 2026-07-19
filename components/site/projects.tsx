'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, UserRound } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/site/section-heading'
import { Stagger, StaggerItem } from '@/components/site/reveal'
import { GithubIcon, FigmaIcon } from '@/components/site/brand-icons'

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work I'm proud of"
          description="A mix of educational tools, information systems, and client products — each built with care for both code and experience."
        />

        <Stagger className="mt-16 grid gap-7 md:grid-cols-2" staggerChildren={0.14}>
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface/80 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_28px_70px_rgb(46_42_38_/_0.16)]"
              >
                {/* Animated border glow */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition-colors duration-300 group-hover:ring-accent/40" />

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/12 px-3 py-1 text-xs font-medium text-accent">
                      <UserRound className="h-3.5 w-3.5" />
                      {project.role}
                    </span>
                  </div>

                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3 pt-2">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <GithubIcon className="h-4 w-4" />
                        Code
                      </a>
                    ) : null}
                    {project.figma ? (
                      <a
                        href={project.figma}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-[#A259FF] hover:text-[#A259FF]"
                      >
                        <FigmaIcon className="h-4 w-4" />
                        Figma
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
                      >
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
