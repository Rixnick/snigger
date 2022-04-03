import React, { useContext } from 'react';
import { MdOutlineMoreVert } from "react-icons/md";
import { BsSuitHeart, BsTags, BsChatSquare, BsShare } from "react-icons/bs";
import { Snigger } from '../../../types';
import { AuthContext } from '../../../context/AuthContext';
import { format } from 'timeago.js';
import Image from 'next/image';


type Props = {
  snigger: Snigger
};

const MPost: React.FC<Props> = ({ snigger }) => {

  const { loggedInUser } = useContext(AuthContext);

  // console.log("snigger:", snigger.media)
  return (
    <div className="profile__post">
      <div className="profile__post__wrapper">
        <div className="profile__post__top">
          <div className="profile__post__top__left">
            {
              !loggedInUser.image ? (
                <Image
                  className="profile__image"
                  src="https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png"
                  width={50}
                  objectFit={"cover"}
                  height={50}
                  alt=""
                />
              ):(
                <Image
                  className="profile__image"
                  src={loggedInUser.image}
                  width={50}
                  objectFit={"cover"}
                  height={50}
                  alt=""
                />
              )
            }
            
            <div className="my__user__info">
              {
                !loggedInUser.firstname || !loggedInUser.lastname ? (
                  <span className="post__user__name">@{loggedInUser.username}</span>
                ):(
                  <span className="post__user__name">{loggedInUser.firstname} {loggedInUser.lastname}</span>
                )
              }
              
              <p>public: { format(snigger.created_at)}</p>
            </div>
            
          </div>
          <div className="post__top__right">
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
            <button className="btn__post__option">Promote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MPost;
