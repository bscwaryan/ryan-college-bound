import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-navy pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--gold)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--gold)_0%,_transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
        <Image
          src="/RCB-logo-light.png"
          alt="Ryan College Bound"
          width={400}
          height={154}
          className="mx-auto mb-8 sm:mb-10 w-64 sm:w-80 md:w-96 h-auto"
          priority
        />

        <p className="text-gold text-lg sm:text-xl font-medium tracking-wide uppercase mb-6">
          College Bound with Confidence
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-on-navy leading-tight mb-6 font-[family-name:var(--font-playfair)]">
          Expert College Consulting
          <span className="block text-gold mt-2">for Alabama Families</span>
        </h1>

        <p className="text-text-on-navy/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          From sophomore year through acceptance day — personalized guidance that
          turns the college admissions journey from overwhelming to empowering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-white text-lg font-semibold hover:bg-gold-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Schedule a Free Consultation
          </a>
          <a
            href="#why-us"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-text-on-navy/30 text-text-on-navy text-lg font-semibold hover:border-gold hover:text-gold transition-all"
          >
            Learn How We Help
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-text-on-navy/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
