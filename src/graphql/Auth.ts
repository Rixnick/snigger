import { gql } from "@apollo/client";

export const SIGNIN = gql`
mutation SIGNIN($email: String!, $password: String!, $browser: String!, $platform: String!){
  Signin(email:$email, password: $password, browser: $browser, platform: $platform){
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
    browser
    platform
    active_at
    isOnline
    followings
    followers
    friends
    roles
    created_at
  }
}
`;


export const SIGNOUT = gql`
  mutation {
    Signout{
      message
    }
  }
`;