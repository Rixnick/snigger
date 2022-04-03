import React from "react";
import Lists from "./Plays/Lists";
import Now from "./Watch/Now";

interface Props {}

const SFeed: React.FC<Props> = () => {
  return (
    <div className="scream__feeds">
      <div className="scream__feed__wrapper">
        <Now />

        <Lists />
      </div>
    </div>
  );
};

export default SFeed;
