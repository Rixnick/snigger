import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Sidebar from "../../components/Layouts/Sidebar";
import IRight from "../../components/Service/IRight";
import ISidebar from "../../components/Service/ISidebar";
import IService from "../../components/Service/Service";
import { AuthContext } from "../../context/AuthContext";
import Loader from 'react-loader-spinner';



interface Props {}

const Service: React.FC<Props> = () => {
  
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
    <>
      <Sidebar />
      <div className="service__page">
        <ISidebar />

        <IService />

        <IRight />
      </div>
    </>
  );
};

export default Service;
