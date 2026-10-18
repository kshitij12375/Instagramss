const express=require('express');
const multer=require('multer');
const fileUpload = require('./services/storage-service');
const postModel = require('./models/post.model');
const cors=require('cors');






postModel
const app=express();
app.use(cors());
app.use(express.json());


const upload=multer({storage:multer.memoryStorage()})


app.post('/post-create',upload.single("image"), async (req,res)=>{
              console.log(req.body);
              console.log(req.file)

              const result=await fileUpload(req.file.buffer);

              const post=await postModel.create({
                     name:req.body.name,
                     image:result.url,
                     caption:req.body.caption
              })
              

               return res.status(201).json({
                "message":"created post",
                 post
              })

             
})

app.get('/post',async (req,res)=>{
    const posts=await postModel.find();
    return res.status(200).json({
        "message":"Data fetched successfully",
         posts
    }) 
})


module.exports=app;