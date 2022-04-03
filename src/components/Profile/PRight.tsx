import React from "react";
import { FiGrid, FiActivity, FiNavigation, FiTag, FiSettings } from 'react-icons/fi';
import { User } from "../../types";
import { MdOutlineRssFeed } from "react-icons/md";
import Image from 'next/image';
import Terms from "../Layouts/Term";
import FollowingCount from "./Rightbar/Followings";
import FollowerCount from "./Rightbar/Followers";
import SniggerCount from "./Rightbar/Sniggers";
import Link from 'next/link';
import Contact from "./Rightbar/Contact";



type Props = {
  user: User
};

const PRight: React.FC<Props> = ({ user }) => {

  return (
    <div className="profile__rightbar">
      <div className="profile__rightbar__wrapper">
        <div className="user__profile__info">
          <div className="user__profile__header">
            <div className="user__profile__cover">
              {
                !user.cover ? (
                  <Image 
                    className="user__profile__cover__image"
                    src="https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png" 
                    width={720}
                    height={325}
                    objectFit={"cover"}
                    alt=""
                  />
                ):(
                  <Image 
                    className="user__profile__cover__image"
                    src={user.cover}
                    width={720}
                    height={325}
                    objectFit={"cover"}
                    alt="" />
                )
              }
            </div>
            <div className="user__profile__image">
              {
                !user.image ? (
                  <Image 
                      className="user__profile__image__picture" 
                      src="https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png"
                      height={85}
                      width={85}
                      objectFit={"cover"}
                      alt=""
                      />
                ):(
                  <Image 
                    className="user__profile__image__picture"
                    src={user.image}
                    height={85}
                    width={85}
                    objectFit={"cover"}
                    alt="" />
                )
              }
            </div>
          </div>
          <div className="user__profile__content">
            {
              !user.firstname || !user.lastname ? (
                <h3 className="username__info">@{user.username}</h3>
              ):(
                <h3>{user.firstname} {user.lastname}</h3>
              )
            }
            {
              !user.address ? (
                <p>Add Current Address where you are active or Living</p>
              ) : (
                <p>{user.address}</p>
              )
            }            
            
          </div>
          <div className="user__profile__options">
            <SniggerCount />

            <FollowerCount />
            
            <FollowingCount />
          </div>          
        </div>
        <hr />
        <div className="user__profile__control">
          <ul className="control__list">
            <li className="control__item">
              <Link href="/">
                <a >
                  <MdOutlineRssFeed className="control__icon" />
                  <span>Timeline Feeds</span>
                </a>
              </Link>
            </li>
            
            <li className="control__item">
              <Link href="#">
                <a>
                  <FiGrid className="control__icon" />
                  <span>Explore</span>
                </a>
              </Link>              
            </li>
            <li className="control__item">
              <Link href="#">
                <a>
                  <FiTag className="control__icon" />
                  <span>Favourites</span>
                </a>
              </Link>
            </li>
            <li className="control__item">
              <Link href="#">
                <a>
                  <FiNavigation className="control__icon" />
                  <span>Messenger</span>
                </a>
              </Link>              
            </li>
            <li className="control__item">
              <Link href="#">
                <a>
                  <FiActivity className="control__icon" />
                  <span>Stats</span>
                </a>
              </Link>              
            </li>
            <li className="control__item">
              <Link href="#">
                <a>
                  <FiSettings className="control__icon" />
                  <span>Settings</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <Contact />
      </div>

      <Terms />
    </div>
  );
};

export default PRight;
