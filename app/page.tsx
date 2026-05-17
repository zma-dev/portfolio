import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Strengths from "@/components/Strengths";
import Skills from "@/components/Skills";
import Career from "@/components/Career";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Strengths />
        <Skills />
        <Career />
        <Contact />
      </main>
      <footer className="py-8 text-center bg-[#1A1A1A] border-t-4 border-[#FFE500]">
        <p className="text-white font-bold">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-[#FFE500]">K.IWASAKI</span> All rights reserved.
        </p>
      </footer>
    </>
  );
}
