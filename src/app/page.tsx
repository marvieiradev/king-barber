import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/booking-item";
import Search from "./_components/search";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./_lib/auth";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { getConfirmedBookings } from "./_data/get-confirmed-bookings";

const Home = async () => {
  const session = await getServerSession(authOptions);
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: { name: "desc" },
  });

  const confirmedBookings = await getConfirmedBookings();
  return (
    <div className="">
      <Header />
      <div className="p-5 md:px-10 lg:px-20">
        <h2 className="text-xl font-bold lg:text-2xl">
          Olá {session?.user ? session.user.name : "bem-vindo!"}!
        </h2>
        <p className="lg:text-lg">
          <span className="capitalize">
            {format(new Date(), "EE, dd", { locale: ptBR })}
          </span>
          <span> de </span>
          <span className="capitalize">
            {format(new Date(), "MMMM", { locale: ptBR })}
          </span>
        </p>

        <div className="mt-6">
          <Search />
        </div>

        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden md:justify-center md:px-10 lg:px-20">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        <div className="relative w-full h-[150px] mt-6 md:h-[300px] md:px-10 lg:px-20">
          <Image
            alt="banner"
            src="/banner-01.png"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mt-6 mb-3 uppercase text-xs font-bold text-gray-400 md:text-base">
              Agendamentos
            </h2>
            <div className="flex overflow-x-auto gap-3 md:flex-wrap [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem
                  key={booking.id}
                  booking={JSON.parse(JSON.stringify(booking))}
                />
              ))}
            </div>
          </>
        )}

        <h2 className="mt-6 mb-3 uppercase text-xs font-bold text-gray-400 md:text-base">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto md:flex-wrap [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mt-6 mb-3 uppercase text-xs font-bold text-gray-400 md:text-base">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto md:flex-wrap [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
