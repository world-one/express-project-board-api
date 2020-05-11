import userModel from '../models/user';
import crypto from '../helper/crypto';
class user {
  
  async get(req, res) {
    let result = await userModel.getUsers();
    res.send(result);
  }
  
  async store(req, res) {
    req.body.password = await crypto.generateAddSalt(req.body.password);
    let result = await userModel.insertUser(req.body);
    res.send(result);
  }
}

export default new user;