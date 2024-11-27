const{createServer}=require("node:http")
// create server listen specifieyed port 
const hostname='127.0.0.1'
const port=3000
const server=createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain')
    res.end('Hellow world')
});

server.listen(port,hostname,()=>{
    console.log(`Server runnig at http://${hostname}:${port}`)
})