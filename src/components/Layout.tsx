import React, { useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "./Layouts/Navigation";
import { AuthContext } from "../context/AuthContext";
import Backdrop from "./Layouts/Modal/Backdrop";
import Signin from "./Signin";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  const {authAction, handleAuthAction, loggedInUser} = useContext(AuthContext)

  const { asPath, replace, pathname, query } = useRouter();

  useEffect(() => {
    if (asPath === "/home#_=_" || asPath === "home#") {
      replace("/home");
    }

    if (asPath === "#_=_" || asPath === "/#") {
      replace("/");
    }
  }, [asPath, replace]);

  useEffect(() => {
    if(query?.resetToken) handleAuthAction('reset');
  },[query])

  return (
    <>
      <Head>
        <title>
          {pathname === "/" ? "HOME" : pathname.split("/")[1].toUpperCase()} |
          Sneezce
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {
        !loggedInUser ? (
          <></>
        ):(
          <Navigation user={loggedInUser}/>
        )
      }

      {children}

      {
        authAction!=='close' && (
          <>
            {
              authAction === 'signin' && (  
                <>
                  <Backdrop />
                  <Signin />
                </>
              )
            }
          </>
        )
      }
    </>
  );
};

export default Layout;
