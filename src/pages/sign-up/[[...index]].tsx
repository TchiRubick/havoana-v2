import React from "react";
import { type NextPage } from "next";
import { SignUp  } from "@clerk/nextjs";

const Home: NextPage = () => {

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" redirectUrl="/" />
    </div>
  );
};

export default Home;