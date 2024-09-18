import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Header = () => {
  return (
    <Card className="rounded-t-none">
      <CardContent className="p-5 flex flex-row justify-between items-center">
        <Image src="/logo.png" height={20} width={130} alt="logo" />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};
export default Header;
