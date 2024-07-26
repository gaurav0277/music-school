import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses"
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection />
      <FeaturedCourses />
      <InfiniteMovingCardsDemo/>
      <UpcomingWebinar/>
      <Instructors/>
      <Footer/>
      
    </main>
  );
}
