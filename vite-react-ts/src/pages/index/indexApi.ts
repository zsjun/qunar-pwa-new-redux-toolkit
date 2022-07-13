import { fetchData } from '../../utils/axios';
interface loginInfo {
  username: string;
  password: string;
}
export function login(data: loginInfo) {
  return fetchData('/api/auth/login', 'post', data);
}
// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
