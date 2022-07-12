const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const filename=new Schema({
    num: {type:Number, required: true},
});

module.exports=mongoose.model('File',filename);