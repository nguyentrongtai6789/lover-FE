import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// getUri(config?: AxiosRequestConfig): string;
// request<T = any, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R>;
// get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
// delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
// head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
// options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
// post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
// put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
// patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;

class Services {
  axios: any;
  interceptors: null;

  constructor() {
    this.axios = axios;
    this.interceptors = null;
    // this.axios.defaults.withCredentials = true;
    this.axios.defaults.timeout = 300000;
  }

  saveLocalStorage(data: any) {
    const { token, res } = data;
    // this.attachTokenToHeader(token);
    // const encryptedString = this.cryptr.encrypt(token);
    const dataSave = {
      token,
      res,
      // token: encryptedString
    };
    window.localStorage.setItem("user", JSON.stringify(dataSave));
  }

  clearLocalStorage() {
    window.localStorage.removeItem("user");
  }

  attachTokenToHeader(token?: string) {
    if (token) {
      this.axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete this.axios.defaults.headers.common["Authorization"];
    }
    // this.interceptors = this.axios.interceptors.request.use(
    //   function (config: any) {
    //     // Do something before request is sent
    //     config.headers.Authorization = `Bearer ${token}`;
    //     return config;
    //   },
    //   function (error: any) {
    //     return Promise.reject(error);
    //   }
    // );
  }

  attachFunctionCodeToHeader(functionCode?: any) {
    this.axios.defaults.headers.common["Function-Code"] = `${
      functionCode || ""
    }`;
  }
  removeInterceptors() {
    this.axios.interceptors.request.eject(this.interceptors);
  }

  handleResponse(
    response: AxiosResponse,
    error: AxiosError,
    isSuccess: boolean,
    url?: string
  ) {
    if (isSuccess) {
      return response;
    } else {
      // if (error.response && error.response.status === 401) {
      //   if ((url || "").includes("cccdApp/api/authenticate")) {
      //     return;
      //   }
      //   // clear token
      //   localStorage.removeItem("user");
      //   localStorage.removeItem("userType");
      //   window.location.reload();
      //   return;
      // }
      // return error.response;
      return null;
    }
  }

  async get(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.axios.get(url, config);
      return this.handleResponse(response, {} as AxiosError, true, url);
    } catch (error: any) {
      return this.handleResponse({} as AxiosResponse, error, false, url);
    }
    // return this.axios.get(...arg);
  }

  async post(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      const response = await this.axios.post(url, data, config);
      return this.handleResponse(response, {} as AxiosError, true, url);
    } catch (error: any) {
      return this.handleResponse({} as AxiosResponse, error, false, url);
    }
    return this.axios.post(url, data, config);
  }

  async delete(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.axios.delete(url, config);
      return this.handleResponse(response, {} as AxiosError, true, url);
    } catch (error) {
      // return this.handleResponse({} as AxiosResponse, error, false, url);
    }
    // return this.axios.delete(url, config);
  }

  async put(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      const response = await this.axios.put(url, data, config);
      return this.handleResponse(response, {} as AxiosError, true, url);
    } catch (error) {
      // return this.handleResponse({} as AxiosResponse, error, false, url);
    }
    // return this.axios.put(url, data, config);
  }
}

export const HeaderUTF8Option = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-HTTP-Method-Override": "GET",
  },
};

export default new Services();
