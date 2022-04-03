import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Loader from 'react-loader-spinner';

import Sidebar from "../../components/Layouts/Sidebar";
import { AuthContext } from "../../context/AuthContext";

interface Props {}

const Setting: React.FC<Props> = () => {

  
  const {loggedInUser} = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {

    if(!loggedInUser) router.push('/');

  }, [loggedInUser]);

  return !loggedInUser ? (
    <Loader
      type="Oval" 
      height="30"
      width="30"
      color='teal'
      />
  ) : (
    <div>
      <Sidebar />
      <h1>All user page</h1>
    </div>
  );
};

export default Setting;
