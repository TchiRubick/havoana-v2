import React from "react";
import { type NextPage } from "next";
import { api } from "../utils/api";
import ProtectedLayout from "../components/layout/ProtectedLayout";



const Cashier: NextPage = () => {
  

  const { data } = api.inventory.getData.useQuery();
let b  = String(data);
  


  return (
    <ProtectedLayout>
    <div className="">
      {b}
    </div>
    </ProtectedLayout>
  );
};

export default Cashier;