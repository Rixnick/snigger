import { gql } from "@apollo/client";

export const PRODUCTS = gql`
  query {
    products {
      id
      description
      media
      created_at
      updated_at
      user
    }
  }
`;

export const TIMELINEPRODUCTS = gql`
query {
  timelineProducts {
    id
    description
    media
    likes
    created_at
    user
  }
}
`