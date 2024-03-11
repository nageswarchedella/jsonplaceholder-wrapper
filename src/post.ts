import { POSTS_URL, HEADERS} from "./constants";
import { PostType, ResponseType } from "./types";
class Post {
  static async all(): Promise<ResponseType<PostType>> {
    const postResponse: ResponseType<PostType> = await fetch(POSTS_URL)
      .then(async (res) => {
        return {
          status: res.status,
          data: await res.json()
        }
      }).catch((error) => {
        return {
          status: error.status,
          error: error
        }
      });
    return postResponse;
  }

  static async find(id: number): Promise<ResponseType<PostType>> {
    const postResponse: ResponseType<PostType> = await fetch(`${POSTS_URL}/${id}`)
      .then(async (res) => {
        return {
          status: res.status,
          data: await res.json()
        }
      }).catch((error) => {
        return {
          status: error.status,
          error: error
        }
      });
    return postResponse;
  }

  static async create(paylod: Omit<PostType, 'id'>): Promise<ResponseType<PostType>> {
    const postResponse: ResponseType<PostType> = await fetch(POSTS_URL, {
      method: 'POST',
      body: JSON.stringify(paylod),
      headers: HEADERS
    }).then(async (res) => {
      return {
        status: res.status,
        data: await res.json()
      }
    }).catch((error) => {
      return {
        status: error.status,
        error: error
      }
    });
    return postResponse;
  }

  static async update(id: number, paylod: Partial<Omit<PostType, 'userId' | 'id'>>): Promise<ResponseType<PostType>> {
    const postResponse: ResponseType<PostType> = await fetch(`${POSTS_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(paylod),
      headers: HEADERS
    }).then(async (res) => {
      return {
        status: res.status,
        data: await res.json()
      }
    }).catch((error) => {
      return {
        status: error.status,
        error: error
      }
    })
    return postResponse;
  }
}
export default Post;