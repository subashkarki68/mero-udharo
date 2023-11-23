import ShopKeeperOrderForm from "@/components/forms/ShopkeeperOrderForm";
import AddOrderButton from "./addOrderButton";
import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  async function createOrder(formData: FormData) {
    "use server";
    const data = await formData;
    const u = await useUser();
    const isPaid = data.get("isPaid") ? "Paid" : "Pending";
    const customerId = u.user?.id;
    console.log("data: ", data);
    console.log("u: ", u);
    console.log("status: ", idPaid);
    console.log("customerId: ", customerId);
  }
  return (
    <div>
      <h1 className='text-xl'>Add Order</h1>
      <ShopKeeperOrderForm handleCreateOrder={createOrder} />
      <AddOrderButton status={isPaid} customerId={customerId} shopkeeperId={} />
    </div>
  );
}
