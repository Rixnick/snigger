import React from "react";
import Terms from "../Layouts/Term";
import Image from 'next/image';


interface Props {}

const SRight: React.FC<Props> = () => {
  return (
    <div className="scream__right">
      <div className="scream__sponsored">
        <h3>Sponsored</h3>
        <div className="sponsored__lists">
          

          <div className="sponsored__item">
            <Image
              src="https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x.jpg"
              width={200}
              height={120}
              objectFit={"cover"}
              alt=""
            />
            <p>the NFT of front down together</p>
          </div>

          <div className="sponsored__item">
            <Image
              src="https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x.jpg"
              width={200}
              height={120}
              objectFit={"cover"}
              alt=""
            />
            <p>the NFT of front down together</p>
          </div>

          <div className="sponsored__item">
            <Image
              src="https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x.jpg"
              width={200}
              height={120}
              objectFit={"cover"}
              alt=""
            />
            <p>the NFT of front down together</p>
          </div>

          <div className="sponsored__item">
            <Image
              src="https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x.jpg"
              width={200}
              height={120}
              objectFit={"cover"}
              alt=""
            />
            <p>the NFT of front down together</p>
          </div>
        </div>
      </div>

      <div className="comments__container">
        <h3>Comments</h3>
        <input type="text" placeholder="Write something to this ..." />
        <hr />
        <div className="comments__list">
          <div className="comments__item">
            <Image
              src="https://i.redd.it/mh7s3m7igys21.jpg"
              width={32}
              height={32}
              objectFit={"cover"}
              alt=""
              className="user__profile"
            />
            <p className="comment__text">
              this nice video, your should try to get more
            </p>
          </div>
          <div className="comments__item">
            <Image
              src="https://i.redd.it/mh7s3m7igys21.jpg"
              width={32}
              height={32}
              objectFit={"cover"}
              alt=""
              className="user__profile"
            />
            <p className="comment__text">
              this nice video, your should try to get more
            </p>
          </div>
          <div className="comments__item">
            <Image
              
              src="https://i.redd.it/mh7s3m7igys21.jpg"
              width={32}
              height={32}
              objectFit={"cover"}
              alt=""
              className="user__profile"
            />
            <p className="comment__text">
              this nice video, your should try to get more
            </p>
          </div>
        </div>
      </div>

      <Terms />
    </div>
  );
};

export default SRight;
