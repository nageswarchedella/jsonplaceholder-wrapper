import { BaseModel } from "./baseModel";
import { POSTS_URL, HEADERS } from "../helpers/constants";
import { PostType, ResponseType, PostCreatePaylod, PostUpdatePaylod } from "../helpers/types";

class PostModel extends BaseModel<PostType> {
  constructor() {
    super('posts');
  }

  async create(payload: PostCreatePaylod): Promise<ResponseType<PostType>> {
    return this.request(POSTS_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: HEADERS
    });
  }

  async update(id: number, payload: PostUpdatePaylod): Promise<ResponseType<PostType>> {
    return this.request(`${POSTS_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: HEADERS
    });
  }
}

export default PostModel;