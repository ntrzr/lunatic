import * as React from "react";

import { Card, CardContent } from "~/components/ui/card";
import screen1 from '../images/1.png';
import screen2 from '../images/2.png';
import screen3 from '../images/3.png';
import Image from "next/image";
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
            <Image src={screen1} alt="screenshot of game 1"></Image>
          </CarouselItem>
          <CarouselItem>
            <Image src={screen2} alt="screenshot of game 2"></Image>
          </CarouselItem>
          <CarouselItem>
            <Image src={screen3} alt="screenshot of game 3"></Image>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}