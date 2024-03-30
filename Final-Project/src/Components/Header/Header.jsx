// import React from "react";

// function Header() {
//   return (
//     <header>
//       <div className="logo_title">
//         <a href="/">Cakies</a>
//       </div>
//       <div className="bar">
//         <nav>
//           <ul>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/product">Products</a>
//             </li>
//             <li>
//               <a href="/about">About</a>
//             </li>
//           </ul>
//         </nav>
//         <button className=" w-1/7 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//           <a href="/login">Login</a>
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <div className="logo_title">
        <a href="/">Cakies</a>
      </div>
      <div className="bar">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/product">Products</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
        <button className="w-1/7 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <a href="/cart"><FontAwesomeIcon icon={faCartShopping} /></a>
        </button>
        <button className="w-1/7 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <a href="/login">Login</a>
        </button>
      </div>
    </header>
  );
}

export default Header;
