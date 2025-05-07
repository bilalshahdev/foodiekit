"use client";

import becomePartnerData from "@/config/data/become-partner";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Container from "../container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label"; // Importing ShadCN Label component
import { Textarea } from "../ui/textarea";
import { H6, Heading, Small } from "../ui/typography";

const BecomePartnerSection = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
  });

  const handleRoleChange = (value: string) => {
    setSelectedRole(value);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/your-form-id/formResponse";

    const form = new FormData();
    form.append("entry.123456", selectedRole); // The field name for the selected role in your Google Form
    form.append("entry.654321", formData.name); // The field name for the name in your Google Form
    form.append("entry.789012", formData.email); // The field name for the email in your Google Form
    form.append("entry.345678", formData.phone); // The field name for the phone number in your Google Form
    form.append("entry.987654", formData.about); // The field name for the about section in your Google Form

    fetch(googleFormUrl, {
      method: "POST",
      body: form,
    })
      .then((response) => {
        if (response.ok) {
          alert("Application submitted successfully!");
        } else {
          alert("There was an error submitting your application.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Error submitting your application.");
      });
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
          <div className="">
            <Image
              src={"/images/delivery.jpg"}
              alt="Become a partner"
              className="w-full h-full object-cover rounded-2xl"
              width={1000}
              height={1000}
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
              <Input
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="text-left">
              <H6 className="mb-2">Email Address:</H6>
              <Input
                name="email"
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="text-left">
              <H6 className="mb-2">Phone Number:</H6>
              <Input
                name="phone"
                placeholder="Enter your phone number"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="text-left">
              <H6 className="mb-2">Tell us about yourself:</H6>
              <Textarea
                name="about"
                placeholder="Share your story or experience"
                rows={4}
                value={formData.about}
                onChange={handleInputChange}
              />
            </div>

            <Button
              variant={"signature"}
              className="mt-4 w-full"
              onClick={handleSubmit}
            >
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
