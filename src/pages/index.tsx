import { FAQ } from "~/components/faq";
import ImageCarousel from "~/components/image-carousel";
import Navigation from "~/components/navigation";
import { Button } from "~/components/ui/button";
import logo from "../images/lunatic.png"
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center">
      <Navigation />
      <h1 className="mb-4 text-5xl font-sans mt-5"> LUNATIC - ROBLOX GAME</h1>
      <FAQ />
      <div className="mt-16 justify-center flex">
        <ImageCarousel />
      </div>
    </div>
  );
}
