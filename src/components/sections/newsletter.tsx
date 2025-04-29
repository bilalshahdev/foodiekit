// /components/sections/newsletter.tsx
"use client";

import newsletterData from "@/config/data/newsletter";
import { useState } from "react";
import Container from "../container";
import { Button } from "../ui/button"; // Assuming you have a button component
import { Input } from "../ui/input";
import { H4, Heading, Small } from "../ui/typography";

const NewsletterSignUpSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission
    setTimeout(() => {
      alert("Thanks for signing up!");
      setEmail("");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <Container className="max-w-full bg-muted py-16">
      <div className="mx-auto text-center px-4 sm:px-8 md:px-16 lg:px-32">
        <Heading className="mb-4">
          {newsletterData.heading}
        </Heading>
        <Small className="mb-8 block">{newsletterData.description}</Small>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center h-12 gap-4 space-y-4 sm:space-y-0"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-full sm:w-[450px] shadow-md"
            required
          />
          <Button
            variant={"signature"}
            type="submit"
            disabled={isSubmitting || !email}
            className="w-full sm:w-auto h-full disabled:bg-gray-400"
          >
            {isSubmitting ? "Submitting..." : newsletterData.cta}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default NewsletterSignUpSection;
