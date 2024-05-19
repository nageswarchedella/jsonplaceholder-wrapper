import { BaseModel } from "./baseModel";
import { COMMENTS_URL, HEADERS } from "../helpers/constants";
import { CommentType, ResponseType, CommentCreatePayload, CommentUpdatePayload } from "../helpers/types";

class CommentModel extends BaseModel<CommentType> {
  constructor() {
    super('comments');
  }

  async create(payload: CommentCreatePayload): Promise<ResponseType<CommentType>> {
    return this.request(COMMENTS_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: HEADERS
    });
  }

  async update(id: number, payload: CommentUpdatePayload): Promise<ResponseType<CommentType>> {
    return this.request(`${COMMENTS_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: HEADERS
    });
  }

  async getCommentsForPost(postId: number): Promise<ResponseType<CommentType>> {
    return this.request(`${COMMENTS_URL}?post_id=${postId}`);
  }
}

export default CommentModel;