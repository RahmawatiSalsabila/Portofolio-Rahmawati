'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certificates } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/site/section-heading'
import { Stagger, StaggerItem } from '@/components/site/reveal'

export function Certificates() {
  return (
    <section id="certificates" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certificates"
          title="Always learning, always growing"
          description="A selection of certifications from courses and workshops I've completed."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.1}>
          {certificates.map((cert) => (
            <StaggerItem key={cert.title}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                className="group h-full overflow-hidden rounded-3xl border border-border bg-surface/70 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_22px_60px_rgb(46_42_38_/_0.14)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={cert.image || '/placeholder.svg'}
                    alt={`${cert.title} certificate`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="flex items-start gap-3 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                    <Award className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-sm font-bold leading-snug text-foreground">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
