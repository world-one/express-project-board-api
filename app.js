import express from 'express';
import bodyParser from 'body-parser';
const router = require('./router');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', router);


const server = app.listen(3000,() => {
  console.log( "express server has started on port 3000" );
});