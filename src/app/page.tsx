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

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhatsAppMarketingSection />

      <ChatDemoSection />
      <WebsiteChatbot />
      <AudienceSlider />
      <FeatureShowcase />
      <AudienceHighlight />
      <IntegrationsSection />

      <PricingSection />

      {/* <WhatsAppChat /> */}
    </>
  );
}
