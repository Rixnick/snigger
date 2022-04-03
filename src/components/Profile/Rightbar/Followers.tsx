import { useQuery } from "@apollo/client";
import React from "react";
import { FOLLOWERS } from "../../../graphql/User";

type Props = {};

const FollowerCount: React.FC<Props> = () => {
  const { data, loading, error } = useQuery(FOLLOWERS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ... Ops!</p>

  return (
    <div className="user__followers__count">
      <h3>{ data.followers.length }</h3>
      <p>followers</p>
    </div>
  );
};

export default FollowerCount;
