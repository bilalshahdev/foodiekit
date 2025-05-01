"use client";

import { footerLinks, companyInfo } from "@/config/data/footer";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Container from "./container";
import Brand from "./brand";
import Link from "next/link";
import { XSmall } from "./ui/typography";

const Footer = () => {
  return (
    <div className="bg-foreground text-white py-8">
      <Container>
        <div className="flex justify-between items-center mb-6">
          <div>
            <Brand />
            <p className="mt-2 text-sm">
              Bringing Fresh Ingredients to Your Doorstep
            </p>
          </div>
          {/* <div className="flex gap-6">
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
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <div className="flex flex-col gap-4">
              {footerLinks.map((link, idx) => (
                <XSmall key={idx}>
                  <Link
                    href={link.link}
                    className="text-sm hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </XSmall>
              ))}
            </div>
          </div>

          {/* <div>
            <h4 className="font-semibold">Contact</h4>
            <div className="mt-2 flex flex-col gap-2">
              <XSmall>Email {companyInfo.email}</XSmall>
              <XSmall>Phone {companyInfo.phone}</XSmall>
            </div>
          </div> */}

          <div>
            <h4 className="font-semibold">Our Cloud Kitchen Locations</h4>
            <div className="mt-2 flex flex-col gap-2">
              {companyInfo.locations.map((location, idx) => (
                <XSmall key={idx}>
                  {location.name}: {location.address}
                </XSmall>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-sm mt-16 text-muted-foreground">
          <p>© {new Date().getFullYear()} FoodieKit Nig Ltd. All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
