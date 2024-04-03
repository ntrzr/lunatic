import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Lunatic?</AccordionTrigger>
        <AccordionContent>
        Lunatic is a first-person horror game set in a haunted asylum, where players must navigate through dark corridors and find keys while being pursued by supernatural entities. The game features immersive sound design and atmospheric visuals to create a chilling and suspenseful experience for players.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Where I can play Lunatic?</AccordionTrigger>
        <AccordionContent>
          You can find it here: https://www.roblox.com/games/15050697759/Lunatic
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it multiplayer or singleplayer?</AccordionTrigger>
        <AccordionContent>
          Lunatic is singleplayer only. We want to give the best experience possible for players and singleplayer will achieve that.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
