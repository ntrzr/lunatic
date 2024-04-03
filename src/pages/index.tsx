import { FAQ } from "~/components/faq";
import Head from "next/head";
import ImageCarousel from "~/components/image-carousel";
import Navigation from "~/components/navigation";
import { Button } from "~/components/ui/button";
import logo from "../images/lunatic.png"
import favicon from "../images/favicon.ico"
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <link rel="icon" href={favicon.src} type="image/x-icon" />
        <title>Lunatic</title>
      </Head>
      <div className="container mx-auto px-4 py-8 flex flex-col justify-center">
        <Navigation />
        <div className="mt-16 justify-center flex">
          <ImageCarousel />
        </div>
        <h1 className="mb-4 text-5xl font-sans mt-5"> LUNATIC - ROBLOX GAME</h1>
        <div className="mt-7">
        <h2 className="text-4xl">About Lunatic</h2>
        <p className="mt-5 text-xl text-left">Your mission is to explore the dark corridors of an old psychiatric hospital and collect keys that will help you unlock the way out. Be careful! There is a terrifying monster lurking in the dark corners of the house, waiting for a careless victim.</p>
        <h3 className="text-3xl mt-3">Spooky atmosphere</h3>
        <p className="mt-5 text-xl text-left">ur game features a spooky atmosphere that envelops players in a chilling sense of suspense and mystery. From dimly lit corridors to haunting soundscapes, every corner of our game is designed to keep players on edge, never knowing what eerie encounter may await them next.</p>
        <h3 className="text-3xl mt-3">Terrifying monster</h3>
        <p className="mt-5 text-xl text-left">Our game introduces a terrifying monster that lurks in the shadows, ready to strike fear into the hearts of players. With its imposing presence and bone-chilling roars, the monster embodies the ultimate embodiment of terror, keeping players on high alert as they navigate through the game's ominous environment.</p>
        <h3 className="text-3xl mt-3">Keys</h3>
        <p className="mt-5 text-xl text-left">In our game, a terrifying monster prowls the dark corridors, hunting down players who must collect keys scattered throughout the eerie surroundings to unlock their escape. With every key collected, tension rises as the monster draws closer, creating a heart-pounding race against time to break free from its clutches and survive the chilling ordeal.</p>
        <h3 className="text-3xl mt-3">A short and intense gaming experience</h3>
        <p className="mt-5 text-xl text-left">Prepare for a short and intense gaming experience in our game, where a terrifying monster awaits around every corner. Players must quickly gather keys in the spine-chilling environment to unlock their escape route while evading the relentless pursuit of the monster. With adrenaline-pumping gameplay and a race against time, every moment is filled with heart-stopping suspense and thrills.</p>
      </div>
      <FAQ />
        
      </div>
    </>
  );
}
