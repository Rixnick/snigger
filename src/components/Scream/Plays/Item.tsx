import React from "react";
import { BsSuitHeart, BsEye, BsChatSquare } from "react-icons/bs";
import { Timeline } from "../../../types";
import Image from 'next/image';


type Props = {
  scream: Timeline
};

const Item: React.FC<Props> = ({ scream }) => {
  return (
    <li className="play__list__item">
      <a href="">
        <div className="play__list__media">
          <Image
            src={scream.media}
            width={532}
            height={224}
            objectFit={"cover"}
            alt=""
          />
        </div>
        <p>{scream.content}</p>
        <div className="play__list__action">
          <BsSuitHeart className="watch__now__icon" />
          <BsChatSquare className="watch__now__icon" />
          <BsEye className="watch__now__icon" />
          <span>1,2k Views</span>
        </div>
      </a>
    </li>
  );
};

export default Item;
