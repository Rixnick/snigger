export type Roles = "client" | "editor" | "admin" | "super";

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  image: string;
  cover: string;
  address: string;
  hometown: string;
  browser: string;
  platform: string;
  active_at: string;
  isOnline: string;
  roles: Roles[];
  created_at: string;
}

export interface Timeline {
  id: string;
  content: string;
  media: string;
  likes: string;
  created_at: string;
  user: string;
}

export interface Snigger {
  id: string;
  content: string;
  media: string;
  likes: string;
  created_at: string;
  user: string;
}

export interface Service {
  id: string;
  name: string;
  contact: string;
  address: string;
  category: string[];
  image: string;
  cover: string;
  updated_at: string;
  created_at: string;
  user: string;
}

export interface IStory {
    id: string;
    content: string;
    image: string;
    created_at: string;
    user: string;
}

export type SignupArgs = Pick<User, "username" | "email"> & {
  password: string;
  platform: string;
  browser: string;
};

export type PostSniggerArgs = Pick<Snigger, 'content' | 'media'>

export type SigninArgs = Omit<SignupArgs, "username">;

