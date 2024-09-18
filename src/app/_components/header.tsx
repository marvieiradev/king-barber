import { CalendarIcon, HomeIcon, LogInIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

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
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>

              <div className="py-5 flex items-center border-b border-solid gap-3">
                <Avatar className="border-2 border-solid border-primary">
                  <AvatarImage src="https://static.vecteezy.com/system/resources/previews/030/712/176/large_2x/beautiful-samurai-woman-generative-ai-free-photo.jpg" />
                </Avatar>

                <div className="text-start">
                  <p className="font-bold">Pessoa</p>
                  <p className="text-xs">pessoa@email.com</p>
                </div>
              </div>

              <div className="py-5 flex flex-col gap-2 border-b border-solid">
                <SheetClose asChild>
                  <Button
                    className="gap-2 justify-start"
                    variant="ghost"
                    asChild
                  >
                    <Link href="/">
                      <HomeIcon size={18} /> Início
                    </Link>
                  </Button>
                </SheetClose>
                <Button className="gap-2 justify-start" variant="ghost">
                  <CalendarIcon size={18} /> Agendamentos
                </Button>
              </div>

              <div className="py-5 flex flex-col gap-2 border-b border-solid">
                {quickSearchOptions.map((option) => (
                  <Button
                    key={option.title}
                    className="gap-2 justify-start"
                    variant="ghost"
                  >
                    <Image
                      alt={option.title}
                      src={option.imageUrl}
                      height={18}
                      width={18}
                    />{" "}
                    {option.title}
                  </Button>
                ))}
              </div>

              <div className="py-5 flex flex-col gap-2">
                <Button className="gap-2 justify-start" variant="ghost">
                  <LogInIcon size={18} /> Sair da conta
                </Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};
export default Header;
