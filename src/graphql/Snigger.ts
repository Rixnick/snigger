import { gql } from '@apollo/client';

export const SNIGGERTIMELINE = gql`
  query{
    timelineSnigger{
      id
      content
      media
      created_at
      user
    }
  }
`;

export const MY_TIMELINE = gql`
query {
  mytimeline{
    id
    content
    media
    likes
    created_at
    user
  }
}
`;


export const POSTSNIGGER = gql`
  mutation POSTSNIGGER($content: String!, $media: String!) {
    postSnigger(content: $content, media: $media){
      id
      media
      content
      created_at
      updated_at
      user
    }
  }
`;