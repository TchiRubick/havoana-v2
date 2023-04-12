import React from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import defaultImage from "../image/gamme.jpg"
import { Decimal } from "@prisma/client/runtime";

type tProps = {
  image: StaticImageData | null;
  name: string;
  barrcode: string;
  quantity: Decimal;
  cost: Decimal;
  price: Decimal;
};

const Inventory: React.FC<tProps> = (props) => {
  const { image, price, name, barrcode, quantity, cost } = props;
  
  return(
    <div className="bg-white bg-opacity-5 rounded-lg border-2 border-slate-700 w-64 ">
      <div className="flex rounded-t-lg justify-center place-items-center">
        <div className="relative opacity-60">
          <Image 
            src={image || defaultImage} 
            alt="un objet" 
            width={267} 
            height={100}
            className="rounded-t-lg w-64 h-28"
          />
        </div>
        <div className="absolute text-sm " >
          <span className="text-white font-bold">
            {name} - {price} Ar
          </span>
        </div>
      </div>
      <div className="ml-3 text-white">
        <div className="text-xs">
          <div>
            <label>
              {barrcode}
            </label>
          </div>
          <div>
            <label>
              Qtt: {quantity}
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
            <Link className="btn btn-sm w-28 bg-white bg-opacity-5 hover:bg-none text-white hover:bg-slate-700" 
              href={"#"}>
              Details
            </Link>
          </div>
          <div>
            <button className="btn btn-sm w-24 bg-green-500 text-white hover:bg-green-700">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;