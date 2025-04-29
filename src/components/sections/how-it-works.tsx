// /components/sections/how-it-works.tsx
"use client"

import { motion } from "framer-motion";
import howItWorksData from "@/config/data/how-it-works";
import Container from "../container";
import { H6, Heading, Small } from "../ui/typography";

const HowItWorksSection = () => {
  return (
    <Container id="how-it-works" className="max-w-full py-16 bg-muted">
      <Container>
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Heading className="mb-4">How It Works</Heading>
          <Small className="text-center mb-8 block">
            From farm to fork, simplified.
          </Small>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {howItWorksData.map((item, idx) => (
            <motion.div
              key={idx}
              className="text-center bg-gradient-to-br from-background to-secondary p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{<item.icon size={24} />}</div>
              <H6 className="mb-2">{item.heading}</H6>
              <Small>{item.description}</Small>
            </motion.div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default HowItWorksSection;
