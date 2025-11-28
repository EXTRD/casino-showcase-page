import Header from "@/components/Header";
import TableOfContents from "@/components/TableOfContents";
import HeroBanner from "@/components/HeroBanner";
import SlotsSection from "@/components/SlotsSection";
import CasinoBonusesSection from "@/components/CasinoBonusesSection";
import ArticleSection from "@/components/ArticleSection";
import ConclusionSection from "@/components/ConclusionSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import BonusPopup from "@/components/BonusPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TableOfContents />
      <main>
        <HeroBanner />
        <SlotsSection />
        <CasinoBonusesSection />
        <ArticleSection />
        <ConclusionSection />
        <FAQSection />
      </main>
      <Footer />
      <BonusPopup />
    </div>
  );
};

export default Index;
