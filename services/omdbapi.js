import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `http://www.omdbapi.com`;

const createRequest = (url) => ({ url });

export const omdbApi = createApi({
  reducerPath: "omdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ title, page }) =>
        createRequest(
          `?apikey=${process.env.OMDB_API_KEY}&s=${title}&type=movie&page=${page}`
        ),
    }),
    getFullPlot: builder.query({
      query: ({imdbID}) =>
        createRequest(`?apikey=${process.env.OMDB_API_KEY}&i=${imdbID}&plot=full`),
    }),
  }),
});

export const { useGetMoviesQuery, useGetFullPlotQuery } = omdbApi;
