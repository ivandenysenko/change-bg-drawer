import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  HiSparkles,
  HiArrowUturnLeft,
  HiArrowUturnRight,
} from "react-icons/hi2";
import { VscSparkleFilled } from "react-icons/vsc";
import { ScrollArea } from "@/components/ui/scroll-area";
import BackgroundItem from "@/components/BackgroundItem";
import backgrounds from "@/data/mock";
import { SvgGradient } from "@/components/SvgGradient";

export default function Sidebar() {
  return (
    <>
      {/* that's one way to apply gradient fill to svg react component */}
      <SvgGradient
        gradientId="gradientFill"
        stops={[
          { offset: "31%", color: "#5BF0A5" },
          { offset: "48%", color: "#5BF0A5" },
          { offset: "70%", color: "#00BF5F" },
          { offset: "95%", color: "#009D4E" },
        ]}
      />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Change background</Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] h-full flex">
          <SheetHeader className="pt-8 px-5">
            <SheetTitle>Change background</SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-1 overflow-hidden">
            <div className="grid px-5 flex-1 auto-rows-min gap-3">
              <Label
                htmlFor="backgroundTextarea"
                className="text-sm/[1.2] font-semibold"
              >
                Background idea
              </Label>
              <InputGroup className="border-ui-border rounded-[12px]">
                <InputGroupTextarea
                  className="p-4 min-h-32"
                  id="backgroundTextarea"
                  defaultValue="Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect."
                />
                <InputGroupAddon align="block-end">
                  <InputGroupButton
                    variant="ghost"
                    size="sm"
                    aria-label="Regenerate background idea"
                  >
                    <VscSparkleFilled
                      fill="url(#gradientFill)"
                      className="-scale-x-100"
                    />
                    Regenerate
                  </InputGroupButton>
                  <InputGroupButton
                    variant="ghost"
                    size="icon-sm"
                    className="ml-auto text-ui-icon"
                    aria-label="Undo"
                  >
                    <HiArrowUturnLeft />
                  </InputGroupButton>
                  <InputGroupButton
                    variant="ghost"
                    size="icon-sm"
                    className="text-ui-icon"
                    aria-label="Redo"
                  >
                    <HiArrowUturnRight />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
              <Button
                size="xl"
                className="mt-3"
                aria-label="Generate background for 1 credit"
              >
                <HiSparkles className="-rotate-90 text-brand-highlight" />
                Generate BG for 1 credit
              </Button>
            </div>
            <section className="mt-[40px] mb-5 px-5">
              <h3 className="text-sm/[1.2] font-semibold">Your backgrounds</h3>
              <div className="grid grid-cols-3 gap-3 mt-[10px]">
                {backgrounds.map((background, i) => {
                  return (
                    <BackgroundItem
                      isLoading={i === 0} // this is just for demo purposes
                      key={background.id}
                      background={background}
                    />
                  );
                })}
              </div>
            </section>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}
