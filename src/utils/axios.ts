import axios, { AxiosRequestConfig } from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  async ({ data }) => {
    return data;
  },
  async (err) => {
    if (axios.isAxiosError(err)) {
      throw new Error(`Axios error: ${err.message}`, {
        cause: err.response?.data,
      });
    }

    throw new Error(`Unexpected error: ${err}`);
  },
);

// ***** ***** ***** Axios Request Abstraction ***** ***** ***** //
export const getRequest = (url: string, config?: AxiosRequestConfig) => {
  return axiosClient.get(url, config);
};

export const postRequest = (
  url: string,
  payload?: any,
  config?: AxiosRequestConfig,
) => {
  return axiosClient.post(url, payload, config);
};

export const putRequest = (
  url: string,
  payload?: any,
  config?: AxiosRequestConfig,
) => {
  return axiosClient.put(url, payload, config);
};

export const patchRequest = (
  url: string,
  payload?: any,
  config?: AxiosRequestConfig,
) => {
  return axiosClient.patch(url, payload, config);
};

export const deleteRequest = (url: string, config?: AxiosRequestConfig) => {
  return axiosClient.delete(url, config);
};
