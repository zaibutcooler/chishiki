import LandingNavbar from "./_components/LandingNavbar";
import AboutSection from "./_components/AboutSection";
import ClassroomsSection from "./_components/ClassroomsSection";
import ContactSection from "./_components/ContactSection";
import CoursesSection from "./_components/CoursesSection";
import HeroSection from "./_components/HeroSection";
import LandingFooter from "./_components/LandingFooter";
import PaymentSection from "./_components/PaymentSection";

export default function LandingPage() {
  return (
    <main>
      <LandingNavbar />
      <div className=" flex justify-center">
        <main className="container w-full md:w-[800px] lg:w-[1000px]">
          <div className="min-h-screen pt-14" id="hero">
            <HeroSection />
          </div>
          <div className="min-h-screen pt-14" id="about">
            <AboutSection />
          </div>
          <div className="min-h-screen pt-14" id="courses">
            <CoursesSection />
          </div>
          <div className="min-h-screen pt-14" id="classrooms">
            <ClassroomsSection />
          </div>
          <div className="min-h-screen pt-14" id="payment">
            <PaymentSection />
          </div>
          <div className="min-h-screen pt-14" id="contact">
            <ContactSection />
          </div>
        </main>
      </div>
      <LandingFooter />
    </main>
  );
}
