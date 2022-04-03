import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Loader from 'react-loader-spinner';
import Sidebar from '../../components/Layouts/Sidebar';


type Props = {}

const Users: React.FC<Props> = () => {

  const {loggedInUser} = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {

    if(!loggedInUser) router.push('/');

  }, [loggedInUser]);

  return !loggedInUser ? (
    <Loader
      type='Oval' 
      height="30"
      width="30"
      color='teal'
      />
  ):(
    <div>
      <Sidebar />
      <h1>User Page</h1>
    </div>
  )
}

export default Users;