"use client";

import becomePartnerData from "@/config/data/become-partner";
import validate from "@/utils/validateData";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Container from "../container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { H6, Heading, Small, XSmall } from "../ui/typography";

const BecomePartnerSection = () => {
  const [data, setData] = useState<Data>({
    name: "",
    email: "",
    phone: "",
    about: "",
    role: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
    about: "",
    role: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedData = { ...data, [name]: value };
    setData(updatedData);

    const validationErrors = validate(updatedData);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationErrors[name as keyof typeof validationErrors],
    }));
    setSubmitError(null);
    setSubmitSuccess(null);
  };

  const handleRoleSelect = (role: string) => {
    const updatedData = { ...data, role };
    setData(updatedData);
    const validationErrors = validate(updatedData);
    setErrors((prevErrors) => ({
      ...prevErrors,
      role: validationErrors.role,
    }));
    setSubmitError(null);
    setSubmitSuccess(null);
  };

  const formFields = [
    { name: "name", label: "Your Name", placeholder: "Enter your name" },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "Enter your phone number",
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "Enter your email address",
    },
    {
      name: "about",
      label: "Tell us about yourself",
      placeholder: "Tell us about yourself",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setSubmitError(null);
      setSubmitSuccess(null);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "my-secret-api-key",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess("Your application has been submitted successfully!");
        setData({
          name: "",
          email: "",
          phone: "",
          about: "",
          role: "",
        });
      } else {
        setSubmitError(result.error || "An error occurred, please try again.");
      }
    } catch (error) {
      console.log(error);
      setSubmitError("An error occurred, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container id="become-partner" className="py-16">
      <div className="mx-auto text-center">
        <Heading className="mb-4">{becomePartnerData.heading}</Heading>
        <Small className="text-center mb-8 block">
          {becomePartnerData.subheading}
        </Small>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-card dark:bg-muted border border-border dark:border-neutral-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <div>
            <Image
              src="/images/delivery.jpg"
              alt="Become a partner"
              className="w-full h-full object-cover rounded-2xl"
              width={1000}
              height={1000}
            />
          </div>

          {/* Form */}
          <div className="space-y-6 text-left">
            <div>
              <H6 className="mb-4">I am a:</H6>
              <div className="grid md:grid-cols-2 gap-4">
                {["farmer", "chef", "restaurant", "ghost-kitchen"].map(
                  (role) => (
                    <div
                      key={role}
                      className={`flex items-center justify-center py-2 px-4 rounded-lg transition-colors duration-200 border-2 cursor-pointer ${
                        data.role === role
                          ? "border-signature bg-signature"
                          : "bg-secondary border-transparent"
                      }`}
                      onClick={() => handleRoleSelect(role)}
                    >
                      <Label className="cursor-pointer">
                        {role.charAt(0).toUpperCase() +
                          role.slice(1).replace("-", " ")}
                      </Label>
                    </div>
                  )
                )}
              </div>
              {errors.role && (
                <XSmall className="text-red-500 mt-2">{errors.role}</XSmall>
              )}
            </div>

            {/* Form Fields */}
            {formFields.map((field) => (
              <InputField
                key={field.name}
                {...field}
                value={data[field.name as keyof Data]}
                error={errors[field.name as keyof FormErrors] || ""}
                onChange={handleInputChange}
              />
            ))}

            {submitSuccess && (
              <XSmall className="text-green-500 mt-4">{submitSuccess}</XSmall>
            )}
            {submitError && (
              <XSmall className="text-red-500 mt-4">{submitError}</XSmall>
            )}

            <Button
              variant="signature"
              className="mt-4 w-full"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default BecomePartnerSection;

interface InputFieldProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  name,
  placeholder,
  value,
  error,
  onChange,
}: InputFieldProps) => (
  <div>
    <H6 className="mb-2">{label}:</H6>
    <Input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={error ? "border-red-500" : ""}
    />
    {error && <XSmall className="text-red-500">{error}</XSmall>}
  </div>
);
