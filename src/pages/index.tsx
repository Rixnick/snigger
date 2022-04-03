import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';   
import Image from 'next/image';
import HFeeds from '../components/Home/HFeeds';
import HRight from '../components/Home/HRight';
import HSidebar from '../components/Home/HSidebar';
import Sidebar from '../components/Layouts/Sidebar';


interface Props {}



const Index: React.FC<Props> = () => {
  const {handleAuthAction, loggedInUser} = useContext(AuthContext);

  const router = useRouter();


  useEffect(() => {
    if(!loggedInUser) {
      router.push('/');
    }
  },[loggedInUser])

  return !loggedInUser ? (
    <div className="main__page">
      <div className="main__container">
        <div className="main__container__wrapper">
          <div className="main__brand__log">
            <Image
               src="https://res.cloudinary.com/swizce/image/upload/v1642000312/Swizce/New_logo_wouhx9.png" 
               height={54}
               width={245}
               alt="" />
          </div>

          <div className="main__authentication">
            <div className="main__authntication__form">
              <p>Create your mind snigger, brand service <br /> and more entertainment contents, Ads...etc,</p>
              <button onClick={() => handleAuthAction("signin")}>Login now!</button>
            </div>

            <div className="main__authentication__scanner">
              <Image
                  src="https://www.qrcode-monkey.com/img/default-preview-qr.svg" 
                  width={240}
                  height={240}
                  alt="" />
              <p>Scan here to access your coinbase and send friends NFT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Sidebar />
      <div className="home__page">
        <HSidebar user={loggedInUser} />

        <HFeeds />

        <HRight />
      </div>
    </>
  )
}


export default Index;