import React from "react";
import { type NextPage } from "next";
import { SignUp } from "@clerk/nextjs";

const Home: NextPage = () => {

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <SignUp path="/signup" signInUrl="/" redirectUrl="/dashboard" />
    </div>
  );
};

export default Home;