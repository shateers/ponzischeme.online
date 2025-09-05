import { Phone, Globe, Shield, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReportScam = () => {
  const reportingAgencies = [
    {
      name: "SEBI Complaints",
      description: "Securities and Exchange Board of India - For investment fraud and securities-related scams",
      website: "scores.sebi.gov.in",
      icon: Shield,
      type: "Investment & Securities"
    },
    {
      name: "RBI Customer Service",
      description: "Reserve Bank of India - For banking and financial services complaints",
      website: "rbi.org.in/commonperson/English/csim.aspx", 
      icon: FileText,
      type: "Banking & Finance"
    },
    {
      name: "Cybercrime Portal",
      description: "Government of India - Report online financial frauds and cybercrimes",
      website: "cybercrime.gov.in",
      icon: Globe,
      type: "Cybercrime"
    },
    {
      name: "Economic Offences Wing",
      description: "Police department specialized in economic crimes and fraud cases",
      website: "Contact your state police",
      icon: Phone,
      type: "Economic Crime"
    }
  ];

  const reportingSteps = [
    {
      step: "1",
      title: "Gather Evidence",
      description: "Collect all documents, communications, receipts, and proof of transactions"
    },
    {
      step: "2", 
      title: "Document Timeline",
      description: "Create a chronological record of events, promises made, and money invested"
    },
    {
      step: "3",
      title: "File Complaints",
      description: "Report to appropriate authorities based on the type of fraud"
    },
    {
      step: "4",
      title: "Follow Up",
      description: "Keep complaint numbers and follow up regularly on the status"
    }
  ];

  return (
    <section id="report" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Report a Scam
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help protect others by reporting fraudulent schemes to the appropriate authorities.
          </p>
        </div>

        {/* Reporting Agencies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {reportingAgencies.map((agency, index) => {
            const IconComponent = agency.icon;
            return (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <IconComponent className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-lg">{agency.name}</CardTitle>
                      <p className="text-sm text-warning font-medium">{agency.type}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {agency.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono text-primary">{agency.website}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Reporting Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">How to Report Effectively</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {reportingSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <Card className="bg-warning/5 border-warning/20 shadow-elegant">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-warning mb-3">Important Information</h4>
                <div className="space-y-2 text-sm text-foreground leading-relaxed">
                  <p>
                    <strong>Act Quickly:</strong> The sooner you report, the better the chances of investigation and potential recovery.
                  </p>
                  <p>
                    <strong>Multiple Reports:</strong> File complaints with multiple agencies if the scam involves different aspects (cybercrime, banking, securities).
                  </p>
                  <p>
                    <strong>Keep Records:</strong> Maintain copies of all complaint numbers and correspondence with authorities.
                  </p>
                  <p>
                    <strong>Protect Others:</strong> Share information about the scam (without personal details) to warn others in your community.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <div className="text-center mt-12">
          <Card className="max-w-md mx-auto shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Phone className="h-5 w-5 text-destructive mr-2" />
                Emergency Helpline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive mb-2">1930</p>
              <p className="text-sm text-muted-foreground">
                National Cybercrime Helpline
                <br />
                Available 24/7 for urgent fraud cases
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReportScam;