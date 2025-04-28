"use client";

import { footerLinks, companyInfo } from "@/config/data/footer";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Container from "./container";
import Brand from "./brand";

const Footer = () => {
  return (
    <div className="bg-foreground text-white py-16">
      <Container>
        <div className="flex justify-between items-center mb-6">
          <div>
            <Brand/>
            <p className="mt-2 text-sm">
              Bringing Fresh Ingredients to Your Doorstep
            </p>
          </div>
          <div className="flex gap-6">
            {companyInfo.socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name === "X" && <FaTwitter size={20} />}
                {social.name === "Facebook" && <FaFacebook size={20} />}
                {social.name === "Instagram" && <FaInstagram size={20} />}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.link} className="text-sm hover:text-blue-400">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-2">
              <li>Email: {companyInfo.email}</li>
              <li>Phone: {companyInfo.phone}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Our Locations</h4>
            <ul className="mt-2">
              {companyInfo.locations.map((location, idx) => (
                <li key={idx}>
                  {location.name}: {location.address}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} FoodieKit. All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
