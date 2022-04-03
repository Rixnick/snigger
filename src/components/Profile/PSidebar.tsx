import React from "react";
import Followers from "./Sidebar/Followers";
import Requestion from "./Sidebar/Requestion";
import Suggestion from "./Sidebar/Suggestion";



type Props = {};

const PSidebar: React.FC<Props> = () => {
  return (
    <div className="profile__sidebar">
      <div className="user__sidebar__wrapper">
        <Followers />

        <Requestion />

        <Suggestion />
      </div>
    </div>
  );
};

export default PSidebar;
