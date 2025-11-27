import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Gift } from "lucide-react";

const bonuses = [
  { id: 1, name: "LuckySpin", bonus: "200% Welcome Bonus", color: "from-primary to-yellow-600" },
  { id: 2, name: "GoldenBet", bonus: "100 Free Spins", color: "from-amber-500 to-orange-600" },
  { id: 3, name: "RoyalWin", bonus: "500% First Deposit", color: "from-purple-500 to-pink-600" },
  { id: 4, name: "JackpotCity", bonus: "No Wagering Bonus", color: "from-red-500 to-rose-600" },
  { id: 5, name: "SpinPalace", bonus: "50 Free Spins Daily", color: "from-emerald-500 to-teal-600" },
  { id: 6, name: "CasinoMax", bonus: "300% Match Bonus", color: "from-blue-500 to-indigo-600" },
  { id: 7, name: "WinBig", bonus: "Cashback 20%", color: "from-cyan-500 to-sky-600" },
  { id: 8, name: "FortunePlay", bonus: "VIP Welcome Pack", color: "from-violet-500 to-purple-600" },
];

const CasinoBonusesSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleBonuses = 5;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(bonuses.length - visibleBonuses, prev + 1));
  };

  const displayedBonuses = bonuses.slice(startIndex, startIndex + visibleBonuses);

  return (
    <section id="bonuses" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          🎁 Casino <span className="text-primary">Bonuses</span>
        </h2>
        <div className="relative">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-card border border-border rounded-full p-2 hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-8">
            {displayedBonuses.map((bonus) => (
              <div
                key={bonus.id}
                className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all hover:shadow-[0_0_20px_hsla(45,100%,50%,0.2)]"
              >
                <div className={`h-24 bg-gradient-to-br ${bonus.color} flex items-center justify-center`}>
                  <Gift className="h-12 w-12 text-white" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-foreground font-bold text-lg mb-1">{bonus.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-3">{bonus.bonus}</p>
                  <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Bonus
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex >= bonuses.length - visibleBonuses}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-card border border-border rounded-full p-2 hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasinoBonusesSection;
