const fs = require('fs');
fs.unlink('fs.txt', (err) => {
    if (err) {
        console.log("err");
    } else {
        console.log("file deleted successfully");
    }
});