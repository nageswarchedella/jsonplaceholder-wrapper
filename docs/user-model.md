## Usage of User Model
### Available Methods
* all() - fetches all users
* find(id) - fetches user based on user's id
* create(payload) - creates new user based on payload
* update(id, paylod) - updates user based on user's id
* delete(id) - deletes user based on user's id


### all() method usage
```ts
import UserModel from 'jsonplaceholder-wrapper';
const user = new UserModel();
const userResponse = user.find(1).then((res) => res)
console.log(userResponse.data) // outputs user with id 1
```