import { Button } from "@/components/ui/button";

const ConclusionSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card p-8 rounded-[25px] shadow-[0_4px_20px_hsla(45,100%,50%,0.1)] text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start <span className="text-primary">Winning?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied players who trust LuckySpin for their online gaming experience. 
            With secure payments, fair games, and exciting bonuses, your next big win is just a spin away. 
            Register now and claim your 200% welcome bonus!
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-[0_0_30px_hsla(45,100%,50%,0.4)]">
            Start Playing Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
