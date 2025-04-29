"use client";

import { motion } from "framer-motion";
import becomePartnerData from "@/config/data/become-partner";
import Container from "../container";
import { Button } from "../ui/button";
import { H6, Heading, Small } from "../ui/typography";

const BecomePartnerSection = () => {
  return (
    <Container id="become-partner" className="py-16">
      <div className="mx-auto text-center">
        <Heading className="mb-4">Become a Partner</Heading>
        <Small className="text-center mb-8 block">
          Join our mission to revolutionize the food industry.
        </Small>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {becomePartnerData.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center p-4 border bg-gradient-to-br from-secondary to-background rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <H6 className="mb-4">{item.category}</H6>
              <Small className="mb-4">{item.description}</Small>
              <Button
                variant="outline"
                onClick={() => (window.location.href = item.formLink)}
              >
                Apply as a {item.category}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BecomePartnerSection;
