import { GraduationCap, Heart, Lightbulb } from 'lucide-react'
import { about } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/site/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/site/reveal'

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="A builder and an educator at heart"
          description="Getting to know the person behind the projects."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left column — story */}
          <Reveal className="flex flex-col gap-6 rounded-3xl border border-border bg-surface/70 p-8 backdrop-blur-sm md:p-10">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/15 text-accent">
                <Heart className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground">My story</h3>
            </div>
            {about.intro.map((paragraph, i) => (
              <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}

            <div className="mt-2 rounded-2xl border border-border bg-background/60 p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    {about.education.degree}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {about.education.school} · {about.education.period}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {about.education.detail}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right column — interests & fun facts */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.1} className="rounded-3xl border border-border bg-surface/70 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/15 text-accent">
                  <Lightbulb className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground">Career interests</h3>
              </div>
              <Stagger className="mt-6 flex flex-col gap-3">
                {about.interests.map((interest) => (
                  <StaggerItem
                    key={interest}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {interest}
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
