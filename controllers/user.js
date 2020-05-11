import userModel from '../models/user';

class user {
  
  async get(req, res) {
    let result = await userModel.getUsers();
    res.send(result);
  }
  
  store(req, res) {
    res.send('Birds home page');
  }
}

export default new user;