//React entry point 会自动根据endpoints生成hooks
import { baseApi } from "./base";
interface IPostVo {
  id: number;
  username: string;
  email: string;
}
//使用base URL 和endpoints 定义服务
const authpostsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 查询列表
    getPostsList1: builder.query<Promise<IPostVo[]>, void>({
      query: () => "/api/users",
      // transformResponse: (response: { data: Promise<IPostVo[]> }) => {
      //   console.log(233, response);
      //   return response.data;
      // },
    }),
    // 根据id去查询,第一个参数是返回值的类型，第二个参是传递给后端的数据类型
    getPostsById: builder.query<{ id: number; name: string }, number>({
      query: (id: number) => `/api/posts/${id}`,
    }),
    // 创建帖子
    createPosts: builder.mutation({
      query: (data) => ({
        url: "/api/posts",
        method: "post",
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});
//导出可在函数式组件使用的hooks,它是基于定义的endpoints自动生成的
export const {
  useGetPostsList1Query,
  useGetPostsByIdQuery,
  useCreatePostsMutation,
  // 惰性的查询
  useLazyGetPostsList1Query,
  useLazyGetPostsByIdQuery,
} = authpostsApi;
export default authpostsApi;
