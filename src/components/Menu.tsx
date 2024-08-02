import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Separator } from "@/components/ui/separator";

import Link from "next/link";

import { menuItems } from "@/lib/data";

type Props = {
  children: React.ReactNode;
};

const Menu = ({ children }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <ScrollArea className="flex flex-col gap-4 pt-8">
              <ul className="flex flex-col gap-3">
                {menuItems.map((item) => (
                  <li key={item.url} className="text-sm">
                    <Link href={item.url}>{item.title}</Link>
                    <Separator className="my-1" />
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
