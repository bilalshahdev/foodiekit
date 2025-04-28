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
import { H2, H4 } from "./ui/typography";

const Hero = () => {
  if (!HeroImages || HeroImages.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Carousel */}
      <Carousel autoplay={true} delay={5000}>
        <CarouselContent>
          {HeroImages.map((image, idx) => (
            <CarouselItem key={idx} className="w-full">
              <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden">
                <Image
                  src={image}
                  alt={`Banner ${idx + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 100vw"
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center bg-black/50">
        <div className="max-w-4xl mx-auto flex items-center flex-col text-center px-4 md:px-10">
          <H2 className="text-signature tracking-wide mb-2">{tagline}</H2>
          <H4 className="text-white leading-tight">{description}</H4>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            {cta.map((item, idx) => (
              <Button key={idx} variant={item.variant} size="lg" asChild>
                <Link href={item.link}>{item.label}</Link>
              </Button>
            ))}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Hero;
