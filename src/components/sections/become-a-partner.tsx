"use client";

import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { H6, Heading, Small } from "../ui/typography";
import Container from "../container";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label"; // Importing ShadCN Label component
import { useState } from "react";
import partner from "../../../public/images/partner.png";
import Image from "next/image";
import becomePartnerData from "@/config/data/become-partner";
const BecomePartnerSection = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (value: string) => {
    setSelectedRole(value);
  };

  return (
    <Container id="become-partner" className="py-16">
      <div className="mx-auto text-center">
        <Heading className="mb-4">{becomePartnerData.heading}</Heading>
        <Small className="text-center mb-8 block">
          {becomePartnerData.subheading}
        </Small>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 md:gap-8 bg-card dark:bg-muted border border-border dark:border-neutral-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Form Start */}
          <div className="hidden md:block">
            <Image
              src={partner}
              alt="Become a partner"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="space-y-6">
            <div className="text-left">
              <H6 className="mb-4">I am a:</H6>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Button-like RadioGroupItem */}
                {["farmer", "chef", "restaurant", "ghost-kitchen"].map(
                  (role) => (
                    <div
                      key={role}
                      className={`flex items-center justify-center py-2 px-4 rounded-lg border cursor-pointer transition-colors duration-200 ${
                        selectedRole === role
                          ? "border-signature border-2"
                          : "bg-secondary"
                      }`}
                      onClick={() => handleRoleChange(role)}
                    >
                      <Label>
                        {role.charAt(0).toUpperCase() +
                          role.slice(1).replace("-", " ")}
                      </Label>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="text-left">
              <H6 className="mb-2">Your Name:</H6>
              <Input placeholder="Enter your name" />
            </div>

            <div className="text-left">
              <H6 className="mb-2">Email Address:</H6>
              <Input placeholder="Enter your email" type="email" />
            </div>

            <div className="text-left">
              <H6 className="mb-2">Phone Number:</H6>
              <Input placeholder="Enter your phone number" type="tel" />
            </div>

            <div className="text-left">
              <H6 className="mb-2">Tell us about yourself:</H6>
              <Textarea placeholder="Share your story or experience" rows={4} />
            </div>

            <Button variant={"signature"} className="mt-4 w-full">
              Submit Application
            </Button>
          </div>
          {/* Form End */}
        </motion.div>
      </div>
    </Container>
  );
};

export default BecomePartnerSection;
