import React, { useContext } from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { IStory } from "../../../types";
import { USER } from "../../../graphql/User";
import { AuthContext } from "../../../context/AuthContext";
import { AiOutlinePlus } from 'react-icons/ai'

type Props = {
  story: IStory
};

const HStory: React.FC<Props> = ({ story }) => {
  
  return (
    <li className="home__story__item">
      <div className="story__media">
        <Image
          className="home__story__image"
          src={story.image}
          width={65}
          height={120}
          objectFit={"cover"}
          alt=""
        />{" "}
      </div>  
    </li>
  );
};

export default HStory;
