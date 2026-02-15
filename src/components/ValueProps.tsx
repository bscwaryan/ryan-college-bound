const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Individualized Guidance",
    description:
      "After getting to know your student deeply, I create a truly personalized college list — not a computer-generated output, but a carefully curated selection based on what makes your student unique.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Expert Navigation",
    description:
      "Test-optional strategies, Early Decision timing, demonstrated interest — I do the sifting for you and apply current, relevant information to your student's specific situation.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Stress Reduction",
    description:
      "I manage deadlines, guide essay development, and ensure every administrative component is handled with efficiency — so your family can enjoy these important years.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Competitive Edge",
    description:
      "Strategic positioning and demonstrated fit matter more than ever. I help your student develop an application strategy that gives them the best possible chance at their goals.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Financial Strategy",
    description:
      "Strategic school selection often reduces the overall cost of attendance significantly. I specialize in identifying scholarship opportunities and optimizing financial aid outcomes.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Ongoing Support",
    description:
      "Email check-ins, parent meetings, between-session support, and progress reports — you're never navigating this alone. I'm here whenever questions arise.",
  },
];

export default function ValueProps() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-semibold text-sm tracking-wide uppercase mb-3">
            Why Ryan College Bound
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6 font-[family-name:var(--font-playfair)]">
            What You Can Expect
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            A dependable college consultant provides expertise, structure, and
            peace of mind throughout every stage of the journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div key={i} className="p-6 rounded-2xl bg-bg border border-border">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                {value.title}
              </h3>
              <p className="text-text-muted leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
