export interface user {
  username?: string;
  email?: string;
}
export interface authInfo {
  token: string | null;
  loading: boolean;
  userData: user;
}
export interface loginInfo {
  username: string;
  password: string;
}
