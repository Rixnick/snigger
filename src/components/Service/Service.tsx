import React from "react";
import SBrand from "./Brand/Brand";
import SCategory from "./Category/Category";

interface Props {}

const IService: React.FC<Props> = () => {
  return (
    <div className="service__container">
      <div className="service__wrapper">
        <SBrand />

        <SCategory />
      </div>
    </div>
  );
};

export default IService;
  