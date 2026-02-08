const fs = require('fs');
fs.writeFile('fs.txt',"hello this is a text file",(err)=>{
    if(err){
        console.log(err);

    }else{
        console.log("file created successfully");
        
    }
})