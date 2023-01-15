import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { saveAs } from "file-saver";
import ApiService from "../service/api.service";
import formatCurrencyWithinFixed from "../shared/FormatCurrency";

import ImageComponent from "../component/ImageComponent";
import bed from "../assets/image/double-bed.png";
import bath from "../assets/image/bath.png";
import car from "../assets/image/electric-car.png";
import IconComponent from "../component/IconComponent";

export default function SingleHouse() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [plans, setPlans] = useState([]);
  const [variantInfo, setVariantInfo] = useState({});

  const LoadHouseData = useCallback(() => {
    if (params.id) {
      ApiService.getHouseById(params.id)
        .then((response) => {
          if (response) {
            setData(response.data.data.attributes);
            setPlans(response.data.data.attributes.plans.data);
            setVariantInfo(response.data.data.attributes.plans.data[0]);
          }
        })
        .catch((error) => {
          console.log(
            "🚀 ~ file: SingleHouse.js:15 ~ LoadProductData ~ error",
            error
          );
        });
    }
  }, [params.id]);

  const downloadImage = (ImageUrl, variantName) => {
    saveAs(ImageUrl, `${variantName}.jpg`);
  };

  const onVariantInfo = async (value) => {
    setVariantInfo(value);
  };

  useEffect(() => {
    LoadHouseData();
  }, [LoadHouseData, params.id]);

  return (
    <>
      <div className="bg-[#b6a999]">
        <div className="mt-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-7 grid-cols-1 gap-4">
            <div className="lg:col-span-3 flex flex-col w-full">
              <div className="flex md:flex-row items-center flex-col w-full my-4">
                <h2 className="font-georgia_italic leading-[25px] lg:text-[30px] text-[20px] lg:w-1/2 w-full md:text-left text-center">
                  {data.name}
                </h2>

                <div className="lg:w-1/2 w-full flex flex-row flex-wrap md:justify-start justify-center  items-center">
                  {plans &&
                    plans.map((variant, index) => (
                      <button
                        key={index}
                        className={`${
                          variant?.id === variantInfo.id
                            ? "mx-2 px-4 text-[20px] border-2 border-black hover:bg-black bg-black text-white hover:text-white rounded-md my-2 font-proxima"
                            : "mx-2 px-4 text-[20px] border-2 border-black hover:bg-black hover:text-white rounded-md my-2 font-proxima"
                        }`}
                        onClick={() => {
                          onVariantInfo(variant);
                        }}
                      >
                        {variant.attributes.name}
                      </button>
                    ))}
                </div>
              </div>
              <div className="flex flex-row flex-wrap w-full gap-8 md:justify-start justify-center">
                <IconComponent
                  number={variantInfo.attributes?.bedroom}
                  image={bed}
                />
                <IconComponent
                  number={variantInfo.attributes?.bathroom}
                  image={bath}
                />
                <IconComponent
                  number={variantInfo.attributes?.garage}
                  image={car}
                />
              </div>
              <div className="w-full font-proxima text-[25px] mt-4 my-2 md:text-left text-center">
                Price from ${" "}
                {formatCurrencyWithinFixed(variantInfo.attributes?.price)}
              </div>
              <div className="font-proxima text-[18px] my-2 md:text-left text-center">
                Designed to suit {variantInfo.attributes?.size} m2
              </div>

              <button
                onClick={() => {
                  downloadImage(
                    variantInfo.attributes?.floorPlan,
                    variantInfo.attributes?.name
                  );
                }}
                className="border-2 border-white hover:border-black hover:bg-black text-white py-3 rounded-md my-2 uppercase font-proxima"
              >
                Download floor plain
              </button>

              <button className="border-2 border-white hover:border-black hover:bg-black text-white py-3 rounded-md my-2 uppercase font-proxima">
                Enquire now
              </button>
            </div>

            <div className="lg:col-span-4">
              <ImageComponent image={variantInfo.attributes?.floorPlan} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
