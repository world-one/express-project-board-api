import express from 'express';

const router = require('./router');
const app = express();

app.use('/api', router);

const server = app.listen(3000,() => {
  console.log( "express server has started on port 3000" );
});