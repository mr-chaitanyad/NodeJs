const fs = require("fs");

// Asynchronous function (reading dir)
fs.readdir("C:\\Users\\User\\Desktop\\NodeJs",(err,data)=>{
    if(err){
        console.log("Error occured:",err);
    }
    else{
        console.log(data);
    }
});

// Synchronous function (reading dir)
let data = [];
try{
    if(fs.existsSync(__dirname)){
    data = fs.readdirSync(__dirname);
    }
}
catch(err){
    console.log(err);
}
console.log("Files is :",data);