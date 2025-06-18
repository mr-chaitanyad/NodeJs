
const fs = require("fs");

// // Write file Syncronouse function 
// fs.writeFileSync("myFile.txt","Hello User...!");
// console.log("File writing done");

// // Write file Asyncronouse function 
// fs.writeFile("myFile.txt","Hello User.....!",(err)=>{
//     if(err){
//         console.log("Error occured",err);
//     }
//     else{
//         console.log("File writing done");
//     }
// });
// console.log("After writing");


// // Read file Syncronouse function
// const data = fs.readFileSync("myFile.txt");
// console.log("File data :");
// console.log(data);
// console.log(data.toString());

// // Read file Asyncronouse function 
fs.readFile("myFile.txt",'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
console.log("After reading");