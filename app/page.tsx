import AlternateImageWithFeatureListSection from "./components/alternate";
import AppScreenshotWithCTAsHero from "./components/cta-app-preview";
import DefaultFeatureListSection from "./components/default-feature";
import DefaultNewsletterSection from "./components/default-newsletter";
import DefaultPricingTable from "./components/default-pricing";
import DescriptionWithFeatureListIconsSection from "./components/description-icon-list";
import GridLayoutTestimonialCards from "./components/grid-layout-cards";
import SearchBarWithLinksFAQSection from "./components/help-center-search";
import IllustrationWithStatisticsSocialProof from "./components/illustration";

export default function Home() {
  return (
    <main>
      <AppScreenshotWithCTAsHero />
      <DescriptionWithFeatureListIconsSection />
      <AlternateImageWithFeatureListSection />
      <GridLayoutTestimonialCards />
      <IllustrationWithStatisticsSocialProof />
      <DefaultPricingTable />
      <SearchBarWithLinksFAQSection />
      <DefaultNewsletterSection />
    </main>
  );
}
