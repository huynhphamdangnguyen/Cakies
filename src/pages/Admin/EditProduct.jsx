import { useState, useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const EditProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching product:", error);
      }

      setProduct(data);
      setName(data.name);
      setPrice(data.price);
      setCategory(data.category);
      setDescription(data.description);
    })();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { data, error } = await supabase
      .from("products")
      .update({
        name,
        price,
        category,
        description,
      })
      .eq("id", id)
      .select();
    console.log("🚀 ~ handleSubmit ~ data:", data);

    if (error) {
      console.error("Error updating product:", error);
    }
    // if (data) {
    //   alert("Product updated successfully");
    toast.success("Product updated successfully");
  }

  return (
    <div className="my-8">
      <form
        onSubmit={handleSubmit}
        className="container mx-auto bg-gray-300 p-4 rounded-xl"
      >
        <h1 className="text-2xl font-bold mb-4 text-indigo-500">
          Edit Product
        </h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block text-gray-700 font-bold mb-2 rounded-md p-2 w-full"
            placeholder="Product Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="block text-gray-700 font-bold mb-2 rounded-md p-2 w-full"
            placeholder="Product Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block text-gray-700 font-bold mb-2 rounded-md p-2 w-full"
            placeholder="Product Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block text-gray-700 font-bold mb-2 rounded-md p-2 w-full"
            placeholder="Product Name"
          />
        </div>
        <button
          type="submit"
          className="flex justify-center items-center py-3 px-4 bg-green-700 text-white font-bold border border-green-700 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-green-700 lg:m-0 md:px-6"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
