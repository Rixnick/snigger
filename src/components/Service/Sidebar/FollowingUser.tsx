import { useQuery } from "@apollo/client";
import React from "react";
import { FOLLOWINGS } from "../../../graphql/User";
import Image from 'next/image';


type Props = {};

const FollowingUser: React.FC<Props> = () => {
  const { data, loading, error } = useQuery(FOLLOWINGS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ... Ops!</p>

  return (
    <div className="following__service">
      <h3>Following Users</h3>
      <hr className="service__following__hr" />
      <ul className="following__service">
        {
          data &&
          data.followings.map((following) => (
            <li className="following__item" key={following.id}>
              <a href="">
                {
                  !following.image ? (
                    <Image
                      className="chanel__logo"
                      src="https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png"
                      width={36}
                      height={36}
                      objectFit={"cover"}
                      alt=""
                    />
                  ):(
                    <Image
                      className="chanel__logo"
                      src={following.image}
                      width={36}
                      height={36}
                      objectFit={"cover"}
                      alt=""
                    />
                  )
                }
                
                {
                  !following.firstname || !following.lastname ? (
                    <span className="chanel__name__text">{following.username}</span>
                  ):(
                    <span className="chanel__name__text">{following.firstname} {following.lastname}</span>
                  )
                }
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default FollowingUser;
