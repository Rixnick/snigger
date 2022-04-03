import { useQuery } from '@apollo/client'
import React from 'react'
import { FOLLOWERS } from '../../../graphql/User'
import Image from 'next/image';


type Props = {}

const Followers: React.FC<Props> = () => {
  const {data, loading, error} = useQuery(FOLLOWERS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ... Ops!</p>

  // console.log("followers:", data.followers)
  return (
    <div className="user__followers__active">
    <div className="user__followers">
      <ul className="user__followers__list">
        {
          data &&
          data.followers.map((follower) => (
            <li className="user__followers__item" key={follower.id}>
              {
                !follower.image ? (
                  <a href="">
                    <Image
                      src="https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png"
                      width={48}
                      height={48}
                      objectFit={"cover"}
                      alt=""
                    />
                  </a>
                ):(
                  <a href="">
                    <Image
                      src={follower.image}
                      width={48}
                      height={48}
                      objectFit={"cover"}
                      alt=""
                    />
                  </a>
                )
              }
            </li>
          ))
        }
      </ul>
    </div>
    <div className="user__followers__body">
      <h2>{data.followers.length}</h2>
      <span>Followers</span>
    </div>
    <p>Active now on your profile</p>
  </div>
  )
}

export default Followers;