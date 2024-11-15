const express=require("express");
const url = require("../models/url");
// const url = require("../models/url");
const router=express.Router();

router.get("/",async (req,res)=>{
   const all= await url.find({});
  console.log(all);
    return res.render("home",{
        urls: all,
    });
});
router.get('/signup',(req,res)=>{
    return res.render("signup");
});
router.get('/login',(req,res)=>{
    return res.render("login");
});

module.exports =router;