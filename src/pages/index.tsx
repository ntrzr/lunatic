import { FAQ } from "~/components/faq";
import ImageCarousel from "~/components/image-carousel";
import Navigation from "~/components/navigation";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Navigation />
      <h1 className="mb-4 text-5xl font-sans mt-5"> LUNATIC - ROBLOX GAME</h1>
      <FAQ />
      <div className="my-8">
        <Tabs defaultValue="tab1" className="w-[400px]">
          <TabsList className="mb-4 flex space-x-4">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="py-4">
            Content for tab 1
          </TabsContent>
          <TabsContent value="tab2" className="py-4">
            Content for tab 2
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <ImageCarousel />
      </div>
    </div>
  );
}
