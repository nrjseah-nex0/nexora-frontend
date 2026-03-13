const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const DB = "./users.json";

app.post("/register",(req,res)=>{

const {email,password} = req.body;

let users = JSON.parse(fs.readFileSync(DB));

users.push({email,password});

fs.writeFileSync(DB,JSON.stringify(users));

res.json({message:"تم إنشاء الحساب"});

});app.post("/add-product",(req,res)=>{

const {name,price,image} = req.body

let products = JSON.parse(fs.readFileSync("./products.json"))

products.push({name,price,image})

fs.writeFileSync("./products.json",JSON.stringify(products))

res.json({success:true})

})

app.post("/login",(req,res)=>{

const {email,password} = req.body;

let users = JSON.parse(fs.readFileSync(DB));

const user = users.find(u => u.email === email && u.password === password);

if(user){

res.json({success:true});

}else{

res.json({success:false});

}

});

app.listen(3000,()=>{

console.log("Nexora server running");

});
