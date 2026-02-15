const programs = [
  {
    grade: "10th Grade",
    title: "Building Foundations",
    description:
      "Sophomore year sets the stage for everything that follows. We build a strong academic foundation, begin test preparation, and start exploring what matters most to your student.",
    outcomes: [
      "Clear 4-year academic plan with appropriate rigor",
      "Personalized standardized test prep strategy",
      "Career exploration and interest assessments",
      "Preliminary college list of 10-15 schools",
      "Extracurricular development roadmap",
    ],
    sessions: "12 personalized sessions",
    color: "bg-gold/10 border-gold/20",
  },
  {
    grade: "11th Grade",
    title: "The Critical Year",
    description:
      "Junior year is the most important year for college admissions. We maximize academic performance, finalize testing, craft compelling essays, and build your application strategy.",
    outcomes: [
      "Finalized college list of 8-12 schools",
      "Polished personal statement ready for submission",
      "Complete SAT/ACT testing with target scores",
      "Teacher recommendations secured",
      "Application strategy (ED/EA/RD) finalized",
    ],
    sessions: "12 personalized sessions + essay coaching",
    color: "bg-gold/15 border-gold/25",
  },
  {
    grade: "12th Grade",
    title: "Application to Acceptance",
    description:
      "Senior year is about executing with precision — submitting polished applications, navigating financial aid, and making a confident final college decision.",
    outcomes: [
      "All applications submitted on time with confidence",
      "FAFSA/CSS Profile completed strategically",
      "Financial aid packages analyzed and compared",
      "Informed final college decision by May 1",
      "Smooth transition preparation for college life",
    ],
    sessions: "12 personalized sessions + full application support",
    color: "bg-gold/20 border-gold/30",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 sm:py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-semibold text-sm tracking-wide uppercase mb-3">
            Grade-Specific Programs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6 font-[family-name:var(--font-playfair)]">
            A Comprehensive Roadmap for Every Step
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Each program is tailored to what matters most at that stage of your
            student&apos;s journey — with structured sessions, between-meeting
            support, and parent involvement throughout.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.grade}
              className={`rounded-2xl border p-8 ${program.color} flex flex-col`}
            >
              <p className="text-gold font-bold text-sm tracking-wide uppercase mb-2">
                {program.grade}
              </p>
              <h3 className="text-2xl font-bold text-navy mb-3 font-[family-name:var(--font-playfair)]">
                {program.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                {program.description}
              </p>

              <div className="flex-grow">
                <p className="text-sm font-semibold text-navy mb-3 uppercase tracking-wide">
                  What Your Student Gains
                </p>
                <ul className="space-y-3">
                  {program.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-text-muted text-sm leading-relaxed">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-text-muted mb-4">
                  <strong className="text-navy">{program.sessions}</strong>{" "}
                  throughout the school year
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-gold font-semibold text-sm hover:text-gold-dark transition-colors group"
                >
                  Learn more — schedule a consultation
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
