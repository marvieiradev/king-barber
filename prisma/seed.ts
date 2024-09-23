const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const images = [
      "https://king-barber.s3.amazonaws.com/barbershop-01.png",
      "https://king-barber.s3.amazonaws.com/barbershop-02.png",
      "https://king-barber.s3.amazonaws.com/barbershop-03.png",
      "https://king-barber.s3.amazonaws.com/barbershop-04.png",
      "https://king-barber.s3.amazonaws.com/barbershop-05.png",
      "https://king-barber.s3.amazonaws.com/barbershop-06.png",
      "https://king-barber.s3.amazonaws.com/barbershop-07.png",
      "https://king-barber.s3.amazonaws.com/barbershop-08.png",
      "https://king-barber.s3.amazonaws.com/barbershop-09.png",
      "https://king-barber.s3.amazonaws.com/barbershop-10.png",
      "https://king-barber.s3.amazonaws.com/barbershop-11.png",
    ];
    // Nomes criativos para as barbearias
    const creativeNames = [
      "A Navalha Filosófica",
      "Barbearia do Barba Ruiva",
      "O Corte Real",
      "A Fábrica de Homens",
      "O Club do Barbeiro",
      "Machado & Tesoura",
      "O Santuário da Barba",
      "Fábrica de Estilos",
      "O Refúgio do Barbeiro",
      "A Arte da Barba",
    ];

    // Descrições para as barbearias
    const descriptions = [
      "Um ambiente que convida à reflexão, com toques vintage e uma atmosfera intelectual.",
      "Uma barbearia descontraída e divertida, com um toque de irreverência e um estilo mais moderno.",
      "Um espaço elegante e sofisticado, com um serviço personalizado e produtos de alta qualidade.",
      "Uma barbearia que eleva a arte da barbearia a um novo patamar, com técnicas e produtos exclusivos.",
      "Uma barbearia que oferece uma variedade de estilos e cortes, sempre buscando a personalização e a inovação.",
      "Uma barbearia temática, que transporta os clientes para diferentes épocas através da decoração e dos cortes de cabelo.",
      "Ideal para quem busca um ambiente tranquilo e dedicado exclusivamente aos cuidados com a barba",
      "Um espaço moderno e tecnológico, que utiliza as últimas tendências em cortes de cabelo e produtos para barba.",
      "Um espaço tranquilo e relaxante, onde os homens podem cuidar de si mesmos e se desconectar do dia a dia.",
      "Uma barbearia que reúne os amantes da barbearia em um ambiente exclusivo, com eventos e promoções especiais.",
    ];

    //Telefones fictícios para as barbearias
    const falsePhones = [
      ["(11) 91234-5678", "(11) 97684-5471"],
      ["(21) 87654-3210", "(21) 87341-3224"],
      ["(12) 34567-8901", "(12) 34565-5555"],
      ["(13) 56789-0123", "(13) 58489-0224"],
      ["(14) 67890-1234", "(14) 65800-4444"],
      ["(15) 78901-2345", "(15) 78581-5545"],
      ["(16) 89012-3456", "(16) 89212-3446"],
      ["(17) 90123-4567", "(17) 91423-4570"],
      ["(18) 01234-5678", "(18) 05534-9978"],
      ["(19) 12345-6789", "(19) 12375-6779"],
    ];

    // Endereços fictícios para as barbearias
    const addresses = [
      "Rua da Sabedoria, 123",
      "Avenida da Alegria, 456e",
      "Rua da Nobreza, 789s",
      "Rua do Passado, 987",
      "Rua da Amizade, 101a",
      "Avenida da Criatividade, 202",
      "Rua da Confraria, 606",
      "Avenida do Progresso, 505",
      "Rua dos Artistas, 404",
      "Rua da Calma, 303",
    ];

    const services = [
      {
        name: "Corte de Cabelo",
        description: "Estilo personalizado com as últimas tendências.",
        price: 60.0,
        imageUrl: "https://king-barber.s3.amazonaws.com/cabelo.png",
      },
      {
        name: "Barba",
        description: "Modelagem completa para destacar sua masculinidade.",
        price: 40.0,
        imageUrl: "https://king-barber.s3.amazonaws.com/barba.png",
      },
      {
        name: "Acabamento",
        description: "Acabamento perfeito para um visual renovado.",
        price: 35.0,
        imageUrl: "https://king-barber.s3.amazonaws.com/acabamento.png",
      },
      {
        name: "Sobrancelha",
        description: "Expressão acentuada com modelagem precisa.",
        price: 20.0,
        imageUrl: "https://king-barber.s3.amazonaws.com/sobrancelha.png",
      },
      {
        name: "Massagem",
        description: "Relaxe com uma massagem revigorante.",
        price: 50.0,
        imageUrl: "https://king-barber.s3.amazonaws.com/massagem.png",
      },
      {
        name: "Hidratação",
        description: "Hidratação profunda para cabelo e barba.",
        price: 25.0,
        imageUrl: "https://king-barber.s3.amazonaws.com/hidratacao.png",
      },
    ];

    // Criar 10 barbearias com nomes e endereços fictícios
    const barbershops = [];
    for (let i = 0; i < 10; i++) {
      const name = creativeNames[i];
      const address = addresses[i];
      const desc = descriptions[i];
      const tels = falsePhones[i];
      const imageUrl = images[i];

      const barbershop = await prisma.barbershop.create({
        data: {
          name,
          address,
          imageUrl: imageUrl,
          phones: tels,
          description: desc,
        },
      });

      for (const service of services) {
        await prisma.barbershopService.create({
          data: {
            name: service.name,
            description: service.description,
            price: service.price,
            barbershop: {
              connect: {
                id: barbershop.id,
              },
            },
            imageUrl: service.imageUrl,
          },
        });
      }

      barbershops.push(barbershop);
    }

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar as barbearias:", error);
  }
}

seedDatabase();
