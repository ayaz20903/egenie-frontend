import HeroSection from "./components/HeroSection";
import ChatDemoSection from "./components/ChatDemoSection";
import WhatsAppMarketingSection from "./components/WhatsAppMarketingSection";
import WebsiteChatbot from "./components/WebsiteChatbot";
import AudienceSlider from "./components/AudienceSlider";
import IntegrationsSection from "./components/IntegrationsSection";
import FeatureShowcase from "./components/FeatureShowcase";
import AudienceHighlight from "./components/AudienceHighlight";
import PricingSection from "./components/PricingSection";
import Header from "./components/Header";
import ContactSection from "./components/ContactSection";
import ChatAnimation from "./components/ChatAnimation";
import CaseStudies from "./components/CaseStudies";
// import ChatbotGroceryStore from "./components/ChatbotGroceryStore";
// import NailArt from "./components/NailArt";
// import PizzaShopChat from "./components/PizzaShopChat";
// import Bubbletea from "./components/Bubbletea";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b]">
        <HeroSection />
        <ChatAnimation />
        <ChatDemoSection />
        <CaseStudies />
        <WebsiteChatbot />
      </div>
      <AudienceSlider />
      <FeatureShowcase />
      <AudienceHighlight />
      <WhatsAppMarketingSection />

      <div className="bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b]">
        <IntegrationsSection />
        <PricingSection />
        <ContactSection />
      </div>

      <Footer />

      {/* <WhatsAppChat /> */}
    </>
  );
}
