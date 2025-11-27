const ArticleSection = () => {
  return (
    <section id="about" className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-6 text-center">
          Your Ultimate Guide to <span className="text-primary">Online Casino Gaming</span>
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Discover the exciting world of online slots, bonuses, and winning strategies. 
          Whether you're a beginner or seasoned player, we have everything you need.
        </p>

        <article className="space-y-8">
          <div className="bg-card p-6 rounded-[25px] shadow-[0_4px_20px_hsla(45,100%,50%,0.1)]">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How Online Slots Work
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Online slots use Random Number Generators (RNG) to ensure fair and unpredictable outcomes. 
              Each spin is independent, giving every player an equal chance of hitting the jackpot. 
              Modern video slots feature multiple paylines, bonus rounds, and exciting themes that 
              transport you to different worlds while you play.
            </p>
          </div>

          <div className="bg-card p-6 rounded-[25px] shadow-[0_4px_20px_hsla(45,100%,50%,0.1)]">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Maximizing Your Bonuses
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome bonuses are the best way to boost your bankroll when starting out. 
              Look for casinos offering matched deposits, free spins, and loyalty rewards. 
              Always read the wagering requirements carefully - lower requirements mean easier 
              withdrawal of your winnings. Our 200% welcome bonus gives you three times the 
              playing power!
            </p>
          </div>

          <div className="bg-card p-6 rounded-[25px] shadow-[0_4px_20px_hsla(45,100%,50%,0.1)]">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Responsible Gaming Tips
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Set a budget before you play and stick to it. Gambling should always be entertainment, 
              not a way to make money. Take regular breaks, never chase losses, and remember that 
              the house always has an edge. If you feel gambling is becoming a problem, seek help 
              immediately through organizations like GamCare.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ArticleSection;
