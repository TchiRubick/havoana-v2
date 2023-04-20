import React from "react";
import { type NextPage } from "next";
import { FcSearch } from "react-icons/fc";
import { HiPlus } from "react-icons/Hi";
import { api } from "../utils/api";
import ProtectedLayout from "../components/layout/ProtectedLayout";
import Inventory from "../components/Inventory";
import Link from 'next/link';


const Inventories: NextPage = () => {
  const { data, isLoading } = api.inventory.getList.useQuery();

  const renderInventories = data?.map((list) => (
    <div className="w-64" key={list.barrcode}>
      <Inventory
        name = {list.name}
        price={list.price}
        barrcode = {list.barrcode}
        quantity = {list.quantity}
        cost = {list.cost}
      />
    </div>
  ));

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
                <Link href="/createinventory">
                <button className="btn">
                  <HiPlus className="pr-1"/> Creat Inventory
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-16 gap-y-3 mx-52">
            {isLoading ? 'Loading...' : renderInventories}
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