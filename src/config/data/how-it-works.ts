// /src/config/data/how-it-works.ts
import { FaSeedling, FaStoreAlt, FaUtensils, FaBicycle } from "react-icons/fa";

type HowItWorksData = {
  step: string;
  icon: React.ElementType;
  heading: string;
  description: string;
};

const howItWorksData: HowItWorksData[] = [
  {
    step: "1",
    icon: FaSeedling,
    heading: "Farmers Supply Fresh Ingredients",
    description:
      "We work directly with smallholder and commercial farmers across Nigeria to source fresh, seasonal produce. Our platform ensures traceability and fair pricing, empowering local agriculture.",
  },
  {
    step: "2",
    icon: FaStoreAlt,
    heading: "Aggregation Hubs Organize & Dispatch",
    description:
      "Collected produce is delivered to strategic aggregation hubs in high-demand areas like Lagos and Jos. These hubs sort, preserve, and dispatch ingredients efficiently to nearby ghost kitchens.",
  },
  {
    step: "3",
    icon: FaUtensils,
    heading: "Ghost Kitchens & Chefs Prepare Meals",
    description:
      "Our tech-enabled ghost kitchens are powered by talented chefs who turn fresh ingredients into delicious, ready-to-eat meals. No dine-in space—just fast, quality, delivery-optimized food.",
  },
  {
    step: "4",
    icon: FaBicycle,
    heading: "Customers Order, Track & Enjoy",
    description:
      "Using our web or mobile platform, customers can explore menus, place orders, track deliveries, and give feedback. It’s fast, healthy, and supports a local, sustainable food system.",
  },
];

export default howItWorksData;
