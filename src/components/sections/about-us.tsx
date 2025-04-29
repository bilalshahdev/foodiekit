// /components/sections/about-us.tsx

"use client";

import aboutData from "@/config/data/about";
import { motion } from "framer-motion";
import Container from "../container";
import { H6, Heading, Paragraph, Small } from "../ui/typography";

const AboutUsSection = () => {
  return (
    <Container id="about-us" className="py-16">
      {aboutData.map((section, idx) => (
        <motion.div
          key={idx}
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          viewport={{ once: true }}
        >
          <Heading className="text-center mb-4">{section.heading}</Heading>
          {section.subheading && <H6 className="mb-4">{section.subheading}</H6>}
          <Small className="mb-4">{section.p}</Small>
          {section.ul && (
            <ul className="list-disc ml-6">
              {section.ul.map((item, i) => (
                <li key={i} className="mb-2">
                  <strong>{item.point}</strong> {item.value}
                </li>
              ))}
            </ul>
          )}
          {section.bottomLine && (
            <Paragraph className="mt-8 italic text-muted-foreground">
              {section.bottomLine}
            </Paragraph>
          )}
        </motion.div>
      ))}
    </Container>
  );
};

export default AboutUsSection;
