// /components/sections/about-us.tsx

import aboutData from "@/config/data/about";
import { H3, H6, Paragraph, Small } from "../ui/typography";
import Container from "../container";

const AboutUsSection = () => {
  return (
    <Container id="about-us" className="py-16">
      {aboutData.map((section, idx) => (
        <div key={idx} className="mb-8">
          {/* Heading */}
          <H3 className="text-center mb-4">{section.heading}</H3>
          {/* Subheading (optional) */}
          {section.subheading && (
            <H6 className="mb-4 ">{section.subheading}</H6>
          )}
          {/* Paragraph */}
          <Small className="mb-4">{section.p}</Small>

          {/* Unordered List (if exists) */}
          {section.ul && (
            <ul className="list-disc ml-6 ">
              {section.ul.map((item, i) => (
                <li key={i} className="mb-2">
                  <strong>{item.point}</strong> {item.value}
                </li>
              ))}
            </ul>
          )}

          {/* Bottom Line (if exists) */}
          {section.bottomLine && (
            <Paragraph className="mt-8 italic text-muted-foreground">{section.bottomLine}</Paragraph>
          )}
        </div>
      ))}
    </Container>
  );
};

export default AboutUsSection;
