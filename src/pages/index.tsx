import React from "react";
import { type NextPage } from "next";
import { SignIn } from "@clerk/nextjs";


const Home: NextPage = () => {

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <SignIn />
    </div>
  );
};

export default Home;