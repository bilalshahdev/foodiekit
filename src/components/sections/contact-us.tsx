"use client";

import { motion } from "framer-motion";
import { contact } from "@/config/data/contact";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Container from "../container";
import { Heading, Small } from "../ui/typography";

const ContactUsSection = () => {
  return (
    <Container id="contact-us" className="py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Heading className="mb-4">Contact Us</Heading>
        <Small className="block">
          Reach out to us for any inquiries, feedback, or collaboration
          opportunities.
        </Small>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-8">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FaEnvelope size={20} className="mr-2" />
          <Small>{contact.email}</Small>
        </motion.div>

        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FaPhone size={20} className="mr-2" />
          <Small>{contact.phone}</Small>
        </motion.div>
      </div>

      <div className="flex justify-center gap-6">
        {contact.socialLinks.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <social.icon size={30} />
          </motion.a>
        ))}
      </div>
    </Container>
  );
};

export default ContactUsSection;
