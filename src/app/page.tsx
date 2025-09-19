import Link from "next/link";
import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default async function HomePage() {
    
  
  return (
    <div className="flex-center">
      <h1 className="text-3xl font-bold underline">
        Hello, GSAP
      </h1>
      
    </div>
  );
}
