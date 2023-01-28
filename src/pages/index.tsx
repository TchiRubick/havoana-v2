import React from "react";
import type { NextPage } from "next";
import ProtectedLayout from "../components/layout/ProtectedLayout";


const Dashboard: NextPage = () => {

  return (
    <ProtectedLayout>
      Dashboard page
    </ProtectedLayout>
  );
};

export default Dashboard;
