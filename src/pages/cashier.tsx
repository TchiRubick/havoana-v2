import React from "react";
import { type NextPage } from "next";
import { api } from "../utils/api";
import ProtectedLayout from "../components/layout/ProtectedLayout";



const Cashier: NextPage = () => {
  

  const { data } = api.inventory.getData.useQuery();

  


  return (
    <ProtectedLayout>
    <div className="">
      {data?.toString()}
    </div>
    </ProtectedLayout>
  );
};

export default Cashier;