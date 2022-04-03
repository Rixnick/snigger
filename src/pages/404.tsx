import React from "react";
import Link from "next/link";
import Image from 'next/image';


interface Props {}

const Notfound = (props: Props) => {
  return (
    <div className="not__found__page">
      <section className="__main__content">
        <Image
          src="https://res.cloudinary.com/swizce/image/upload/v1638188997/Swizce/home/undraw_taken_re_yn20_teajpb.svg"
          width={400}
          height={400}
          alt=""
        />
      </section>

      <section className="__main__content">
        <h1 style={{ color: "red", fontSize: "32px" }}>Ooooops...!</h1>
        <h4 style={{ color: "teal", fontSize: "14px" }}>
          That page not founds...!
        </h4>
        <Link href="/">
          <a style={{ cursor: "pointer" }}>Go Back</a>
        </Link>
      </section>
    </div>
  );
};

export default Notfound;
