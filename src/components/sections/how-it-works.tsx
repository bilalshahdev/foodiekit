// /components/sections/how-it-works.tsx

import howItWorksData from "@/config/data/how-it-works";
import Container from "../container";
import { H3, H6, Small } from "../ui/typography";

const HowItWorksSection = () => {
  return (
    <Container id="how-it-works" className="max-w-full py-16 bg-muted">
      <Container>
        <H3 className="text-center mb-8">How It Works</H3>
        <Small className="text-center mb-8 block">
          From farm to fork, simplified.
        </Small>
        {/* Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {howItWorksData.map((item, idx) => (
            <div
              key={idx}
              className="text-center bg-gradient-to-br from-background to-secondary p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">{<item.icon size={24} />}</div>
              <H6 className="mb-2">{item.heading}</H6>
              <Small>{item.description}</Small>
            </div>
          ))}
        </div>{" "}
      </Container>
    </Container>
  );
};

export default HowItWorksSection;
