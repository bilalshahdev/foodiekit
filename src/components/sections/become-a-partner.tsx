// /components/sections/become-partner.tsx
"use client";

import { H3, H6, Small } from "../ui/typography";
import { Button } from "../ui/button"; // Assuming you have a button component
import becomePartnerData from "@/config/data/become-partner";
import Container from "../container";
import { useState } from "react";
import newsletterData from "@/config/data/newsletter";
import { Input } from "../ui/input";

const BecomePartnerSection = () => {
  return (
    <div id="become-partner" className="py-16">
      <Container>
        <div className="mx-auto text-center">
          <H3 className="mb-4">Become a Partner</H3>
          <Small className="text-center mb-8 block">
            Join our mission to revolutionize the food industry. We’re looking
            for passionate partners to help us build a sustainable, local food
            ecosystem.
          </Small>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {becomePartnerData.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 border bg-gradient-to-br from-secondary to-background rounded-lg shadow-md"
              >
                <H6 className="mb-4">{item.category}</H6>
                <Small className="mb-4">{item.description}</Small>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = item.formLink)}
                >
                  Apply as a {item.category}
                </Button>
              </div>
            ))}
          </div>
        </div>{" "}
      </Container>
      <NewsletterSignUpSection />
    </div>
  );
};

export default BecomePartnerSection;

// /components/sections/newsletter-signup.tsx

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
        <H3 className="text-3xl font-bold text-primary mb-4">
          {newsletterData.heading}
        </H3>
        <Small className="mb-8 block">
          {newsletterData.description}
        </Small>

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
