import axios, { AxiosInstance } from "axios";
import { ElLoading } from "element-plus";
class Request {
  instance: AxiosInstance;
  loding: any;
  constructor() {
    this.instance = axios.create({
      baseURL: "http://back.9yuecloud.com/",
      timeout: 5000,
    });
  }
  reqint() {
    this.instance.interceptors.request.use(
      (config) => {
        this.loding = ElLoading.service({
          text: "加载中",
        });
        return config;
      },
      (err) => {
        this.loding.close();
        throw new Error(err);
      }
    );
  }
  resint() {
    this.instance.interceptors.response.use(
      (aa) => {
        this.loding.close();
        return aa;
      },
      (err) => {
        this.loding.close();
        throw new Error(err);
      }
    );
  }
  async post(url: string, data?: any) {
    let res = await this.instance({
      method: "post",
      url: url,
      data: data,
    });
    return res;
  }
}

export default new Request();
