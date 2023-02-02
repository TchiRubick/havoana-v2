import React, { useState } from "react";
import { type NextPage } from "next";
import ProtectedLayout from "../components/layout/ProtectedLayout";

const Createinventory: NextPage = () => {
  const [barrcode, setbarcode] = useState("");
  const [name, setname] = useState("");
  const [cost, setcost] = useState("0");
  const [price, setprice] = useState("0");
  const [quantity, setquantity] = useState("0");

  const blurquantity = () => {
    setquantity("0");
  };

  const mousequantity = () => {
    if (quantity === "0") {
      setquantity("");
    }
  };

  const blurprice = () => {
    setprice("0");
  };

  const mouseprice = () => {
    if (price === "0") {
      setprice("");
    }
  };

  const blurcost = () => {
    setcost("0");
  };

  const mousecost = () => {
    if (cost === "0") {
      setcost("");
    }
  };

  return (
    <ProtectedLayout>
      <div className="flex items-center justify-center h-full mt-10">
        <form className="mb-4 max-w-md bg-white/90 px-8 py-10 shadow-md rounded-lg">
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
                onChange={(e) => setcost(e.target.value)}
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
                onChange={(e) => setprice(e.target.value)}
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
                onChange={(e) => setquantity(e.target.value)}
                onMouseUp={mousequantity}
                onBlur={blurquantity}
              />
            </div>
          </div>
          <div className="flex justify-center pt-3 mt-5">
            <button
              className="btn-accent btn-sm btn w-32  rounded focus:outline-none"
              disabled={!barrcode || !name}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </ProtectedLayout>
  );
};

export default Createinventory;
