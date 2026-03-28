import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookDemo = () => {
    toast({
      title: "Opening scheduling calendar...",
      description: "In a production environment, this would open Calendly or your booking tool.",
    });
  };

  const navLinks = [
    { name: "Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Industries", href: "#industries" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 z-50">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="6" width="20" height="16" rx="2.5" stroke={isScrolled ? "#060147" : "white"} strokeWidth="2.5" fill="none"/>
              <rect x="10" y="11" width="20" height="16" rx="2.5" stroke={isScrolled ? "#060147" : "white"} strokeWidth="2.5" fill={isScrolled ? "white" : "#060147"}/>
              <rect x="13" y="14" width="8" height="6" rx="1" stroke={isScrolled ? "#060147" : "white"} strokeWidth="1.5" fill="none"/>
            </svg>
            <span className={cn("text-xl font-bold tracking-tight transition-colors", isScrolled ? "text-navy" : "text-white")} style={{fontFamily: "var(--font-display)"}}>
              LobbyLogic
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-azure",
                isScrolled ? "text-navy" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button 
            onClick={handleBookDemo}
            className={cn(
              "font-semibold rounded-full px-6 shadow-azure transition-transform hover:-translate-y-0.5",
              isScrolled 
                ? "bg-azure hover:bg-azure-hover text-white" 
                : "bg-white text-navy hover:bg-white/90"
            )}
          >
            Book a Demo
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-navy" />
          ) : (
            <Menu className={cn("h-6 w-6", isScrolled ? "text-navy" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col pt-24 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-navy font-semibold border-b border-platinum pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button onClick={handleBookDemo} className="mt-4 bg-azure hover:bg-azure-hover text-white rounded-xl py-6 text-lg w-full">
              Book a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
