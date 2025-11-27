import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gamepad2 className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">LuckySpin</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Login
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
