import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
// import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Login() {
  // let router = useRouter();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  //tampilkan cookie
  // console.log(Cookies.get("user"));

  const handleChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleRegister = (e) => {
    e.preventDefault();

    // console.log(input);

    let { email, password } = input;

    axios
      .post(`https://service-example.sanbercloud.com/api/login`, {
        email,
        password,
      })
      .then((res) => {
        //menampilkan isi token
        let { token } = res.data;
        let { user } = res.data;
        let decoded = jwtDecode(token);
        console.log(decoded);
        // router.push("/auth/user-login");

        //simpan JWT ke cookies
        if (decoded.role !== "admin") {
          Cookies.set("token_user", token, { expires: 1 });
          Cookies.set("user", JSON.stringify(user), { expires: 1 });
          window.location = "/";
        } else {
          alert("akun kamu bukan user");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="flex justify-center ">
      {/* // <div className="h-screen w-full flex justify-center"> */}
      <div className="my-[13%] flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-xl dark:bg-white-300 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-black">
          Login Your Account
        </div>
        <div className="mt-8">
          <form onSubmit={handleRegister} autoComplete="off">
            <div className="flex flex-col mb-2"></div>

            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <input
                  required
                  onChange={handleChange}
                  name="email"
                  value={input.email}
                  type="email"
                  id="sign-in-email"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </span>
                <input
                  required
                  onChange={handleChange}
                  name="password"
                  value={input.password}
                  type="password"
                  id="sign-in-email"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your password"
                />
              </div>
            </div>
            <div className="flex items-center mb-6 -mt-4"></div>
            <div className="flex w-full">
              <div className="flex w-full">
                <button
                  type="submit"
                  className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Login
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center mt-6">
              <a
                href="/auth/user-register"
                target="_blank"
                className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-black"
              >
                <span className="ml-2">You don&#x27;t have an account?</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
