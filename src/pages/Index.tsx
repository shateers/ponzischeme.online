import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PonziInfo from "@/components/PonziInfo";
import RedFlags from "@/components/RedFlags";
import Quiz from "@/components/Quiz";
import ReportScam from "@/components/ReportScam";
import OtherScams from "@/components/OtherScams";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PonziInfo />
      <RedFlags />
      <Quiz />
      <ReportScam />
      <OtherScams />
      <Footer />
    </div>
  );
};

export default Index;
