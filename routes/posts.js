const router = require('express').Router();
const File=require('../models/file');
const User=require('../models/user');
const Post=require('../models/post');
const { findOne } = require('../models/user');


router.post("/:userid/:uuid",async (req,res)=>{
    const uuid=req.params.uuid;
    const userid=req.params.userid;
    const user=await User.findOne({_id:userid});
    const file=await File.findOne({uuid:uuid});
    const post = new Post({
        username:user.username,
        filename:file.name,
        projectname:req.body.projectname,
        url:req.body.url,
        likes:[],
        discription:req.body.discription
    });
    const response=await post.save();
    return res.render('upload',{uuid:uuid,user:user,message:'Successfully Posted'});
})

router.get("/likes/:userid/:postid",async (req,res)=>{
    const postid=req.params.postid;
    const userid=req.params.userid;
    const post=await Post.findOne({_id:postid});
    let tlikes=post.likes;
    const user = tlikes.filter(element => element ==userid);
    if(user.length == 0){
        tlikes.push(userid);
        await Post.updateOne({_id:postid},{$set:{likes:tlikes}});
    }
    return res.redirect(`/home/${userid}`);
});

module.exports=router;