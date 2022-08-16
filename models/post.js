const mongoose=require('mongoose');
const Schema =mongoose.Schema;

const postSchema=new Schema({
    username:{type : String,required:true},
    filename:{type : String,required:true},
    projectname:{type : String,required:true},
    url:{type : String,required:false},
    likes:[{type:String,required:false}],
    discription:{type : String,required:false}
},{timestamps:true});


module.exports=mongoose.model('Post',postSchema);
