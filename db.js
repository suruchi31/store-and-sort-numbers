const mongoose=require('mongoose');
const URL="mongodb+srv://suruchi:3IWqPvmm1B7huWZf@cluster0.w0odz.mongodb.net/?retryWrites=true&w=majority"
function connectDB(){
    mongoose.connect(URL,{
        useNewUrlParser: true,
    //useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() =>{
        console.log("connected");
    }) .catch(e =>{
        console.log(e);
    });
}

module.exports=connectDB;
