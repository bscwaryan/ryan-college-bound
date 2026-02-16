const featured = [
  {
    quote:
      "Melissa is an excellent resource for college-bound students who hope to maximize their potential. She guides students and parents through what can become an inherently stressful college application process with an amazing level of knowledge, experience, and compassion. Through the entire course of standardized testing preparation, scholarship applications, college visits, and interviews, Melissa allows students to take ownership of their journey while providing very streamlined, individualized, and on-point guidance. Melissa\u2019s contribution to my son\u2019s college acceptances went beyond my highest expectations.",
    name: "Proud Parent",
    detail:
      "Mom of a Coca-Cola Scholar \u2014 Duke University, UNC Chapel Hill Honors College, University of Alabama Presidential Scholar",
  },
  {
    quote:
      "Having worked with hundreds of high school counselors, I do not know of anyone more committed to her students or to the profession than Melissa. She KNOWS her students by name, she knows their stories, their families, and their strengths and weaknesses. Trustworthy, reliable, dependable, and committed are terms that describe Melissa both personally and professionally. She is someone you want in your corner and on your team. Her reputation is stellar.",
    name: "Kim Mauldin",
    detail: "Director of Admissions Emeriti, University of North Alabama",
  },
  {
    quote:
      "Mrs. Ryan definitely stands out as the top counselor I have been associated with in my 22 years of public education. Her tremendous drive and selfless service for her students are exhibited in her passion for promoting programs that center around social and emotional development, college and career activities, building self-confidence, raising expectations, and empowering her students to reach their full potential.",
    name: "Dr. Keith Lankford",
    detail: "Superintendent, Alexander City Schools",
  },
];

const additional = [
  {
    quote:
      "We utilized Melissa Ryan College Consulting for my son\u2019s Senior year. He wanted to attend with as little debt as possible. Mrs. Ryan helped him learn about various scholarships and opportunities that would help him achieve his goals. He is a Junior now and still has not had to utilize loans to pay for college. I highly recommend Melissa Ryan College Consulting. She simplified the college process for our son and us.",
    name: "Jessica",
    detail: "Parent",
  },
  {
    quote:
      "I cannot recommend Melissa Ryan as a college consultant enough! She was invaluable to us when our son started looking at colleges. She found scholarships, programs, and walked us through the process. He will be attending his first-choice college, thanks in large part to Melissa Ryan.",
    name: "Titian",
    detail: "Parent",
  },
  {
    quote:
      "Melissa did an outstanding job helping my daughter Claire get ready for college. With Melissa\u2019s help, Claire was able to secure full tuition and books at Auburn University and admission into the Honors College at Auburn. She also became Lauderdale County\u2019s 2025 Distinguished Young Woman, Shoals Scholar Dollar Student of the Year, and Valedictorian at Lexington High School. Thank you so much Melissa!",
    name: "Joel Retherford",
    detail: "Parent",
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
            Real stories from families and professionals who have seen the
            difference expert guidance makes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {featured.map((testimonial, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-bg-alt border border-border relative flex flex-col"
            >
              <svg
                className="w-10 h-10 text-gold/30 mb-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="text-text-muted leading-relaxed mb-6 italic text-sm flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-navy text-sm">
                  {testimonial.name}
                </p>
                <p className="text-text-muted text-xs mt-1">
                  {testimonial.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {additional.map((testimonial, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-bg-alt border border-border relative flex flex-col"
            >
              <svg
                className="w-10 h-10 text-gold/30 mb-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="text-text-muted leading-relaxed mb-6 italic text-sm flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-navy text-sm">
                  {testimonial.name}
                </p>
                <p className="text-text-muted text-xs mt-1">
                  {testimonial.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
