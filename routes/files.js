const router = require('express').Router();
const multer=require('multer');
const path=require('path');
const File=require('../models/file');
const {v4:uuid4}=require('uuid');


let storage=multer.diskStorage({
    destination:(req,file,cb)=> cb(null,'uploads/'),
    filename:(req,file,cb)=>{
        const uniqueName=`${Date.now()}${path.extname(file.originalname)}`;
        cb(null,uniqueName);
    }
})

let upload = multer({
    storage,
    limit:{filesize : 1000000*100},
}).single('myfile');

router.post('/:userid',(req,res)=>{
    const userid=req.params.userid;
    upload(req,res,async (err)=>{
        if(!req.file){
            return res.json({ error : 'upload a file please'});
        }
        if(err){
            return res.status(500).send('error');
        }
        const file = new File({
            filename:req.file.filename,
            name:req.file.originalname,
            uuid:uuid4(),
            path:req.file.path,
            size:req.file.size
        });

        const response=await file.save();
        return res.redirect(`/upload/${userid}/${file.uuid}`);

    });
});


router.post('/send/:userid/:id',async (req,res)=>{
    const emailFrom=req.body.emailFrom
    const emailTo=req.body.emailTo;
    const uuid=req.params.id;
    const userid=req.params.userid;
    // const downloadLink=`${process.env.BASE_URL}/download/api/${userid}/${uuid}`;
    // // send email
    // const sendMail=require('./emailService');
    // sendMail({
    //     from:emailFrom,
    //     to:emailTo,
    //     subject:'shared a file with you',
    //     text:'shared a file with you',
    //     html:'<h1>send</h1>'
    // });
    return res.redirect(`/upload/send/${userid}/${uuid}`);

});

module.exports=router;