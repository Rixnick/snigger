import { gql } from "@apollo/client";


export const STORY = gql`
  query {
    stories {
      id
      content
      image
      created_at
      user
    }
  }
`;