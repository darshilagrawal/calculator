const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended : true}));

app.post("/",function(req,res){
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var sum=num1+num2;
  res.send("The Sum Of The Numbers is "+sum);
})

app.get("/",function(req,res){
  res.sendFile(__dirname +"/index.html");
})

app.listen(3000,function(){
  console.log("Server Running");
})
