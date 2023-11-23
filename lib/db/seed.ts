const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const shopkeepers = await prisma.shopkeeper.createMany({
    data: [
      {
        name: "Shopkeeper1",
        email: "shopkeeper1@example.com",
        password: "password1",
      },
      {
        name: "Shopkeeper2",
        email: "shopkeeperac@example.com",
        password: "password2",
      },
    ],
  });

  const customers = await prisma.customer.createMany({
    data: [
      {
        name: "Customer1",
        email: "customer1@example.com",
        password: "password1",
        credits: 100,
      },
      {
        name: "Customer2",
        email: "customer2@example.com",
        password: "password2",
        credits: 150,
      },
    ],
  });

  const products = await prisma.product.createMany({
    data: [
      { name: "Product1", price: 29.99 },
      { name: "Product2", price: 39.99 },
    ],
  });

  const orders = await prisma.order.createMany({
    data: [
      {
        status: "Paid",
        customerId: customers[0].id,
        productId: products[0].id,
      },
      {
        status: "Pending",
        customerId: customers[1].id,
        productId: products[1].id,
      },
    ],
  });

  console.log("Seed data created successfully!");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
