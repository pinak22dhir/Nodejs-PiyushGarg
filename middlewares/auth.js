const {getuser}=require("../service/auth");
async function restrictologin(req,res,next){
    const userid=req?.cookies?.id;
    if(!userid) return res.redirect("/login");
    const user=getUser(userid);
    if(!user) return res.redirect("/login");
    req.user=user;
    next();
}
module.exports={
restrictologin,
}