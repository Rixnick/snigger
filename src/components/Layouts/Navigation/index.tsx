import React, { useContext } from "react";
import { FiSearch, FiLogOut, FiMessageSquare} from "react-icons/fi";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { SIGNOUT } from "../../../graphql/Auth";
import { AuthContext } from "../../../context/AuthContext";
import { User } from "../../../types";
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  user: User
}

const Navigation: React.FC<Props> = ({ user }) => {
  const { loggedInUser, setAuthUser } = useContext(AuthContext)

  const [signout] = useMutation<{ signout: { message: string}}>(SIGNOUT);

  const router = useRouter();

  const handleSignout = async () => {
    try {
      const response = await signout();

      if(response?.data?.signout?.message) {

        //Set loggedin user null
        setAuthUser(null);

        //Sync Signout
        window.localStorage.setItem('signout', Date.now().toString())

        //Direct user to login
        router.push('/');
      }
    } catch (error) {
      alert('Sorry can not proceed...!')
    }
  }

  return (
    <div className="navigation__container">
      <div className="navigation__left">
        <div className="logo">
          <Image
            src="https://res.cloudinary.com/swizce/image/upload/v1642000312/Swizce/New_logo_wouhx9.png"
            height={34}
            width={160}
            alt=""
          />
        </div>
      </div>

      <div className="navigation__center">
        {/* <h1>Navigation Center</h1> */}
      </div>

      <div className="navigation__right">
        <div className="search__bar">
          <FiSearch className="search__button" />
          <input className="search__input" placeholder="Found on Sneezce..." />
        </div>
        {
          !user.image ? (
            <Image
              onClick={() => router.push("/Profile")}
              className="user__profile"
              src="https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png"
              width={65}
              height={65}
              alt=""
            />
          ) : (
            <Image
            onClick={() => router.push('/Profile')}
            className="user__profile"
            width={65}
            height={65}
            objectFit={"cover"}
            src={user.image}
            alt=""
          />
          )
        }
        
        <div className="navigation__menu">
          <div className="navigation__menu__item">
            <AiOutlineAppstore className="navigation__menu__icon" />
          </div>

          <div className="navigation__menu__item">
            <FiMessageSquare className="navigation__menu__icon" />
            <span className="navigation__menu_badge">4</span>
          </div>

          <div className="navigation__menu__item">
            <IoMdNotificationsOutline className="navigation__menu__icon" />
            <span className="navigation__menu_badge">1</span>
          </div>

          <div className="navigation__menu__item">
            <Link href="/">
              <a onClick={handleSignout}>
                <FiLogOut className="navigation__menu__icon" />
              </a>
            </Link>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Navigation;
