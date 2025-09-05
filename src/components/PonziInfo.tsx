import { TrendingDown, Users, DollarSign, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PonziInfo = () => {
  return (
    <section id="what-is-ponzi" className="py-12 sm:py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            What is a Ponzi Scheme?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Understanding the mechanics of financial fraud to protect yourself and your loved ones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Definition */}
          <div>
            <Card className="shadow-elegant">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-warning mr-2 sm:mr-3" />
                  Definition
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  A Ponzi scheme is a form of fraud that lures investors and pays profits to earlier investors 
                  with funds from more recent investors. The scheme leads victims to believe profits are coming 
                  from legitimate business activities, when they are actually coming from other investors.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* How it Collapses */}
          <div>
            <Card className="shadow-elegant">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <TrendingDown className="h-5 w-5 sm:h-6 sm:w-6 text-destructive mr-2 sm:mr-3" />
                  How it Collapses
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  Ponzi schemes inevitably collapse when there are not enough new investors to pay existing ones, 
                  or when too many investors try to cash out at once. The collapse happens because the scheme 
                  requires an ever-increasing flow of money from new investors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The Process */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 px-2">How Ponzi Schemes Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center px-4">
              <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">1. Recruit Investors</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Fraudsters promise high returns with little or no risk to attract initial investors.
              </p>
            </div>
            
            <div className="text-center px-4">
              <div className="bg-success/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-success" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">2. Pay Early Returns</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Use money from new investors to pay returns to earlier investors, creating false legitimacy.
              </p>
            </div>
            
            <div className="text-center px-4">
              <div className="bg-destructive/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <TrendingDown className="h-6 w-6 sm:h-8 sm:w-8 text-destructive" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">3. Inevitable Collapse</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                When new investment slows down or withdrawals increase, the scheme collapses.
              </p>
            </div>
          </div>
        </div>

        {/* Charles Ponzi Origin */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="max-w-4xl mx-auto shadow-elegant">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl">The Origin: Charles Ponzi</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                The scheme is named after Charles Ponzi, who became notorious for using this technique in the 1920s. 
                Ponzi promised clients a 50% profit within 45 days by buying discounted postal reply coupons in other 
                countries and redeeming them at face value in the US. While this was theoretically possible, 
                Ponzi was actually paying earlier investors with money from new investors. 
                His scheme eventually collapsed, costing investors millions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PonziInfo;