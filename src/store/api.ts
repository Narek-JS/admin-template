import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL as baseUrl } from "../constants/urls";

const api = createApi({
  reducerPath: "api",
  endpoints: () => ({}),
  baseQuery: fetchBaseQuery({ baseUrl }),
});

export { api };
