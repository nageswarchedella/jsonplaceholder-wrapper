import { BASE_URL, HEADERS } from "../helpers/constants";
import { ResponseType } from "../helpers/types";

export class BaseModel<T>{
  constructor(private endpoint: string) { }
  protected async request(url: string, options?: RequestInit): Promise<ResponseType<T>> {
    try {
      const response = await fetch(url, { headers: HEADERS, ...options });
      const data = await response.json();
      return { status: response.status, data };
    } catch (error: unknown) {
      return { status: (error as Response).status, error };
    }
  }

  all(): Promise<ResponseType<T>> {
    return this.request(`${BASE_URL}/${this.endpoint}`);
  }

  find(id: number): Promise<ResponseType<T>> {
    return this.request(`${BASE_URL}/${this.endpoint}/${id}`);
  }

  create(payload: T): Promise<ResponseType<T>> {
    return this.request(`${BASE_URL}/${this.endpoint}`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  update(id: number, payload: Partial<T>): Promise<ResponseType<T>> {
    return this.request(`${BASE_URL}/${this.endpoint}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  }

  delete(id: number): Promise<ResponseType<T>> {
    return this.request(`${BASE_URL}/${this.endpoint}/${id}`, {
      method: 'DELETE',
    });
  }
}
