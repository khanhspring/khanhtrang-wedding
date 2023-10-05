import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create();

instance.interceptors.request.use((config) => {

  return config;
});

export const fetcher = (url: string, config?: AxiosRequestConfig) => {
  return instance.get(url, config).then((response) => response.data);
};

export default instance;
