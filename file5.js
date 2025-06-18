const fs = require("fs");


// Synchronous function (renaming file)

if(fs.existsSync("./test.txt"))
{
fs.renameSync("./test.txt","myFile.txt");
console.log("Renamed successfully");
}
else{
    console.log("File not found");
}

// Asynchronous function (renaming file)

fs.rename("myFile.txt","test.txt",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Renamed successfully");
    }
})