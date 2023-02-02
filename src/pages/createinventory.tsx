import React, { useState,useRef } from 'react';
import { type NextPage } from "next";
import ProtectedLayout from "../components/layout/ProtectedLayout";

const Createinventory: NextPage = () => {
  const [barrcode, setbarcode] = useState('');
  const [name, setname] = useState('');
  const [cost, setcost] = useState('0');
  const [price, setprice] = useState('0');
  const [quantity, setquantity] = useState('0');
 
  const blurquantity =() =>{
    setquantity("0");
  }

  const mousequantity =() =>{
   if(quantity === "0"){
      setquantity("");
   }
  }

  const blurprice =() =>{
    setprice("0");
  }
  
  const mouseprice =() =>{
   if(price === "0"){
      setprice("");
   }
  }


  const blurcost =() =>{
    setcost("0");
  }

  const mousecost =() =>{
   if(cost === "0"){
      setcost("");
   }
  }
  

  return (
  <div>
    <ProtectedLayout>
    <div className="  flex justify-center items-center h-screen w-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[500px]">
        <div className="grid grid-cols-2 gap-3">
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              barcode:
            </label>
            <input type="text" placeholder="Type here" className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white  " value={barrcode}  onChange={e => setbarcode(e.target.value)}/>
          </div>
         <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            name:
          </label>
          <input type="text"  placeholder="Type here" className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white  "  value={name} onChange={e => setname(e.target.value)}/>
        </div> 
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " >
            cost:
          </label>
          <input type="number" placeholder="Type here" className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white  " value={cost} onChange={e => setcost(e.target.value) }  onMouseUp={mousecost}   onBlur={blurcost}/>
        </div>
        <div className="">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            price:
          </label>
          <input type="number" placeholder="Type here" className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white  " value={price} onChange={e => setprice(e.target.value)} onMouseUp={mouseprice}   onBlur={blurprice}/>
        </div>
         <div className="">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            quantity:
          </label>
          <input type="number" placeholder="Type here" className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white  " value={quantity} onChange={e => setquantity(e.target.value) } onMouseUp={mousequantity}   onBlur={blurquantity} />
        </div>
      </div>
      <div className="flex justify-center pt-3">
        <button  className="btn btn-accent btn-sm  disabled:text-white disabled:bg-blue-300 rounded focus:outline-none" disabled={!barrcode || !name }>Submit</button>
      </div>
    </form>
  </div>
  </ProtectedLayout>
</div>
  );
};

export default Createinventory;