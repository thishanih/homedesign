import React, { useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";

export default function ImageComponent(props) {
  const { image } = props;

  const [imageFlip, setImageFlip] = useState("");
  const [imageStyle, setImageStyle] = useState({
    showControls: true,
    scale: 1,
    translation: { x: 0, y: 0 },
  });

  const setZoomIn = () => {
    if (imageStyle.scale < 3) {
      setImageStyle({ ...imageStyle, ...{ scale: imageStyle.scale + 0.1 } });
    }
  };

  const setZoomOut = () => {
    if (imageStyle.scale > 0) {
      setImageStyle({ ...imageStyle, ...{ scale: imageStyle.scale - 0.1 } });
    }
  };

  const setFilp = () => {
    if (!imageFlip) {
      setImageFlip("transform -scale-x-100");
    } else {
      setImageFlip("");
    }
  };

  return (
    <>
      <div className="bg-white my-4 flex flex-row">
        <div className="w-[90%]">
          <MapInteractionCSS
            value={imageStyle}
            onChange={(value) => {
              setImageStyle(value);
            }}
          >
            <img className={`${imageFlip}`} src={image} alt="map" />
          </MapInteractionCSS>
        </div>
        <div className="bg-white my-4 flex w-[10%] flex-col">
          <button
            className="p-3 w-full flex justify-center items-center hover:bg-[#ebe8e3]"
            onClick={setZoomIn}
          >
            <i className="fa-solid fa-magnifying-glass-plus fill-current text-2xl "></i>
          </button>
          <button
            className="p-3 w-full flex justify-center items-center hover:bg-[#ebe8e3]"
            onClick={setZoomOut}
          >
            <i className="fa-solid fa-magnifying-glass-minus fill-current text-2xl "></i>
          </button>
          <button
            className="p-3 w-full flex justify-center items-center hover:bg-[#ebe8e3]"
            onClick={() => {
              setImageStyle({
                scale: 1,
                translation: { x: 0, y: 0 },
              });
            }}
          >
            <i className="fa-solid fa-rotate-left fill-current text-2xl "></i>
          </button>
          <div
            className="p-3 w-full flex justify-center items-center hover:bg-[#ebe8e3]"
            onClick={setFilp}
          >
            <i className="fa-solid fa-repeat fill-current text-2xl "></i>
          </div>
        </div>
      </div>
    </>
  );
}
