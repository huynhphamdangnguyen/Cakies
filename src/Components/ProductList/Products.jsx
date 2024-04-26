import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../Card";
import { supabase } from "../../config/supabaseClient";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data, error } = await supabase.from("products").select("*");
        console.log("🚀 ~ fetchData ~ products:", data);
        setProducts(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-2xl mt-6 container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="text-4xl font-bold text-center text-[#001b5e]">
        Products
      </h2>
      <Card filteredItems={products} />
    </div>
  );
};

export default Products;
