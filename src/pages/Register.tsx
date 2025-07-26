import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/layout/Header";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"vendor" | "supplier">("vendor");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the actual registration logic
    console.log("Registration attempted for", userType);
    
    // For demo purposes, redirect to login
    navigate("/login");
  };

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

        <div className="max-w-md mx-auto">
          <Card className="shadow-medium border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-primary">Join TrustBasket</CardTitle>
              <CardDescription>
                Create your account and start growing your business
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs value={userType} onValueChange={(value) => setUserType(value as "vendor" | "supplier")}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="vendor">Vendor</TabsTrigger>
                  <TabsTrigger value="supplier">Supplier</TabsTrigger>
                </TabsList>

                <TabsContent value="vendor">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 9876543210" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Mumbai" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="foodType">Type of Food</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select food type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="chaat">Chaat</SelectItem>
                          <SelectItem value="south-indian">South Indian</SelectItem>
                          <SelectItem value="chinese">Chinese</SelectItem>
                          <SelectItem value="beverages">Beverages</SelectItem>
                          <SelectItem value="sweets">Sweets</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      Register as Vendor
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="supplier">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input id="businessName" placeholder="ABC Suppliers" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ownerName">Owner Name</Label>
                      <Input id="ownerName" placeholder="John Doe" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="business@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 9876543210" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deliveryArea">Delivery Area</Label>
                      <Input id="deliveryArea" placeholder="Mumbai, Pune" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gst">GST Number</Label>
                      <Input id="gst" placeholder="22AAAAA0000A1Z5" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fssai">FSSAI License (if applicable)</Label>
                      <Input id="fssai" placeholder="12345678901234" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      Register as Supplier
                    </Button>
                  </form>
                </TabsContent>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Button
                      variant="link"
                      className="p-0 h-auto font-medium text-primary"
                      onClick={() => navigate('/login')}
                    >
                      Sign in here
                    </Button>
                  </p>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;