const router=require('express').Router();
const User=require('../models/user');

router.get("/in",(req,res)=>{
    return res.render('signin',{message:null});
});
router.post("/in", async (req,res)=>{
    const name=req.body.username;
    const pass=req.body.password;
    const user=await User.findOne({username:name,password:pass});
    if(user){  
        return res.redirect(`/home/${user._id}`);
    }
    else{
        return res.render('signin',{message:'User not found'});
    }
});
router.get("/up",(req,res)=>{
    return res.render('signup',{message:null});
});
router.post("/up",async (req,res)=>{
    if(req.body.password!=req.body.cpassword){
        return res.render('signup',{message:'Password should be Same'});
    }
    else{
        const user1=await User.findOne({username:req.body.username});
        const user2=await User.findOne({email:req.body.email});
        if(user1 || user2){
            return res.render('signup',{message:'User Already Exits !!!'});
        }
        else{
            const user = new User({
                username:req.body.username,
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            });
    
            const response=await user.save();
            return res.render('signin',{message:null});
        }
    }
    
});

module.exports=router;