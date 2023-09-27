import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articlesApi = createApi({
    reducerPath: 'articlespii',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/articles' }),
    endpoints: (builder) => ({
        getArticleByTitle: builder.query({
            query: (title) => `?search=${title}`,
        })
    })
})

export const { useGetArticleByTitleQuery } = articlesApi;