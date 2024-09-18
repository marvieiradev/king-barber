import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger } from "./ui/sheet";
import SidebarSheet from "./sidebar-sheet";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card className="rounded-t-none">
      <CardContent className="p-5 flex flex-row justify-between items-center">
        <Image src="/logo.png" height={20} width={130} alt="logo" />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  );
};
export default Header;
