import React from "react";
import { type NextPage } from "next";
import { FcSearch } from "react-icons/fc";
import { HiPlus } from "react-icons/Hi";
import Object from "../components/PropsObject"

const Inventories: NextPage = () => {

  return(
    <div className="h-screen">
      <div>
        <button className="btn">
          <HiPlus/> Creat Inventory
        </button>
      </div>
      <div className="w-1/6">
        <div>
          <span className="flex flex-nowrap">
            <div className="pt-1">
              <FcSearch/>
            </div> 
            <div>
              Barcode or Name:
            </div> 
          </span>
        </div>
        <div>
          <input 
            type="text" 
            placeholder="00000000000000000000" 
            className="input input-ghost input-xs w-2/3" 
          />
        </div>
        <div>
          <Object/>
        </div>
      </div>
      <div className="btn-group">
        <button className="btn btn-xs">1</button>
        <button className="btn btn-xs">2</button>
        <button className="btn btn-xs">3</button>
        <button className="btn btn-xs">4</button>
      </div>
    </div>
  );
};

export default Inventories;