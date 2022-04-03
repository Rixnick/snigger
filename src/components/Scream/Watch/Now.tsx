import React from "react";
import { BsSuitHeart, BsEye, BsChatSquare, BsShare } from "react-icons/bs";
import Image from "next/image";

interface Props {}

const Now: React.FC<Props> = () => {
  return (
    <div className="watching__now">
      <div className="watch__now__item">
        <div className="watch__now__media">
          <Image
            src="https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x.jpg"
            width={1095}
            height={465}
            objectFit={"cover"}
            alt=""
          />
        </div>
        <p>The world is the best place</p>
        <div className="watch__now__action">
          <div className="watch__now__left">
            <BsSuitHeart className="watch__now__icon" />
            <span>1,23k</span>
            <BsChatSquare className="watch__now__icon" />
            <span>235k</span>
            <BsShare className="watch__now__icon" />
            <span>2,3k</span>
            <BsEye className="watch__now__icon" />
            <span>You And Other 1,2k watching</span>
          </div>
          <div className="watch__action">
            <button className="btn__watch__now">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Now;
