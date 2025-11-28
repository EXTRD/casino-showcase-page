import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Gamepad2, X } from "lucide-react";

const BonusPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition > windowHeight * 0.5) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-primary/30 shadow-[0_-4px_20px_hsla(45,100%,50%,0.2)] animate-fade-in">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gamepad2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary hidden sm:block">LuckySpin</span>
        </div>
        
        <div className="text-center flex-1 px-4">
          <span className="text-lg md:text-xl font-bold text-primary">
            🎁 Welcome Bonus: 100% up to $500 + 200 Free Spins!
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            Get Bonus
          </Button>
          <button 
            onClick={handleDismiss}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BonusPopup;
