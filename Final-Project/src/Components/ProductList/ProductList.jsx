// eslint-disable-next-line no-unused-vars
import React from "react";
import cake from "../Asset/cake.png";

function ProductList() {
  return (
    <section>
      <div className="text-center text-4xl font-semibold font-mono">
        <h2>Our Cakes</h2>
      </div>
      <div className="flex min-h-full flex-row justify-center px-6 py-12 lg:px-8">
        <div className="product">
          <img src={cake} alt="Chocolate Cake" />
          <h3>Chocolate Cake</h3>
          <p>A rich and decadent chocolate cake.</p> 
          <p>$20.00</p>
          <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add to Cart
          </button>
        </div>
        <div className="product">
          <img src={cake} alt="Chocolate Cake" />
          <h3>Chocolate Cake</h3>
          <p>A rich and decadent chocolate cake.</p>
          <p>$20.00</p>
          <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add to Cart
          </button>
        </div>
        <div className="product">
          <img src={cake} alt="Chocolate Cake" />
          <h3>Chocolate Cake</h3>
          <p>A rich and decadent chocolate cake.</p>
          <p>$20.00</p>
          <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add to Cart
          </button>
        </div>
        <div className="product">
          <img src={cake} alt="Chocolate Cake" />
          <h3>Chocolate Cake</h3>
          <p>A rich and decadent chocolate cake.</p>
          <p>$20.00</p>
          <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add to Cart
          </button>
        </div>
        <div className="product">
          <img src={cake} alt="Chocolate Cake" />
          <h3>Chocolate Cake</h3>
          <p>A rich and decadent chocolate cake.</p>
          <p>$20.00</p>
          <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
