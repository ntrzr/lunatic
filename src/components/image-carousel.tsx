import * as React from "react";

import { Card, CardContent } from "~/components/ui/card";
import screen1 from '../images/1.png';
import screen2 from '../images/2.png';
import screen3 from '../images/3.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export default function ImageCarousel() {
  return (
    <Carousel className="w-full max-w-4xl content-center justify-center place-items-center">
      <CarouselContent>
          <CarouselItem>
            <img src={screen1.src} alt="logo" />
          </CarouselItem>
          <CarouselItem>
            <img src={screen2.src} alt="logo" />
          </CarouselItem>
          <CarouselItem>
            <img src={screen3.src} alt="logo" />
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}