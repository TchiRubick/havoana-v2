import React from "react";
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
  const { barcode } = props;
 
  const { data, isLoading } = api.inventory.findOneByBarcode.useQuery();

  return(
    <div className="h-full min-h-screen">
      <span className="text-white">
        {isLoading ? "Loading...": barcode }
      </span>
    </div>
  );
};

export default barcode;