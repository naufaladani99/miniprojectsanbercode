import React, { useEffect, useState } from "react";
import NewHeader from "../component/NewHeader";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

export default function DetailData() {
  let router = useRouter();
  let { id } = router.query;
  //   console.log(id);

  const [dataProduct, setDataProduct] = useState(null);

  console.log(id);

  useEffect(() => {
    if (id !== undefined) {
      axios
        .get(`https://service-example.sanbercloud.com/api/product/${id} `)
        .then((res) => {
          let data = res.data;
          setDataProduct(data);
        });
    }
  }, [id]);

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
  return (
    <div className="p-5">
      <div className="mb-[30%]">
        <NewHeader />
        <div className="my-20 text-2xl font-bold">
          <h1>Detail Product</h1>
        </div>

        {/* div card */}
        {dataProduct !== null && (
          <div className="border">
            <div className="flex flex-row flex-wrap w-full overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="relative object-cover h-96 w-96 lg:w-full lg:h-96 ">
                <Image
                  src={`/api/imageproxy?url=${encodeURIComponent(
                    dataProduct.image_url
                  )}`}
                  alt="Flowbite Logo"
                  // width={100}
                  // height={100}
                  objectFit="cover"
                  layout="fill"
                  quality={80}
                />
              </div>
              <div className=" w-2/3 flex flex-col p-4 grow lg:mt-0 mt-0">
                <h1 className="text-2xl font-bold text-gray-900">
                  {dataProduct.product_name}
                </h1>
                <p className="mt-2 grow text-sm text-gray-600">
                  {dataProduct.description}
                </p>
                <div className="flex mt-2 item-center">
                  <p className="text-sm">Stock : {dataProduct.stock}</p>
                </div>
                <div className="flex justify-between mt-3 item-center">
                  <h1 className="text-xl font-bold text-gray-700">
                    Rp {formatRupiah(dataProduct.price)}
                  </h1>
                  <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                    Add to Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
