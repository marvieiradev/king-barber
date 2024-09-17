import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { SearchIcon } from "lucide-react";
import { Input } from "./_components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá Pessoa</h2>
        <p>Segunda, 05 de Agosto</p>
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative w-full h-[150px] mt-6">
          <Image
            alt="banner"
            src="/banner01.png"
            fill
            className="object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
