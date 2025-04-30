import Hero from "@/components/hero";
import AboutUsSection from "@/components/sections/about-us";
import BecomeAPartnerSection from "@/components/sections/become-a-partner";
import ContactUsSection from "@/components/sections/contact-us";
import HowItWorksSection from "@/components/sections/how-it-works";
import NewsletterSignUpSection from "@/components/sections/newsletter";
export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUsSection />
      <HowItWorksSection />
      <BecomeAPartnerSection />
      <NewsletterSignUpSection />
      <ContactUsSection />
    </div>
  );
}
