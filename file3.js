const { error } = require("console");
const fs = require("fs");

// Synchrounous function (delete dir)

try{
    if(fs.existsSync("Dir1")){
    fs.rmdirSync("Dir1");
    console.log("Directory deleted");
    }
    else{
        console.log("Directory not found");
    }
}
catch(error){
    console.log(error);
}

// Asynchrounous function (delete dir)

fs.rmdir("Dir1",(error)=>{
    if(error){
        console.log("Error occured:",error);
        return;
    }
    console.log("Direcotry deleted")
})