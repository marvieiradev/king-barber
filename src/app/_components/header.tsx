"use client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger } from "./ui/sheet";
import SidebarSheet from "./sidebar-sheet";
import { CalendarIcon, LogInIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import SignDialog from "./sign-in-dialog";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data } = useSession();

  return (
    <>
      <Card className="rounded-t-none md:hidden">
        <CardContent className="p-5 flex flex-row justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" height={20} width={130} alt="logo" />
          </Link>
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

      <Card className="rounded-t-none p-0 md:px-10 lg:px-28">
        <CardContent className="hidden lg:flex flex-row justify-between items-center px-0 pb-2 pt-2">
          <Link href="/">
            <Image src="/logo.png" height={20} width={130} alt="logo" />
          </Link>
          <div className="flex items-center gap-8 justify-between">
            {data?.user ? (
              <>
                <Button className="gap-2 justify-start" variant="ghost" asChild>
                  <Link href="/bookings">
                    <CalendarIcon size={18} /> Agendamentos
                  </Link>
                </Button>
                <Sheet>
                  <SheetTrigger asChild>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Avatar className="border-2 border-solid border-primary">
                        <AvatarImage src={`${data?.user?.image}`} />
                      </Avatar>

                      <div className="text-start">
                        <p className="font-bold">{data.user.name}</p>
                      </div>
                    </div>
                  </SheetTrigger>
                  <SidebarSheet />
                </Sheet>
              </>
            ) : (
              <>
                <h2 className="font-bold">Olá, faça seu login!</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="icon">
                      <LogInIcon />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[90%] flex flex-col items-center">
                    <SignDialog />
                  </DialogContent>
                </Dialog>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};
export default Header;
