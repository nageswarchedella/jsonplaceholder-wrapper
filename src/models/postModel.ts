import { BaseModel } from "./baseModel";
import { POSTS_URL, HEADERS } from "../constants";
import { PostType, ResponseType, PostCreatePaylod, PostUpdatePaylod } from "../types";
class PostModel extends BaseModel<PostType> {
  constructor() {
    super('posts');
  }

  async create(payload: PostCreatePaylod): Promise<ResponseType<PostType>> {
    const response = await this.fetchData(POSTS_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: HEADERS
    });
    return response;
  }

  async update(id: number, payload: PostUpdatePaylod): Promise<ResponseType<PostType>> {
    const response = await this.fetchData(`${POSTS_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: HEADERS
    });
    return response;
  }
}
export default PostModel;