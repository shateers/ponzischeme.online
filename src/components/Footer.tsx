import { Shield, AlertTriangle, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-primary mr-2" />
              <span className="text-lg font-bold">Ponzi Schemes</span>
              <AlertTriangle className="h-4 w-4 text-warning ml-2" />
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Educating people about financial fraud to help protect communities from 
              Ponzi schemes and other investment scams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#what-is-ponzi" className="text-background/80 hover:text-background transition-colors">
                  What is Ponzi
                </a>
              </li>
              <li>
                <a href="#red-flags" className="text-background/80 hover:text-background transition-colors">
                  Red Flags
                </a>
              </li>
              <li>
                <a href="#quiz" className="text-background/80 hover:text-background transition-colors">
                  Take Quiz
                </a>
              </li>
              <li>
                <a href="#report" className="text-background/80 hover:text-background transition-colors">
                  Report Scam
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Important Resources</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <ExternalLink className="h-3 w-3 mr-2 text-background/60" />
                <span className="text-background/80">SEBI Complaints Portal</span>
              </li>
              <li className="flex items-center">
                <ExternalLink className="h-3 w-3 mr-2 text-background/60" />
                <span className="text-background/80">RBI Customer Service</span>
              </li>
              <li className="flex items-center">
                <ExternalLink className="h-3 w-3 mr-2 text-background/60" />
                <span className="text-background/80">Cybercrime.gov.in</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-3 w-3 mr-2 text-background/60" />
                <span className="text-background/80">Emergency: 1930</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Ponzi Schemes Awareness. This website is for educational purposes only.
          </p>
          <p className="text-background/50 text-xs mt-2">
            We do not provide financial recovery services. Always consult with qualified professionals 
            for legal and financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;