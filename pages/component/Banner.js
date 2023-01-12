import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

function Banner() {
  return (
    <>
      <div className="h-60 sm:h-64 xl:h-80  2xl:h-96 ">
        <Carousel>
          <div className="relative h-96 lg:h-96  ">
            <Image
              src="/img/banner1.png"
              alt="..."
              //   width={100}
              //   height={100}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="relative h-96 lg:h-96  ">
            <Image
              src="/img/banner2.png"
              alt="..."
              // width={100}
              // height={100}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Banner;
