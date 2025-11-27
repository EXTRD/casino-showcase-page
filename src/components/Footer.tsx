import { Gamepad2, Shield, Ban, HeartHandshake } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">LuckySpin</span>
          </div>

          {/* Certification Logos */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-8 w-8" />
              <span className="text-sm">FairPlay</span>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-destructive text-destructive font-bold text-sm">
              18+
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <HeartHandshake className="h-8 w-8" />
              <span className="text-sm">GamCare</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About Us
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms & Conditions
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Responsible Gambling
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 LuckySpin. All rights reserved. Gambling can be addictive. Play responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
