import React from "react";
import type { NextPage } from "next";
import ProtectedLayout from "../components/layout/ProtectedLayout";
import { api } from "../utils/api";


const Dashboard: NextPage = () => {

  const { data, isLoading } = api.test.greeting.useQuery({ name: 'Ritchi' });

  return (
    <ProtectedLayout>
      { isLoading ? 'Loading...' : data }
    </ProtectedLayout>
  );
};

export default Dashboard;
