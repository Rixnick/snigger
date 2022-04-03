import { useQuery } from "@apollo/client";
import React from "react";
import { BsShare, BsBookmarks } from "react-icons/bs";
import { FiNavigation } from 'react-icons/fi';
import { TIMELINESERVICE } from "../../../graphql/Service";
import Item from "./Item";


type Props = {};

const SCategory: React.FC<Props> = () => {
  const { data, loading, error } = useQuery(TIMELINESERVICE);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error... Ops!</p>


  return (
    <div className="service__category">
      <h3>Services</h3>
      <div className="category__wrapper">
        <ul className="category__service__list">
          {
            data &&
            data.timelineService.map((service) => (
              <Item service={service} key={service.id} />
            ))
          }
       </ul>
      </div>
    </div>
  );
};

export default SCategory;
