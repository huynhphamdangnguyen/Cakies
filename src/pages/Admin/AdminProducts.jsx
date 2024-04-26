import { useEffect, useState } from "react";
import { supabase } from "../../config/supabaseClient";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Example() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(0);
  const [editingProduct, setEditingProduct] = useState("");

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    (async () => {
      let { data: products, error } = await supabase
        .from("products")
        .select("*");
      console.log(products);
      setProducts(products);
    })();
  }, []);

  const handleDelete = async (id) => {
    try {
      await supabase.from("products").delete().eq("id", id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
    toast.error("Product deleted successfully");
  };

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  console.log(product);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the submission of the product data
    console.log(product);
    // Reset the form
    setProduct({
      name: "",
      price: "",
      category: "",
      description: "",
    });
  };

  const handleAddProduct = async () => {
    const { data, error } = await supabase.from("products").insert([
      {
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description,
        image: product.image,
      },
    ]);
    toast.success("Product added successfully");
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Add a new product
        </AccordionHeader>
        <AccordionBody>
          <div className="container mx-auto bg-gray-100 p-4 rounded-xl">
            <h1 className="text-2xl font-bold mb-4 text-blue-600">
              Add Product
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddProduct}
              >
                Add Product
              </button>
            </form>
          </div>
        </AccordionBody>
      </Accordion>
      <ul role="list" className="divide-y divide-gray-100">
        {products.map((person) => (
          <li key={person.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-14 w-14" src={person.image} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.category}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.price}</p>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                {person.description}
              </p>
            </div>
            <Link
              to={`/admin/products/${person.id}`}
              className="flex justify-center items-center bg-green-500 text-white font-bold border border-green-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-green-500 lg:m-0 md:px-6"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(person.id)}
              className="flex justify-center items-center bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
