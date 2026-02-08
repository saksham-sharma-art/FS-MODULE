const fs = require('fs');
fs.appendFile('fs.txt',"\n this is an append text file",function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log("file appended successfully");
    }
})