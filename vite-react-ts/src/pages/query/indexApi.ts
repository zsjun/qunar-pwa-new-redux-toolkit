import axios from 'axios';
// A mock function to mimic making an async request for data
export async function fetchQuery(obj: any) {
  return axios.get('/api/rest/query');
}
