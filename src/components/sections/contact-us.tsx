"use client";

import { contact, locations } from "@/config/data/contact";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Container from "../container";
import { Small } from "../ui/typography";

const ContactUsSection = () => {
  return (
    <Container id="contact-us" className="py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold">Contact Us</h3>
        <Small className="mt-4 mb-4 block">
          Reach out to us for any inquiries, feedback, or collaboration
          opportunities.
        </Small>
      </div>

      {/* Contact Info */}
      <div className="flex justify-center gap-8 mb-8">
        <div className="flex items-center">
          <FaEnvelope size={20} className="mr-2" />
          <span>{contact.email}</span>
        </div>
        <div className="flex items-center">
          <FaPhone size={20} className="mr-2" />
          <span>{contact.phone}</span>
        </div>
      </div>

      {/* Locations */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold">Our Locations</h4>
        <ul>
          {locations.map((location, idx) => (
            <li
              key={idx}
              className="mb-2"
            >{`${location.name}: ${location.address}`}</li>
          ))}
        </ul>
      </div>

      {/* Social Media */}
      <div className="flex justify-center gap-6">
        {contact.socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.icon size={30} />
          </a>
        ))}
      </div>
    </Container>
  );
};

export default ContactUsSection;
