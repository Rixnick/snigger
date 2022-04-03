import React, { useContext } from 'react'
import { BsShare, BsBookmarks } from "react-icons/bs";
import { FiNavigation, FiActivity } from 'react-icons/fi';
import { BiEdit } from 'react-icons/bi';
import { AuthContext } from '../../../context/AuthContext';
import { Service } from '../../../types';
import Image from 'next/image';

type Props = {
  service: Service
}

const Item: React.FC<Props> = ({ service }) => {
  const { loggedInUser } = useContext(AuthContext);



  return (
    <li className="category__service__item">
    <div className="category__service__container">
      <div className="scategory__service__media">
        {
          !service.image ? (
            <Image
              src="https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png"
              width={80}
              height={80}
              objectFit={"cover"}
              alt=""
            />
          ):(
            <Image
              src={service.image}
              width={80}
              height={80}
              objectFit={"cover"}
              alt=""
            />
          )
        }        
      </div>
      <div className="scategory__content">
        <div className="scategory__body">
          <h4>Name: {service.name}</h4>
          <span>Rating: </span>
        </div><br />
        <div className="scategory__footer">
          <p>Address: { service.address }</p>
          <p>Contact: { service.contact }</p>
        </div>
      </div>  
    </div>
    
    <div className="scategory__service__action">
      {
        service.user === loggedInUser.id ? (
          <>
            <div className="service__action__item">
              <BiEdit className="scategory__service__icon" />
            </div>

            <div className="service__action__item">
              <FiActivity className="scategory__service__icon" />
            </div>

            <div className="service__action__item">
              <BsShare className="scategory__service__icon" />
            </div>
          </>  
        ) : (
          <>
            <div className="service__action__item">
              <FiNavigation className="scategory__service__icon" />
            </div>

            <div className="service__action__item">
              <BsBookmarks className="scategory__service__icon" />
            </div>

            <div className="service__action__item">
              <BsShare className="scategory__service__icon" />
            </div>
          </>  
        )
      }          
    </div>
  </li>
  )
}

export default Item;