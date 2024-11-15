const sessionIdTousermap=new Map();
function setUser(id,user){
    sessionIdTousermap.set(id,user);

}
function getuser(id){
    return sessionIdToUsermap.get(id);
    
}
module.exports={
    setUser,getuser,
}