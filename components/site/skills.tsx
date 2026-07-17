'use client'

import { motion } from 'framer-motion'
import { Boxes, Code2, Database, Layout, Server, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { skillCategories } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/site/section-heading'
import { Stagger, StaggerItem } from '@/components/site/reveal'

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
}

const skillIcons: Record<string, LucideIcon> = {
  HTML: Code2,
  CSS: Code2,
  JavaScript: Code2,
  'Tailwind CSS': Layout,
  Bootstrap: Layout,
  PHP: Server,
  Laravel: Server,
  MySQL: Database,
  Git: Boxes,
  GitHub: Boxes,
  'VS Code': Code2,
  Figma: Layout,
  XAMPP: Wrench,
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to bring ideas to life"
          description="A focused toolkit spanning the full stack — from pixel-perfect interfaces to reliable back-end systems."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.title] ?? Code2
            return (
              <StaggerItem key={category.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group h-full rounded-3xl border border-border bg-surface/70 p-6 backdrop-blur-sm transition-shadow hover:shadow-[0_18px_50px_rgb(46_42_38_/_0.1)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="mt-6 flex flex-col gap-2.5">
                    {category.skills.map((skill) => {
                      const SkillIcon = skillIcons[skill] ?? Code2
                      return (
                        <li
                          key={skill}
                          className="flex items-center gap-2.5 rounded-xl border border-transparent bg-background/50 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
                        >
                          <SkillIcon className="h-4 w-4 text-accent" />
                          {skill}
                        </li>
                      )
                    })}
                  </ul>
                </motion.div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
