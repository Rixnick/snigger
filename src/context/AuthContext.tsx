import React, {useEffect, useState, createContext} from 'react';
import { User } from '../types';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/User';
import { useRouter } from 'next/router';


interface Props {}

type Actions = 'signin' | 'signup' | 'request' | 'reset' | 'close' | 'create';

type HandleAuthAction = (action: Actions) => void;

interface AuthContextValues {
  authAction: Actions
  handleAuthAction: HandleAuthAction
  loggedInUser: User | null,
  setAuthUser: (user: User | null) => void
}

const initialState: AuthContextValues = {
  authAction: 'close',
  handleAuthAction: () => {},
  loggedInUser: null,
  setAuthUser: () => {}
}

export const AuthContext = createContext<AuthContextValues>(initialState)


const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [authAction, setAuthAction] = useState<Actions>("close");

  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const { data } = useQuery<{ me: User }>(ME);

  // console.log("Loggedin User context:", data);

  const router = useRouter();

  //Set auth user to context api
  useEffect(() => {
    if(data?.me) setLoggedInUser(data?.me)
  },[data?.me]);

  //Signout sync effect
  useEffect(() => {
    //create signout function
    const syncSignout = (e: StorageEvent) => {
      if(e.key === 'signout'){

        //Set loggedin user to null
        setLoggedInUser(null);

        //redirect to Main login
        router.push('/');
      }
    }

    window.addEventListener('storage', syncSignout);

    return() => window.removeEventListener('storage', syncSignout)
  }, [])


  const handleAuthAction: HandleAuthAction = (action) => {
    setAuthAction(action)
  }

  const setAuthUser = (user: User | null) => setLoggedInUser(user);

  return (
    <AuthContext.Provider
      value={{
        authAction,
        handleAuthAction,
        loggedInUser,
        setAuthUser
      }}

    >
    {children}
    </AuthContext.Provider>
  );
}


export default AuthContextProvider;