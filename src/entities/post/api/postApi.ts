import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Post } from '../model/types'

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (build) => ({
        getPosts: build.query<Post[], { limit: number, start: number }>({
            query: ({ limit = 5, start = 0 }) => ({
                url: '/posts',
                params:
                {
                    _limit: limit,
                    _start: start,
                }
            })
        }),
        getPostById: build.query<Post, string>({
            query: (id: string) => ({
                url: `/posts/${id}`,
            })
        })
    })
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi