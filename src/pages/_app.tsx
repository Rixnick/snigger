import "../assets/styles/globals.scss";
import Layout from "../components/Layout";
import AuthContextProvider from "../context/AuthContext";
import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo/Client';
import { AppProps } from 'next/app';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client} >
        <AuthContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
