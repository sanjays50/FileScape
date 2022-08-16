const router=require('express').Router();
const File=require('../models/file');
const User=require('../models/user');

router.get('/api/:userid/:uuid',async (req,res)=>{
    try{
        const file=await File.findOne({uuid:req.params.uuid});
        const userid=req.params.userid;
        const user=await User.findOne({_id:userid});
        if(!file){
            return res.render('download',{error:'Link has been expired'});
        }
        return res.render('download',{
            dwn:true,
            user:user,
            uuid:file.uuid,
            filename:file.filename,
            name:file.name,
            filesize:file.size,
            downloadLink:`${process.env.BASE_URL}/show/${userid}/${file.uuid}`
        });
    }
    catch(err){
        return res.send('Unvalid URL');
    }
})

router.get('/api/:userid',async (req,res)=>{
    const userid=req.params.userid;
    const user=await User.findOne({_id:userid});
    return res.render('download',{user:user,uuid:null});
})


router.post('/api',(req,res)=>{
    try {
        const path=req.body.path;
        return res.redirect(`${path}`);
    } catch{
        return res.send('Unvalid URL')
    }
})

module.exports=router;