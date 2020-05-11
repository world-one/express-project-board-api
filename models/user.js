import model from './model';
import { resolve } from 'dns';
class user extends model{
  
  constructor(){
    super();
  }

  getUsers(){
      let sql = 'select * from users';
      return this.query(sql);
  }

  insertUser(req){

  }

}

export default new user;
