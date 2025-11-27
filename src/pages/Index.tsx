import Header from "@/components/Header";
import TableOfContents from "@/components/TableOfContents";
import HeroBanner from "@/components/HeroBanner";
import SlotsSection from "@/components/SlotsSection";
import ArticleSection from "@/components/ArticleSection";
import ConclusionSection from "@/components/ConclusionSection";
import FAQSection from "@/components/FAQSection";
import PlayButton from "@/components/PlayButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TableOfContents />
      <main>
        <HeroBanner />
        <SlotsSection />
        <ArticleSection />
        <ConclusionSection />
        <FAQSection />
        <PlayButton />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
