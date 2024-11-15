const User=require('../models/user.js')
const {v4:uuidv4}=require('uuid');
const{setUser}=require('../service/auth')
const url=require('../models/url.js')
async function handleusersignup(req,res){
  const {name,email,password}=req.body;
  await User.create({
    name,
    email,password,
  });
 
   const urls=await url.find({});
  return res.redirect("/static");

}
async function handleuserlogin(req,res){
  const {email,password}=req.body;
  const user=await User.findOne({email,password});
  if(!user) return res.render("login",{
    error:"Invalid Username or Password"});
    const sessionId=uuidv4();
    setUser(sessionId,user);
    res.cookie("uid",sessionId);

return res.redirect("/static");

}
module.exports={
    handleusersignup , handleuserlogin 
}