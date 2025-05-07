import { ButtonVariants } from "@/components/ui/button";

export const HeroImages = [
  "/images/img1.webp",
  "/images/img2.webp",
  "/images/img3.jpg",
  "/images/img4.webp",
];
export const tagline =
  "Redefining Food Access with Smart Kitchens & Farm-Fresh Ingredients";
export const description =
  "Connecting chefs, farmers, and food lovers through farm-to-table meals and ghost kitchens.";
export const cta: CTA[] = [
  {
    label: "Join our waitlist",
    variant: "secondary",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeepT2Q1ttNPNwsJiwyjtRXKJspW88IUygnESv_z3JaO-rBzQ/viewform",
  },
  {
    label: "Become a Vendor or Chef",
    variant: "signature",
    link: "#",
  },
];

type CTA = {
  label: string;
  variant: ButtonVariants;
  link: string;
};
