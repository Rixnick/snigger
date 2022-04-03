import { gql } from '@apollo/client';

export const ME = gql`
query {
    me{
      id
      username
      email
      firstname
      lastname
      image
      cover
      address
      hometown
      account
      isOnline
      browser
      platform
      active_at
      followings
      followers
      friends
      roles
      created_at
    }
  }
`;


export const USERS = gql`
query {
  users{
    id
    username
    email
    firstname
    lastname
    image
    cover
    address
    hometown
    account
    isOnline
    browser
    platform
    active_at
    followings
    followers
    friends
    roles
    created_at
  }
}
`

export const USER = gql`
  query USER($userId: String!) {
    user(userId: $userId){
      id
      username
      email
      firstname
      lastname
      image
      cover
      address
      hometown
      account
      isOnline
      browser
      platform
      active_at
      followings
      followers
      friends
      roles
      created_at
    }
  }
`;

export const FOLLOWINGS = gql`
query{
  followings{
    id
    username
    email
    firstname
    lastname
    image
    cover
    roles
    address
    account
    isOnline
    created_at
  }
}
`;

export const FOLLOWERS = gql`
  query{
    followers{
      id
      username
      email
      firstname
      lastname
      image
      cover
      roles
      address
      account
      isOnline
      created_at
    }
  }
`