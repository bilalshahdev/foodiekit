"use client";

import { navMenu } from "@/config/data/menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Label } from "./ui/typography";
import { Button } from "./ui/button";
import { MenuIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            scrollPosition >= offsetTop - 150 &&
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
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = 100;

      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });

      setTimeout(() => {
        setActiveSection(sectionId);
        setIsScrolling(false);
        setMobileMenuOpen(false); // close mobile menu
      }, 500);
    }
  };

  return (
    <>
      {/* Desktop Menu */}
      <div className="h-full text-background hidden sm:flex items-center gap-4">
        {navMenu.map((item) => (
          <Label
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
          </Label>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <>
        <div className="sm:hidden">
          <Button
            className="h-12 w-12"
            variant="default"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-background size-8" />
            ) : (
              <MenuIcon className="text-background size-8" />
            )}
          </Button>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -20 }}
              animate={{ height: "30vh", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-[123.6px] left-0 w-full bg-foreground/90 backdrop-blur z-50 p-4 sm:hidden overflow-hidden"
            >
              <div className="flex flex-col h-full justify-around gap-4">
                {navMenu.map((item) => (
                  <Label
                    key={item.id}
                    onClick={() => {
                      if (item.id === "home") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        handleScrollToSection(item.id);
                      }
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "capitalize cursor-pointer text-background",
                      isActive(item.id, false)
                    )}
                  >
                    {item.label}
                  </Label>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </>
  );
};

export default Menu;
