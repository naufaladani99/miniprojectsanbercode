import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import gambar from "../public/shoping_hero.svg";
// import { Navbar } from "flowbite-react";
import NewHeader from "./component/NewHeader";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import Card from "./HOC/Card";
import { data } from "autoprefixer";

export async function getServerSideProps() {
  let res = await fetch(`https://service-example.sanbercloud.com/api/product`);

  let Product = await res.json();

  return {
    props: {
      Product,
    },
  };
}

export default function Home({ Product }) {
  // console.log(Product);

  const [dataProduct, setDataProduct] = useState(Product);
  const [limit, setLimit] = useState(5);

  //indikator
  const [displaySpinner, setDisplaySpinner] = useState(false);

  const handleCounterFilter = () => {
    setDisplaySpinner(true);

    setTimeout(() => {
      setLimit(limit + 5);
      setDisplaySpinner(false);
    }, 1000);
  };

  return (
    <div className="p-5">
      <div>
        <NewHeader />
        {/* footer */}
        {/* content */}
        <div className="mt-10 mb-10">
          <Banner />
        </div>
        <hr />

        <div className="font-semibold text-2xl my-5">
          <h1>Semua Produk</h1>
        </div>
        {/* kartu */}
        <div className="flex flex-wrap gap-10 justify-start lg:justify-start items-center">
          {dataProduct.length !== 0 &&
            dataProduct
              .filter((res, index) => {
                return res.available === 1 && index < limit;
              })
              .map((res) => {
                return <Card key={res.id} data={res} />;
              })}
        </div>
      </div>
      {!displaySpinner && (
        <div className=" mt-3 my-10 w-full flex justify-center items-center ">
          <button
            type="button"
            onClick={handleCounterFilter}
            className="flex py-3 px-5 mr-2 my-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Muat Data Lainnya
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-5 w-4 h-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
      )}
      {displaySpinner && (
        <div className=" mt-3 my-10 w-full flex justify-center items-center border">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
}
