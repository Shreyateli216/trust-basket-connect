import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBasket, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-street-food.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Street Food Vendors" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Empowering
              <span className="block text-primary-light">Street Vendors</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Connect with trusted suppliers, get credit when you need it, and grow your business with TrustBasket - India's first procurement platform for street food vendors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate('/marketplace')}
                className="shadow-medium"
              >
                <ShoppingBasket className="h-5 w-5 mr-2" />
                Explore Marketplace
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/register?type=supplier')}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <TrendingUp className="h-5 w-5 mr-2" />
                Join as Supplier
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">500+</div>
                <div className="text-sm text-primary-foreground/80">Active Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">100+</div>
                <div className="text-sm text-primary-foreground/80">Trusted Suppliers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">₹50L+</div>
                <div className="text-sm text-primary-foreground/80">Credit Facilitated</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-light rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-secondary rounded-full opacity-30 blur-2xl"></div>
              
              <div className="relative bg-gradient-card rounded-2xl p-8 shadow-strong backdrop-blur-sm border border-primary-foreground/10">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <ShoppingBasket className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Smart Procurement</h3>
                      <p className="text-sm text-muted-foreground">Order with confidence</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-trust-gold rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Trust Score</h3>
                      <p className="text-sm text-muted-foreground">Build your reputation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;