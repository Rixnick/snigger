import React, { useContext } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { BsSuitHeart, BsTags, BsChatSquare, BsShare, BsBookmarkPlus } from "react-icons/bs";
import { Snigger } from "../../../types";
import { format } from 'timeago.js';
import { AuthContext } from "../../../context/AuthContext";
import { useQuery } from "@apollo/client";
import { USER } from "../../../graphql/User";
import Image from 'next/image';


interface Props {
  snigger: Snigger
}

const Post: React.FC<Props> = ({ snigger }) => {

  const { loggedInUser } = useContext(AuthContext);

  //query single user from snigger user: ID -->
  const {data, loading, error } = useQuery(USER, { variables: {userId: snigger.user}});


  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ... Ops!</p>

  // console.log("user:", data.user)

  const user = data.user;


  return (
    <div className="home__post">
      <div className="home__post__wrapper">
        <div className="post__top">
          <div className="post__top__left">
            
            {
              !user.image ? (
                <Image 
                  className="post__user__profile" 
                  alt="user__profile" 
                  src="https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png" 
                  height={50}
                  objectFit={"cover"} 
                  width={50}
                  />
              ):(
                <Image 
                  className="post__user__profile"
                  src={user.image} 
                  alt="user__profile"
                  objectFit={"cover"} 
                  height={50} 
                  width={50}
                 />

              )
            }
            
            <div className="post__user__info">
              {
                !user.firstname || !user.lastname  ?  (
                  <span className="post__user__name">{user.username}</span>
                ):(
                  <span className="post__user__name">{user.firstname} {user.lastname}</span> 
                )
              }              
              <p className="post__public__time">public: { format(snigger.created_at)}</p>
            </div>
            
          </div>
          <div className="post__top__right">
            {
              user.isOnline === "true" ? (
                <p className="top__active__now">Active: Now</p>
              ): (
                <p className="top__active__at">Active: { format(user.active_at)}</p>
              )
            }
            <MdOutlineMoreVert className="more__options" />
          </div>
        </div>

        <Image
          className="post__images"
          src={snigger.media[0]}
          width={865}
          height={965}
          objectFit={"cover"}
          alt=""
        />

        <div className="post__content">
          <p>
            {snigger.content}
          </p>
        </div>

        <div className="post__options">
          <div className="post__left">
            <BsSuitHeart className="post__option__icon" />
            <span>1,23k</span>
            <BsTags className="post__option__icon" />
            <span>23k</span>
            <BsChatSquare className="post__option__icon" />
            <span>235k</span>
            <BsShare className="post__option__icon" />
            <span>2,3k</span>
          </div>
          <div className="post__right">
            {
              snigger.user === loggedInUser.id ? (
                <button className="btn__post__option">Promote</button>
              ):(
                <BsBookmarkPlus className="bookmark__icon" />
              )
            }        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;