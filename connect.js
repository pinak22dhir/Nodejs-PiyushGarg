const mongoose=require("mongoose");
async function connecttodb(url){
    return mongoose.connect(url);
} 
module.exports={
    connecttodb,
}