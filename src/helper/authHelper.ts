import { User } from "../types";

export const isSuperAdmin = (user: User | null) =>
  !user ? false : user.roles.includes("super");

export const isAdmin = (user: User | null) =>
  !user
    ? false
    : user.roles.includes("admin") || user.roles.includes("super");

export const isClient = (user: User | null) =>
  !user
    ? false
    : user.roles.includes("editor") ||
      user.roles.includes("admin") ||
      user.roles.includes("super");
