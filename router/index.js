import express from 'express';
import userController from '../controllers/user';
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/user', (req,res)=>userController.get(req,res));
router.post('/user', (req,res)=>userController.store(req,res));
router.patch('/user', (req,res)=>userController.store(req,res));

module.exports = router;