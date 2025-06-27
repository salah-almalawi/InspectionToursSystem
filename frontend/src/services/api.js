import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: ['Manager', 'Round'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data,
            }),
        }),
        getManagers: builder.query({
            query: () => '/managers',
            providesTags: ['Manager'],
        }),
        getManager: builder.query({
            query: (id) => `/managers/${id}`,
            providesTags: (result, error, id) => [{ type: 'Manager', id }],
        }),
        getManagerSummary: builder.query({
            query: (id) => `/managers/${id}/summary`,
            providesTags: (result, error, id) => [{ type: 'Manager', id }],
        }),
        createManager: builder.mutation({
            query: (data) => ({
                url: '/managers',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Manager'],
        }),
        updateManager: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `/managers/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Manager', id }],
        }),
        deleteManager: builder.mutation({
            query: (id) => ({
                url: `/managers/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Manager'],
        }),
        getRounds: builder.query({
            query: () => '/rounds',
            providesTags: ['Round'],
        }),
        getRound: builder.query({
            query: (id) => `/rounds/${id}`,
            providesTags: (result, error, id) => [{ type: 'Round', id }],
        }),
        createRound: builder.mutation({
            query: (data) => ({
                url: '/rounds',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Round', 'Manager'],
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useGetManagersQuery,
    useGetManagerQuery,
    useGetManagerSummaryQuery,
    useCreateManagerMutation,
    useUpdateManagerMutation,
    useDeleteManagerMutation,
    useGetRoundsQuery,
    useGetRoundQuery,
    useCreateRoundMutation,
} = api;