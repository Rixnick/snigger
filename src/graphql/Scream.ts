import { gql } from '@apollo/client';

export const TIMELINE = gql`
 query{
    timeline{
      id
      content
      media
      user
      likes
      created_at
    }
  }
`;
