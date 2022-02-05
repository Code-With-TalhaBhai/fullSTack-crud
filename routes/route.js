const express = require('express');
const app = express();
const route = express.Router();
// const addUsers = require('../controller/user-controller/addUsers');
// const getUsers = require('../controller/user-controller/getUsers');
const user = require('../controller/user-controller');
route.get('/all',user.getUsers);
route.post('/add',user.addUsers);
route.get('/:id',user.getUserById);
route.put('/:id',user.editUser);
route.delete('/:id',user.deleteUser);

// export default route;
module.exports = route;