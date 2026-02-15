const placeholders = [
  {
    quote:
      "Working with Melissa took the stress out of the entire college process. Our daughter is thriving at her dream school.",
    name: "Parent Testimonial",
    detail: "Coming soon",
  },
  {
    quote:
      "Melissa's guidance on financial aid alone saved us more than the cost of her services. She knows Alabama schools inside and out.",
    name: "Parent Testimonial",
    detail: "Coming soon",
  },
  {
    quote:
      "I didn't know where to start with college applications. Melissa helped me find schools I never would have considered — and I got in!",
    name: "Student Testimonial",
    detail: "Coming soon",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-semibold text-sm tracking-wide uppercase mb-3">
            Success Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6 font-[family-name:var(--font-playfair)]">
            Families We&apos;ve Helped
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Real stories from families who navigated the college admissions
            journey with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {placeholders.map((testimonial, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-bg-alt border border-border relative"
            >
              <svg
                className="w-10 h-10 text-gold/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="text-text-muted leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-navy text-sm">
                  {testimonial.name}
                </p>
                <p className="text-text-muted text-xs">{testimonial.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
