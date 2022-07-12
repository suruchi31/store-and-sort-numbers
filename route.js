const route= require ('express').Router();
const file=  require('./file');

route.post('/',async(req,res)=>{
    if(!req.body.num)
      res.status(500).json({"message":"error"});

      const number=new file({
        num:req.body.num
      });
      await number.save();
      res.status(200).json({"message":"successfull"})

})

route.get('/',async(req,res)=>{
    const data=await file.find({});
    console.log(data);
    data.sort(function(a,b){
        return a.num-b.num;
    });
    res.status(200).send(data);
})

module.exports= route;