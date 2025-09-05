import { ArrowRight, Shield, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-primary-glow opacity-95"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Shield className="h-20 w-20 text-primary-foreground drop-shadow-lg" />
            <AlertCircle className="absolute -top-2 -right-2 h-8 w-8 text-warning animate-pulse" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Don't Fall for <span className="text-warning">Ponzi Schemes</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
          Learn how to identify and protect yourself from financial frauds. 
          Arm yourself with knowledge to spot red flags before it's too late.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant group"
          >
            Take the Quiz
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <h3 className="text-lg font-semibold mb-2">Stay Alert</h3>
            <p className="text-sm text-primary-foreground/80">Learn the warning signs</p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <h3 className="text-lg font-semibold mb-2">Protect Yourself</h3>
            <p className="text-sm text-primary-foreground/80">Know how to respond</p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <h3 className="text-lg font-semibold mb-2">Report Scams</h3>
            <p className="text-sm text-primary-foreground/80">Help others stay safe</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;