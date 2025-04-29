// pages/legal/disclaimer.tsx
import Container from "@/components/container";
import legalData from "@/config/data/legal";
import { Heading, Small, H6 } from "@/components/ui/typography";

const LegalDisclaimerPage = () => {
  const { disclaimer, termsOfService } = legalData;

  return (
    <Container className="py-16">
      {/* Legal Disclaimer Section */}
      <div className="mb-8">
        <Heading>{disclaimer.title}</Heading>
        <Small>{disclaimer.content}</Small>
      </div>

      {/* Terms of Service Section */}
      <div className="mb-8">
        <Heading>{termsOfService.title}</Heading>
        {termsOfService.sections.map((section, index) => (
          <div key={index} className="mb-4">
            <H6>{section.heading}</H6>
            <Small>{section.content}</Small>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default LegalDisclaimerPage;
