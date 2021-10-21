import { Tour } from "../types";

const defaultConfig = {
  method: "GET",
  responseType: "json",
  timeoutTimer: 30000,
};

export class HttpRequestTourService {
  private static _instance: HttpRequestTourService;

  private uri = "https://jsonblob.com/api/jsonBlob/892812282795671552";

  public static get Instance(): HttpRequestTourService {
    return this._instance || (this._instance = new this());
  }

  public async getTours(): Promise<Array<Tour>> {
    return fetch(this.uri, defaultConfig)
      .then((res) => res.json())
      .catch((er) => {
        return Promise.reject({
          status: er.status,
          message: er.message,
        });
      });
  }
}
