import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { StarIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="w-[167px] md:w-[187px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1 pb-2">
        <div className="relative h-[159px] w-full">
          <Image
            alt={barbershop.name}
            fill
            className="object-cover rounded-2xl p-1"
            src={barbershop.imageUrl}
          />
          <Badge
            className="absolute left-2 top-2 space-x-2"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs font-semibold">5,0</p>
          </Badge>
        </div>

        <div className="py-3 px-1">
          <h3 className="font-semibold overflow-hidden truncate">
            {barbershop.name}
          </h3>
          <p className="text-sm text-gray-400 truncate">{barbershop.address}</p>
          <Button variant="secondary" className="w-full mt-3" asChild>
            <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
