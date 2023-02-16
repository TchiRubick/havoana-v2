import React from "react";
import type { NextPage } from "next";
import ProtectedLayout from "../components/layout/ProtectedLayout";
import { api } from "../utils/api";
import * as trpc from '@trpc/server';


const Dashboard: NextPage = () => {

  //const { data, isLoading } = api.test.greeting.useQuery({ name: 'Ritchi' });

  const { mutateAsync, isLoading } = api.test.greet.useMutation();

  const handleLogin = async () => {
    const name = 'John Doe';
    const d = await mutateAsync({ name });

    console.log(d);
  }
  
  

  return (
    <ProtectedLayout>
      

      <button onClick={handleLogin}>
        Login
      </button>
      
    </ProtectedLayout>
  );
};

export default Dashboard;
