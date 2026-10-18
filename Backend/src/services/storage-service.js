const {ImageKit}=require("@imagekit/nodejs");



const imagekit=new ImageKit({
    privateKey:process.env.IMAGE
})

async function fileUpload(buffer){
    const result=await imagekit.files.upload({
        file:buffer.toString("Base64"),
        fileName:"image.jpg"
    }
   )


   return result
}


module.exports=fileUpload