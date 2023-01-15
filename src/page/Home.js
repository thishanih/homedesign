import React from "react";
import ImageComponent from "../component/ImageComponent";
import bed from "../assets/image/double-bed.png";
import bath from "../assets/image/bath.png";
import car from "../assets/image/electric-car.png";
import IconComponent from "../component/IconComponent";

export default function Home() {
  return (
    <div className="bg-[#b6a999]">
      <div className="mt-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-7 grid-cols-1 gap-4">
          <div className="lg:col-span-3 flex flex-col w-full">
            <div className="flex md:flex-row items-center flex-col w-full my-4">
              <h2 className="font-georgia_italic leading-[25px] lg:text-[30px] text-[20px] lg:w-1/2 w-full md:text-left text-center">
                Bellini
              </h2>

              <div className="lg:w-1/2 w-full flex flex-row flex-wrap md:justify-start justify-center  items-center">
                <button className="mx-2 px-4 text-xl border-2 border-black hover:bg-black hover:text-white rounded-md my-2">
                  26
                </button>

                <button className="mx-2 px-4 text-xl border-2 border-black hover:bg-black hover:text-white rounded-md my-2">
                  26
                </button>
              </div>
            </div>
            <div className="flex flex-row flex-wrap w-full gap-8 md:justify-start justify-center">
              <IconComponent number={4} image={bed} />
              <IconComponent number={5} image={bath} />
              <IconComponent number={12} image={car} />
            </div>
            <div className="w-full font-proxima text-[25px] mt-4 my-2 md:text-left text-center">
              Price from $ 12 000
            </div>
            <div className="font-proxima text-[18px] my-2 md:text-left text-center">
              Designed to suit 12.5m x 32m block
            </div>

            <button className="border-2 border-white hover:border-black hover:bg-black text-white py-3 rounded-md my-2 uppercase">
              Download floor plain
            </button>

            <button className="border-2 border-white hover:border-black hover:bg-black text-white py-3 rounded-md my-2 uppercase">
              Enquire now
            </button>
          </div>

          <div className="lg:col-span-4">
            <ImageComponent
              image={
                "https://www.ardenhomes.com.au/wp-content/uploads/2020/10/Bellini29MK2_LH_5000x5400_0-BASE.png"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
