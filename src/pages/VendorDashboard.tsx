import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import { 
  CreditCard, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Wallet,
  ShoppingCart,
  Award,
  Calendar
} from "lucide-react";

const VendorDashboard = () => {
  const [vendorData] = useState({
    name: "Raj Kumar",
    shopName: "Raj's Chaat Corner",
    trustScore: 85,
    creditLimit: 5000,
    creditUsed: 2800,
    pendingDues: 1200,
    nextDueDate: "2024-01-30",
    completedOrders: 47,
    pendingOrders: 3
  });

  const [orderHistory] = useState([
    {
      id: "#ORD001",
      date: "2024-01-25",
      supplier: "Kumar Vegetables",
      items: "Onions 5kg, Tomatoes 3kg",
      amount: 450,
      status: "completed",
      creditUsed: true,
      dueDate: "2024-01-30"
    },
    {
      id: "#ORD002", 
      date: "2024-01-23",
      supplier: "Spice Palace",
      items: "Garam Masala 500g, Red Chili 1kg",
      amount: 680,
      status: "completed",
      creditUsed: false,
      dueDate: null
    },
    {
      id: "#ORD003",
      date: "2024-01-22",
      supplier: "Fresh Farm Co.",
      items: "Potatoes 10kg, Carrots 2kg",
      amount: 320,
      status: "pending",
      creditUsed: true,
      dueDate: "2024-01-28"
    }
  ]);

  const [creditEligibility] = useState([
    { supplier: "Kumar Vegetables", orders: 5, eligible: true },
    { supplier: "Spice Palace", orders: 2, eligible: false },
    { supplier: "Fresh Farm Co.", orders: 3, eligible: true },
    { supplier: "Dal Depot", orders: 1, eligible: false }
  ]);

  const trustScoreColor = vendorData.trustScore >= 80 ? "text-green-600" : 
                         vendorData.trustScore >= 60 ? "text-yellow-600" : "text-red-600";

  const creditUtilization = (vendorData.creditUsed / vendorData.creditLimit) * 100;

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Welcome back, {vendorData.name}! 👋
          </h1>
          <p className="text-muted-foreground">
            {vendorData.shopName} • Managing your raw material purchases
          </p>
        </div>

        {/* Credit Unlock Banner */}
        <Card className="mb-6 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800">Credit Unlocked! 🎉</h3>
                <p className="text-sm text-green-700">
                  You can now purchase on credit from Kumar Vegetables and Fresh Farm Co.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Trust Score */}
          <Card className="shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Trust Score</p>
                  <p className={`text-2xl font-bold ${trustScoreColor}`}>
                    {vendorData.trustScore}/100
                  </p>
                </div>
                <Award className="h-8 w-8 text-primary" />
              </div>
              <Progress value={vendorData.trustScore} className="mt-3" />
              <p className="text-xs text-muted-foreground mt-2">
                {vendorData.trustScore >= 80 ? "Excellent!" : "Good"}
              </p>
            </CardContent>
          </Card>

          {/* Credit Usage */}
          <Card className="shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Credit Used</p>
                  <p className="text-2xl font-bold">₹{vendorData.creditUsed}</p>
                  <p className="text-xs text-muted-foreground">of ₹{vendorData.creditLimit} limit</p>
                </div>
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <Progress value={creditUtilization} className="mt-3" />
            </CardContent>
          </Card>

          {/* Pending Dues */}
          <Card className="shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Dues</p>
                  <p className="text-2xl font-bold text-orange-600">₹{vendorData.pendingDues}</p>
                  <p className="text-xs text-muted-foreground">Due: {vendorData.nextDueDate}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          {/* Orders */}
          <Card className="shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold">{vendorData.completedOrders}</p>
                  <p className="text-xs text-muted-foreground">{vendorData.pendingOrders} pending</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order History */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orderHistory.slice(0, 5).map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.supplier}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{order.amount}</p>
                        <Badge 
                          variant={order.status === "completed" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{order.items}</p>
                    <div className="flex justify-between items-center text-xs">
                      <span>{order.date}</span>
                      {order.creditUsed && (
                        <div className="flex items-center gap-1 text-orange-600">
                          <CreditCard className="h-3 w-3" />
                          Credit • Due: {order.dueDate}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Orders
              </Button>
            </CardContent>
          </Card>

          {/* Credit Eligibility */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                Credit Eligibility Status
              </CardTitle>
              <CardDescription>
                Credit access is granted after 3 successful orders with each supplier
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {creditEligibility.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{item.supplier}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.orders} successful orders
                      </p>
                    </div>
                    <div className="text-right">
                      {item.eligible ? (
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Eligible
                        </Badge>
                      ) : (
                        <Badge variant="secondary">
                          <Clock className="h-3 w-3 mr-1" />
                          {3 - item.orders} more needed
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Reminder */}
        {vendorData.pendingDues > 0 && (
          <Card className="mt-6 bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-orange-600" />
                  <div>
                    <h3 className="font-semibold text-orange-800">Payment Reminder</h3>
                    <p className="text-sm text-orange-700">
                      Next payment of ₹{vendorData.pendingDues} is due on {vendorData.nextDueDate}
                    </p>
                  </div>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Pay Now
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default VendorDashboard;