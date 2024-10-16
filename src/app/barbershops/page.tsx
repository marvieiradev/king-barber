import BarbershopItem from "../_components/barbershop-item";
import Header from "../_components/header";
import Search from "../_components/search";
import { db } from "../_lib/prisma";

interface BarbershopPageProps {
  searchParams: {
    title?: string;
    service?: string;
  };
}

const BarbershopPage = async ({ searchParams }: BarbershopPageProps) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      OR: [
        searchParams?.title
          ? {
              name: {
                contains: searchParams?.title,
                mode: "insensitive",
              },
            }
          : {},

        searchParams?.service
          ? {
              services: {
                some: {
                  name: {
                    contains: searchParams?.service,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {},
      ],
    },
  });

  return (
    <div>
      <Header />
      <div className="my-6 px-5 md:px-10 lg:px-28">
        <Search />
      </div>
      <div className="px-5 md:px-10 lg:px-28">
        <h2 className="mt-6 mb-3 uppercase text-xs font-bold text-gray-400 md:text-base">{`Resultados para "${searchParams?.title || searchParams?.service}"`}</h2>
        <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:gap-6 xl:gap-8">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarbershopPage;
