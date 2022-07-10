import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi1 = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  reducerPath: "baseApi111",
  // 缓存，默认时间是秒，默认时长60秒
  keepUnusedDataFor: 5 * 60,
  refetchOnMountOrArgChange: 30 * 60,
  endpoints: () => ({}),
});
