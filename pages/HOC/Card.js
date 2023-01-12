import Image from "next/image";
import Link from "next/link";
import React from "react";

//Parameter data dari index.js
function Card({ data }) {
  console.log(data);

  //convert int to rupiah
  function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
  }

  // function handleText(param) {
  //   if (param === null) {
  //     return "";
  //   } else {
  //     return param.slice(0, 30) + "...";
  //   }
  // }

  return (
    <div
      className="relative border border-gray-100  "
      style={{ width: "250px" }}
    >
      <div className="relative object-cover w-full h-36 ">
        <Image
          src={`/api/imageproxy?url=${encodeURIComponent(data.image_url)}`}
          alt="Flowbite Logo"
          // width={100}
          // height={100}
          objectFit="cover"
          layout="fill"
          quality={80}
        />
      </div>
      {/* <img className="object-cover w-full h-56 lg:h-72" src={data.image_url} alt="Build Your Own Drone" loading="lazy" /> */}
      <div className="p-6">
        <small>
          <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-r-lg dark:bg-green-200 dark:text-green-900">
            {data.category.category_name}
          </span>
        </small>
        <h5 className="mt-4 line-clamp-1">{data.product_name}</h5>
        <ul className="mt-5 text-sm font-thin text-gray-500 ">
          <li>Stock : {data.stock}</li>
          <li className="text-lg font-bold">
            Harga : {formatRupiah(data.price)}
          </li>
        </ul>

        <div className="flex items-center justify-between mt-4 border">
          <button className="h-full px-2 text-black bg-gray-200">-</button>
          <input
            className="inline-block w-full h-full text-center focus:outline-none"
            placeholder="1"
          />
          <button className="h-full px-2 text-black bg-gray-200">+</button>
        </div>
        <button
          className="block w-full p-4 mt-5 text-sm font-medium text-white bg-blue-500 border rounded-sm"
          type="button"
        >
          Add to Cart
        </button>

        <Link
          href={`/detail-product/${data.id}`}
          className="block w-full p-4 mt-2 text-sm font-medium text-center text-blue-500 bg-white border border-blue-500 rounded-sm"
        >
          Detail Product
        </Link>
      </div>
    </div>
  );
}

export default Card;
