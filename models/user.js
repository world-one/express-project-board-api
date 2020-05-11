import model from './model';
class user extends model{
  
  constructor(){
    super();
  }

  getUsers(){
    let sql = 'select * from users';
    return this.query(sql);
  }

  insertUser(params){
    let sql = "\
      INSERT INTO users(\
        name,\
        email,\
        password\
      )VALUES("+
        "'"+params.name+"',"+
        "'"+params.email+"',"+
        "'"+params.password+"'"
      +")"
    return this.query(sql);
  }

}

export default new user;
