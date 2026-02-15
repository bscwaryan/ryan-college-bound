const painPoints = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Counselors Are Stretched Thin",
    description:
      "With high student-to-counselor ratios, school counselors simply cannot provide the intensive, individualized attention strategic college planning requires.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "The Landscape Has Changed",
    description:
      "Test-optional policies, AI-driven application reviews, shifting financial aid formulas — the rules your older siblings followed no longer apply.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Information Overload",
    description:
      "There is an overwhelming amount of contradictory advice online. Which sources can you trust? Which advice actually applies to your family?",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "A Major Financial Investment",
    description:
      "College is one of the most expensive purchases a family will ever make. Without strategic guidance, families leave thousands of dollars on the table.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 sm:py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6 font-[family-name:var(--font-playfair)]">
            The College Admissions Process Has Fundamentally Changed
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            With unprecedented shifts in testing policies, financial aid, and
            enrollment strategies, families need more than generic advice — they
            need an experienced guide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="flex gap-5 p-6 rounded-2xl bg-bg-alt border border-border"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                {point.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {point.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-xl sm:text-2xl text-navy font-medium font-[family-name:var(--font-playfair)] italic">
            &ldquo;You deserve a guide who makes this process clear, strategic,
            and stress-free.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
