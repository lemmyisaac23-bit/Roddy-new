import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomeBanner } from "@/components/marketing/HomeBanner";
import { CloudMiningSection } from "@/components/marketing/CloudMiningSection";
import { HowToStartSection } from "@/components/marketing/HowToStartSection";
import { WhatIsCloudMiningSection, WhyChooseSection } from "@/components/marketing/InfoSections";
import { ReviewsSection } from "@/components/marketing/ReviewsSection";
import { MarketingSupportWidgets } from "@/components/marketing/MarketingSupportWidgets";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <MarketingSupportWidgets />
      <Navbar />
      <main className="pt-[72px]">
        <HomeBanner />
        <CloudMiningSection />
        <HowToStartSection />
        <WhatIsCloudMiningSection />
        <WhyChooseSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
