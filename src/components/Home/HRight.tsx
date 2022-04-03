import React from "react";
import Terms from "../Layouts/Term";
import Image from 'next/image';
import Product from "./Right/Product";

interface Props {}

const HRight: React.FC<Props> = () => {
  return (
    <div className="home__right">
      <div className="home__right__wrapper">
        <Product />        

        <div className="home__right__content">
          <h3>Events</h3>
          <div className="home__content__event">
            <div className="content__event__item">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={45}
                height={45}
                objectFit={"cover"}
                alt=""
              />
              <span>Rorey and 4 Other have Birthday Today!</span>
            </div>
            <div className="content__event__item">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={45}
                height={45}
                objectFit={"cover"}
                alt=""
              />
              <span>Rorey and 4 Other have Birthday Today!</span>
            </div>
            <div className="content__event__item">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={45}
                height={45}
                objectFit={"cover"}
                alt=""
              />
              <span>Rorey and 4 Other have Birthday Today!</span>
            </div>
            <div className="content__event__item">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={45}
                height={45}
                objectFit={"cover"}
                alt=""
              />
              <span>Rorey and 4 Other have Birthday Today!</span>
            </div>
            <div className="content__event__item">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={45}
                height={45}
                objectFit={"cover"}
                alt=""
              />
              <span>Rorey and 4 Other have Birthday Today!</span>
            </div>
            <div className="content__event__item">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={45}
                height={45}
                objectFit={"cover"}
                alt=""
              />
              <span>Rorey and 4 Other have Birthday Today!</span>
            </div>
            
          </div>
        </div>

        <Terms />
      </div>
    </div>
  );
};

export default HRight;
