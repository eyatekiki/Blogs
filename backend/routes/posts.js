import express from 'express';


const router = express.Router();

router.get('/register',(req,res)=>{

   res.json("this post")


})
export default router;