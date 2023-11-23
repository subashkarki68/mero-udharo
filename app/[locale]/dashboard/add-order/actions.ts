"use server";

export async function addOrder(
  status: String,
  customerId: String,
  shopkeeperId: String
) {
  await prisma.order.create({
    data: { status, customerId, shopkeeperId },
  });
}
