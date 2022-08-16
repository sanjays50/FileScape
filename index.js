const express=require('express');
const app=express();
const path=require('path');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const connectDB= require('./config/db');
connectDB();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get("/",(req,res)=>{
    res.redirect('/sign/in');
})

app.use("/sign",require('./routes/sign'));
app.use("/home",require('./routes/home'));
app.use("/upload",require('./routes/upload'));
app.use('/files',require('./routes/files'));
app.use('/posts',require('./routes/posts'));
app.use('/show',require('./routes/show'));
app.use('/download',require('./routes/download'));



const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`listing on port 3000`);
})