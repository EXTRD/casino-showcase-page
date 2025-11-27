import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section id="home" className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <img
        src={heroBanner}
        alt="Casino welcome bonus banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-xl">
          <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
            🎰 Welcome Bonus
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Get <span className="text-primary">200%</span> Bonus
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Up to €1,000 + 100 Free Spins
          </p>
          <p className="text-muted-foreground mb-8">
            Start your winning journey today with the best welcome offer in online gaming!
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-[0_0_30px_hsla(45,100%,50%,0.4)]">
            Play Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
