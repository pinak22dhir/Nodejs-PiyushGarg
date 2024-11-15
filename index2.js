const http=require("http");
const myserver=http.createServer((req,res)=>{
    console.log()
    console.log("new request recievend");
    res.end("help from server");
});
myserver.listen(8000,()=>console.log('server started'));

