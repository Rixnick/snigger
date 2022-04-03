import React from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { STORY } from "../../../graphql/Story";

type Props = {};

const MStory: React.FC<Props> = () => {
  const {data, loading, error} = useQuery(STORY, {fetchPolicy: 'network-only'});


  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ... Ops!</p>

  // console.log('story timeline: ', data)
  return (
    <div className="profile__story">
      <div className="profile__story__wrapper">
        <ul className="story__list">
          {
            data &&
            data.stories.map((story) => (
              <li className="story__item__media" key={story.id}>
                <a>
                  <div className="story__preview">
                    <Image
                      src={story.image}
                      width={85}
                      height={128}
                      objectFit={"cover"}
                      alt=""
                    />
                  </div>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default MStory;
