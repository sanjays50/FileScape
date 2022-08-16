const router=require('express').Router();

const { findOne } = require('../models/file');
const File=require('../models/file');

router.get('/:userid/:uuid',async (req,res)=>{
    const file = await File.findOne({uuid:req.params.uuid});
    if(!file){
        return res.render('download',{error:'link has been expired'});
    }

    const filePath= `${__dirname}/../${file.path}`;
    res.download(filePath);
});


module.exports=router;