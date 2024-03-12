### This module is wrapper around [JSON placeholder](https://jsonplaceholder.typicode.com/) for testing purposes.
Current available models: Posts
Posts usage:
```ts
import PostModel from 'jsonplaceholder-wrapper';
const post = new PostModel();
post.find(1).then((res) => res.data).catch((res) => res.error)
```
