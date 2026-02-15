const insights = [
  {
    stat: "10th Grade",
    headline: "The Year That Matters Most for Financial Aid",
    description:
      "FAFSA uses \"prior-prior year\" income. This means every financial decision you make during your child's 10th grade year can dramatically impact aid eligibility. Most families don't realize this until it's too late.",
  },
  {
    stat: "$40K+",
    headline: "Sticker Price Isn't the Real Price",
    description:
      "A $70,000 private school with generous aid could cost your family less than a $30,000 public school with no aid. Strategic school selection is the key to financial fit.",
  },
  {
    stat: "20-25%",
    headline: "Student Assets Cost You More Than You Think",
    description:
      "Student assets are assessed at 20-25% while parent assets are assessed at only 5.64%. One common 529 reporting mistake can cost thousands in aid eligibility.",
  },
];

export default function FinancialTeaser() {
  return (
    <section id="financial" className="py-20 sm:py-28 bg-bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-semibold text-sm tracking-wide uppercase mb-3">
            Financial Strategy
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-on-navy mb-6 font-[family-name:var(--font-playfair)]">
            College Is One of the Biggest Investments You&apos;ll Ever Make
          </h2>
          <p className="text-text-on-navy/70 text-lg leading-relaxed">
            Most families don&apos;t realize how much strategic planning can impact
            what they actually pay. Here are a few things you should know.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {insights.map((insight, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <p className="text-3xl sm:text-4xl font-bold text-gold mb-4 font-[family-name:var(--font-playfair)]">
                {insight.stat}
              </p>
              <h3 className="text-lg font-semibold text-text-on-navy mb-3">
                {insight.headline}
              </h3>
              <p className="text-text-on-navy/70 leading-relaxed text-sm">
                {insight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-text-on-navy/80 text-lg mb-6 max-w-2xl mx-auto">
            Understanding financial aid, scholarships, and the true cost of
            attendance requires expert guidance. Let&apos;s talk strategy before
            the critical deadlines pass.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-white text-lg font-semibold hover:bg-gold-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Ahead of the Process
          </a>
        </div>
      </div>
    </section>
  );
}
