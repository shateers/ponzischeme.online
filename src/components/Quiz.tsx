import { useState } from "react";
import { CheckCircle, XCircle, AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Does the investment promise unusually high returns with little or no risk?",
      options: ["Yes", "No", "I'm not sure"]
    },
    {
      question: "Are you being pressured to recruit friends and family to invest?",
      options: ["Yes", "No", "Sometimes"]
    },
    {
      question: "Have you received consistent returns regardless of market conditions?",
      options: ["Yes", "No", "The returns vary"]
    },
    {
      question: "Is the investment strategy explained in vague or overly complex terms?",
      options: ["Yes", "No", "It's somewhat clear"]
    },
    {
      question: "Have you had difficulty withdrawing your money or receiving payments?",
      options: ["Yes", "No", "There have been delays"]
    },
    {
      question: "Is the company registered with proper financial regulatory authorities?",
      options: ["No/Don't know", "Yes, verified", "I think so"]
    },
    {
      question: "Are you earning more from recruiting others than from actual investment returns?",
      options: ["Yes", "No", "About the same"]
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateRisk = () => {
    // Risk scoring: 0 = safe answer, 1 = risky answer, 0.5 = uncertain
    const riskScores = [
      [1, 0, 0.5], // High returns promise
      [1, 0, 0.5], // Recruiting pressure  
      [1, 0, 0.5], // Consistent returns
      [1, 0, 0.5], // Vague strategy
      [1, 0, 0.5], // Withdrawal issues
      [1, 0, 0.5], // Registration status
      [1, 0, 0.5]  // Recruitment earnings
    ];

    let totalRisk = 0;
    answers.forEach((answer, index) => {
      totalRisk += riskScores[index][answer];
    });

    const riskPercentage = (totalRisk / questions.length) * 100;
    
    if (riskPercentage >= 70) return "high";
    if (riskPercentage >= 40) return "medium";
    return "low";
  };

  const getRiskMessage = (risk: string) => {
    switch (risk) {
      case "high":
        return {
          title: "🚨 HIGH RISK - You may be trapped in a Ponzi scheme!",
          message: "Based on your answers, there are strong indicators that you may be involved in a fraudulent investment scheme. We strongly recommend consulting with a financial advisor and considering reporting this to authorities.",
          color: "destructive",
          icon: XCircle
        };
      case "medium":
        return {
          title: "⚠️ MEDIUM RISK - Proceed with extreme caution",
          message: "Your investment shows several concerning red flags. We recommend thoroughly researching the company, verifying their credentials, and seeking independent financial advice before continuing.",
          color: "warning",
          icon: AlertTriangle
        };
      case "low":
        return {
          title: "✅ LOW RISK - But stay vigilant",
          message: "Your investment appears to have fewer red flags, but it's always important to stay informed and regularly review your investments. Continue monitoring for any changes in patterns.",
          color: "success",
          icon: CheckCircle
        };
      default:
        return {
          title: "Assessment Complete",
          message: "Please review your investment carefully.",
          color: "default",
          icon: CheckCircle
        };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const risk = calculateRisk();
    const result = getRiskMessage(risk);
    const IconComponent = result.icon;

    return (
      <section id="quiz" className="py-12 sm:py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-elegant">
            <CardHeader className="text-center p-4 sm:p-6">
              <div className="flex justify-center mb-4">
                <IconComponent className={`h-12 w-12 sm:h-16 sm:w-16 text-${result.color}`} />
              </div>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl px-2">{result.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4 sm:space-y-6 p-4 sm:p-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
                {result.message}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 sm:mt-8">
                <Card className="p-3 sm:p-4">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Next Steps:</h4>
                  <ul className="text-xs sm:text-sm text-muted-foreground space-y-1 text-left">
                    <li>• Document all communications</li>
                    <li>• Consult a financial advisor</li>
                    <li>• Research the company thoroughly</li>
                    <li>• Consider reporting if suspicious</li>
                  </ul>
                </Card>
                
                <Card className="p-3 sm:p-4">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Resources:</h4>
                  <ul className="text-xs sm:text-sm text-muted-foreground space-y-1 text-left">
                    <li>• SEBI Investor Complaints</li>
                    <li>• RBI Customer Service</li>
                    <li>• Cybercrime.gov.in</li>
                    <li>• Local Police Station</li>
                  </ul>
                </Card>
              </div>

              <Button onClick={resetQuiz} variant="outline" className="mt-4 sm:mt-6">
                <RotateCcw className="mr-2 h-4 w-4" />
                Take Quiz Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-12 sm:py-16 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            Are You Trapped in a Ponzi Scheme?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Take this quick assessment to evaluate your investment
          </p>
        </div>

        <Card className="shadow-elegant">
          <CardHeader className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <CardTitle className="text-lg sm:text-xl">
                Question {currentQuestion + 1} of {questions.length}
              </CardTitle>
              <div className="text-sm text-muted-foreground">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-medium leading-relaxed">
              {questions[currentQuestion].question}
            </h3>
            
            <div className="space-y-2 sm:space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto p-3 sm:p-4 hover:bg-accent hover:text-accent-foreground border-2 transition-all duration-200 text-sm sm:text-base"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Quiz;