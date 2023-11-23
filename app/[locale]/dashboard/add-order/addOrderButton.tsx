"use client";

import { useState, useTransition } from "react";
import { addOrder } from "./actions";

interface AddOrderButtonProps {
  status: String;
  customerId: String;
  shopkeeperId: String;
  // id           String      @id @default(auto()) @map("_id") @db.ObjectId
  // status       orderStatus @default(Pending)
  // createdAt    DateTime    @default(now())
  // updatedAt    DateTime    @updatedAt
  // customer     Customer    @relation(fields: [customerId], references: [id])
  // customerId   String      @db.ObjectId
  // shopkeeperId String      @db.ObjectId
  // shopkeeper   Shopkeeper  @relation(fields: [shopkeeperId], references: [id])
  // products     Product     @relation(fields: [productId], references: [id])
  // productId    String      @db.ObjectId
}

export default function AddOrderButton({
  status,
  customerId,
  shopkeeperId,
}: AddOrderButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className='flex items-center gap2'>
      <button
        className='btn btn-primary'
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await addOrder(status, customerId, shopkeeperId);
            setSuccess(true);
          });
        }}
      >
        Add Order
      </button>
      {isPending && <span className='loading loading-spinner loading-md' />}
      {!isPending && success && (
        <span className='text-success'>Order Added</span>
      )}
    </div>
  );
}
