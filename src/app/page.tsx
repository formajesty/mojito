import Link from "next/link";
import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";
import Navbar from "~/components/Navbar";
import Hero from "~/components/Hero";
import Cocktails from "~/components/Cocktails";
import About from "~/components/About";
import Art from "~/components/Art";
import Menu from "~/components/Menu";
import Contact from "~/components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default async function HomePage() {
    
  
  return (
   <main className="h-full w-full bg-black text-white">
    <Navbar />
    <Hero/>
    <Cocktails/>
    <About/>
     <Art />
	 <Menu />
	 <Contact />
   </main>
  );
}
