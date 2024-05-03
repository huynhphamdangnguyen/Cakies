import { useState, useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useStripe } from "@stripe/react-stripe-js";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const stripe = useStripe();

  const { items } = useSelector((state) => state.cart);
  console.log("🚀 ~ Cart ~ items:", items);

  const handleCheckout = async () => {
    // const { data: order, error } = await supabase
    //   .from("order")
    //   .insert([{ user_id: "da2f4a62-0c8c-4eaf-bf47-3d8efbd0c1f2" }])
    //   .select()
    //   .single();
    // if (order) {
    //   const orderDetails = items.map((item) => ({
    //     order_id: order?.id,
    //     product_id: item?.id,
    //     quantity: item?.quantity,
    //   }));

    // const { data, error } = await supabase
    //   .from("order_detail")
    //   .insert(orderDetails)
    //   .select();
    // if (data) {
    //   toast.success("Checkout successfully");
    const { data, error } = await supabase.functions.invoke("hello-world", {
      body: {
        products: items,
      },
    });

    stripe.redirectToCheckout({
      sessionId: data.sessionId,
    });

    //   } else {
    //     toast.error("Checkout failed");
    //   }
    // }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {items.length > 0 ? (
        <div>
          {items.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <img src={item.image} alt="" className="w-16 h-16 mr-4" />
              <div>
                <p className="text-lg font-bold">{item.name}</p>
                <p className="text-gray-500">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No items added</div>
      )}

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
