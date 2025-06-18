const http = require("http");
const fs = require("fs");
const url = require("url");


function myHandler(req,res)
{
    if(req.url==="/favicon.ico") return; //remove 2nd page loading request
    const data = `${Date.now()} ${req.url}\n`;
    fs.appendFile("log.txt",data,(err)=>{
        const myUrl = url.parse(req.url,true);
        switch(myUrl.pathname)
        {
            case '/':
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('Hello ');
                res.write('World!');
                res.end("Hello from home page");
            break;
            case "/data":
                // only proceed if method is POST
                const myName = myUrl.query.name;
                res.end(myName)
            break;
            
            case "/about":
                const name = myUrl.query.myname;
                res.end(`hi ${name}`);
            break;
            case "/search":
                const result = myUrl.query.search_query;
                res.end(`Your result ${result}`)
            break;
            case "/contact":
                res.end("Hello from contact page");
            break;
            default:
                res.end("404 error:page not found");
            break;            
        }
    })
}
const server = http.createServer(myHandler);

server.listen(3000,()=>{console.log("Server started..!")})