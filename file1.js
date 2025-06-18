const { error } = require('console');
const fs = require('fs');

// // Synchronous function (delete file)
try{
    fs.unlinkSync("myFile.txt");
    console.log("Fiile deleted successfully");
}
catch(error)
{
    console.log("Error occured:",error)
}

// Asynchronous function (delete file)
fs.unlink("myFile.txt",(err)=>{
    if(err)
    {
        console.log("Error occured",err);
    }
    else{
        console.log("File deleted successfully");
    }
});