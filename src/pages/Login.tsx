import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"vendor" | "supplier">("vendor");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the actual login logic
    console.log("Login attempted for", userType);
    
    // For demo purposes, redirect to appropriate dashboard
    if (userType === "vendor") {
      navigate("/vendor-dashboard");
    } else {
      navigate("/supplier-dashboard");
    }
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
              <CardTitle className="text-2xl font-bold text-primary">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to access your TrustBasket account
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs value={userType} onValueChange={(value) => setUserType(value as "vendor" | "supplier")}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="vendor">Vendor</TabsTrigger>
                  <TabsTrigger value="supplier">Supplier</TabsTrigger>
                </TabsList>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Sign In as {userType === "vendor" ? "Vendor" : "Supplier"}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Button
                      variant="link"
                      className="p-0 h-auto font-medium text-primary"
                      onClick={() => navigate('/register')}
                    >
                      Register here
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

export default Login;