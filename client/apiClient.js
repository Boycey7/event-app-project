import axios from "axios";
const url = process.env.NEXT_PUBLIC_API_ENDPOINT || "https://event-app-mi94.onrender.com";


export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  authenticatedCall(method, endpoint, data) {
    return axios({
      method,
      url: `${url}${endpoint}`,
      headers: {
        authorization: this.tokenProvider(),
      },
      data,
    }).catch((error) => {
      if (error.response.status === 403) {
        this.logoutHandler();
        return Promise.reject();
      } else {
        console.log(error);
        throw error;
      }
    });
  }


  async getEvents() {
    const dataRes = await axios.get(`${url}`, {
      headers: {
        authorization: this.tokenProvider(),
      },
    })
   
    return dataRes;

  }
  // temporary parameters
  async addEvent(title, dateAndTime, location, description, image) {

    const headers = {
      Authorization: this.tokenProvider(),
      'Content-Type': 'application/json',
    };
    const data = { title, dateAndTime, location, description, image };
    const dataRes = await axios.post(`${url}/events`, data, { headers });
    ;
    return dataRes;
  }

  removeEvent(id) {
    return this.authenticatedCall("delete", `/events/${id}`);
  }

  updateEvent(id, name, location, description, dateTime) {
    return this.authenticatedCall("put", `/events/${id}`, { name, location, description, dateTime });
  }

  async login(email, password) {

    return await axios({
      method: "post",
      url: `${url}/auth`,
      data: { email, password },
    });
    
  }
  
}
  
export const registerUser = async (email, password, confirmPassword) => {
  const apiClient = new ApiClient(); // No token or logout handler is needed for registration
  return apiClient.register(email, password, confirmPassword);
}
