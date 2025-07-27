import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/layout/Header";
import { Upload, ArrowLeft, Plus, X, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SupplierRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    shopName: "",
    gst: "",
    serviceCities: [""],
    bankDetails: "",
    agreedToTerms: false
  });
  const [products, setProducts] = useState([{ name: "", category: "", unit: "", price: "" }]);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Supplier registration:", { ...formData, products });
    navigate("/login");
  };

  const addCity = () => {
    setFormData({
      ...formData,
      serviceCities: [...formData.serviceCities, ""]
    });
  };

  const removeCity = (index: number) => {
    const newCities = formData.serviceCities.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      serviceCities: newCities
    });
  };

  const updateCity = (index: number, value: string) => {
    const newCities = [...formData.serviceCities];
    newCities[index] = value;
    setFormData({
      ...formData,
      serviceCities: newCities
    });
  };

  const addProduct = () => {
    setProducts([...products, { name: "", category: "", unit: "", price: "" }]);
  };

  const removeProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const updateProduct = (index: number, field: string, value: string) => {
    const newProducts = [...products];
    newProducts[index] = { ...newProducts[index], [field]: value };
    setProducts(newProducts);
  };

  const categories = [
    "Vegetables & Fruits",
    "Grains & Rice",
    "Pulses & Lentils",
    "Spices & Masalas",
    "Oil & Ghee",
    "Dairy Products",
    "Frozen Items",
    "Dry Fruits & Nuts",
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

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-medium border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">Join as Supplier</CardTitle>
              <CardDescription className="text-lg">
                Start selling raw materials to verified street vendors
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="mb-6 p-4 bg-accent rounded-lg">
                <div className="flex items-center gap-2 text-primary font-medium mb-2">
                  <TrendingUp className="h-5 w-5" />
                  Boost Your Business
                </div>
                <p className="text-sm text-muted-foreground">
                  Combo deals and higher trust scores increase your visibility to vendors. 
                  Build long-term relationships with verified street food businesses.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Business Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Business Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Owner/Contact Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shopName">Shop/Company Name *</Label>
                      <Input 
                        id="shopName" 
                        placeholder="ABC Suppliers Pvt Ltd"
                        value={formData.shopName}
                        onChange={(e) => setFormData({...formData, shopName: e.target.value})}
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="business@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                      />
                    </div>
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gst">GST Number (Optional)</Label>
                    <Input 
                      id="gst" 
                      placeholder="22AAAAA0000A1Z5"
                      value={formData.gst}
                      onChange={(e) => setFormData({...formData, gst: e.target.value})}
                    />
                  </div>
                </div>

                {/* Service Areas */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Service Areas</h3>
                  
                  <div className="space-y-3">
                    <Label>Cities You Can Deliver To *</Label>
                    {formData.serviceCities.map((city, index) => (
                      <div key={index} className="flex gap-2">
                        <Input 
                          placeholder="e.g., Mumbai, Pune, Thane"
                          value={city}
                          onChange={(e) => updateCity(index, e.target.value)}
                          required={index === 0}
                        />
                        {index > 0 && (
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="icon"
                            onClick={() => removeCity(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button type="button" variant="outline" onClick={addCity} className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Another City
                    </Button>
                  </div>
                </div>

                {/* Product Catalog */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Product Catalog</h3>
                  
                  <div className="space-y-4">
                    {products.map((product, index) => (
                      <Card key={index} className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="space-y-2">
                            <Label>Product Name *</Label>
                            <Input 
                              placeholder="Red Onions"
                              value={product.name}
                              onChange={(e) => updateProduct(index, "name", e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Category *</Label>
                            <select 
                              className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm"
                              value={product.category}
                              onChange={(e) => updateProduct(index, "category", e.target.value)}
                              required
                            >
                              <option value="">Select category</option>
                              {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label>Unit *</Label>
                            <Input 
                              placeholder="kg, liter, piece"
                              value={product.unit}
                              onChange={(e) => updateProduct(index, "unit", e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Price *</Label>
                            <div className="flex gap-2">
                              <Input 
                                type="number"
                                placeholder="45"
                                value={product.price}
                                onChange={(e) => updateProduct(index, "price", e.target.value)}
                                required
                              />
                              {index > 0 && (
                                <Button 
                                  type="button" 
                                  variant="outline" 
                                  size="icon"
                                  onClick={() => removeProduct(index)}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                    <Button type="button" variant="outline" onClick={addProduct} className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Another Product
                    </Button>
                  </div>
                </div>

                {/* Document Uploads */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Required Documents</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Business License *</Label>
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Upload Business License</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Product Catalog (Optional)</Label>
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Upload CSV/PDF</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bank Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Payment Details</h3>
                  <div className="space-y-2">
                    <Label htmlFor="bankDetails">Bank Account Details *</Label>
                    <Textarea 
                      id="bankDetails"
                      placeholder="Account Holder Name, Account Number, IFSC Code, Bank Name"
                      value={formData.bankDetails}
                      onChange={(e) => setFormData({...formData, bankDetails: e.target.value})}
                      required
                    />
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
                      I agree to provide quality products and maintain fair pricing. I understand that vendor payments may be split (advance + credit balance) and agree to TrustBasket's <span className="text-primary underline cursor-pointer">Terms of Service</span> and <span className="text-primary underline cursor-pointer">Privacy Policy</span>.
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 text-lg" disabled={!formData.agreedToTerms}>
                  Complete Supplier Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SupplierRegistration;