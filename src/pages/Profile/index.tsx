import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loader from 'react-loader-spinner';


import Sidebar from "../../components/Layouts/Sidebar";
import PFeeds from "../../components/Profile/PFeeds";
import PRight from "../../components/Profile/PRight";
import PSidebar from "../../components/Profile/PSidebar";


interface Props {}

const Me: React.FC<Props> = () => {

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
      <div className="profile__page">
        <PSidebar />

        <PFeeds />

        <PRight user={loggedInUser} />
      </div>
    </div>
  );
};

export default Me;
