import { prisma } from './prisma-client';

async function main() {
  try {
    await prisma.targetAudience.createMany({
      data: [
        { name: 'Men' },
        { name: 'Women' },
        { name: 'Kids' },
        { name: 'Shoes' },
      ],
    });
    const audiences = await prisma.targetAudience.findMany({
      where: {
        name: {
          in: ['Men', 'Women', 'Kids', 'Shoes'],
        },
      },
    });

    for (const audience of audiences) {
      if (audience.name === 'Women') {
        const womenCategories = await prisma.category.createMany({
          data: [
            { name: 'T-Shirts & Tops', audienceId: audience.id },
            { name: 'Pants & Shorts', audienceId: audience.id },
            { name: 'Tights & Leggings', audienceId: audience.id },
            { name: 'Dresses & Skirts', audienceId: audience.id },
          ],
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
