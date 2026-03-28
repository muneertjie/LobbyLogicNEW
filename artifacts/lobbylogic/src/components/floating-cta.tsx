import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approx 600px)
      setIsVisible(window.scrollY > 600);
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

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-all duration-500 transform",
        isVisible 
          ? "translate-y-0 opacity-100 scale-100" 
          : "translate-y-10 opacity-0 scale-95 pointer-events-none"
      )}
    >
      <Button 
        onClick={handleBookDemo}
        size="lg"
        className="rounded-full shadow-azure bg-azure hover:bg-azure-hover text-white px-6 py-6 text-base font-semibold group flex items-center gap-2"
      >
        <Calendar className="w-5 h-5 group-hover:animate-pulse" />
        <span className="hidden sm:inline">Book a Demo</span>
        <span className="sm:hidden">Demo</span>
      </Button>
    </div>
  );
}
