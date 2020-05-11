import mysql from 'mysql';
class model{
  constructor(){
    
    this.db = mysql.createConnection({
      host      : 'localhost',
      user      : 'root',
      password  : '',
      database  : 'place'
    });
    
    this.db.connect();
    
    // conn.query('SELECT 1 + 1 AS solution', 
    // function (error, results, fields) {
    //   if (error) throw error;
    //   console.log('The solution is: ', results[0].solution);
    // });
    // conn.end();
  }

  query(sql=null){ 
    return new Promise( (resolve, reject)=>{
      this.db.query(sql, (err, result) => {
        if(err) reject(err);
        resolve( result ); 
      });
    });
  }
}

export default model;