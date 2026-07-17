'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Mail, Sparkles } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { AnimatedBlobs } from '@/components/site/animated-blobs'
import { GithubIcon, LinkedinIcon } from '@/components/site/brand-icons'

const socials = [
  { label: 'GitHub', href: profile.github, icon: GithubIcon },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yText = useTransform(scrollYProgress, [0, 1], [0, 90])
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, 140])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <AnimatedBlobs />

      {/* Floating geometric shapes */}
      <motion.div
        aria-hidden="true"
        className="absolute left-[8%] top-[24%] h-16 w-16 rounded-2xl border border-border bg-surface/40 backdrop-blur-sm"
        animate={{ y: [0, -22, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[12%] top-[62%] h-10 w-10 rounded-full border border-accent/40 bg-accent/10"
        animate={{ y: [0, 18, 0], x: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[22%] top-[20%] h-6 w-6 rotate-45 rounded-md bg-primary/15"
        animate={{ y: [0, -16, 0], rotate: [45, 90, 45] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div style={{ y: yText, opacity }} className="order-2 md:order-1">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Available for freelance & collaborations
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {profile.name.split(' ')[0]}.
            <span className="mt-2 block text-primary">
              I build thoughtful software.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {profile.shortIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_rgb(107_91_77_/_0.35)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              Explore My Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface/60 text-muted-foreground backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          style={{ y: yPhoto, opacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            <motion.div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent/30 via-secondary/40 to-primary/20 blur-2xl"
              animate={{ scale: [1, 1.08, 1], rotate: [0, 20, 0] }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-surface shadow-[0_20px_60px_rgb(46_42_38_/_0.18)] sm:h-80 sm:w-80">
              <Image
                src="/profile.png"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 640px) 16rem, 20rem"
                className="object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-3 -left-3 flex items-center gap-2 rounded-2xl border border-border bg-surface/90 px-4 py-2.5 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-foreground">Open to work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
