interface ShopKeeperOrderFormProps {
  handleCreateOrder: (formData: FormData) => void;
}

const ShopKeeperOrderForm: React.FC<ShopKeeperOrderFormProps> = ({
  handleCreateOrder,
}) => {
  return (
    <form className='form-control w-1/2' action={handleCreateOrder}>
      <label className='cursor-pointer label'>
        <span className='label-text'>Product Name</span>
        <input type='text' name='productName' />
      </label>
      <label className='cursor-pointer label'>
        <span className='label-text'>Product Price</span>
        <input type='number' name='productPrice' />
      </label>
      <label className='cursor-pointer label'>
        <span className='label-text'>Customer Name</span>
        <input type='text' name='customerName' />
      </label>
      <div className='form-control'>
        <label className='cursor-pointer label'>
          <span className='label-text'>Not Paid</span>
          <input
            type='checkbox'
            name='isPaid'
            className='toggle toggle-success'
            defaultChecked={false}
          />
          <span className='label-text'>Paid</span>
        </label>
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  );
};
export default ShopKeeperOrderForm;
