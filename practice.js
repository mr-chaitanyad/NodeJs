const http = require('http');
const fs = require("fs");
const url = require('url');

const myserver = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico')
    {
        return res.end();
    }
    const myUrl = url.parse(req.url,true);

    const log = `${Date.now()}: ${req.url} New Request received\n`
    fs.appendFile("./test.txt",log,(err,data)=>{});
    switch(myUrl.pathname)
    {
        case '/':
            res.end("Hello form home page");
        break;
        case '/about':
            console.log(myUrl.query.myname)
            const myName = myUrl.query.myname;
            res.end(`Hello, ${myName || 'Geust'}`);
        break;
        case '/signup':
            if(req.method === 'GET')
            { 
                res.end("This is sign up form");
            }
            if(req.method === 'POST')
            {
                res.end("Success");
            }
        break;
        default:
            res.end("404 bad request error");
        break;
    }
})

myserver.listen(8000,()=>{
    console.log("Server started");
});




// this code for rounting usingf http (instead of express)