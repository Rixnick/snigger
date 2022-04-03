import React from "react";
import Post from "./Post";
import Share from "./Share";
import { SNIGGERTIMELINE } from '../../graphql/Snigger';
import { useQuery } from "@apollo/client";


interface Props {}

const HFeeds: React.FC<Props> = () => {
  const { data, loading, error} = useQuery(SNIGGERTIMELINE, { fetchPolicy: 'network-only'});

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ... Ops!</p>

  // console.log('scream timeline: ', data.timeline)

  return (
    <div className="home__feeds">
      <div className="home__feed_wrapper">
        <Share />

        {
          data &&
          data.timelineSnigger.map((snigger) => (
            <Post snigger={snigger} key={snigger.id} />
          ))
        }
      </div>
    </div>
  );
};

export default HFeeds;
