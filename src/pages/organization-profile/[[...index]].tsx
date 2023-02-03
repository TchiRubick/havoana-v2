import React from "react";
import { type NextPage } from "next";
import { OrganizationProfile } from '@clerk/nextjs'

const Home: NextPage = () => {

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <OrganizationProfile />
    </div>
  );
};

export default Home;