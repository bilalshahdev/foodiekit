"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cta, description, HeroImages, tagline } from "@/config/data/hero";
import Image from "next/image";
import Link from "next/link";
import { H1, H2, H4 } from "./ui/typography";
import { motion } from "framer-motion";

const Hero = () => {
  if (!HeroImages || HeroImages.length === 0) return null;

  return (
    <section
      id="home"
      className="relative w-full min-h-[60vh] flex items-center justify-center"
    >
      {/* Carousel with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Carousel autoplay delay={5000}>
          <CarouselContent>
            {HeroImages.map((image, idx) => (
              <CarouselItem key={idx} className="w-full">
                <div className="w-full h-[90vh] md:h-[600px] relative">
                  <Image
                    src={image}
                    alt={`Banner ${idx + 1}`}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority
                  />
                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/70" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Glassmorphism Text Overlay */}
      <div className="relative z-10 w-full flex justify-center items-center h-[90vh] md:h-[600px]">
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            backdrop-blur
            bg-black/30
            border border-white/20
            p-8 md:p-14
            w-[95vw] max-w-xl md:max-w-3xl
            mx-auto flex flex-col items-center text-center
            rounded-xl
          "
        > */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="p-8 md:p-14 max-w-screen-lg flex flex-col mr-auto"
        >
          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <H1 className="text-white font-bold drop-shadow-lg mb-2 sm:mb-3">
              {tagline}
            </H1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <H4 className="text-white/90 text-base sm:text-lg md:text-xl font-medium mb-4 sm:mb-6">
              {description}
            </H4>
          </motion.div>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
          >
            {cta.map((item, idx) => (
              <Button key={idx} variant={item.variant} size="lg" asChild>
                <Link href={item.link}>{item.label}</Link>
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
