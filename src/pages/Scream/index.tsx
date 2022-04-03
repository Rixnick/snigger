import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Sidebar from "../../components/Layouts/Sidebar";
import SFeed from "../../components/Scream/SFeed";
import SRight from "../../components/Scream/SRight";
import SSidebar from "../../components/Scream/SSidebar";
import { AuthContext } from "../../context/AuthContext";
import Loader from 'react-loader-spinner';


interface Props {}

const Scream: React.FC<Props> = () => {

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
      <div className="scream__page">
        <SSidebar />

        <SFeed />

        <SRight />
      </div>
    </>
  );
};

export default Scream;
