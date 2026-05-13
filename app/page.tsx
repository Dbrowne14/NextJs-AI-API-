import About from "@/components/sections/About";
import CaseStudies from "@/components/sections/CaseStudies";
import HeroBanner from "@/components/sections/HeroBanner";
import Services from "@/components/sections/Services";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Services />
      <CaseStudies />
      <About />
    </div>
  );
}
