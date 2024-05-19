import { HEADERS, USERS_URL } from "../helpers/constants";
import { ResponseType } from "../types/generics";
import { UserCreatePaylod, UserType, UserUpdatePaylod } from "../types/user";
import { BaseModel } from "./baseModel";

export class UserModel extends BaseModel<UserType> {
  constructor() {
    super('users');
  }

  async create(payload: UserCreatePaylod): Promise<ResponseType<UserType>> {
    return this.request(USERS_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: HEADERS
    });
  }

  async update(id: number, payload: UserUpdatePaylod): Promise<ResponseType<UserType>> {
    return this.request(`${USERS_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: HEADERS
    });
  }
}
