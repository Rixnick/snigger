import { useQuery } from "@apollo/client";
import React from "react";
import { TIMELINE } from "../../../graphql/Scream";
import Item from "./Item";

interface Props {}

const Lists: React.FC<Props> = () => {
  const { data, loading, error} = useQuery(TIMELINE);

  

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error... Ops!</p>

  // console.log("List screams:", data.timeline)

  return (
    <div className="play__lists">
      <h3>Play lists</h3>
      <ul className="release__play__list">
        {
          data &&
          data.timeline.map((scream) => (
            <Item scream={scream} key={scream.id} />
          ))
        }
      </ul>
    </div>
  );
};

export default Lists;
