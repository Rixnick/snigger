import React, { useContext } from "react";
import { useMutation } from "@apollo/client";
import { useForm } from 'react-hook-form';
import { AuthContext } from "../context/AuthContext";
import { SIGNIN } from "../graphql/Auth";
import { FOLLOWERS, FOLLOWINGS, ME } from "../graphql/User";
import { SigninArgs, User } from "../types";
import { useRouter } from 'next/router';
import Loader from 'react-loader-spinner';
import { FiLogIn } from 'react-icons/fi';
import { browserName, browserVersion } from "react-device-detect";

import Modal from "./Layouts/Modal/Modal";
// import { isAdmin } from "../helper/authHelper";
import { TIMELINE } from "../graphql/Scream";
import { MY_TIMELINE, SNIGGERTIMELINE } from "../graphql/Snigger";
import { TIMELINESERVICE } from "../graphql/Service";


interface Props {}



const Signin: React.FC<Props> = () => {


  const { handleAuthAction, setAuthUser} = useContext(AuthContext)

  const { register, handleSubmit, formState: { errors } } = useForm<SigninArgs>();

  const [signin, {loading, error}] = useMutation<{Signin: User}, SigninArgs>(SIGNIN);

  const router = useRouter();


  
  const handleSignin = handleSubmit( async ({ email, password }) => {
    const browser = browserName + browserVersion;
    const platform = window.navigator.platform;

    try {
      const response = await signin({ 
        variables: { email, password, browser, platform }, refetchQueries: [
          { query: ME },
          { query: TIMELINE },
          { query: SNIGGERTIMELINE },
          { query: MY_TIMELINE },
          { query: TIMELINESERVICE },
          { query: FOLLOWINGS },
          { query: FOLLOWERS }
        ]});

      if(response?.data?.Signin) {
        const user = response.data.Signin;

        //Close form
        handleAuthAction('close');

        setAuthUser(user);
        //Set auth user in context api

        //put their to home page
        router.push('/')
      }
    } catch (error) {
      setAuthUser(null)
    }
  })

  return (
    <Modal>
      <div className="signin__container">
        <div className="signin__container__wrapper">
          <div className="signin__header">
            <h3>Sneezce Login!</h3>
          </div>
          <hr />
          <div className="signin__content">
            <form onSubmit={handleSignin}>
              <div className="form__control">
                <input type="email" placeholder="Enter email *" {...register("email", {required: true})} />
                {errors.email && <span className="errorMessage">Email field is required</span>}
              </div>
              
              <div className="form__control">
                <input type="password" placeholder="Enter Password *" {...register("password", { required: true })} />
                {errors.password && <span className="errorMessage">Password field is required</span>}
              </div>
              
              <hr />

              <div className="form__control__forget">
                <p>Forgot password?{" "}</p>
                <span>Click here</span>
              </div>

              <div className="form__control">
                <button type="submit"
                  disabled={loading}
                  style={{ cursor: loading ? 'not-allowed' : 'pointer'}}
                >
                  {
                    loading ? (
                      <Loader
                      type="Oval" 
                      height="30"
                      width="30"
                      color='grey'
                      timeout={3000} />
                    ) : (
                      <FiLogIn />
                    )
                  }
                </button>
              </div>
              {
                error && (
                  <span role="alert" >{error.graphQLErrors[0].message || "Someting went wrong...!"}</span>
                )
              }
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Signin;
