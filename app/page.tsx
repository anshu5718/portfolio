import Hero from "@/components/Hero";
import FloatingNav from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import { HiHome } from "react-icons/hi2";
import RecentProjects from "@/components/RecentProject";
import LessonLearned from "@/components/LessonLearned";
import Exprience from "@/components/Exprience";


export default function Home() {
  return (
    <main className="relative bg-black-100 min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      <div className = "w-full flex flex-col justify-center">
        <FloatingNav navItems={[
          {
            name: "Home",
            link: "/",
            icon: <HiHome className="h-4 w-4 text-neutral-500 dark:text-yellow-300" />
          }
        ]} />
        <Hero />
        <Grid/>
        <RecentProjects/>
        <LessonLearned/>
        <Exprience/>
      </div>
    </main>
  );
};
