import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Sidebar from "../../components/Layouts/Sidebar";
import {AuthContext} from "../../context/AuthContext";
import Loader from 'react-loader-spinner';



interface Props {}

const Messenger: React.FC<Props> = () => {
  const {loggedInUser} = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {

    if(!loggedInUser) router.push('/');
    
  }, [loggedInUser])

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
      <h1>Messenger page</h1>
    </div>
  );
};

export default Messenger;
