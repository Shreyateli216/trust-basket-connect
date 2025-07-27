import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import { 
  CreditCard, 
  Users, 
  Shield, 
  BookOpen, 
  Gift, 
  Award,
  ArrowLeft,
  ExternalLink
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();

  const helpSections = [
    {
      icon: CreditCard,
      title: "How Vendor Credit Works",
      description: "Understanding the credit system, eligibility, and payment terms",
      topics: [
        "Credit eligibility after 3 successful orders",
        "Split payment: Cost price now + margin within 7 days", 
        "Trust score impact on credit limits",
        "Payment methods and due dates"
      ]
    },
    {
      icon: Gift,
      title: "Create Best-Selling Combos",
      description: "Guide for suppliers to create attractive combo deals",
      topics: [
        "Popular combo combinations for street food",
        "Pricing strategies for maximum sales",
        "Seasonal combo ideas",
        "Marketing your combos effectively"
      ]
    },
    {
      icon: Shield,
      title: "Building Trust Score",
      description: "How trust scores work and how to improve them",
      topics: [
        "Factors affecting trust score",
        "Benefits of higher trust scores",
        "Vendor verification process",
        "Supplier rating system"
      ]
    },
    {
      icon: Users,
      title: "Getting Started Guide",
      description: "Step-by-step guide for vendors and suppliers",
      topics: [
        "Account registration and verification",
        "Setting up your business profile",
        "Making your first order/sale",
        "Understanding the marketplace"
      ]
    },
    {
      icon: Award,
      title: "Government Benefits Info",
      description: "Information about schemes and benefits for street vendors",
      topics: [
        "PM SVANidhi scheme details",
        "FSSAI registration benefits",
        "GST advantages for suppliers",
        "Insurance and safety guidelines"
      ]
    },
    {
      icon: BookOpen,
      title: "Business Best Practices",
      description: "Tips to grow your street food business",
      topics: [
        "Inventory management tips",
        "Customer service excellence",
        "Food safety and hygiene",
        "Financial planning for vendors"
      ]
    }
  ];

  const governmentSchemes = [
    {
      name: "PM SVANidhi",
      description: "Micro-credit scheme for street vendors with easy loans up to ₹50,000",
      link: "https://pmsvanidhi.mohua.gov.in/"
    },
    {
      name: "FSSAI License", 
      description: "Food safety certification for food businesses",
      link: "https://www.fssai.gov.in/"
    },
    {
      name: "Startup India",
      description: "Government initiatives for entrepreneurs and small businesses",
      link: "https://www.startupindia.gov.in/"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">Help & Education Center</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about using TrustBasket, building your business, 
            and accessing government benefits
          </p>
        </div>

        {/* Help Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {helpSections.map((section, index) => (
            <Card key={index} className="shadow-medium border-0 hover:shadow-strong transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {section.title}
                  </CardTitle>
                </div>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {section.topics.map((topic, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Government Schemes Section */}
        <Card className="shadow-medium border-0 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Award className="h-6 w-6" />
              Government Schemes & Benefits
            </CardTitle>
            <CardDescription>
              Take advantage of government initiatives designed to support street vendors and small businesses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {governmentSchemes.map((scheme, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-medium transition-shadow">
                  <h3 className="font-semibold text-primary mb-2">{scheme.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{scheme.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Start Guide */}
        <Card className="shadow-medium border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Quick Start Guide</CardTitle>
            <CardDescription>
              New to TrustBasket? Follow these steps to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* For Vendors */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary">For Vendors</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium">Register & Verify</p>
                      <p className="text-sm text-muted-foreground">Complete registration with documents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <p className="font-medium">Browse & Order</p>
                      <p className="text-sm text-muted-foreground">Find suppliers and place cash orders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium">Build Trust</p>
                      <p className="text-sm text-muted-foreground">Complete 3 orders to unlock credit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                    <div>
                      <p className="font-medium">Access Credit</p>
                      <p className="text-sm text-muted-foreground">Start purchasing on credit terms</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Suppliers */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary">For Suppliers</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium">Register Business</p>
                      <p className="text-sm text-muted-foreground">Set up supplier account with verification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <p className="font-medium">Add Products</p>
                      <p className="text-sm text-muted-foreground">Create your product catalog</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium">Create Combos</p>
                      <p className="text-sm text-muted-foreground">Design attractive combo deals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                    <div>
                      <p className="font-medium">Manage Orders</p>
                      <p className="text-sm text-muted-foreground">Accept orders and build relationships</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;