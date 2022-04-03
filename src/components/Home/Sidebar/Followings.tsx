import { useQuery } from "@apollo/client";
import React from "react";
import { FOLLOWINGS } from "../../../graphql/User";
import Link from 'next/link';
import Image from 'next/image';

type Props = {};

const Followings: React.FC<Props> = () => {
  const { data, loading, error} = useQuery(FOLLOWINGS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ... Ops!</p>

  // console.log("following users:", data.followings.length)


  return (
    <>
    <h3>Followings <span>{data.followings.length}</span></h3>
    <hr className="home__sidebar__hr" />
    <ul className="home__friends__list">
      {
        data &&
        data.followings.map((following) => (
          <li className="home__friend__item" key={following.id}>
            <Link href="#">
              <a>
                {
                  !following.image ? (
                    <Image
                      className="home__friend__image"
                      src="https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png"
                      height={38}
                      width={38}
                      objectFit={"cover"}
                      alt=""
                    />
                  ):(
                    <Image
                      className="home__friend__image"
                      src={following.image}
                      objectFit={"cover"}
                      height={38}
                      width={38}
                      alt=""
                    />
                  )
                }
                {
                  !following.firstname || !following.lastname ? (
                    <span className="home__friend__name">{following.username}</span>
                  ):(
                    <span className="home__friend__name">{following.firstname} {following.lastname}</span>
                  )
                }          
              </a>
            </Link>
          </li>
          ))
        }
      </ul>
      </>
    );
  };

export default Followings;
