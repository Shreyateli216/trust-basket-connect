import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, CreditCard, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Register & Verify",
    description: "Create your vendor profile and build your initial trust score",
    color: "bg-primary"
  },
  {
    icon: Search,
    title: "Browse & Compare",
    description: "Explore suppliers, compare prices, and check ratings from other vendors",
    color: "bg-primary-light"
  },
  {
    icon: CreditCard,
    title: "Order with Credit",
    description: "Buy now, pay later based on your trust score and payment history",
    color: "bg-trust-gold"
  },
  {
    icon: TrendingUp,
    title: "Build Trust & Grow",
    description: "Timely payments increase your score, unlocking better credit and deals",
    color: "bg-trust-silver"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How TrustBasket Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to transform your procurement process and grow your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-primary to-primary-light z-0"></div>
                )}

                <Card className="relative z-10 group hover:shadow-medium transition-all duration-300 border-0 bg-gradient-card">
                  <CardContent className="p-6 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 ${step.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="font-semibold mb-2 text-card-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="mb-6 opacity-90">
              Join thousands of vendors who are already growing their business with TrustBasket
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Start as Vendor
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Become a Supplier
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;