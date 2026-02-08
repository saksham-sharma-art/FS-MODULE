const fs = require('fs');
fs.readFile('fs.txt',"utf-8",function(err,data){
    if (err){
        console.log(err);
    }else{
        for(let i=0;i<data.length;i++){
        console.log(data);
    }
    }
})