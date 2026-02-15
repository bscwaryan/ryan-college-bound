"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // Silently handle — user can retry
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-semibold text-sm tracking-wide uppercase mb-3">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6 font-[family-name:var(--font-playfair)]">
            Ready to Start Your Journey?
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Schedule a free consultation to discuss your student&apos;s goals and
            create a plan for college success.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-bg border border-gold/30 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 font-[family-name:var(--font-playfair)]">
                  Thank You!
                </h3>
                <p className="text-text-muted">
                  Your message has been sent. Melissa will be in touch within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="hidden"
                  name="access_key"
                  value="44c1b465-91d3-4c30-981a-01b1874fdefd"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New consultation request from Ryan College Bound"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-navy mb-1.5"
                  >
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="grade"
                    className="block text-sm font-medium text-navy mb-1.5"
                  >
                    Student&apos;s Current Grade
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  >
                    <option value="">Select a grade</option>
                    <option value="9th">9th Grade</option>
                    <option value="10th">10th Grade</option>
                    <option value="11th">11th Grade</option>
                    <option value="12th">12th Grade</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy mb-1.5"
                  >
                    Message{" "}
                    <span className="text-text-muted font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your student and any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-8 py-4 rounded-full bg-gold text-white text-lg font-semibold hover:bg-gold-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {submitting ? "Sending..." : "Request a Consultation"}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="p-8 rounded-2xl bg-bg border border-border">
              <h3 className="text-xl font-semibold text-navy mb-6 font-[family-name:var(--font-playfair)]">
                Get in Touch Directly
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-navy text-sm mb-1">Email</p>
                    <a
                      href="mailto:melissa@ryancollegebound.com"
                      className="text-gold hover:text-gold-dark transition-colors break-all"
                    >
                      melissa@ryancollegebound.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-navy text-sm mb-1">
                      Serving
                    </p>
                    <p className="text-text-muted">
                      Alabama families &amp; beyond
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-navy text-sm mb-1">
                      Response Time
                    </p>
                    <p className="text-text-muted">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-text-muted text-sm leading-relaxed">
                  Consultations are complimentary. We&apos;ll discuss your
                  student&apos;s unique situation, answer your questions, and
                  explore how we can help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
