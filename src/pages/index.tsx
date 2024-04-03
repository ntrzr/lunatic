import { FAQ } from "~/components/faq";
import ImageCarousel from "~/components/image-carousel";
import Navigation from "~/components/navigation";
import logo from "../images/lunatic.png"
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center">
      <Navigation />
      <h1 className="mb-4 text-3xl font-bold text-center"> LUNATIC - ROBLOX GAME</h1>
      <div className="flex justify-center">
        <img width="400" src={logo.src} alt="" />
      </div>
      <FAQ />
      <div className="mt-16 justify-center flex">
        <ImageCarousel />
      </div>
    </div>
  );
}
