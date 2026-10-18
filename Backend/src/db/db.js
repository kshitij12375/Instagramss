const mongoose=require('mongoose');


async function connectDB() {

    await mongoose.connect(process.env.MONGODBURI)

    console.log("DB connected ")
    
}


module.exports=connectDB