import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Clock, Shield } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Unreliable Suppliers",
    description: "Difficulty finding trustworthy vendors with consistent quality and delivery"
  },
  {
    icon: DollarSign,
    title: "High Prices",
    description: "Limited bargaining power leads to inflated costs for raw materials"
  },
  {
    icon: Clock,
    title: "Time Wastage",
    description: "Hours spent traveling to different markets instead of focusing on business"
  },
  {
    icon: Shield,
    title: "No Credit Access",
    description: "Cash-only transactions limit growth opportunities and working capital"
  }
];

const ProblemSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Challenges Facing Street Vendors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every day, thousands of street food vendors struggle with procurement challenges that limit their business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-destructive/10 rounded-full flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                    <Icon className="h-8 w-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold mb-2 text-card-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <Shield className="h-5 w-5" />
            <span className="font-medium">TrustBasket solves these problems with technology and trust</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;