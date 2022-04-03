import React from "react";
import { BsSuitHeart, BsChatSquare, BsShare } from "react-icons/bs";
import Image from 'next/image';


type Props = {};

const SBrand: React.FC<Props> = () => {
  return (
    <div className="service__brand">
      <h3>Top Brands</h3>
      <div className="service__brand__wrapper">
        <ul className="brand__list">
          <li className="brand__item">
            <a href="">
              <div className="sbrand__media">
                <Image
                  src="https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x.jpg"
                  width={1045}
                  height={405}
                  objectFit={"cover"}
                  alt=""
                />
              </div>
              <p>The world is the best place</p>
              <div className="sbrand__action">
                <div className="sbrand__left">
                  <BsSuitHeart className="sbrand__icon" />
                  <span>1,23k</span>
                  <BsChatSquare className="sbrand__icon" />
                  <span>235k</span>
                  <BsShare className="sbrand__icon" />
                  <span>2,3k</span>
                </div>
                <div className="sbrand__right">
                  <button className="btn__sbrand__book">Book Now!</button>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SBrand;
