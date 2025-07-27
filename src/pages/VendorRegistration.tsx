import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/layout/Header";
import { Upload, ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VendorRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    shopName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    foodType: "",
    creditMode: "",
    agreedToTerms: false
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Vendor registration:", formData);
    navigate("/login");
  };

  const foodTypes = [
    "Chaat & Street Snacks",
    "South Indian (Dosa, Idli)",
    "North Indian (Chole Bhature)",
    "Chinese (Noodles, Momos)",
    "Beverages & Juices",
    "Sweets & Desserts",
    "Pav Bhaji & Vada Pav",
    "Tea & Coffee Stall",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/register')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Registration
        </Button>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-medium border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">Join as Vendor</CardTitle>
              <CardDescription className="text-lg">
                Register your street food business with TrustBasket
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="mb-6 p-4 bg-accent rounded-lg">
                <div className="flex items-center gap-2 text-primary font-medium mb-2">
                  <CheckCircle className="h-5 w-5" />
                  Credit Access Information
                </div>
                <p className="text-sm text-muted-foreground">
                  Credit access will be granted after 3 successful transactions with a supplier. 
                  This helps build trust and ensures secure trading for everyone.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input 
                      id="fullName" 
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number *</Label>
                      <Input 
                        id="mobile" 
                        type="tel" 
                        placeholder="+91 9876543210"
                        value={formData.mobile}
                        onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Business Details</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="shopName">Shop/Stall Name *</Label>
                    <Input 
                      id="shopName" 
                      placeholder="e.g., Raj's Chaat Corner"
                      value={formData.shopName}
                      onChange={(e) => setFormData({...formData, shopName: e.target.value})}
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="foodType">Type of Street Food Served *</Label>
                    <Select value={formData.foodType} onValueChange={(value) => setFormData({...formData, foodType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your food specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        {foodTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Business Address *</Label>
                    <Input 
                      id="address" 
                      placeholder="Street address, landmark"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      required 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input 
                        id="city" 
                        placeholder="Mumbai"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input 
                        id="state" 
                        placeholder="Maharashtra"
                        value={formData.state}
                        onChange={(e) => setFormData({...formData, state: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input 
                        id="pincode" 
                        placeholder="400001"
                        value={formData.pincode}
                        onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Document Uploads */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Required Documents</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Aadhar Card *</Label>
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Upload Aadhar Card</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Shop Photo *</Label>
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Upload Shop Photo</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Shop License *</Label>
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Upload License</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Preferences */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Payment Preferences</h3>
                  <div className="space-y-2">
                    <Label htmlFor="creditMode">Preferred Credit Payment Mode</Label>
                    <Select value={formData.creditMode} onValueChange={(value) => setFormData({...formData, creditMode: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="upi">UPI (Google Pay, PhonePe, Paytm)</SelectItem>
                        <SelectItem value="bank">Bank Transfer (NEFT/RTGS)</SelectItem>
                        <SelectItem value="cod">Cash on Delivery</SelectItem>
                        <SelectItem value="wallet">Digital Wallet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={formData.agreedToTerms}
                      onCheckedChange={(checked) => setFormData({...formData, agreedToTerms: checked as boolean})}
                      required 
                    />
                    <Label htmlFor="terms" className="text-sm leading-5">
                      I agree to repay credit within 7 days and understand that my trust score will be affected by payment history. 
                      I also agree to TrustBasket's <span className="text-primary underline cursor-pointer">Terms of Service</span> and <span className="text-primary underline cursor-pointer">Privacy Policy</span>.
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 text-lg" disabled={!formData.agreedToTerms}>
                  Complete Vendor Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VendorRegistration;