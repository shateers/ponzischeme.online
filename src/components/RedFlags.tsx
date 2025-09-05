import { 
  AlertTriangle, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock, 
  Lock,
  Eye,
  FileX
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RedFlags = () => {
  const redFlags = [
    {
      icon: TrendingUp,
      title: "Unrealistic Returns",
      description: "Promises of high returns with little or no risk. If it sounds too good to be true, it probably is.",
      color: "text-warning"
    },
    {
      icon: DollarSign,
      title: "Consistent Returns",
      description: "Claims of generating steady, consistent returns regardless of market conditions.",
      color: "text-destructive"
    },
    {
      icon: Users,
      title: "Recruitment Focus",
      description: "More emphasis on recruiting new investors than on the actual investment strategy.",
      color: "text-warning"
    },
    {
      icon: Clock,
      title: "Pressure to Invest Quickly",
      description: "High-pressure tactics urging you to 'act now' or miss out on the opportunity.",
      color: "text-destructive"
    },
    {
      icon: Lock,
      title: "Difficulty Getting Payments",
      description: "Problems receiving promised returns or delays in payment withdrawals.",
      color: "text-warning"
    },
    {
      icon: Eye,
      title: "Lack of Transparency",
      description: "Secretive or vague explanations about how profits are generated or investment strategies.",
      color: "text-destructive"
    },
    {
      icon: FileX,
      title: "Missing Documentation",
      description: "No proper registration with regulatory authorities or missing official documentation.",
      color: "text-warning"
    },
    {
      icon: Users,
      title: "Complex Commission Structure",
      description: "Complicated multi-level marketing structure with bonuses for recruiting others.",
      color: "text-destructive"
    }
  ];

  return (
    <section id="red-flags" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-12 w-12 text-warning" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Red Flags to Watch Out For
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn to identify the warning signs that could save you from financial fraud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {redFlags.map((flag, index) => {
            const IconComponent = flag.icon;
            return (
              <Card 
                key={index} 
                className="shadow-elegant hover:shadow-glow transition-all duration-300 group cursor-pointer"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <IconComponent className={`h-8 w-8 ${flag.color} group-hover:scale-110 transition-transform`} />
                    <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {flag.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {flag.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto bg-warning/5 border-warning/20 shadow-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-warning mr-3" />
                <h3 className="text-xl font-semibold text-warning">Remember</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                <strong>Any combination of these red flags should raise serious concerns.</strong> 
                Legitimate investment opportunities are transparent about risks, provide proper documentation, 
                and don't pressure you to make quick decisions. Always research thoroughly and consult 
                with licensed financial advisors before investing your money.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RedFlags;