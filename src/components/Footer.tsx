import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 bg-bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/RCB-logo-light.png"
            alt="Ryan College Bound"
            width={180}
            height={69}
            className="h-12 w-auto mb-4"
          />
          <p className="text-gold text-sm font-medium tracking-wide mb-6">
            College Bound with Confidence
          </p>
          <a
            href="mailto:melissa@ryancollegebound.com"
            className="text-text-on-navy/70 hover:text-gold transition-colors text-sm mb-8"
          >
            melissa@ryancollegebound.com
          </a>
          <div className="border-t border-white/10 pt-6 w-full">
            <p className="text-text-on-navy/40 text-xs">
              &copy; {new Date().getFullYear()} Ryan College Bound. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
