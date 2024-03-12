import { BASE_URL, HEADERS } from "../constants";
import { ResponseType } from "../types";

export class BaseModel<T>{
  constructor(private endpoint: string) { }
  async fetchData(url: string, options?: RequestInit): Promise<ResponseType<T>> {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return { status: response.status, data };
    } catch (error: unknown) {
      return { status: (error as Response).status, error };
    }
  }

  async all(): Promise<ResponseType<T>> {
    return this.fetchData(`${BASE_URL}/${this.endpoint}`);
  }

  async find(id: number): Promise<ResponseType<T>> {
    return this.fetchData(`${BASE_URL}/${this.endpoint}/${id}`);
  }

  async create(payload: any): Promise<ResponseType<T>> {
    const options: RequestInit = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: HEADERS
    };
    return this.fetchData(`${BASE_URL}/${this.endpoint}`, options);
  }

  async update(id: number, payload: any): Promise<ResponseType<T>> {
    const options: RequestInit = {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: HEADERS
    };
    return this.fetchData(`${BASE_URL}/${this.endpoint}/${id}`, options);
  }

  async delete(id: number): Promise<ResponseType<T>>{
    const options: RequestInit = {
      method: "DELETE"
    }
    return this.fetchData(`${BASE_URL}/${this.endpoint}`, options)
  }
}