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
