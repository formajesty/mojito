import Link from "next/link";
import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";
import Navbar from "~/components/Navbar";
import Hero from "~/components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default async function HomePage() {
    
  
  return (
   <main className="h-full w-full bg-black text-white">
    <Navbar />
    <Hero/>
   </main>
  );
}
