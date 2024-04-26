import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Counter/cartSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../config/supabaseClient";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems[0]);
  const dispatch = useDispatch();

  // const { id } = useParams();
  // const [products, setProdu  cts] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const { data, error } = await supabase
  //                 .from('products')
  //                 .select()
  //                 .eq('id', id)
  //                 .single()
  //             setProducts(data)
  //         } catch (error) {
  //             console.log("Error fetching data:", error)
  //         }
  //     }
  //     fetchData()
  //     window.scrollTo({top: 0, behavior: 'smooth'})
  // }, [id])
  return (
    <div>
      <div className="container mx-auto py-2 text-[24px] flex justify-center items-center">
        <h1 className="text-2xl font-bold">Your Cart</h1>
      </div>

      {cartItems.map((item, index) => (
        <div
          key={index}
          className="bg-white max-w-[800px] mx-auto mt-4 py-2 px-6 flex gap-6 items-center justify-between"
        >
          <h1 className="font-bold text-2xl">{item.title}</h1>
          <h3>Qty: {item.quantity}</h3>
        </div>
      ))}

      {/* <button onClick={() => dispatch(addToCart({
        id: 1,
        title: 'Product 1',
        price: 100,
        quantity: 1
      }))}>Add to cart</button> */}
    </div>
  );
}

export default Cart;
