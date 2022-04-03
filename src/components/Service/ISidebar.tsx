import React from "react";
import { BsBookmarkCheck, BsSuitHeart, BsBag } from "react-icons/bs";
import { FaShippingFast, FaCar } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { GiVacuumCleaner } from "react-icons/gi";
import { MdLocalTaxi, MdOutlineRestaurantMenu } from "react-icons/md";
import { BiLandscape } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import FollowingUser from "./Sidebar/FollowingUser";

interface Props {}

const ISidebar: React.FC<Props> = () => {
  return (
    <div className="service__sidebar">
      <div className="service__sidebar__wrapper">
        <div className="service__catalogs">
          <h3>Category Service</h3>
          <hr className="service__cat__hr" />
          <ul className="catalogs__list">
            <li className="catalog__item">
              <a href="">
                <BsBookmarkCheck className="catalog__icon" />
                <span className="catalog__text">Booking Now!</span>
              </a>
            </li>
            <li className="catalog__item">
              <a href="">
                <BsBag className="catalog__icon" />
                <span className="catalog__text">Market Place</span>
              </a>
            </li>

            <li className="catalog__item">
              <a href="">
                <MdOutlineRestaurantMenu className="catalog__icon" />
                <span className="catalog__text">Restaurants & Clubs</span>
              </a>
            </li>

            <li className="catalog__item">
              <a href="">
                <BsSuitHeart className="catalog__icon" />
                <span className="catalog__text">Salon Beauty</span>
              </a>
            </li>

            <li className="catalog__item">
              <a href="">
                <GiAutoRepair className="catalog__icon" />
                <span className="catalog__text">Cars Modifier</span>
              </a>
            </li>

            <li className="catalog__item">
              <a href="">
                <FaCar className="catalog__icon" />
                <span className="catalog__text">Cars & Bikes</span>
              </a>
            </li>

            <li className="catalog__item">
              <a href="">
                <MdLocalTaxi className="catalog__icon" />
                <span className="catalog__text">Taxi & Driver</span>
              </a>
            </li>

            <li className="catalog__item">
              <a href="">
                <FaShippingFast className="catalog__icon" />
                <span className="catalog__text">Logistic & Transport</span>
              </a>
            </li>

            <li className="catalog__item">
              <a href="">
                <GiVacuumCleaner className="catalog__icon" />
                <span className="catalog__text">Cleans Sweeper</span>
              </a>
            </li>

            <li className="catalog__item">
              <a href="">
                <BiLandscape className="catalog__icon" />
                <span className="catalog__text">House & Lands</span>
              </a>
            </li>

            <li className="catalog__item">
              <a href="">
                <IoBedOutline className="catalog__icon" />
                <span className="catalog__text">Hotels & Gusthouse</span>
              </a>
            </li>
          </ul>
          <button className="btn__service__more">Show More...</button>
        </div>

        <FollowingUser />
      </div>
    </div>
  );
};

export default ISidebar;
