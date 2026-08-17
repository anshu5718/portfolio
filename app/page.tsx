import Hero from "@/components/Hero";
import FloatingNav from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import { HiHome } from "react-icons/hi2";
import RecentProjects from "@/components/RecentProject";
import LessonLearned from "@/components/LessonLearned";
import Exprience from "@/components/Exprience";
import Footer from "@/components/Footer";
import { navItems } from "@/data/index";


export default function Home() {
  return (
    <main className="relative bg-black-100 min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      <div className = "w-full flex flex-col justify-center">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid/>
        <RecentProjects/>
        <LessonLearned/>
        <Exprience/>
        <Footer/>
      </div>
    </main>
  );
};
