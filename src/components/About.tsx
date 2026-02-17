import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-gold font-semibold text-sm tracking-wide uppercase mb-3">
              Meet Your Guide
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6 font-[family-name:var(--font-playfair)]">
              Melissa Ryan
            </h2>
            <p className="text-lg text-navy font-medium mb-4">
              Independent Educational Consultant
            </p>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                With <strong className="text-navy">33 years of experience</strong> as
                a college and high school counselor, including six years as an
                Independent Educational Consultant, I&apos;ve guided hundreds of
                families through the college admissions journey.
              </p>
              <p>
                As a recently retired high school counselor who coordinated{" "}
                <strong className="text-navy">
                  what became Alabama&apos;s largest dual enrollment program
                </strong>{" "}
                at Northwest Shoals Community College, I understand firsthand both
                the challenges families face and the opportunities available.
              </p>
              <p>
                I believe that finding the right college fit is one of the most
                important decisions students and families make. College represents a
                significant financial investment, and you deserve to make that
                decision armed with sound information and strategic guidance.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-gold">33+</p>
                <p className="text-sm text-text-muted">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold">6</p>
                <p className="text-sm text-text-muted">Years as IEC</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold">1,000s</p>
                <p className="text-sm text-text-muted">Families Guided</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/melissa-headshot.jpg"
              alt="Melissa Ryan — Independent Educational Consultant"
              width={280}
              height={280}
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full shadow-lg object-cover object-[center_25%] border-4 border-gold/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
