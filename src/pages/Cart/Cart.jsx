import { useState, useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const { items } = useSelector((state) => state.cart);

  const handleCheckout = async () => {
    // Implement checkout logic here
    const { data: order, error } = await supabase
      .from("order")
      .insert([{ user_id: "da2f4a62-0c8c-4eaf-bf47-3d8efbd0c1f2" }])
      .select()
      .single();
    if (order) {
      const orderDetails = items.map((item) => ({
        order_id: order?.id,
        product_id: item?.id,
        quantity: item?.quantity,
      }));

      const { data, error } = await supabase
        .from("order_detail")
        .insert(orderDetails)
        .select();
      if (data) {
        toast.success("Checkout successfully");
      } else {
        toast.error("Checkout failed");
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {items.length > 0 ? (
        // If cartItems is truthy (i.e., not empty)
        <div>
          {/* Render cartItems here */}
          {items.map((item) => (
            <div key={item.id}>
              {/* Render each item here */}
              <p>{item.name}</p>
              <p>{item.price}</p>
              {/* Add more fields as needed */}
            </div>
          ))}
        </div>
      ) : (
        // If cartItems is falsy (i.e., empty)
        <div>No item add</div>
      )}
      {/* {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl">{item.name}</h2>
            <p>{item.price}vnd</p>
          </div>
          <div>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => {
                const newQuantity = e.target.value;
                setCartItems(
                  cartItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: newQuantity } : i
                  )
                );
              }}
            />
          </div>
        </div>
      ))} */}
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-xl">Total</h2>
        <p>vnd</p>
      </div>
      <button
        className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-orange-500 text-white font-bold border border-orange-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-orange-500 lg:m-0 md:px-6"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;
