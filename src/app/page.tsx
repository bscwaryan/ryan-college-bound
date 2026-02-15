import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import About from "@/components/About";
import Programs from "@/components/Programs";
import ValueProps from "@/components/ValueProps";
import FinancialTeaser from "@/components/FinancialTeaser";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <About />
        <Programs />
        <ValueProps />
        <FinancialTeaser />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
