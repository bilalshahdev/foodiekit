"use client";

import { navMenu } from "@/config/data/menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Small } from "./ui/typography";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  const pathname = usePathname();
  const isActive = (path: string, border = true) => {
    return pathname === path || activeSection === path
      ? `text-signature ${border ? "border-b border-signature" : ""}`
      : "hover:text-signature";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY;
      const sections = navMenu
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      sections.forEach((section) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop - 50 &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  const handleScrollToSection = (sectionId: string) => {
    setIsScrolling(true);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        setActiveSection(sectionId);
        setIsScrolling(false);
      }, 500);
    }
  };
  return (
    <>
    
    <div className="h-full hidden sm:flex items-center gap-4">
      {navMenu.map((item) => (
        <Small
          key={item.id}
          onClick={() =>
            item.id === "home"
              ? window.scrollTo({ top: 0, behavior: "smooth" })
              : handleScrollToSection(item.id)
          }
          className={cn(
            "transition-colors flex items-center py-1 capitalize cursor-pointer",
            isActive(item.id)
          )}
        >
          {item.label}
        </Small>
      ))}
    </div></>
  );
};

export default Menu;
