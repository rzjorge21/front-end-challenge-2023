import instance from "./config";

// REQUEST INTERCEPTOR
instance.interceptors.request.use((config) => {
  return config;
});

// RESPONSE INTERCEPTOR
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {

    return Promise.reject(error);
  }
);
