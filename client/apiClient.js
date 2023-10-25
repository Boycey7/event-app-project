import axios from "axios";
const url = "http://localhost:3001/";

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider(),
      },
      data,
    }).catch((error) => {
      if (error.response.status === 403) {
        this.logoutHandler();
        return Promise.reject();
      } else {
        throw error;
      }
    });
  }

  getEvents() {
    return this.authenticatedCall("get", "");
  }
// temporary parameters
  addEvent(name, location, description, dateTime) {
    return this.authenticatedCall("post", "", { name, location, description, dateTime });
  }

  removeEvent(id) {
    return this.authenticatedCall("delete", `${id}`);
  }

  updateEvent(id, name, location, description, dateTime) {
    return this.authenticatedCall("put", `${id}`, { name, location, description, dateTime });
  }

  async login(username, password) {
    return await axios({
      method: "post",
      url: `${url}auth`,
      data: { username, password },
    });
  }
}