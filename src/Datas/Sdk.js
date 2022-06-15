import axios from "axios";

class SDK {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:3000",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  }

  async getMenu() {
    const req = await this.instance.get("/menu");
    return req.data;
  }


  async getTable() {
    const req = await this.instance.get("/table");
    return req.data;
  }
  async getEmployees() {
    const req = await this.instance.get("/employees");
    return req.data;
  }
  async getStatus() {
    const req = await this.instance.get("/status");
    return req.data;
  }
}

export default SDK;
