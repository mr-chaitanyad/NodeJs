const { error } = require('console');
const fs = require('fs');

// Synchronous function (create dir)
try{
    if(!fs.existsSync('Dir1')){
        fs.mkdirSync("Dir1");
        console.log("Directory created");
    }
    else{
        console.log("Directory already exists");
    }
}
catch(err){
    console.log(err)
}

// Asynchronous function (create dir)

fs.mkdir('Dir1',(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Directory created");
    }
})