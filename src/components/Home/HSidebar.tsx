import React from "react";
import Followings from "./Sidebar/Followings";
import { useQuery } from "@apollo/client";
import { STORY } from "../../graphql/Story";

//icons import
import { CgProfile } from 'react-icons/cg';
import { RiCalendarEventLine } from "react-icons/ri";
import { MdWorkOutline,  MdOutlineMiscellaneousServices } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaPhotoVideo, FaGraduationCap } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import HStory from "./Sidebar/HStory";
import Image from "next/image";
import { User } from "../../types";
import { AiOutlinePlus } from 'react-icons/ai';

interface Props {
  user: User
}

const HSidebar: React.FC<Props> = ({ user }) => {

  const {data, loading, error} = useQuery(STORY, {fetchPolicy: 'network-only'});

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ... Ops!</p>

  return (
    <div className="home__sidebar">
      <div className="home__sidebar_wrapper">
        <div className="home__sidebar__story">
        <h3>Stories</h3>
        <hr className="home__sidebar__hr" />
          <ul className="home__story__list">
            <li className="home__story__item">
              <div className="story__media">
                {
                  !user.image ? (
                    <Image
                      className="home__story__image"
                      src="https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png"
                      width={65}
                      height={100}
                      objectFit={"cover"}
                      alt=""
                    />
                  ):(
                    <Image
                    className="home__story__image"
                    src={user.image}
                    width={65}
                    height={100}
                    objectFit={"cover"}
                    alt=""
                  />
                  )
                }
                
              </div>
              <button className="add__user__story">
                <AiOutlinePlus />
              </button>
            </li>
            {
              data &&
              data.stories.map((story) => (
              <HStory story={story}  key={story.id}/>
              ))
            }
            
          </ul>
        </div>

        <div className="home__sidebar__manu">
          <h3>Activities</h3>
          <hr className="home__sidebar__hr" />
          <ul className="home__menu__list">
            <li className="home__menu__item">
              <a href="">
                <CgProfile className="home__menu__icon" />
                <span className="home__menu__text">Profile</span>
              </a>
            </li>
          
            <li className="home__menu__item">
              <a href="">
                <BsChatDots className="home__menu__icon" />
                <span className="home__menu__text">Chats</span>
              </a>
            </li>
            <li className="home__menu__item">
              <a href="">
                <AiOutlineAppstoreAdd className="home__menu__icon" />
                <span className="home__menu__text">Market Place</span>
              </a>
            </li>
            <li className="home__menu__item">
              <a href="">
                <FaPhotoVideo className="home__menu__icon" />
                <span className="home__menu__text">Entertainmens</span>
              </a>
            </li>
            <li className="home__menu__item">
              <a href="">
                <IoBookmarksOutline className="home__menu__icon" />
                <span className="home__menu__text">Bookmarks</span>
              </a>
            </li>
            <li className="home__menu__item">
              <a href="">
                <MdWorkOutline className="home__menu__icon" />
                <span className="home__menu__text">Jobs</span>
              </a>
            </li>
            <li className="home__menu__item">
              <a href="">
                <FiActivity className="home__menu__icon" />
                <span className="home__menu__text">Activities</span>
              </a>
            </li>
            <li className="home__menu__item">
              <a href="">
                <RiCalendarEventLine className="home__menu__icon" />
                <span className="home__menu__text">Events</span>
              </a>
            </li>
            <li className="home__menu__item">
              <a href="">
                <FaGraduationCap className="home__menu__icon" />
                <span className="home__menu__text">Online Courses</span>
              </a>
            </li>
            <li className="home__menu__item">
              <a href="">
                <MdOutlineMiscellaneousServices className="home__menu__icon" />
                <span className="home__menu__text">Service Provider</span>
              </a>
            </li>
          </ul>
          <button className="home__menu__button">Show More</button>
          
          <Followings />
        </div>


      </div>
    </div>
  );
};

export default HSidebar;
