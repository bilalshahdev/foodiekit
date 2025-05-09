// /components/sections/about-us.tsx

"use client";

import aboutData from "@/config/data/about";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../container";
import { PageTitle } from "../titles";
import { H6, Small, XSmall } from "../ui/typography";

const AboutUsSection = () => {
  return (
    <Container id="about-us" className="py-16">
      <PageTitle title="About us" className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src={"/images/img2.webp"}
          alt="About us"
          className="w-full h-full object-cover rounded-2xl"
          width={1000}
          height={1000}
        />
        <div>
          {aboutData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <H6 className="mb-2">{section.heading}</H6>
              {section.subheading && (
                <Small className="mb-2 font-semibold">
                  {section.subheading}
                </Small>
              )}
              <XSmall className="mb-2">{section.p}</XSmall>
              {section.ul && (
                <ul className="list-disc ml-6">
                  {section.ul.map((item, i) => (
                    <Small key={i} className="mb-2">
                      <span className="font-medium">{item.point}</span>{" "}
                      {item.value}
                    </Small>
                  ))}
                </ul>
              )}
              {section.bottomLine && (
                <XSmall className="mt-8 italic text-muted-foreground">
                  {section.bottomLine}
                </XSmall>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutUsSection;
