import React from "react";
import { type NextPage } from "next";
import { FcSearch } from "react-icons/fc";
import { HiPlus } from "react-icons/Hi";
import ProtectedLayout from "../components/layout/ProtectedLayout";
import Inventorie from "../components/Inventorie"
import raisin from "../image/raisin.jpg"
import pomme from "../image/pomme.jpg"

const objt = [
  {name: 'Raisin', prix: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: raisin}, 
  {name: 'Raisin', prix: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: pomme},
  {name: 'Raisin', prix: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: raisin},
  {name: 'Raisin', prix: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: raisin},
  {name: 'Raisin', prix: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: null},
  {name: 'Raisin', prix: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: raisin},
  {name: 'Raisin', prix: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: raisin},
  {name: 'Raisin', prix: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: null},
  {name: 'Raisin', prix: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: raisin},
  {name: 'Raisin', prix: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: raisin},
  {name: 'Raisin', prix: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: raisin},
  {name: 'Raisin', prix: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: raisin},
];

const Inventories: NextPage = () => {

  const renderInventories = objt.map((list) => (
    <div className="w-64" key={list.name}>
      <Inventorie
        name = {list.name}
        prix={list.prix}
        barcode = {list.barcode}
        qtt = {list.qtt}
        cost = {list.cost}
        image={list.img}
      />
    </div>
  ))

  return(
    <ProtectedLayout>
      <div className="h-full min-h-screen">
        <div>
          <div className="flex flex-row justify-between mb-5">
            <div className="pt-4">
              <span className="flex flex-nowrap">
                <div className="pt-1">
                  <FcSearch/>
                </div> 
                <div>
                  Barcode or Name:
                </div> 
                <div className="ml-2">
                  <input 
                    type="text" 
                    placeholder="0000000000000000000000" 
                    className="input input-ghost input-xs" 
                  />
                </div>
              </span>
            </div>
            <div>
              <div>
                <button className="btn">
                  <HiPlus className="pr-1"/> Creat Inventory
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-16 gap-y-3 mx-52">
            {renderInventories}
          </div>
        </div>
        <div className="btn-group flex justify-center mt-4">
          <button className="btn btn-xs">1</button>
          <button className="btn btn-xs">2</button>
          <button className="btn btn-xs">3</button>
          <button className="btn btn-xs">4</button>
        </div>
      </div>
    </ProtectedLayout>
  );
};

export default Inventories;