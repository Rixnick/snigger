import React from "react";
import {
  BsSuitHeart,
  BsShare,
  BsEye,
  BsFileMusic
} from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiMovie } from "react-icons/bi";
import { IoTennisballOutline } from "react-icons/io5";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import Image from 'next/image';


interface Props {}

const SSidebar: React.FC<Props> = () => {
  return (
    <div className="scream__sidebar">
      <div className="scream__sidebar__wrapper">
        <div className="scream__live__stream">
          <h3>Live Now!</h3>
          <div className="live__screams">
            <div className="live__scream__item">
              <div className="live__scream__media">
                <Image
                  src="https://resources.esportsinsider.com/esportsinsider/2020/03/Game-PUBG-mobile-game-e1607005246904.jpg"
                  width={420}
                  height={220}
                  objectFit={"cover"}
                  alt=""
                />
              </div>
              <div className="live__scream__actions">
                <div className="live__action__left">
                  <BsSuitHeart className="live__action__icon" />
                  <BsShare className="live__action__icon" />
                  <BsEye className="live__action__icon" />
                  <span>Other 1,2k watching</span>
                </div>
                <div className="live__action__right">
                  <button className="btn__live__action">Play</button>
                </div>
              </div>
            </div>

            <div className="live__scream__item">
              <div className="live__scream__media">
                <Image
                  src="https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x.jpg"
                  width={420}
                  height={220}
                  objectFit={"cover"}
                  alt=""
                />
              </div>
              <div className="live__scream__actions">
                <div className="live__action__left">
                  <BsSuitHeart className="live__action__icon" />
                  <BsShare className="live__action__icon" />
                  <BsEye className="live__action__icon" />
                  <span>Other 120 watching</span>
                </div>
                <div className="live__action__right">
                  <button className="btn__live__action">Play</button>
                </div>
              </div>
            </div>

            <div className="live__scream__item">
              <div className="live__scream__media">
                <Image
                  src="https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x.jpg"
                  width={420}
                  height={220}
                  objectFit={"cover"}
                  alt=""
                />
              </div>
              <div className="live__scream__actions">
                <div className="live__action__left">
                  <BsSuitHeart className="live__action__icon" />
                  <BsShare className="live__action__icon" />
                  <BsEye className="live__action__icon" />
                  <span>Other 120 watching</span>
                </div>
                <div className="live__action__right">
                  <button className="btn__live__action">Play</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="category__dialog">
          <h3>Categories</h3>
          <ul className="categories__list">
            <li className="category__item">
              <a href="">
                <BsFileMusic className="category__icon" />
                <span className="category__text">Music And Melody</span>
              </a>
            </li>
            <li className="category__item">
              <a href="">
                <AiOutlineFundProjectionScreen className="category__icon" />
                <span className="category__text">Video And Game</span>
              </a>
            </li>
            <li className="category__item">
              <a href="">
                <BiMovie className="category__icon" />
                <span className="category__text">Movies & Discovery</span>
              </a>
            </li>
            <li className="category__item">
              <a href="">
                <IoTennisballOutline className="category__icon" />
                <span className="category__text">Sport & Soccer</span>
              </a>
            </li>
            <li className="category__item">
              <a href="">
                <RiCalendarEventLine className="category__icon" />
                <span className="category__text">Events</span>
              </a>
            </li>
            <li className="category__item">
              <a href="">
                <FaGraduationCap className="category__icon" />
                <span className="category__text">Online Courses</span>
              </a>
            </li>
            <li className="category__item">
              <a href="">
                <MdOutlineMiscellaneousServices className="category__icon" />
                <span className="category__text">Service Provider</span>
              </a>
            </li>
          </ul>
          <button className="button__more__category">Show More</button>
        </div>

        <div className="following__channel">
          <h3>Followings Chanel</h3>
          <ul className="following__list">
            <li className="following__item">
              <a href="">
                <Image
                  className="following__item__image"
                  src="https://bbts1.azureedge.net/images/p/full/2021/10/959cf649-918b-4770-b4ca-f1998cf7586c.jpg"
                  width={38}
                  height={38}
                  objectFit={"cover"}
                  alt=""
                />
                <span className="following__item__name">@Rixnickz_i8</span>
              </a>
            </li>
            <li className="following__item">
              <a href="">
                <Image
                  className="following__item__image"
                  src="https://www.marveljacket.com/wp-content/uploads/2020/10/Scarlett-Johansson-Black-Black-Jacket-1.jpg"
                  width={38}
                  height={38}
                  objectFit={"cover"}
                  alt=""
                />
                <span className="following__item__name">@Cherry_iN9</span>
              </a>
            </li>
            <li className="following__item">
              <a href="">
                <Image
                  className="following__item__image"
                  src="https://cutewallpaper.org/21/rose-blackpink-wallpapers/Blackpink-Rose-Popular-Wallpaper-Roses-Are-Rosie-Blackpink.jpg"
                  width={38}
                  height={38}
                  objectFit={"cover"}
                  alt=""
                />
                <span className="following__item__name">@Rosie_Blink</span>
              </a>
            </li>
            <li className="following__item">
              <a href="">
                <Image
                  className="following__item__image"
                  src="https://i.redd.it/mh7s3m7igys21.jpg"
                  width={38}
                  height={38}
                  objectFit={"cover"}
                  alt=""
                />
                <span className="following__item__name">@Anny_CSTJ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SSidebar;
