const router = require('express').Router();
const User=require('../models/user');
const Post=require('../models/post');


router.get("/:userid",async (req,res)=>{
    const userid=req.params.userid;
    const user=await User.findOne({_id:userid});
    const posts=await Post.find({});
    posts.sort((a, b) => (a.likes.length < b.likes.length) ? 1 : -1)
    return res.render("home",{user:user,posts:posts});
});


module.exports=router;