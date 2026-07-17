'use client'

import { motion } from 'framer-motion'

type Blob = {
  className: string
  color: string
  duration: number
  delay?: number
}

const blobs: Blob[] = [
  {
    className: 'left-[-10%] top-[-8%] h-[38rem] w-[38rem]',
    color: 'color-mix(in oklab, var(--accent) 35%, transparent)',
    duration: 18,
  },
  {
    className: 'right-[-12%] top-[6%] h-[32rem] w-[32rem]',
    color: 'color-mix(in oklab, var(--primary) 28%, transparent)',
    duration: 22,
    delay: 1.5,
  },
  {
    className: 'bottom-[-14%] left-[22%] h-[34rem] w-[34rem]',
    color: 'color-mix(in oklab, var(--secondary) 60%, transparent)',
    duration: 25,
    delay: 0.8,
  },
]

export function AnimatedBlobs() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[90px] ${blob.className}`}
          style={{ background: blob.color, opacity: 0.55 }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay ?? 0,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />
      ))}
      <div className="paper-grain absolute inset-0 opacity-[0.35] mix-blend-multiply" />
    </div>
  )
}
