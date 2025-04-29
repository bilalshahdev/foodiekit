import { ButtonVariants } from "@/components/ui/button";

import img1 from "../../../public/images/img1.webp";
import img2 from "../../../public/images/img2.webp";
import img3 from "../../../public/images/img3.webp";
import img4 from "../../../public/images/img4.webp";

export const HeroImages = [img1, img2, img3, img4];
export const tagline =
  "Redefining Food Access with Smart Kitchens & Farm-Fresh Ingredients";
export const description =
  "Connecting chefs, farmers, and food lovers through farm-to-table meals and ghost kitchens.";
export const cta: CTA[] = [
  {
    label: "Join our waitlist",
    variant: "secondary",
    link: "#",
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
