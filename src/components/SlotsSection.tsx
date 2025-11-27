import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slot1 from "@/assets/slot-1.jpg";
import slot2 from "@/assets/slot-2.jpg";
import slot3 from "@/assets/slot-3.jpg";
import slot4 from "@/assets/slot-4.jpg";
import slot5 from "@/assets/slot-5.jpg";
import slot6 from "@/assets/slot-6.jpg";
import slot7 from "@/assets/slot-7.jpg";
import slot8 from "@/assets/slot-8.jpg";

const slots = [
  { id: 1, name: "Gem Rush", image: slot1 },
  { id: 2, name: "Pharaoh's Gold", image: slot2 },
  { id: 3, name: "Lucky 777", image: slot3 },
  { id: 4, name: "Wild West", image: slot4 },
  { id: 5, name: "Dragon's Fire", image: slot5 },
  { id: 6, name: "Ocean Treasure", image: slot6 },
  { id: 7, name: "Cosmic Slots", image: slot7 },
  { id: 8, name: "Viking Fortune", image: slot8 },
];

const SlotsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleSlots = 5;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(slots.length - visibleSlots, prev + 1));
  };

  const displayedSlots = slots.slice(startIndex, startIndex + visibleSlots);

  return (
    <section id="slots" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          🎰 Popular <span className="text-primary">Slots</span>
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
            {displayedSlots.map((slot) => (
              <div
                key={slot.id}
                className="group relative rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105"
              >
                <img
                  src={slot.image}
                  alt={slot.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                  <span className="text-foreground font-bold text-lg">{slot.name}</span>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Play
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex >= slots.length - visibleSlots}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-card border border-border rounded-full p-2 hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SlotsSection;
