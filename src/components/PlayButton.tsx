import { Button } from "@/components/ui/button";

const PlayButton = () => {
  return (
    <section id="bonuses" className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Don't Miss Your Chance to <span className="text-primary">Win Big!</span>
        </h2>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-12 py-7 shadow-[0_0_40px_hsla(45,100%,50%,0.5)] animate-pulse">
          🎰 Play Now
        </Button>
      </div>
    </section>
  );
};

export default PlayButton;
