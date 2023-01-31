import React, { useState,useRef } from 'react';
import { type NextPage } from "next";
import { requestToBodyStream } from 'next/dist/server/body-streams';

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
  <div className="  flex justify-center items-center h-screen w-screen">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            barcode:
          </label>
          <input type="text" placeholder="Type here" className="input-sm w-full max-w-xs bg-gray-200 text-gray-700 focus:bg-white rounded-full " value={barrcode}  onChange={e => setbarcode(e.target.value)}/>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            name:
          </label>
          <input type="text"  placeholder="Type here" className="input-sm w-full max-w-xs bg-gray-200 text-gray-700 focus:bg-white rounded-full "  value={name} onChange={e => setname(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " >
            cost:
          </label>
          <input type="number" placeholder="Type here" className="input-sm w-full max-w-xs bg-gray-200 text-gray-700 focus:bg-white rounded-full " value={cost} onChange={e => setcost(e.target.value) }  onMouseUp={mousecost}   onBlur={blurcost}/>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            price:
          </label>
          <input type="number" placeholder="Type here" className="input-sm w-full max-w-xs bg-gray-200 text-gray-700 focus:bg-white rounded-full " value={price} onChange={e => setprice(e.target.value)} onMouseUp={mouseprice}   onBlur={blurprice}/>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            quantity:
          </label>
          <input type="number" placeholder="Type here" className="input-sm w-full max-w-xs bg-gray-200 text-gray-700 focus:bg-white rounded-full" value={quantity} onChange={e => setquantity(e.target.value) } onMouseUp={mousequantity}   onBlur={blurquantity} />
        </div>
        <div className="pt-2 container py-10 px-10 mx-0 min-w-full ">
          <div className="flex justify-center">
            <button className="btn btn-info" disabled={!barrcode || !name }>Submit</button>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default Createinventory;