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
                  <div className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      Ready to join as a vendor? Complete our detailed registration to get verified.
                    </p>
                    <Button 
                      className="w-full" 
                      onClick={() => navigate('/vendor-registration')}
                    >
                      Continue Vendor Registration
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="supplier">
                  <div className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      Ready to start selling? Complete our supplier registration to list your products.
                    </p>
                    <Button 
                      className="w-full"
                      onClick={() => navigate('/supplier-registration')}
                    >
                      Continue Supplier Registration
                    </Button>
                  </div>
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