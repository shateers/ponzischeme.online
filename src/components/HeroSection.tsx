import { ArrowRight, Shield, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-hero text-primary-foreground py-12 sm:py-16 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-primary-glow opacity-95"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Shield className="h-16 w-16 sm:h-20 sm:w-20 text-primary-foreground drop-shadow-lg" />
            <AlertCircle className="absolute -top-2 -right-2 h-6 w-6 sm:h-8 sm:w-8 text-warning animate-pulse" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          Don't Fall for <span className="text-warning">Ponzi Schemes</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed px-4">
          Learn how to identify and protect yourself from financial frauds. 
          Arm yourself with knowledge to spot red flags before it's too late.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Button 
            variant="secondary" 
            size="lg" 
            className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant group"
          >
            Take the Quiz
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline-inverse" 
            size="lg"
            className="w-full sm:w-auto transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-primary-foreground/20">
            <h3 className="text-base sm:text-lg font-semibold mb-2">Stay Alert</h3>
            <p className="text-sm text-primary-foreground/80">Learn the warning signs</p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-primary-foreground/20">
            <h3 className="text-base sm:text-lg font-semibold mb-2">Protect Yourself</h3>
            <p className="text-sm text-primary-foreground/80">Know how to respond</p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-primary-foreground/20">
            <h3 className="text-base sm:text-lg font-semibold mb-2">Report Scams</h3>
            <p className="text-sm text-primary-foreground/80">Help others stay safe</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;