import React from "react";

export default function IconComponent(props) {
  const { number, image } = props;

  return (
    <>
      <div className="flex flex-row justify-end items-end gap-2">
        <img className="w-16" src={image} alt="map" />
        <p className="font-proxima text-[20px]">{number}</p>
      </div>
    </>
  );
}
