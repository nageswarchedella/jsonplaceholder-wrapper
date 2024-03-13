import { BaseModel } from "./baseModel";
import { COMMENTS_URL, HEADERS } from "../constants";
import { CommentType, ResponseType, CommentCreatePayload, CommentUpdatePayload } from "../types";
class CommentModel extends BaseModel<CommentType> {
  constructor() {
    super('comments');
  }

  async create(payload: CommentCreatePayload): Promise<ResponseType<CommentType>> {
    const response = await this.fetchData(COMMENTS_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: HEADERS
    });
    return response;
  }

  async update(id: number, payload: CommentUpdatePayload): Promise<ResponseType<CommentType>> {
    const response = await this.fetchData(`${COMMENTS_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: HEADERS
    });
    return response;
  }
}
export default CommentModel;