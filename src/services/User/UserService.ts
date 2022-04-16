import axios, { AxiosInstance } from "axios";

import { User } from "../../entities/User";

class UserService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3000/api/user",
    });
  }

  getUser() {
    return new Promise<User>((resolve, reject) => {
      this.api.get("").then((response) => {
        if (response.status !== 200) {
          reject();
          return;
        }

        resolve(response.data);
      });
    });
  }
}

export default UserService;
