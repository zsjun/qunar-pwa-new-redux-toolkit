import { fetchData } from "../../utils/axios";

export function login(data) {
  return fetchData("/api/auth/login", "post", data);
}
