import { 
  Building, 
  Users, 
  Home, 
  Coins, 
  AlertCircle,
  ExternalLink
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const OtherScams = () => {
  const scamTypes = [
    {
      icon: Building,
      title: "Timeshare Scam",
      description: "Fraudulent vacation ownership schemes with hidden fees and impossible exit clauses.",
      redFlags: [
        "High-pressure sales tactics during 'free' vacation offers",
        "Promises of guaranteed rental income",
        "Extremely difficult cancellation policies",
        "Hidden maintenance fees that keep increasing"
      ],
      color: "text-destructive"
    },
    {
      icon: Users,
      title: "MLM Scam", 
      description: "Multi-level marketing schemes focusing more on recruitment than actual product sales.",
      redFlags: [
        "Emphasis on recruiting others over selling products",
        "Complex compensation plans heavily favoring top levels",
        "Required to buy inventory or starter packages",
        "Income claims without proof or disclaimers"
      ],
      color: "text-warning"
    },
    {
      icon: Home,
      title: "Work from Home Scam",
      description: "Fraudulent job offers promising easy money for simple tasks from home.",
      redFlags: [
        "Requests upfront fees for training or equipment",
        "Promises of unrealistic earnings for minimal work",
        "Vague job descriptions or responsibilities",
        "Pressure to start immediately without proper interviews"
      ],
      color: "text-primary"
    },
    {
      icon: Coins,
      title: "Crypto Scam",
      description: "Cryptocurrency investment frauds and fake trading platforms.",
      redFlags: [
        "Promises of guaranteed high returns in crypto",
        "Unregistered or fake trading platforms",
        "Pressure to invest quickly in 'limited time' opportunities",
        "Difficulty withdrawing funds or accessing your wallet"
      ],
      color: "text-success"
    }
  ];

  return (
    <section id="other-scams" className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <AlertCircle className="h-12 w-12 text-warning" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Other Common Scams
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ponzi schemes are just one type of financial fraud. Stay aware of these other common scams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {scamTypes.map((scam, index) => {
            const IconComponent = scam.icon;
            return (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`h-8 w-8 ${scam.color} group-hover:scale-110 transition-transform`} />
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {scam.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {scam.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <h4 className="font-semibold text-sm mb-3 flex items-center">
                    <AlertCircle className="h-4 w-4 text-warning mr-2" />
                    Red Flags to Watch For:
                  </h4>
                  <ul className="space-y-2">
                    {scam.redFlags.map((flag, flagIndex) => (
                      <li key={flagIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-warning mr-2 text-xs">•</span>
                        {flag}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Protection Tips */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-center">General Protection Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-success">✅ Do This:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Research thoroughly before investing</li>
                    <li>• Verify company registration and licenses</li>
                    <li>• Get everything in writing</li>
                    <li>• Consult with independent financial advisors</li>
                    <li>• Take time to make decisions</li>
                    <li>• Trust your instincts if something feels wrong</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-destructive">❌ Avoid This:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Making hasty investment decisions</li>
                    <li>• Paying upfront fees for opportunities</li>
                    <li>• Investing money you can't afford to lose</li>
                    <li>• Trusting unsolicited offers</li>
                    <li>• Ignoring red flags because of promised returns</li>
                    <li>• Keeping investment details secret from family</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">Stay Informed, Stay Protected</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Knowledge is your best defense against financial fraud. Share this information with your 
            family and friends to help protect your entire community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              Learn More Resources
            </Button>
            <Button>
              Share This Information
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherScams;