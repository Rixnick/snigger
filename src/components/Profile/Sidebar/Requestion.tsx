import React from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { USERS } from "../../../graphql/User";

type Props = {};

const Requestion: React.FC<Props> = () => {
  const { data, loading, error } = useQuery(USERS);


  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ... Ops!</p>

  // console.log("user:", data)

  return (
    <div className="user__request__friend">
      <div className="user__requestion__header">
        <h3>Requests</h3>
        <span>{data.users.length}</span>
      </div>
      <hr />
      <div className="user__requestion__content">
        <ul className="user__request__list">
          {
            data && 
            data.users.map((user) => (
              <li className="user__request__item" key={user.id}>
                <div className="user__request__profile">
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
    
                <div className="user__request__body">
                  {
                    !user.firstname || !user.lastname ? (
                      <h3>{user.username}</h3>
                    ):(
                      <h3>{user.firstname} {user.lastname}</h3>
                    )
                  }  
                  <span>wants to add you to friend</span>
                  <div className="user__request__actions">
                    <a className="request__accept" href="#">
                      Accept
                    </a>
                    <a className="request__decline" href="">
                      Decline
                    </a>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Requestion;
