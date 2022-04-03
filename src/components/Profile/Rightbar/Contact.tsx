import React from 'react';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { useQuery } from '@apollo/client';
import { FOLLOWINGS } from '../../../graphql/User';


type Props = {}

const Contact: React.FC<Props> = () => {
  const { data, loading, error} = useQuery(FOLLOWINGS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ... Ops!</p>


  return (
    <div className="user__contacts">
          <h3>Contacts</h3>
          <ul className="contact__list">
            {
              data &&
              data.followings.map((following) => (
                <li className="contact__item" key={following.id}>
                  <div className="contact__image">
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
                  </div>
                  <div className="contact__info">
                    {
                      !following.firstname || !following.lastname ? (
                        <h4>{following.username}</h4>
                      ):(
                        <h4>{following.firstname} {following.lastname}</h4>
                      )
                    }
                    {
                      !following.address ? (
                        <p>No user address data</p>
                      ):(
                        <p>{following.address}</p>
                      )
                    }
                    
                  </div>
                  <div className="contact__option">
                    <FiSearch className="contact__search__icon" />
                  </div>
                </li>
              ))
            }
          </ul>
          <button className="contact__view">View All</button>
        </div>
  )
}

export default Contact