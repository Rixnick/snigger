import React from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { TIMELINEPRODUCTS } from "../../../graphql/Product";
import { format } from "timeago.js";

type Props = {};

const Product: React.FC<Props> = () => {
  const { data, loading, error } = useQuery(TIMELINEPRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ... Ops!</p>;

  return (
    <div className="home__right__market">
      <h3>Highlight Items</h3>
      <div className="market__product">
        {
          data &&
          data.timelineProducts.map((product) => (
            <div className="market__product__item" key={product.id}>
              <p className="public__at">public: {format(product.created_at)}</p>
              <Image
                src={product.media[0]}
                width={128}
                height={128}
                objectFit={"cover"}
                className="product__image"
                alt=""
              />
              <p>{product.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Product;
