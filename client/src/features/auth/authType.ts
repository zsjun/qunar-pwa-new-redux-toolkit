export interface user {
  username?: string;
  email?: string;
}
export interface authInfo {
  token: string | null;
  loading: boolean;
  userData: user;
}
export interface logInfo {
  username: string;
  password: string;
}
