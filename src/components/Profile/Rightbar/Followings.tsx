import { useQuery } from "@apollo/client";
import React from "react";
import { FOLLOWINGS } from "../../../graphql/User";

type Props = {};

const FollowingCount: React.FC<Props> = () => {
  const { data, loading, error} = useQuery(FOLLOWINGS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ... Ops!</p>

  return (
    <div className="user__followings__count">
      <h3>{ data.followings.length }</h3>
      <p>followings</p>
    </div>
  );
};

export default FollowingCount;
