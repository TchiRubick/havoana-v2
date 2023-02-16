import React, { useState } from "react";
import { type NextPage } from "next";
import ProtectedLayout from "../components/layout/ProtectedLayout";
import { api } from "../utils/api";

const Createinventory: NextPage = () => {
  const [barrcode, setbarcode] = useState("");
  const [name, setname] = useState("");
  const [cost, setcost] = useState(0);
  const [price, setprice] = useState(0);
  const [quantity, setquantity] = useState(0);

  const blurquantity = () => {
    setquantity(0);
  };

  const mousequantity = () => {
    if (quantity === 0) {
      setquantity(parseInt(" "));
    }
  };

  const blurprice = () => {
    setprice(0);
  };

  const mouseprice = () => {
    if (price === 0) {
      setprice(parseInt(" "));
    }
  };

  const blurcost = () => {
    setcost(0);
  };

  const mousecost = () => {
    if (cost === 0) {
      setcost(parseInt(" "));
    }
  };

  const { mutateAsync, isLoading } = api.inventoryRoot.invent.useMutation();

  const inventory = async () => {
    
    const invent = await mutateAsync({ name,barrcode,cost,price,quantity});

  }



  return (
    <ProtectedLayout>
      <div className="flex items-center justify-center h-full mt-10">
        <div className="mb-4 max-w-md bg-[#19191A] px-8 py-10 shadow-md rounded-lg">
          <div className="grid grid-cols-2 gap-3">
            <div className="mb-4">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-neutral">
                barcode:
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
                value={barrcode}
                onChange={(e) => setbarcode(e.target.value)}
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                name:
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 ">
                cost:
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
                value={cost}
                onChange={(e) => setcost(e.target.valueAsNumber)}
                onMouseUp={mousecost}
                onBlur={blurcost}
              />
            </div>
            <div className="">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                price:
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
                value={price}
                onChange={(e) => setprice(e.target.valueAsNumber)}
                onMouseUp={mouseprice}
                onBlur={blurprice}
              />
            </div>
            <div className="">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                quantity:
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
                value={quantity}
                onChange={(e) => setquantity(e.target.valueAsNumber)}
                onMouseUp={mousequantity}
                onBlur={blurquantity}
              />
            </div>
          </div>
          <div className="flex justify-center pt-3 mt-5">
            <button
              className="btn-accent btn-sm btn w-32  rounded focus:outline-none"
              disabled={!barrcode || !name}
              onClick={inventory}
              type={"button"}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </ProtectedLayout>
  );
};

export default Createinventory;
