import { Button } from "@/components/ui/button";

const ArticleSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
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
            <p className="text-muted-foreground leading-relaxed mb-4">
              Online slots use Random Number Generators (RNG) to ensure fair and unpredictable outcomes. 
              Each spin is independent, giving every player an equal chance of hitting the jackpot.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Slot Type</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">RTP</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Volatility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Classic Slots</td>
                    <td className="py-3 px-4 text-primary">95-97%</td>
                    <td className="py-3 px-4 text-muted-foreground">Low</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Video Slots</td>
                    <td className="py-3 px-4 text-primary">94-98%</td>
                    <td className="py-3 px-4 text-muted-foreground">Medium</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-muted-foreground">Progressive Jackpots</td>
                    <td className="py-3 px-4 text-primary">88-94%</td>
                    <td className="py-3 px-4 text-muted-foreground">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">Classic Slots</Button>
              <Button variant="outline" size="sm">Video Slots</Button>
              <Button variant="outline" size="sm">Jackpot Games</Button>
              <Button variant="outline" size="sm">Megaways</Button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-[25px] shadow-[0_4px_20px_hsla(45,100%,50%,0.1)]">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Maximizing Your Bonuses
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome bonuses are the best way to boost your bankroll when starting out. 
              Look for casinos offering matched deposits, free spins, and loyalty rewards.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Bonus Type</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Value</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Wagering</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Welcome Bonus</td>
                    <td className="py-3 px-4 text-primary">200%</td>
                    <td className="py-3 px-4 text-muted-foreground">30x</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Free Spins</td>
                    <td className="py-3 px-4 text-primary">100 Spins</td>
                    <td className="py-3 px-4 text-muted-foreground">25x</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-muted-foreground">Cashback</td>
                    <td className="py-3 px-4 text-primary">20%</td>
                    <td className="py-3 px-4 text-muted-foreground">No Wagering</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">Welcome Offers</Button>
              <Button variant="outline" size="sm">Free Spins</Button>
              <Button variant="outline" size="sm">Reload Bonuses</Button>
              <Button variant="outline" size="sm">VIP Rewards</Button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-[25px] shadow-[0_4px_20px_hsla(45,100%,50%,0.1)]">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Responsible Gaming Tips
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Set a budget before you play and stick to it. Gambling should always be entertainment, 
              not a way to make money. Take regular breaks and never chase losses.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Tool</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Purpose</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Deposit Limits</td>
                    <td className="py-3 px-4 text-muted-foreground">Control spending</td>
                    <td className="py-3 px-4 text-primary">Account Settings</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Self-Exclusion</td>
                    <td className="py-3 px-4 text-muted-foreground">Take a break</td>
                    <td className="py-3 px-4 text-primary">Support Team</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-muted-foreground">Reality Check</td>
                    <td className="py-3 px-4 text-muted-foreground">Time reminders</td>
                    <td className="py-3 px-4 text-primary">Auto-Enabled</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">Set Limits</Button>
              <Button variant="outline" size="sm">Self-Exclude</Button>
              <Button variant="outline" size="sm">Get Help</Button>
              <Button variant="outline" size="sm">GamCare</Button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ArticleSection;
