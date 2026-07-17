import { FileText } from 'lucide-react'
import { research } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/site/section-heading'
import { Stagger, StaggerItem } from '@/components/site/reveal'

const statusStyles: Record<string, string> = {
  Published: 'bg-accent text-accent-foreground',
  'Under Review': 'bg-primary/12 text-primary',
  'In Progress': 'bg-secondary text-secondary-foreground',
}

export function Research() {
  return (
    <section id="research" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Research"
          title="Exploring ideas worth writing about"
          description="Where my curiosity in education and technology turns into research."
        />

        <div className="relative mt-16">
          {/* Timeline line */}
          <span
            aria-hidden="true"
            className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2"
          />

          <Stagger className="flex flex-col gap-10" staggerChildren={0.16}>
            {research.map((item, i) => (
              <StaggerItem key={item.title}>
                <div
                  className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                    i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  {/* Dot */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-2.5 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-background bg-accent md:left-auto ${
                      i % 2 === 0 ? 'md:-right-2' : 'md:-left-2'
                    }`}
                  />

                  <article className="rounded-3xl border border-border bg-surface/70 p-7 backdrop-blur-sm transition-shadow hover:shadow-[0_18px_50px_rgb(46_42_38_/_0.1)]">
                    <div
                      className={`flex items-center gap-3 ${
                        i % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                        <FileText className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    <div
                      className={`mt-5 flex flex-wrap gap-2 ${
                        i % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      {item.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-lg border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    <div className={`mt-4 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          statusStyles[item.status] ?? 'bg-secondary text-secondary-foreground'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </article>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
