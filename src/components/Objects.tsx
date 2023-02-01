import React from "react";
import Image, { StaticImageData } from "next/image";

type objt = {
  image: StaticImageData;
  name: string;
  barcode: number;
  qtt: number;
  cost: number;
  prix: number;
};

const Objects: React.FC<objt> = (props) => {

  const { image, prix, name, barcode, qtt, cost} = props
  
  return(
    <div className="bg-white bg-opacity-5 rounded-lg border-2 border-slate-700 w-64 ">
      <div className="flex rounded-t-lg justify-center place-items-center">
        <div className="relative">
          <Image 
            src={image} 
            alt="un objet" 
            width={267} 
            height={80}
            className="rounded-t-lg"
          />
        </div>
        <div className="absolute text-sm " >
          <span className="text-white font-bold">
            {name} - {prix} Ar
          </span>
        </div>
      </div>
      <div className="ml-3 text-white">
        <div className="text-xs">
          <div>
            <label>
              {barcode}
            </label>
          </div>
          <div>
            <label>
              Qtt: {qtt}
            </label>
          </div>
          <div>
            <label>
              Cost: {cost} Ar
            </label>
          </div>
        </div>
        <div className="flex space-x-5 mt-4 mb-4">
          <div>
            <button className="btn btn-sm w-28 bg-white bg-opacity-5 hover:bg-none text-white">
              Details
            </button>
          </div>
          <div>
            <button className="btn btn-sm w-24 bg-green-500 text-white">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objects;