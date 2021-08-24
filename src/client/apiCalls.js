import URI from "urijs";
import fetch from "isomorphic-fetch";
import config from "./apiConfig";

class ApiCalls {
  constructor(_config) {
    this.host = _config.host;
    this.endpoints = _config.endpoints;
    this.headers = _config.headers;
  }

  getPeliculas = () => {
    const url = new URI(this.host).path(this.endpoints.getPeliculas).toString();
    return fetch(url, {
      method: "GET",
      headers: Object.assign({}, this.headers),
    });
  };
}

const apiCalls = new ApiCalls(config);

export default apiCalls;
