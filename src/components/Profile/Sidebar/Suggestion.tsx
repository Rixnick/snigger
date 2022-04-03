import React from 'react';
import Image from 'next/image';
import { HiOutlineUserAdd } from "react-icons/hi";
import { useQuery } from '@apollo/client';
import { USERS } from '../../../graphql/User';

type Props = {}

const Suggestion: React.FC<Props> = () => {
  const { data, loading, error } = useQuery(USERS);


  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ... Ops!</p>

  // console.log("user:", data)

  return (
    <div className="user__suggestion__firend">
    <div className="user__requestion__header">
      <h3>Suggestions For You</h3>
    </div>
    <hr />
    <div className="user__suggestion__content">
      <ul className="suggestion__list">
        {
          data &&
          data.users.map((user) => (
            <li className="suggestion__item" key={user.id}>
            <div className="suggestion__profile">
              {
                !user.image ? (
                  <Image
                    src="https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png"
                    width={48}
                    height={48}
                    objectFit={"cover"}
                    alt=""
                  />
                ):(
                  <Image
                    src={user.image}
                    width={48}
                    height={48}
                    objectFit={"cover"}
                    alt=""
                  />
                )
              }
              
            </div>
            <div className="suggestion__body">
              {
                !user.firstname || !user.lastname ? (
                  <h3>{user.username}</h3>
                ):(
                  <h3>{user.firstname} {user.lastname}</h3>
                )
              }
              
              <p>Rixenxart Brussels BG</p>
            </div>
            <div className="suggestion__action">
              <HiOutlineUserAdd className="suggestion__icon" />
            </div>
          </li>
          ))
        }
      </ul>
      <button className="suggestion__view">View All</button>
    </div>
  </div>
  )
}

export default Suggestion