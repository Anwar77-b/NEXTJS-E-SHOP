import React from "react";

function AdditionalInfo({ info }) {
  return (
    <div className="text-sm md:text-base pb-2">
      <h3 className="my-2 text-[15px] text-gray-600 font-semibold">Details</h3>
      <p>{info.details}</p>
      <h3 className="my-2 text-[15px] text-gray-600 font-semibold">
        Packaging
      </h3>
      <p>
        Width : {info.packaging.width} cm, Height: {info.packaging.height} cm
        <br />
        Weight: {info.packaging.weight} kg <br />
        Packages : {info.packaging.packages}
      </p>
    </div>
  );
}

export default AdditionalInfo;
