## Usage of Post Model
### Available Methods
* all() - fetches all posts
* find(id) - fetches post based on post's id
* create(payload) - creates new post based on payload
* update(id, paylod) - updates post based on post's id
* delete(id) - deletes post based on post's id


### all() method usage
```ts
import PostModel from 'jsonplaceholder-wrapper';
const post = new PostModel();
const postResponse = post.find(1).then((res) => res)
console.log(postResponse.data) // outputs post with id 1
```