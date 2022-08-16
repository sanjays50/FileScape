const mongoose=require('mongoose');
const dotenv=require("dotenv");
dotenv.config();

function connectDB(){
    mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true});

    const connection=mongoose.connection;

    connection.once('open',()=>{
        console.log('database connected.');
    }).catch((err)=>{
        console.log('connection failed.');
    })
}

module.exports=connectDB;