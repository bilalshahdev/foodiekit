// pages/legal/privacy-policy.tsx
import Container from "@/components/container";
import legalData from "@/config/data/legal";
import { Heading, H6, Small } from "@/components/ui/typography";

const PrivacyPolicyPage = () => {
  return (
    <Container className="py-16">
      <div className="mb-8">
        <Heading>{legalData.privacyPolicy.title}</Heading>
        {legalData.privacyPolicy.sections.map((section, index) => (
          <div key={index} className="mb-4">
            <H6>{section.heading}</H6>
            <Small>{section.content}</Small>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PrivacyPolicyPage;
