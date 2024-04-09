// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import logo from "../../Components/Asset/logo.png";
import { auth }  from "../../config/firestore";

// import { LoginWithEmailPass } from "../../config/firestore"
import { signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const user = await signInWithEmailAndPassword(auth, email, password)
    console.log(user)
    if (user) {
      navigate("/");
    }
    // .then((userCredential) => {
    //   console.log(userCredential);
    //   if (userCredential) {
    //     return redirect("/")
    //   }
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
  }  
  

  return (

    <div className="flex min-h-full flex-col justify-center bg-transparent px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-max w-auto" src={logo} alt="Cakies" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={login}>
          <div>
            <label
              htmlFor="email" 
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="input"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
              <button
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </button>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="btn">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={login}
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have account?
          <button
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            <a href="/register">Click Here!</a>
          </button>
        </p>
      </div>
    </div>
  );
  };
