import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaHandshake,
  FaPhone,
} from "react-icons/fa";

export const navMenu: NavMenuItem[] = [
  { label: "Home", id: "home", icon: FaHome },
  { label: "About Us", id: "about-us", icon: FaInfoCircle },
  { label: "How It Works", id: "how-it-works", icon: FaCogs },
  { label: "Become a Partner", id: "become-partner", icon: FaHandshake },
  { label: "Contact", id: "contact-us", icon: FaPhone },
];

export default navMenu;
