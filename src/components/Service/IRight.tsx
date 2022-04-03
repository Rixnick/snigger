import React from "react";
import Terms from "../Layouts/Term";
import Image from 'next/image';

interface Props {}

const IRight: React.FC<Props> = () => {
  return (
    <div className="service__rightbar">
      <div className="service__sponsored">
        <h3>Sponsored</h3>
        <div className="sponsored__lists">

          <div className="sponsored__item">
            <Image
              src="https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x.jpg"
              width={420}
              height={220}
              objectFit={"cover"}
              alt=""
            />
            <p>the NFT of front down together</p>
          </div>

          <div className="sponsored__item">
            <Image
              src="https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x.jpg"
              width={420}
              height={220}
              objectFit={"cover"}
              alt=""
            />
            <p>the NFT of front down together</p>
          </div>

          <div className="sponsored__item">
            <Image
              src="https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x.jpg"
              width={420}
              height={220}
              objectFit={"cover"}
              alt=""
            />
            <p>the NFT of front down together</p>
          </div>

          <div className="sponsored__item">
            <Image
              src="https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x.jpg"
              width={420}
              height={220}
              objectFit={"cover"}
              alt=""
            />
            <p>the NFT of front down together</p>
          </div>
        </div>
      </div>

      <div className="service__right__wrapper">
        <div className="user__checkin__location">
          <h4>Vientiane Capt, LAOS. 07:19PM</h4>
          <span className="direct__location__link">
            <a href="#">Get Direct</a>
          </span>
        </div>

        <div className="service__nearest__me">
          <h3>Service Nearest Me</h3>
          <ul className="service__list">
            <li className="service__item">
              <a href="">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={38}
                height={38}
                objectFit={"cover"}
                alt=""
              />
              <span>Beggery Store far 0.3mile</span>
              </a>
            </li>

            <li className="service__item">
              <a href="">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={38}
                height={38}
                objectFit={"cover"}
                alt=""
              />
              <span>Beggery Store far 0.3mile</span>
              </a>
            </li>

            <li className="service__item">
              <a href="">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={38}
                height={38}
                objectFit={"cover"}
                alt=""
              />
              <span>Beggery Store far 0.3mile</span>
              </a>
            </li>

            <li className="service__item">
              <a href="">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={38}
                height={38}
                objectFit={"cover"}
                alt=""
              />
              <span>Beggery Store far 0.3mile</span>
              </a>
            </li>

            <li className="service__item">
              <a href="">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={38}
                height={38}
                objectFit={"cover"}
                alt=""
              />
              <span>Beggery Store far 0.3mile</span>
              </a>
            </li>

            <li className="service__item">
              <a href="">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={38}
                height={38}
                objectFit={"cover"}
                alt=""
              />
              <span>Beggery Store far 0.3mile</span>
              </a>
            </li>

            <li className="service__item">
              <a href="">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={38}
                height={38}
                objectFit={"cover"}
                alt=""
              />
              <span>Beggery Store far 0.3mile</span>
              </a>
            </li>

            <li className="service__item">
              <a href="">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={38}
                height={38}
                objectFit={"cover"}
                alt=""
              />
              <span>Beggery Store far 0.3mile</span>
              </a>
            </li>

            <li className="service__item">
              <a href="">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={38}
                height={38}
                objectFit={"cover"}
                alt=""
              />
              <span>Beggery Store far 0.3mile</span>
              </a>
            </li>

            <li className="service__item">
              <a href="">
              <Image
                src="https://i.pinimg.com/originals/27/b8/3d/27b83df7796819a1d85da8836dcec05c.jpg"
                width={38}
                height={38}
                objectFit={"cover"}
                alt=""
              />
              <span>Beggery Store far 0.3mile</span>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      <Terms />
    </div>
  );
};

export default IRight;
