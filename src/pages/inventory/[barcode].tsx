import React, { useState, useEffect } from "react";
import type { NextPage, GetServerSidePropsContext } from "next";
import { api } from "../../utils/api";



export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const barcode = ctx.params?.barcode;
  return{
    props: { barcode }
  };
};

type tProps = {
  barcode: string;
}

const barcode: NextPage<tProps> = (props) => {
  const [name, setname] =  useState<string | undefined>('');
  const [barrcode, setbarcode] = useState<string | undefined>("");
  const [cost, setcost] = useState<string | undefined>();
  const [price, setprice] = useState<string | undefined>();
  const [quantity, setquantity] = useState<string | undefined>();
  const [id, setid] = useState<number | undefined>();
  const [errorMessage, setErrorMessage] = useState("");
  const [succesMessage, setsuccesMessage] = useState("");
  const { barcode } = props;
 
  const { data, isLoading } = api.inventory.getBarcode.useQuery({barrcode: barcode});
  
  useEffect(() => {
    if(isLoading){
      return ;
    }
    
      setname(data?.name);
      setbarcode(data?.barrcode);
      setcost(data?.cost.toString());
      setprice(data?.price.toString());
      setquantity(data?.quantity.toString());
      setid(data?.id);
      
    
  }, [isLoading]);

  const { mutateAsync } = api.inventory.update.useMutation();
  const inventory = async () => {
    try{
      const invent = await mutateAsync({ name,barrcode,cost,price,quantity,id});
      setsuccesMessage("Succes");
      setErrorMessage('');
    }

    catch{
      setErrorMessage("Error, barcode is unique");
      setsuccesMessage("");
    }
    
     
  }

  return(
    <div className="h-full min-h-screen">
      <span className="text-white">
        {isLoading? 'Loading...': barcode }
      </span>
      <div className="text-white">
        {data?.name}
      </div>
      <div>
      <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
      <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
                value={barrcode}
                onChange={(e) => setbarcode(e.target.value)}
              />
      <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
                value={cost}
                onChange={(e) => setcost(e.target.value)}
              />
      <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
      <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
                value={quantity}
                onChange={(e) => setquantity(e.target.value)}
              />
      <button
              className="bg-white"
              onClick={inventory} 
              type={"button"}
            >
              Submit
            </button>
      <div className="text-white">{errorMessage}</div>
      <div className="text-white">{succesMessage}</div>
      </div>
    </div>
  );
};

export default barcode;