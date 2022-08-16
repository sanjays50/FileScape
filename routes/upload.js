const router = require('express').Router();
const User=require('../models/user');
const File=require('../models/file');


router.get("/:userid/:id",async (req,res)=>{
    const userid=req.params.userid;
    const uuid=req.params.id;
    const user=await User.findOne({_id:userid});
   return res.render('upload',{uuid:uuid,user:user,message:'Successfully Submitted'});
});
router.get("/send/:userid/:id",async (req,res)=>{
    const userid=req.params.userid;
    const uuid=req.params.id;
    const user=await User.findOne({_id:userid});
   return res.render('upload',{uuid:uuid,user:user,message:'Email Successfully Send'});
});
router.get('/:userid',async (req,res)=>{
    const userid=req.params.userid;
    const user=await User.findOne({_id:userid});
    return res.render("upload",{uuid:null,user:user,message:null});
});


module.exports=router;