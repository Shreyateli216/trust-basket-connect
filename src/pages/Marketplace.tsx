import { useState } from "react";
import { Search, Filter, Star, MapPin, ShoppingCart, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/layout/Header";

// Mock product data
const products = [
  {
    id: 1,
    name: "Fresh Red Onions",
    image: "🧅",
    price: 45,
    unit: "kg",
    supplier: "Kumar Vegetables",
    location: "Andheri East",
    rating: 4.5,
    reviews: 124,
    category: "vegetables",
    trustBadge: "verified"
  },
  {
    id: 2,
    name: "Refined Sunflower Oil",
    image: "🛢️",
    price: 140,
    unit: "liter",
    supplier: "City Oil Mart",
    location: "Bandra West",
    rating: 4.8,
    reviews: 89,
    category: "oil",
    trustBadge: "gold"
  },
  {
    id: 3,
    name: "Basmati Rice Premium",
    image: "🌾",
    price: 85,
    unit: "kg",
    supplier: "Grain House",
    location: "Kurla",
    rating: 4.3,
    reviews: 156,
    category: "grains",
    trustBadge: "verified"
  },
  {
    id: 4,
    name: "Garam Masala Mix",
    image: "🌶️",
    price: 280,
    unit: "kg",
    supplier: "Spice Palace",
    location: "Crawford Market",
    rating: 4.7,
    reviews: 203,
    category: "spices",
    trustBadge: "gold"
  },
  {
    id: 5,
    name: "Fresh Tomatoes",
    image: "🍅",
    price: 35,
    unit: "kg",
    supplier: "Fresh Farm Co.",
    location: "Vashi",
    rating: 4.2,
    reviews: 78,
    category: "vegetables",
    trustBadge: "verified"
  },
  {
    id: 6,
    name: "Toor Dal Premium",
    image: "🫘",
    price: 120,
    unit: "kg",
    supplier: "Dal Depot",
    location: "Dadar",
    rating: 4.6,
    reviews: 167,
    category: "pulses",
    trustBadge: "gold"
  }
];

const comboDeals = [
  {
    id: 1,
    name: "Pav Bhaji Starter Pack",
    items: ["Onions 2kg", "Tomatoes 2kg", "Butter 500g", "Pav 20pcs"],
    originalPrice: 280,
    comboPrice: 220,
    discount: 21,
    supplier: "Fresh Combo Store",
    image: "🥪"
  },
  {
    id: 2,
    name: "Biryani Essentials",
    items: ["Basmati Rice 5kg", "Chicken Masala 200g", "Fried Onions 500g"],
    originalPrice: 650,
    comboPrice: 520,
    discount: 20,
    supplier: "Biryani Hub",
    image: "🍚"
  },
  {
    id: 3,
    name: "Tea Stall Complete Kit",
    items: ["Tea Leaves 1kg", "Sugar 2kg", "Milk Powder 500g", "Ginger 250g"],
    originalPrice: 420,
    comboPrice: 350,
    discount: 17,
    supplier: "Tea Time Supplies",
    image: "☕"
  }
];

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "vegetables", label: "Vegetables" },
    { value: "oil", label: "Oil & Ghee" },
    { value: "grains", label: "Grains & Rice" },
    { value: "spices", label: "Spices" },
    { value: "pulses", label: "Pulses & Lentils" }
  ];

  const getTrustBadgeColor = (badge: string) => {
    switch (badge) {
      case "gold": return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case "verified": return "bg-gradient-to-r from-green-500 to-green-600 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.supplier.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-6">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for onion, oil, masala..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            
            <div className="flex gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px] h-12">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[160px] h-12">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Combo Deals Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">🎯 Best Combo Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comboDeals.map((combo) => (
              <Card key={combo.id} className="shadow-medium hover:shadow-large transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{combo.image}</span>
                    <div>
                      <h3 className="font-semibold text-lg">{combo.name}</h3>
                      <p className="text-sm text-muted-foreground">{combo.supplier}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-muted-foreground">Includes:</p>
                    <ul className="text-sm space-y-1">
                      {combo.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg font-bold text-primary">₹{combo.comboPrice}</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">₹{combo.originalPrice}</span>
                      <Badge className="ml-2 bg-gradient-to-r from-green-500 to-green-600 text-white">
                        {combo.discount}% OFF
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Buy Combo
                    </Button>
                    <Button variant="outline" className="flex-1" size="sm">
                      <CreditCard className="h-4 w-4 mr-2" />
                      On Credit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-primary mb-4">🛒 All Products</h2>
          <p className="text-muted-foreground mb-6">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="shadow-medium hover:shadow-large transition-all duration-300 border-0 group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-muted/30 to-muted/60 rounded-t-lg flex items-center justify-center text-6xl relative overflow-hidden">
                  {product.image}
                  <Badge 
                    className={`absolute top-3 right-3 text-xs font-medium ${getTrustBadgeColor(product.trustBadge)}`}
                  >
                    {product.trustBadge === "gold" ? "Gold Trust" : "Verified"}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{product.supplier}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{product.location}</span>
                    <div className="flex items-center gap-1 ml-auto">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xl font-bold text-primary">₹{product.price}</span>
                      <span className="text-sm text-muted-foreground">/{product.unit}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <CreditCard className="h-4 w-4 mr-2" />
                      On Credit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your search.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;