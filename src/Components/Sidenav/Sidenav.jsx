import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineShoppingCart,
  AiOutlineInbox,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 rigth-4 z-[-99] md:hidden"
      />
      {/* {
              nav ? (
                  <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                      <a href="/" className='w-[75%] flex jutify-center items-center rounded-full shadow-lg bg-gray-400 m-2 p-4 cursor-poniter hover:scale-110 ease-in duration-200'>
                          <AiOutlineHome size={20} />
                          <span className='pl-4'>Home</span>
                      </a>
                      <a href="/" className='w-[75%] flex jutify-center items-center rounded-full shadow-lg bg-gray-400 m-2 p-4 cursor-poniter hover:scale-110 ease-in duration-200'>
                          <AiOutlineHome size={20} />
                          <span className='pl-4'>Home</span>
                      </a>
                      <a href="/" className='w-[75%] flex jutify-center items-center rounded-full shadow-lg bg-gray-400 m-2 p-4 cursor-poniter hover:scale-110 ease-in duration-200'>
                          <AiOutlineHome size={20} />
                          <span className='pl-4'>Home</span>
                      </a>
                      <Link to='/login' className='w-[75%] flex jutify-center items-center rounded-full shadow-lg bg-gray-400 m-2 p-4 cursor-poniter hover:scale-110 ease-in duration-200'>
                          <AiOutlineUser size={20} />
                          <span className='pl-4'>Login</span>
                      </Link>
                  </div>
              ) : (
                      ''
              )
          } */}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <Link
            to="/"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </Link>
          <Link
            to="/products"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineInbox size={20} />
          </Link>
          <Link
            to="/cart"
            className="rounded-full relative shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineShoppingCart size={20} />
            <span className="absolute rounded-full -top-0 -right-1 text-[13px] bg-red-600 h-[18px] w-[18px] grid place-items-center text-white">
              {cartItems.length}
            </span>
          </Link>
          <Link
            to="/profile"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineUser size={20} />
          </Link>
          <Link
            to="/login"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineLogin size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
