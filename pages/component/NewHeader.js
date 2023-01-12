import React, { useEffect, useState } from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import Cookies from "js-cookie";
import { sendStatusCode } from "next/dist/server/api-utils";

function NewHeader() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (Cookies.get("token_user") !== undefined) {
      setUser(JSON.parse(Cookies.get("user")));
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("token_user");
    Cookies.remove("user");
    setUser(undefined);
    window.location = "/auth/user-login";
  };

  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <span className="mr-4 mt-3 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Website
          </span>
        </Navbar.Brand>{" "}
        {/* <div className="flex   ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-6 h-6 my-auto md:hidden lg:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
      {/* <Navbar.Toggle /> */}
        {/* </div> */}
        {/*  */}
        {/* search */}
        <div className="grow lg:px-10 px-0  ">
          <form>
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative flex  w-[90%]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="md:mt-0  xl:mt-0 mt-5 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                className="md:mt-0  xl:mt-0 mt-5  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>{" "}
        <Navbar>
          {/* list */}
          <div>
            <ul className="mt-3  ml-[-100px] flex">
              <li className=" border-r-2 pr-3 border-gray-500 my-auto">
                <Link href={"/user/checkout"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6 my-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </Link>
              </li>
              {!user && (
                <li>
                  <Link href="/auth/user-login">
                    <Navbar active={true}>
                      <p className="text-white ml-[-3px]">Login</p>
                    </Navbar>
                  </Link>
                </li>
              )}
              {user && (
                <li>
                  <span onClick={handleLogout} className="text-white ml-[-3px]">
                    Logout
                  </span>
                </li>
              )}
            </ul>
          </div>
        </Navbar>
      </Navbar>
    </div>
  );
}

export default NewHeader;
