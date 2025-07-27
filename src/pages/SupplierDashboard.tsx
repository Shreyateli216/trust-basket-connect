import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/layout/Header";
import { 
  Package, 
  TrendingUp, 
  Users, 
  CreditCard, 
  Plus,
  Edit,
  CheckCircle,
  XCircle,
  AlertCircle,
  Gift,
  Star
} from "lucide-react";

const SupplierDashboard = () => {
  const [supplierData] = useState({
    name: "Kumar Vegetables",
    totalProducts: 24,
    totalOrders: 156,
    monthlyRevenue: 45000,
    pendingOrders: 8,
    trustScore: 92
  });

  const [products, setProducts] = useState([
    { id: 1, name: "Red Onions", price: 45, unit: "kg", stock: 500, category: "Vegetables" },
    { id: 2, name: "Tomatoes", price: 35, unit: "kg", stock: 200, category: "Vegetables" },
    { id: 3, name: "Potatoes", price: 25, unit: "kg", stock: 800, category: "Vegetables" }
  ]);

  const [orders] = useState([
    {
      id: "#ORD001",
      vendor: "Raj's Chaat Corner",
      items: "Onions 5kg, Tomatoes 3kg",
      amount: 450,
      trustScore: 85,
      status: "pending",
      creditRequest: true,
      orderDate: "2024-01-25"
    },
    {
      id: "#ORD002",
      vendor: "Sharma Tea Stall", 
      items: "Onions 2kg",
      amount: 90,
      trustScore: 72,
      status: "completed",
      creditRequest: false,
      orderDate: "2024-01-24"
    },
    {
      id: "#ORD003",
      vendor: "Patel Snacks",
      items: "Potatoes 10kg",
      amount: 250,
      trustScore: 45,
      status: "pending",
      creditRequest: true,
      orderDate: "2024-01-24"
    }
  ]);

  const [combos] = useState([
    {
      id: 1,
      name: "Pav Bhaji Essentials",
      items: ["Onions 2kg", "Tomatoes 2kg", "Potatoes 3kg"],
      originalPrice: 280,
      comboPrice: 220,
      discount: 21,
      orders: 15
    },
    {
      id: 2,
      name: "Chaat Special Pack",
      items: ["Onions 3kg", "Tomatoes 2kg", "Green Chili 500g"],
      originalPrice: 350,
      comboPrice: 280,
      discount: 20,
      orders: 8
    }
  ]);

  const handleOrderAction = (orderId: string, action: "accept" | "reject") => {
    console.log(`${action} order ${orderId}`);
  };

  const getTrustBadgeColor = (score: number) => {
    if (score >= 80) return "bg-green-100 text-green-800";
    if (score >= 60) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Welcome, {supplierData.name}! 📦
          </h1>
          <p className="text-muted-foreground">
            Manage your products, orders, and grow your business
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Products</p>
                  <p className="text-2xl font-bold">{supplierData.totalProducts}</p>
                </div>
                <Package className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
                  <p className="text-2xl font-bold">₹{supplierData.monthlyRevenue.toLocaleString()}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold">{supplierData.totalOrders}</p>
                  <p className="text-xs text-muted-foreground">{supplierData.pendingOrders} pending</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Trust Score</p>
                  <p className="text-2xl font-bold text-green-600">{supplierData.trustScore}/100</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Pending Orders */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Pending Orders
                </CardTitle>
                <Badge>{orders.filter(o => o.status === "pending").length} pending</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.filter(o => o.status === "pending").map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.vendor}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{order.amount}</p>
                        <Badge className={getTrustBadgeColor(order.trustScore)}>
                          Trust: {order.trustScore}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{order.items}</p>
                    
                    {order.creditRequest && (
                      <div className="flex items-center gap-2 mb-3 p-2 bg-orange-50 rounded">
                        <CreditCard className="h-4 w-4 text-orange-600" />
                        <span className="text-sm text-orange-700">Credit Request</span>
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleOrderAction(order.id, "accept")}
                        className="flex-1"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Accept
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => handleOrderAction(order.id, "reject")}
                        className="flex-1"
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Combo Deals Performance */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5" />
                Combo Deals Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {combos.map((combo) => (
                  <div key={combo.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">{combo.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {combo.items.join(", ")}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{combo.comboPrice}</p>
                        <Badge className="bg-green-100 text-green-800">
                          {combo.discount}% OFF
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{combo.orders} orders</span>
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Combo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Management */}
        <Card className="shadow-medium border-0 mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Product Inventory
              </CardTitle>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <Input 
                      type="number" 
                      value={product.price} 
                      onChange={(e) => {
                        const newProducts = [...products];
                        const index = newProducts.findIndex(p => p.id === product.id);
                        newProducts[index].price = parseInt(e.target.value);
                        setProducts(newProducts);
                      }}
                    />
                    <p className="text-xs text-muted-foreground">Price per {product.unit}</p>
                  </div>
                  
                  <div>
                    <Input 
                      type="number" 
                      value={product.stock}
                      onChange={(e) => {
                        const newProducts = [...products];
                        const index = newProducts.findIndex(p => p.id === product.id);
                        newProducts[index].stock = parseInt(e.target.value);
                        setProducts(newProducts);
                      }}
                    />
                    <p className="text-xs text-muted-foreground">Stock ({product.unit})</p>
                  </div>
                  
                  <div>
                    <Badge variant={product.stock > 100 ? "default" : "destructive"}>
                      {product.stock > 100 ? "In Stock" : "Low Stock"}
                    </Badge>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupplierDashboard;