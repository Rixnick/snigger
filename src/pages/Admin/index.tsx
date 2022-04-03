import { useRouter } from 'next/router';
import React, {useContext, useEffect} from 'react';
import Loader from 'react-loader-spinner';
import { AuthContext } from '../../context/AuthContext';
import { isAdmin } from '../../helper/authHelper';


type Props = {}

const Admin: React.FC<Props> = () => {
  const { loggedInUser } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    //if not user authenticated , push to index
    if(!loggedInUser){
      router.push('/')
    }else{
      if(!isAdmin(loggedInUser)){
        //push user to their dashboard
        
        router.push('/');

        alert("No authorization...!");       
      }
    }
  },[loggedInUser])

  return !isAdmin(loggedInUser) ? (
    <Loader
      type='Oval' 
      height="30"
      width="30"
      color='teal'
      />
  ) : (
    <div>Admin page</div>
  )
}

export default Admin;