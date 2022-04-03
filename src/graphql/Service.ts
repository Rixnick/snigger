import { gql } from '@apollo/client';





export const TIMELINESERVICE = gql`
  query{
    timelineService{
      id
      name
      contact
      address
      category
      image
      cover
      updated_at
      created_at
      user
    }
  }
`;