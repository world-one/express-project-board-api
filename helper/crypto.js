import c from 'crypto';

class crypto{
  generate(password){
    if( password == null ) return 'require params';
    return c.createHash('sha512').update( password ).digest('base64');
  }
  generateAddSalt(password, salt='salt'){
    return new Promise( (resolve, reject) => {
        c.pbkdf2( 
          password, salt, 54321, 64, 'sha512', 
          (err, key) => {
            resolve( key.toString('base64') );
          }
        );
      })
    
  }
}


export default new crypto;