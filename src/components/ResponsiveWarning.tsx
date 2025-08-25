import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function ResponsiveWarning() {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 1000) {
      setIsOpen(true);
    }
  }, [width]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[90vw] p-4 sm:p-6">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-lg sm:text-xl">
            Screen Size Warning
          </DialogTitle>
          <DialogDescription className="text-sm leading-normal sm:text-base">
            This project's design is based exclusively on a desktop Figma
            mockup. For the best viewing experience, please open this project on
            a screen with a width of 1200px or greater.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-end">
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            className="w-full sm:w-auto"
          >
            Continue Anyway
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
