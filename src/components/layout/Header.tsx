import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">T</span>
          </div>
          <span className="font-bold text-xl text-primary">TrustBasket</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="/marketplace" className="text-foreground hover:text-primary transition-colors">
            Marketplace
          </a>
          <a href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart
          </Button>
          <Button variant="outline" size="sm" onClick={() => navigate('/login')}>
            <User className="h-4 w-4 mr-2" />
            Login
          </Button>
          <Button size="sm" onClick={() => navigate('/register')}>
            Register
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4">
          <nav className="flex flex-col space-y-4">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/marketplace" className="text-foreground hover:text-primary transition-colors">
              Marketplace
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="outline" size="sm" onClick={() => navigate('/login')}>
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button size="sm" onClick={() => navigate('/register')}>
                Register
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;